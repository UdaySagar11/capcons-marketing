import { PlanDetails } from "@/@types";

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
      details: {
        ads: "No Reduction",
        replyBoost: "Smallest",
        radar: true,
        editPost: true,
        longerPosts: true,
        backgroundVideo: true,
        downloadVideos: true,
        encryptedMessages: true,
        highlightsTab: true,
        bookmarkFolders: true,
        appIcons: true,
        customNavigation: true,
      } as PlanDetails,
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
      details: {
        ads: "Half in For You & Following",
        replyBoost: "Larger",
        radar: true,
        editPost: true,
        longerPosts: true,
        backgroundVideo: true,
        downloadVideos: true,
        checkmark: true,
        optionalIDVerification: true,
        encryptedMessages: true,
        highlightsTab: true,
        bookmarkFolders: true,
        appIcons: true,
        customNavigation: true,
      } as PlanDetails,
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
      details: {
        ads: "Half in For You & Following",
        replyBoost: "Larger",
        radar: true,
        editPost: true,
        longerPosts: true,
        backgroundVideo: true,
        downloadVideos: true,
        checkmark: true,
        optionalIDVerification: true,
        encryptedMessages: true,
        highlightsTab: true,
        bookmarkFolders: true,
        appIcons: true,
        customNavigation: true,
      } as PlanDetails,
    },
  ],
};

export const featureCategories = {
  "Enhanced Experience": [
    { key: "ads", label: "Ads" },
    { key: "replyBoost", label: "Reply Boost" },
    { key: "radar", label: "Radar" },
    { key: "editPost", label: "Edit Post" },
    { key: "longerPosts", label: "Longer Posts" },
    { key: "backgroundVideo", label: "Background Video" },
    { key: "downloadVideos", label: "Download Videos" },
  ],
  "Verification & Security": [
    { key: "checkmark", label: "Checkmark" },
    { key: "optionalIDVerification", label: "Optional ID Verification" },
    { key: "encryptedMessages", label: "Encrypted Messages" },
  ],
  Customization: [
    { key: "highlightsTab", label: "Highlights Tab" },
    { key: "bookmarkFolders", label: "Bookmark Folders" },
    { key: "appIcons", label: "App Icons" },
    { key: "customNavigation", label: "Custom Navigation" },
  ],
};
