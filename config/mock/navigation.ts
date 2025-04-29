import { Icons } from "@/lib/icons";

export const footerLinks = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ's", href: "/faq" },
  { label: "Media", href: "/media" },
];

export const socialLinks = [
  { icon: "/social/facebook.svg", href: "#", label: "Facebook" },
  { icon: "/social/twitter.svg", href: "#", label: "Twitter" },
  { icon: "/social/instagram.svg", href: "#", label: "Instagram" },
  { icon: "/social/linkedin.svg", href: "#", label: "LinkedIn" },
  { icon: "/social/reddit.svg", href: "#", label: "Reddit" },
  { icon: "/social/youtube.svg", href: "#", label: "YouTube" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Creators", href: "/creators" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Insights",
        href: "/blogs",
        description: "The latest industry news, updates and info.",
        icon: Icons.book,
      },
      {
        label: "Podcasts",
        href: "/podcast",
        description: "Get up and running on new features and techniques.",
        icon: Icons.play,
      },
      {
        label: "Challenges",
        href: "/challenges",
        description: "Learn how our customers are making big changes.",
        icon: Icons.zap,
      },
      {
        label: "StormNorms - D2C Incubator",
        href: "/stormnorms",
        description:
          "Join our contest, showcase your talent, win exciting rewards & grow your community with Capcons!",
        image: "/stormnorms.png",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];
