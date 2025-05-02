export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  icon: React.ElementType;
}

export interface OverviewFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface RelatedBlog {
  slug: string;
  title: string;
  banner_image: string;
  author_name: string;
  publication_date: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  description: {
    title: string;
    content: string;
  };
}

export interface ValueItem {
  title: string;
  description: string;
  imagePath: string;
}

export interface NewsItem {
  image: string;
  title: string;
  slug: string;
}

interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  parentCategoryName: string;
  circle_name: string;
  circle_id: string;
}

export interface AuthorDetails {
  user_name: string;
  first_name: string;
  last_name: string;
  pfp_url: string;
}

export interface Blog {
  slug: string;
  title: string;
  circle_id: string;
  summary: string;
  content: string;
  author_id: string;
  author_name: string;
  likes: number;
  shares: number;
  comments_enabled: boolean;
  publication_date: string;
  last_modified_date: string;
  banner_image: string;
  blog_status: number;
  seo?: {
    title: string;
    description: string;
    keywords: string;
  };
  categories_data?: BlogCategory[];
  author_details: AuthorDetails;
  related_blogs?: RelatedBlog[];
}

export interface BlogPost {
  title: string;
  date: string;
  isNew?: boolean;
  slug: string;
}

export interface JobTiming {
  start: string;
  end: string;
  timezone: string;
}

export interface JobStatus {
  status: "Open" | "Closed" | "Draft";
  updatedAt: string;
}

export interface Career {
  id: string;
  title: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Internship";
  workMode: "WFH" | "Hybrid" | "In-Office";
  jobTimings: JobTiming;
  description: string;
  category: string;
  postedAt: string;
  status: JobStatus[];
}

export interface PlanDetails {
  ads?: string;
  replyBoost?: string;
  radar?: boolean;
  editPost?: boolean;
  longerPosts?: boolean;
  backgroundVideo?: boolean;
  downloadVideos?: boolean;
  checkmark?: boolean;
  optionalIDVerification?: boolean;
  encryptedMessages?: boolean;
  highlightsTab?: boolean;
  bookmarkFolders?: boolean;
  appIcons?: boolean;
  customNavigation?: boolean;
}

export interface ScreenAuthenticityPermissions {
  ROLE: "user" | "admin";
  USERID: string;
  CIRCLEID: string;
  USERNAME: string;
  USERPROFILE?: string;
  USERCREDENTIALS: string;
}

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export interface NavbarProps {
  logo: {
    url: string;
    src: {
      desktop: string;
      mobile: string;
    };
    alt: string;
    title: string;
  };
  menu: MenuItem[];
  auth: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}
