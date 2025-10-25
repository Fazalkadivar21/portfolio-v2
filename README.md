# Fazal Kadivar - MERN Developer & Full Stack Expert

Welcome to my professional portfolio website! I'm a passionate MERN and full-stack developer specializing in building scalable web applications with React, Node.js, Express, MongoDB, and modern JavaScript technologies.

## 🌐 Live Site

Visit my portfolio: **[fazalkadivar.com](https://fazalkadivar.com)**

## 👨‍💻 About Me

I'm a skilled MERN and full-stack developer with expertise in:

- **Frontend**: React, Next.js, Tailwind CSS, GSAP, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Redis
- **Real-time**: WebSockets, WebRTC, Socket.IO
- **Languages**: JavaScript, TypeScript
- **Cloud**: AWS, Vercel

I specialize in:
- Full-stack web application development
- Real-time communication systems
- Performance optimization
- Scalable backend architecture
- Responsive & modern UI design

## 🚀 Featured Projects

### 1. **ChatGPT Clone**
An AI-powered chat application with real-time messaging, persistent storage, and advanced features.
- **Tech**: React, Node.js, Express, MongoDB, Google Gemini API, Redis, Socket.IO
- **Features**: Real-time messaging, chat management, semantic search, caching
- **GitHub**: [fazalkadivar21/chatgpt-clone](https://github.com/fazalkadivar21/chatgpt-clone)

### 2. **Omegle Clone**
A secure, anonymous chat platform with video and text communication.
- **Tech**: React, Node.js, WebRTC, Socket.IO, TypeScript
- **Features**: Real-time video/text chat, peer-to-peer connections, moderation
- **GitHub**: [fazalkadivar21/omegle](https://github.com/fazalkadivar21/omegle)

### 3. **Campa - Modern Animated Website**
A beautifully designed and animated website for Campa Beverages.
- **Tech**: React, GSAP, Framer Motion, Tailwind CSS
- **Features**: Smooth animations, interactive UI, optimized performance
- **GitHub**: [fazalkadivar21/campa](https://github.com/fazalkadivar21/campa)

## 🛠️ Tech Stack

### Frontend
- React 19
- Next.js 15.5
- Tailwind CSS 4
- GSAP & Motion
- React Scroll Parallax

### Backend
- Node.js
- Express
- MongoDB
- Redis
- Socket.IO

### Tools & Services
- TypeScript
- WebSockets & WebRTC
- Vercel (Hosting)
- Git & GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (v22.17.0 recommended)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fazalkadivar21/portfolio-v2.git
cd fazalkadivar.com
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm run dev      # Start development server with Turbopack
pnpm run build    # Build for production
pnpm run start    # Start production server
pnpm run lint     # Run ESLint
```

## 📊 Project Structure

```
app/
├── layout.js                    # Root layout with SEO meta tags
├── page.js                      # Home page
├── metadata.js                  # Metadata configuration
├── sitemap.js                   # Dynamic sitemap generation
├── blog/
│   └── page.js                  # Blog section
├── components/
│   ├── Hero.jsx                 # Hero section with tech icons
│   ├── Second.jsx               # About section
│   ├── Third.jsx                # Projects showcase
│   ├── Fourth.jsx               # Additional content
│   ├── Breadcrumb.jsx           # Breadcrumb navigation
│   ├── ContactForm.jsx          # Contact form with schema
│   ├── SmoothScroll.jsx         # Smooth scrolling
│   └── ScrollStack.jsx          # Scroll animation
├── fonts/                       # Custom fonts (TDF, Luxnoleg)
└── globals.css                  # Global styles

public/
├── robots.txt                   # SEO robots configuration
├── sitemap.xml                  # XML sitemap
├── images/                      # Project images
└── fonts/                       # Font files

Configuration:
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.mjs           # PostCSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Project dependencies
```

## 🎨 Features

### Performance & Optimization
- ✅ Next.js 15 with Turbopack for fast builds
- ✅ Image optimization with Next.js Image component
- ✅ Dynamic imports & code splitting
- ✅ CSS optimization with Tailwind CSS 4

### SEO & Metadata
- ✅ Optimized meta tags & Open Graph
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ 5 types of JSON-LD schemas
- ✅ Semantic HTML structure
- ✅ Image alt text & accessibility

### Interactive Elements
- ✅ Smooth scroll parallax effects
- ✅ GSAP animations
- ✅ Framer Motion transitions
- ✅ Responsive design
- ✅ Mobile-first approach

### Components & Features
- ✅ Reusable breadcrumb navigation
- ✅ Contact form with schema markup
- ✅ Blog section ready for content
- ✅ Project showcase with filtering
- ✅ Tech skills display

## 🔒 Security

Security headers implemented:
- X-Frame-Options (Clickjacking protection)
- X-Content-Type-Options (MIME sniffing protection)
- X-XSS-Protection (XSS attack protection)
- Referrer-Policy (Privacy protection)
- Permissions-Policy (Feature access control)

## 📱 Responsive Design

- Mobile-first approach
- Responsive images & fonts
- Touch-friendly interactions
- Optimized for all screen sizes
- Fast page load times

## 🌟 SEO Enhancements

This portfolio includes comprehensive SEO optimizations:

- **Meta Tags**: Optimized title, description, keywords
- **Sitemap**: Dynamic sitemap for search engines
- **Schema Markup**: Person, Organization, BreadcrumbList, Blog, ContactPoint schemas
- **Semantic HTML**: Proper use of semantic tags
- **Image Optimization**: Alt text & responsive images
- **Performance**: Fast page speed & Core Web Vitals optimization

For detailed SEO documentation, see [START_HERE.md](./START_HERE.md)

## 📚 Documentation

- **[START_HERE.md](./START_HERE.md)** - Overview & quick start
- **[FINAL_REPORT.md](./FINAL_REPORT.md)** - Complete implementation summary
- **[SEO_CHECKLIST.md](./SEO_CHECKLIST.md)** - SEO action items
- **[SEO_QUICK_REFERENCE.md](./SEO_QUICK_REFERENCE.md)** - Quick lookup guide
- **[INDEX.md](./INDEX.md)** - Documentation index

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel automatically deploys on every push
4. Custom domain setup in Vercel dashboard

**Live Site**: [fazalkadivar.com](https://fazalkadivar.com)

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Add your environment variables here
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
# API endpoints, etc.
```

## 📧 Contact & Social

- **Email**: contact@fazalkadivar.com
- **GitHub**: [@fazalkadivar21](https://github.com/fazalkadivar21)
- **LinkedIn**: [@fazalkadivar21](https://linkedin.com/in/fazalkadivar21)
- **Twitter**: [@fazalkadivar21](https://twitter.com/fazalkadivar21)

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [React Documentation](https://react.dev) - React fundamentals
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [GSAP Animation](https://greensock.com/gsap/) - Animation library

## ⭐ Support

If you like this portfolio or found it helpful, please consider:
- ⭐ Starring the repository
- 🔗 Sharing with others
- 📧 Reaching out for collaboration

---

**Made with ❤️ by Fazal Kadivar**

Visit [fazalkadivar.com](https://fazalkadivar.com) to see the live portfolio!
