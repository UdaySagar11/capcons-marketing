import { FeatureCategory } from "@/@types";

export const pricingData = {
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: {
        annual: {
          USD: "600",
          INR: "4272",
        },
        monthly: {
          USD: "50.00",
          INR: "356",
        },
      },
      billingPeriod: {
        annual: "/Month",
        monthly: "/Month",
      },
      billingNote: {
        annual: "billed annually",
        monthly: "Billed monthly",
      },
      features: [
        "Small reply boost",
        "Encrypted direct messages",
        "Bookmark folders",
        "Highlights tab",
        "Edit post",
        "Longer Posts",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: {
        annual: {
          USD: "960",
          INR: "6840",
        },
        monthly: {
          USD: "80.00",
          INR: "570",
        },
      },
      billingPeriod: {
        annual: "/Month",
        monthly: "/Month",
      },
      billingNote: {
        annual: "billed annually",
        monthly: "Billed monthly",
      },
      features: [
        "Half Ads in For You and Following",
        "Larger reply boost",
        "Get paid to post",
        "Checkmark",
        "Grok with increased limits",
        "Pro, Analytics, Media Studio",
        "Creator Subscriptions",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: {
        annual: {
          USD: "1200",
          INR: "8544",
        },
        monthly: {
          USD: "100.00",
          INR: "712",
        },
      },
      billingPeriod: {
        annual: "/Month",
        monthly: "/Month",
      },
      billingNote: {
        annual: "billed annually",
        monthly: "Billed monthly",
      },
      features: [
        "Half Ads in For You and Following",
        "Larger reply boost",
        "Get paid to post",
        "Checkmark",
        "Grok with increased limits",
        "Pro, Analytics, Media Studio",
        "Creator Subscriptions",
      ],
    },
    {
      id: "custom",
      name: "Custom",
      price: {
        annual: {
          USD: "--,--",
          INR: "--,--",
        },
        monthly: {
          USD: "--,--",
          INR: "--,--",
        },
      },
      billingPeriod: {
        annual: "/Month",
        monthly: "/Month",
      },
      billingNote: {
        annual: "billed annually",
        monthly: "billed annually",
      },
      features: [
        "Half Ads in For You and Following",
        "Larger reply boost",
        "Get paid to post",
        "Checkmark",
        "Grok with increased limits",
        "Pro, Analytics, Media Studio",
        "Creator Subscriptions",
      ],
    },
  ],
};

export const featureCategories: FeatureCategory = {
  "Enhanced Experience": [
    {
      label: "Ads",
      values: {
        basic: "No Reduction",
        premium: "Half in For You & Following",
        enterprise: "Half in For You & Following",
        custom: "Half in For You & Following",
      },
    },
    {
      label: "Reply Boost",
      values: {
        basic: "Smallest",
        premium: "Larger",
        enterprise: "Larger",
        custom: "Larger",
      },
    },
    {
      label: "Radar",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Edit Post",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Longer Posts",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
  ],
  "Verification & Security": [
    {
      label: "Checkmark",
      values: {
        basic: undefined,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Optional ID Verification",
      values: {
        basic: undefined,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Encrypted Messages",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
  ],
  Customization: [
    {
      label: "Highlights Tab",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Bookmark Folders",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "App Icons",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
  ],
  Community: [
    {
      label: "Members",
      values: {
        basic: "Unlimited",
        premium: "Unlimited",
        enterprise: "Unlimited",
        custom: "Unlimited",
      },
    },
    {
      label: "Admins",
      values: {
        basic: "3",
        premium: "5",
        enterprise: "10",
        custom: "20",
      },
    },
    {
      label: "Moderators",
      values: {
        basic: "10",
        premium: "15",
        enterprise: "100",
        custom: "200",
      },
    },
    {
      label: "Spaces",
      values: {
        basic: "20",
        premium: "30",
        enterprise: "100",
        custom: "500",
      },
    },
    {
      label: "Transaction Fees",
      values: {
        basic: "2%",
        premium: "1%",
        enterprise: "0.5%",
        custom: "0.5%",
      },
    },
    {
      label: "Attachment Storage",
      values: {
        basic: "100GB",
        premium: "250GB",
        enterprise: "1TB",
        custom: "2TB",
      },
    },
  ],
  Workflows: [
    {
      label: "Automations",
      values: {
        basic: "Unlimited",
        premium: "20",
        enterprise: "Unlimited",
        custom: "Unlimited",
      },
    },
    {
      label: "Scheduled Workflows",
      values: {
        basic: "3",
        premium: "20",
        enterprise: "Unlimited",
        custom: "Unlimited",
      },
    },
    {
      label: "Bulk Actions",
      values: {
        basic: "10",
        premium: "20 per month",
        enterprise: "Unlimited",
        custom: "Unlimited",
      },
    },
  ],
  "Live streams and live rooms": [
    {
      label: "Live Stream and Attendees",
      values: {
        basic: "100",
        premium: "200",
        enterprise: "1,000",
        custom: "2,000",
      },
    },
    {
      label: "Live Room Participants",
      values: {
        basic: "30",
        premium: "40",
        enterprise: "50",
        custom: "150",
      },
    },
    {
      label: "Hosts",
      values: {
        basic: "30",
        premium: "40",
        enterprise: "50",
        custom: "75",
      },
    },
    {
      label: "Hours",
      values: {
        basic: "20",
        premium: "30",
        enterprise: "40",
        custom: "100",
      },
    },
    {
      label: "Live Recording Storage",
      values: {
        basic: "50 hours",
        premium: "75 hours",
        enterprise: "100hours",
        custom: "300 hours",
      },
    },
  ],

  Features: [
    {
      label: "Private spaces",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Bulk import/export",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "In-app notifications",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Member profiles & directory",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Basic Moderation",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Direct messaging",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Group chat",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Weekly email digest",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Events",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "GDPR complaint",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "iOS and Android App",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Chat spaces",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Scheduled posts",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Advanced reporting",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Gamification",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Custom domian",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Custom CSS/Javascript Snippets",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Zapier widgets",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "White-labeled community",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Automated moderation",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Color themes",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Courses",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Affiliate/conversion tracking code",
      values: {
        basic: true,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Customizable profile fields",
      values: {
        basic: "per month",
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Sender email customization",
      values: {
        basic: "per month",
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Integrately integration",
      values: {
        basic: false,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "API access",
      values: {
        basic: false,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Headless Member API",
      values: {
        basic: false,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Admin API",
      values: {
        basic: false,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
    {
      label: "Analytics filtering",
      values: {
        basic: false,
        premium: true,
        enterprise: true,
        custom: true,
      },
    },
  ],
};

export const featureAddons: FeatureCategory = {
  Community: [
    {
      label: "Extra admins",
      values: {
        basic: "/month per admin",
        premium: "/month per admin",
        enterprise: "/month per admin",
        custom: "/month per admin",
      },
    },
    {
      label: "Extra moderators",
      values: {
        basic: "/ months per 10 moderators",
        premium: "/ months per 10 moderators",
        enterprise: "/ months per 10 hours",
        custom: "/ months per 10 hours",
      },
    },
    {
      label: "Extra spaces",
      values: {
        basic: "/month per 10 spaces",
        premium: "/month per 10 spaces",
        enterprise: "/month per 20 spaces",
        custom: "/month per 20 spaces",
      },
    },
    {
      label: "Brand email notification",
      values: {
        basic: "/month",
        premium: "Included",
        enterprise: "Included",
        custom: "Included",
      },
    },
    {
      label: "Customizable profile fields",
      values: {
        basic: "/month",
        premium: "Included",
        enterprise: "Included",
        custom: "Included",
      },
    },
  ],
  "Live streams and live rooms": [
    {
      label: "Live Attendees",
      values: {
        basic: "/month per 100 attendees",
        premium: "/month per 100 attendees",
        enterprise: "Contact Us",
        custom: "Contact Us",
      },
    },
    {
      label: "Hours",
      values: {
        basic: "/ months per 10 hours",
        premium: "/ months per 10 hours",
        enterprise: "/ months per 10 hours",
        custom: "/ months per 10 hours",
      },
    },
    {
      label: "Video Storage",
      values: {
        basic: "/month per 50 hours",
        premium: "/month per 50 hours",
        enterprise: "/month per 50 hours",
        custom: "/month per 50 hours",
      },
    },
  ],
  Support: [
    {
      label: "Access to the Capcons Customer Community",
      values: {
        basic: false,
        premium: false,
        enterprise: false,
        custom: false,
      },
    },
    {
      label: "Priority email support",
      values: {
        basic: false,
        premium: false,
        enterprise: false,
        custom: false,
      },
    },
    {
      label: "Priority access to Beta features",
      values: {
        basic: false,
        premium: false,
        enterprise: "Annual only",
        custom: "Annual only",
      },
    },
  ],
  Services: [
    {
      label: "Concierge onboarding",
      values: {
        basic: false,
        premium: false,
        enterprise: "Annual only",
        custom: "Annual only",
      },
    },
    {
      label: "Dedicated success manager",
      values: {
        basic: false,
        premium: false,
        enterprise: "Annual only",
        custom: "Annual only",
      },
    },
    {
      label: "Quarterly business review session",
      values: {
        basic: false,
        premium: false,
        enterprise: "Annual only",
        custom: "Annual only",
      },
    },
    {
      label: "Courses migrations - if eligible",
      values: {
        basic: false,
        premium: "Annual only",
        enterprise: "Annual only",
        custom: "Annual only",
      },
    },
    {
      label: "Payment migrations - if eligible",
      values: {
        basic: false,
        premium: false,
        enterprise: false,
        custom: false,
      },
    },
  ],
};
