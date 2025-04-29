import { Category } from "@/@types";
import { Icons } from "@/lib/icons";
import { OverviewFeature } from "@/@types";
import { RelatedBlog } from "@/@types";
import { Cloud } from "lucide-react";
import { TestimonialProps } from "@/@types";

export const communityImages = [
  "/images/landing/community/community-1.png",
  "/images/landing/community/community-2.png",
  "/images/landing/community/community-3.png",
  "/images/landing/community/community-4.png",
  "/images/landing/community/community-5.png",
  "/images/landing/community/community-6.png",
];

export const heroLogos = [
  "/images/landing/logos/logo-1.png",
  "/images/landing/logos/logo-2.png",
  "/images/landing/logos/logo-3.png",
  "/images/landing/logos/logo-4.png",
  "/images/landing/logos/logo-5.png",
];

export const CATEGORIES: Category[] = [
  {
    id: "no-algorithm",
    label: "No Algorithm",
    image: "/images/landing/features/image1.png",
    description: {
      title: "NO ALGORITHM, NO LIMITS, JUST YOU & YOUR AUDIENCE",
      content:
        "Take control of your content like never before! With no unpredictable algorithms deciding who sees your posts, your reach is entirely in your hands. Share freely, connect directly, and engage with your audience without restrictions. No filters, no hidden barriers—just authentic interactions on your terms.",
    },
  },
  {
    id: "monetize",
    label: "Monetize",
    image: "/images/landing/features/image2.png",
    description: {
      title: "MONETIZE YOUR CIRCLE, YOUR WAY",
      content:
        "Turn your connections into opportunities! With flexible monetization options, you decide how to earn—whether through exclusive content, memberships, or direct support from your audience. Stay in control, set your terms, and get rewarded for what you share. Your network, your rules, your profits!",
    },
  },
  {
    id: "privacy",
    label: "Privacy Perfected",
    image: "/images/landing/features/image3.png",
    description: {
      title: "PRIVACY PERFECTED: YOUR CIRCLE, YOUR RULES",
      content:
        "With Circle, you're always in control. Connect with like-minded people in a private, secure space where your interactions stay within your chosen community. Share freely, engage meaningfully, and set your own boundaries—because your conversations, interests, and connections should be on your terms. No noise, no outsiders—just your circle, your rules.",
    },
  },
  {
    id: "events",
    label: "Events",
    image: "/images/landing/features/image4.png",
    description: {
      title:
        "LIVESTREAMS, COURSES, COMMERCE, EVENTS - ALL YOU NEEDS TO GROW YOUR COMMUNITY",
      content:
        "Engage, educate, and monetize seamlessly with an all-in-one platform designed to fuel your community's growth. Host interactive livestreams, launch insightful courses, sell directly through built-in commerce, and bring people together with exclusive events—all in one place. Whether you're a creator, educator, or entrepreneur, this platform empowers you to connect, share, and scale effortlessly.",
    },
  },
  {
    id: "gamification",
    label: "Gamification",
    image: "/images/landing/features/image5.png",
    description: {
      title: "FUEL ENGAGEMENT WITH LEADERBOARD & XP",
      content:
        "Keep your community active and motivated with our Leaderboard & XP system! Users earn XP points for every interaction—likes, comments, shares, and more—climbing the leaderboard as they engage. Reward top contributors, spark friendly competition, and boost overall participation. The more they engage, the higher they rank! Gamify the experience and watch your platform thrive!",
    },
  },
];

export const OVERVIEW_FEATURES: OverviewFeature[] = [
  {
    icon: Icons.settings,
    title: "Engage",
    description:
      "Join challenges, share your thoughts and content, host and participate in events and livestreams, and explore endless possibilities!",
  },
  {
    icon: Icons.analytics,
    title: "Analytics",
    description:
      "Gain full control over your analytics and enjoy seamless support for buying and selling within your favorite circles—curated by your trusted brands and content creators.",
  },
  {
    icon: Icons.reach,
    title: "Magic Reach",
    description:
      "Host or join exciting challenges to earn extra XP points and boost your progress! Stay competitive, level up, and make every challenge an opportunity to grow.",
  },
];

export const relatedBlogs: RelatedBlog[] = [
  {
    banner_image: "/images/coverage/image1.png",
    title:
      "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
    slug: "capcons-gets-100k-subscribers-in-one-week",
    author_name: "John Doe",
    publication_date: "2021-01-01",
  },
  {
    banner_image: "/images/coverage/image2.png",
    title:
      "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
    slug: "capcons-gets-100k-subscribers-in-one-week",
    author_name: "John Doe",
    publication_date: "2021-01-01",
  },
  {
    banner_image: "/images/coverage/image3.png",
    title:
      "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
    slug: "capcons-gets-100k-subscribers-in-one-week",
    author_name: "John Doe",
    publication_date: "2021-01-01",
  },
];

export const testimonials: TestimonialProps[] = [
  {
    icon: Cloud,
    content:
      "Purus maecenas quis elit eu, aliquot. Tellus porttitor ut sollicitudin et non sengillia. Quam nunc, non tristique senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
  {
    icon: Cloud,
    content:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum nunc euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
  {
    icon: Cloud,
    content:
      "Purus maecenas quis elit eu, aliquot. Tellus porttitor ut sollicitudin et non sengillia. Quam nunc, non tristique senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
  {
    icon: Cloud,
    content:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum nunc euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
  {
    icon: Cloud,
    content:
      "Purus maecenas quis elit eu, aliquot. Tellus porttitor ut sollicitudin et non sengillia. Quam nunc, non tristique senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
  {
    icon: Cloud,
    content:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum nunc euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    role: "XSWH",
    avatar: "/images/landing/avatar.png",
  },
];
