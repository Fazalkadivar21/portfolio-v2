// Shared metadata configuration for consistent SEO across pages
export const baseMetadata = {
  metadataBase: new URL('https://fazalkadivar.com'),
  title: {
    default: 'Fazal Kadivar | MERN Developer, Full Stack & Backend Expert',
    template: '%s | Fazal Kadivar',
  },
  description: 'Hire Fazal Kadivar - MERN full stack developer, backend expert & freelancer. Specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC, TypeScript.',
  keywords: [
    'Fazal Kadivar',
    'web developer',
    'MERN developer',
    'full stack developer',
    'backend developer',
    'frontend developer',
    'freelancer',
    'React developer',
    'Node.js developer',
    'Express',
    'MongoDB',
    'JavaScript',
    'TypeScript',
  ],
  authors: [{ name: 'Fazal Kadivar', url: 'https://fazalkadivar.com' }],
  creator: 'Fazal Kadivar',
  publisher: 'Fazal Kadivar',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fazalkadivar.com',
    siteName: 'Fazal Kadivar - Web Developer',
    title: 'Fazal Kadivar | MERN Developer & Full Stack Expert',
    description: 'Full stack MERN developer & freelancer. Specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC.',
    images: [
      {
        url: 'https://fazalkadivar.com/images/fazal_kadivar.jpg',
        width: 1200,
        height: 630,
        alt: 'Fazal Kadivar - Web Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fazal Kadivar | MERN Developer & Full Stack Expert',
    description: 'Full stack MERN developer specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC.',
    image: 'https://fazalkadivar.com/images/fazal-kadivar.jpg',
    creator: '@fazalkadivar21',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your verification code
    yandex: '569446ceaaeb7de7', // Add your verification code
  },
};

export const generatePageMetadata = (title, description, path) => {
  return {
    title,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url: `https://fazalkadivar.com${path}`,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
    },
    canonical: `https://fazalkadivar.com${path}`,
  };
};
