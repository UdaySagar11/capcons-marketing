import { Metadata } from "next";

export const siteConfig = {
  name: "Capcons",
  url: "https://capcons.com",
  ogImage: "https://storage.googleapis.com/capcons.com/capcons-web/opengraph-image.webp",
  description:
    "Capcons empowers creators and brands to build, manage, and monetize their own branded communities. Grow engagement, foster connections, and unlock new revenue streams with ease.",
  keywords: [
    "Capcons",
    "Creator Economy",
    "Community Building",
    "Monetization",
    "Social Network",
    "Content Creators",
    "Brand Communities",
  ],
  authors: [
    {
      name: "Capcons Analytics Private Limited",
      url: "https://capcons.com",
    },
  ],
  creator: "@capcons",
  twitter: {
    handle: "@capcons",
    site: "@capcons",
    cardType: "summary_large_image",
  },
};

export const defaultMetadata = {
  authors: [{ name: siteConfig.authors[0].name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "https://capcons.com/favicon.png",
  },
  appleWebApp: {
    capable: true,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter.site,
    creator: siteConfig.creator,
    images: ["https://storage.googleapis.com/capcons.com/capcons-web/opengraph-image.webp"]
  },
  keywords: siteConfig.keywords.join(", "),
} as Metadata;
