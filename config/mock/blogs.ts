import { Blog } from "@/@types";

const content = `<p>PropXchange Technology Inc. (together with all companies owned by and in common ownership with PropXchange Technology Inc., &quot;PropXchange,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides its Services (as defined herein) to you through its website located at https://www.propxchange.ca (the &quot;Website&quot;). The term &quot;Website&quot; shall include any modifications, enhancements, integrations, or related applications thereto. The term &quot;Services&quot; shall include all content and associated services published or otherwise made available to you, via the Website or otherwise, under these Terms. The Services and the Website are collectively referred to as the &quot;Site&quot;.</p>

<h3 className="mb-4 font-semibold text-xl">Use of the Site</h3>
<ol className="space-y-4 pl-4 list-decimal list-outside">
  <li>
    <span className="font-bold">Acceptance of Terms:</span> These Terms of Use (as amended, supplemented, or replaced from time to time, the &quot;Terms&quot;) govern your access to and use of the Site. By accessing or using the Site, you agree to be bound by these Terms. If you do not accept these Terms, you must not access or use the Site.
  </li>

  <li>
    <span className="font-bold">Organizational Use:</span> If you are accepting these Terms on behalf of an organization, you represent that you have the authority to bind such organization to these Terms, in which case &quot;you&quot; or &quot;your&quot; will refer to such organization. If you do not have such authority, or you do not agree with these Terms, you must not accept these Terms and may not use the Site.
  </li>

  <li>
    <span className="font-bold">Electronic Communications:</span> You agree to have these Terms and any related information made available to you, and to otherwise have communications between you and us occur, electronically. You also agree that any transactions through the Site shall be conducted electronically. You may also be subject to additional terms and conditions applicable to certain services, including the PropXchange mobile application, which are incorporated by reference into these Terms.
  </li>

  <li>
    <span className="font-bold">Changes to Terms:</span> We have the right, in our sole discretion, to add to, remove, modify or otherwise change any part of these Terms, in whole or in part, at any time without notice to you. If we exercise this right, such changes will be effective as of the date the changes to these Terms are posted to the Site, and the &quot;Last Update&quot; notice at the top of this document shall be amended to reflect the date of such changes. It is your responsibility to check these Terms each time you access the Site to determine whether any changes have been made. If any change to these Terms is not acceptable to you, you must discontinue your use of the Site immediately. Your continued use of the Site after any such changes are posted will constitute acceptance of those changes. These Terms apply exclusively to your use of the Site and do not alter the terms or conditions of any other agreement you may have with us.
  </li>

  <li>
    <span className="font-bold">Modification of Site:</span> We may, at any time without notice or liability, and for any reason whatsoever, terminate, change, suspend or discontinue any aspect of the Site, including: (a) changing the availability of, restricting access to, or imposing limits on any or all features or services on, or links to, the Site (including Third Party Services (as defined herein)); (b) removing, adding, modifying or otherwise changing any Fees (as defined herein) arising out of use of the Site or any features of the Site; and (c) removing, adding, modifying or otherwise changing any content on the Site. We reserve the right, in our sole discretion, to correct any errors or omissions in any portion of the Site at any time without notice.
  </li>

  <li>
    <span className="font-bold">Age Requirement:</span> You must be 18 years of age or older and of at least the age of majority in the jurisdiction in which you reside as of the time you register a user account with us.
  </li>
</ol>
`;

const relatedBlogs = [
  {
    slug: "1",
    title: "Cultural Shifts Shaping Creative",
    banner_image: "/images/blogs/main-blog.png",
    author_name: "Joanna Wellick",
    publication_date: "2018-06-28T00:00:00.000Z",
  },
  {
    slug: "1",
    title: "Integer Maecenas Eget Viverra",
    banner_image: "/images/blogs/main-blog.png",
    author_name: "Joanna Wellick",
    publication_date: "2018-06-28T00:00:00.000Z",
  },
];

export const blogPosts: Blog[] = [
  {
    slug: "1",
    title: "From Mobile to the Metaverse",
    circle_id: "mock-circle-id",
    summary:
      "Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis.",
    content: content,
    author_id: "mock-author-id",
    author_name: "Joanna Wellick",
    likes: 0,
    shares: 1000,
    comments_enabled: true,
    publication_date: "2018-06-28T00:00:00.000Z",
    last_modified_date: "2018-06-28T00:00:00.000Z",
    banner_image: "/images/blogs/main-blog.png",
    blog_status: 1,
    seo: {
      title: "From Mobile to the Metaverse - Capcons Blog",
      description:
        "Explore the journey from mobile technology to the metaverse and its impact on our digital future.",
      keywords:
        "metaverse, mobile technology, digital transformation, virtual reality",
    },
    categories_data: [
      {
        id: "mock-category-id",
        slug: "1",
        name: "Metaverse",
        description: "Mock category description",
        imageUrl: "/images/blogs/main-blog.png",
        parentCategoryName: "General",
        circle_name: "Mock Circle",
        circle_id: "mock-circle-id",
      },
    ],
    author_details: {
      user_name: "joanna-wellick",
      first_name: "Joanna",
      last_name: "Wellick",
      pfp_url: "/images/avatar.png",
    },
    related_blogs: relatedBlogs,
  },
  {
    slug: "1",
    title: "Aenean eleifend ante maecenas",
    circle_id: "mock-circle-id",
    summary:
      "Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis.",
    content: content,
    author_id: "mock-author-id",
    author_name: "Joanna Wellick",
    likes: 0,
    shares: 1000,
    comments_enabled: true,
    publication_date: "2018-06-28T00:00:00.000Z",
    last_modified_date: "2018-06-28T00:00:00.000Z",
    banner_image: "/images/blogs/main-blog.png",
    blog_status: 1,
    categories_data: [
      {
        id: "mock-category-id",
        slug: "1",
        name: "Technology",
        description: "Mock category description",
        imageUrl: "/images/blogs/main-blog.png",
        parentCategoryName: "General",
        circle_name: "Mock Circle",
        circle_id: "mock-circle-id",
      },
    ],
    author_details: {
      user_name: "joanna-wellick",
      first_name: "Joanna",
      last_name: "Wellick",
      pfp_url: "/images/avatar.png",
    },
    related_blogs: relatedBlogs,
  },
];

const dummyBlog: Blog = {
  slug: "1",
  title: "Integer Maecenas Eget Viverra",
  circle_id: "mock-circle-id",
  summary:
    "Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis.",
  content: content,
  author_id: "mock-author-id",
  author_name: "Joanna Wellick",
  likes: 0,
  shares: 1000,
  comments_enabled: true,
  publication_date: "2018-06-28T00:00:00.000Z",
  last_modified_date: "2018-06-28T00:00:00.000Z",
  banner_image: "/images/blogs/main-blog.png",
  blog_status: 1,
  categories_data: [
    {
      id: "mock-category-id",
      slug: "1",
      name: "Real Estate",
      description: "Mock category description",
      imageUrl: "/images/blogs/main-blog.png",
      parentCategoryName: "General",
      circle_name: "Mock Circle",
      circle_id: "mock-circle-id",
    },
  ],
  author_details: {
    user_name: "joanna-wellick",
    first_name: "Joanna",
    last_name: "Wellick",
    pfp_url: "/images/avatar.png",
  },
  related_blogs: relatedBlogs,
};

export const allBlogs: Blog[] = [...blogPosts, ...Array(7).fill(dummyBlog)];

export const subscriptionForm = {
  title: "Follow Us",
  socialLinks: [
    { icon: "Facebook", count: "10" },
    { icon: "Twitter", count: "69k" },
    { icon: "Instagram", count: "45" },
    { icon: "Instagram", count: "69k" },
    { icon: "Youtube", count: "69k" },
  ],
  form: {
    emailPlaceholder: "Enter your email",
    submitButton: "SUBSCRIBE",
    termsText:
      "By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.",
  },
  latestPosts: {
    title: "The latest",
    posts: [
      {
        title:
          "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        date: "2 minute read",
        isNew: true,
        slug: "1",
      },
      {
        title:
          "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        date: "2 minute read",
        slug: "1",
      },
      {
        title:
          "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        date: "2 minute read",
        slug: "1",
      },
      {
        title:
          "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        date: "2 minute read",
        slug: "1",
      },
    ],
  },
};
