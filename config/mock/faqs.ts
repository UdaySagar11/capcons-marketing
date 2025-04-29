export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

export const faqs: FAQSection[] = [
  {
    title: "General Questions",
    items: [
      {
        id: "general-1",
        question: "What is CapCons?",
        answer:
          "Capcons is a next-generation social networking platform designed to help content creators, brands, and entrepreneurs build and manage their own branded communities. Unlike traditional social media, Capcons gives you full control over your audience, monetization, and engagement.",
      },
      {
        id: "general-3",
        question: "Who is CapCons for?",
        answer:
          "CapCons is designed for content creators, entrepreneurs, influencers, businesses, and niche community builders who want more control over their content and audience engagement.",
      },
      {
        id: "general-4",
        question: "Is CapCons free to use?",
        answer:
          "Yes! Anyone can create a free account and join communities. However, premium features like custom branding, monetization tools, and analytics may require a subscription.",
      },
      {
        id: "general-5",
        question: "Where is CapCons available?",
        answer:
          "CapCons is available worldwide via a web-based platform and mobile apps (iOS & Android).",
      },
      {
        id: "general-2",
        question:
          "How is CapCons different from platforms like Facebook, Instagram, or Discord?",
        answer:
          "Unlike mainstream social media platforms that prioritize ads and algorithms, Capcons focuses on creator-led communities where content is monetizable, brand-controlled, and free from algorithmic suppression.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        id: "getting-started-1",
        question: "How do I sign up for CapCons?",
        answer:
          'Visit capCons.com and click "Sign Up." You can register with an email address or social media account.',
      },
      {
        id: "getting-started-2",
        question: "Can I use CapCons without an account?",
        answer:
          "No, you need an account to access content, join communities, and interact with members.",
      },
      {
        id: "getting-started-3",
        question: "How do I find communities that interest me?",
        answer:
          'Use the "Explore" page to search for communities based on topics, trends, or recommendations tailored to your interests.',
      },
      {
        id: "getting-started-4",
        question: "Can I have multiple accounts?",
        answer:
          "Yes, but each account must be associated with a unique email address.",
      },
      {
        id: "getting-started-5",
        question: "How do I delete my CapCons account?",
        answer:
          "Go to Settings → Account → Delete Account. This action is permanent and cannot be undone.",
      },
    ],
  },
  {
    title: "Community Creation & Management",
    items: [
      {
        id: "community-1",
        question: "How do I create my own community?",
        answer:
          'Go to your Dashboard, click "Create Community," choose a name, set community rules, and customize branding.',
      },
      {
        id: "community-2",
        question: "Can I charge members to join my community?",
        answer:
          "Yes! Capcons supports subscription-based memberships, pay-per-post models, and donations.",
      },
      {
        id: "community-3",
        question: "How do I moderate my community?",
        answer:
          "Admins can appoint moderators, set content guidelines, remove members, and automate moderation rules.",
      },
      {
        id: "community-4",
        question: "Can I make my community private?",
        answer:
          "Yes, you can set your community to Public, Private, or Invite-Only.",
      },
      {
        id: "community-5",
        question: "How do I remove a disruptive member?",
        answer:
          "From the Admin Panel, you can mute, suspend, or ban members who violate community guidelines.",
      },
    ],
  },
];
