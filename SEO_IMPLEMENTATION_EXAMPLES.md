# SEO Implementation Examples

## How to Integrate New Components into Your Site

### 1. Adding Breadcrumb Navigation

**Example: In a new page**
```jsx
// app/blog/page.js
"use client";

import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata = {
  title: "Blog | Fazal Kadivar",
  description: "Read my latest articles about web development"
};

export default function BlogPage() {
  return (
    <main>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Blog" }
      ]} />
      
      <h1>Blog</h1>
      {/* Blog content */}
    </main>
  );
}
```

### 2. Using Contact Form

**Example: Create a contact page**
```jsx
// app/contact/page.js
import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: "Contact | Fazal Kadivar",
  description: "Get in touch with me for project inquiries"
};

export default function ContactPage() {
  return <ContactForm />;
}
```

### 3. Adding to Existing Component

**Example: Add to Fourth component**
```jsx
// app/components/Fourth.jsx
"use client";

import ContactForm from './ContactForm';

export default function Fourth() {
  return (
    <section id="contact" className="my-section">
      <h2>Contact</h2>
      <ContactForm />
    </section>
  );
}
```

---

## Blog Post Template with SEO

Create a new blog post like this:

```jsx
// app/blog/[slug]/page.js
import { generatePageMetadata } from '@/app/metadata';

// Blog post data
const blogPosts = {
  'mern-stack-guide': {
    title: 'Complete Guide to MERN Stack Development',
    description: 'Learn how to build full-stack applications with MongoDB, Express, React, and Node.js',
    date: '2025-10-25',
    author: 'Fazal Kadivar',
    content: '...'
  }
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }

  return generatePageMetadata(
    post.title,
    post.description,
    `/blog/${params.slug}`
  );
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1>{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        <span> by {post.author}</span>
      </div>
      
      {/* Post content */}
      <div className="prose">
        {post.content}
      </div>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://fazalkadivar.com"
            }
          })
        }}
      />
    </article>
  );
}
```

---

## Contact Form Integration with Email Service

### Option 1: Using Resend (Recommended)

**Install:**
```bash
npm install resend react-email @react-email/components
```

**Update ContactForm.jsx:**
```jsx
"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/email";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to send email");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Rest of the form...
}
```

**Create server action (app/actions/email.js):**
```jsx
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  try {
    const data = await resend.emails.send({
      from: "contact@fazalkadivar.com",
      to: "your-email@example.com",
      subject: `New contact from ${formData.name}: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: formData.email,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: error.message };
  }
}
```

### Option 2: Using SendGrid

**Install:**
```bash
npm install @sendgrid/mail
```

**Create API route:**
```jsx
// app/api/send-email/route.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  try {
    await sgMail.send({
      to: "your-email@example.com",
      from: "contact@fazalkadivar.com",
      subject: `New contact from ${name}: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
```

---

## Adding Google Analytics

**1. Create environment file (.env.local):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**2. Create analytics utility (lib/gtag.js):**
```jsx
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

**3. Update layout.js:**
```jsx
import { GA_ID } from '@/lib/gtag';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Project Card with Schema Markup

```jsx
// Enhanced ProjectCard with schema
const ProjectCard = ({ project, index }) => {
  return (
    <article 
      itemScope 
      itemType="https://schema.org/CreativeWork"
      className="project-card"
    >
      <h2 itemProp="name">{project.title}</h2>
      <p itemProp="description">{project.description}</p>
      <p itemProp="datePublished">{project.year}</p>
      <img 
        itemProp="image" 
        src={project.image} 
        alt={project.title}
      />
      <a itemProp="url" href={project.link}>View Project</a>
    </article>
  );
};
```

---

## Testing Your SEO

### 1. Manual Testing
```bash
# Check meta tags
curl https://fazalkadivar.com | grep -i "meta\|title"

# Check robots.txt
curl https://fazalkadivar.com/robots.txt

# Check sitemap
curl https://fazalkadivar.com/sitemap.xml
```

### 2. Using Tools
- **Lighthouse**: Chrome DevTools > Lighthouse > SEO
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Schema Validator**: https://validator.schema.org/
- **Open Graph Preview**: https://www.opengraphcheck.com/

---

## Common SEO Mistakes to Avoid

1. ❌ Don't use multiple h1 tags per page
2. ❌ Don't keyword stuff (maintain natural writing)
3. ❌ Don't use tiny or unreadable fonts
4. ❌ Don't have pages with no links
5. ❌ Don't ignore mobile responsiveness
6. ❌ Don't use broken links
7. ❌ Don't block CSS/JS in robots.txt
8. ❌ Don't duplicate content across pages

---

## SEO Checklist for New Pages

- [ ] Add unique title (50-60 characters)
- [ ] Add unique meta description (150-160 characters)
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Add alt text to all images
- [ ] Include internal links (2-4 links)
- [ ] Add JSON-LD schema if applicable
- [ ] Optimize page load speed
- [ ] Make content mobile-friendly
- [ ] Add rel="noopener noreferrer" to external links
- [ ] Update sitemap.xml
- [ ] Test with Lighthouse

---

**Last Updated**: October 25, 2025
