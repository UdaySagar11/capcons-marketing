import { VideoCard } from "./video-card"

const DEMO_VIDEOS = [
  {
    title: "Learn How to Create Your First Circle",
    description: "Start your own community in just a few clicks.",
    duration: "8 Minutes",
    imageUrl: "/images/videos/video-1.png",
    href: "/how-to-videos/create-first-circle",
    category: "Circles"
  },
  {
    title: "How to Apply for a Course",
    description: "Step-by-step guide to enrolling in any course you like.",
    duration: "8 Minutes",
    imageUrl: "/images/videos/video-2.png",
    href: "/how-to-videos/apply-course",
    category: "Courses"
  },
  {
    title: "How to Customize Your Brand Templates",
    description: "Make your space truly yours with logos, colors, and themes.",
    duration: "8 Minutes",
    imageUrl: "/images/videos/video-3.png",
    href: "/how-to-videos/customize-brand",
    category: "Customization"
  },
  {
    title: "How to Upload Content to Your Circle",
    description: "Share videos, posts, and resources to keep members engaged.",
    duration: "8 Minutes",
    imageUrl: "/images/videos/video-4.png",
    href: "/how-to-videos/upload-content",
    category: "Advanced"
  },
]

interface VideoGridProps {
  selectedFilter: string;
}

export const VideoGrid = ({ selectedFilter }: VideoGridProps) => {
  const filteredVideos = selectedFilter === 'All'
    ? DEMO_VIDEOS
    : DEMO_VIDEOS.filter(video => video.category === selectedFilter)

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {filteredVideos.map((video, index) => (
        <VideoCard
          key={index}
          {...video}
        />
      ))}
    </div>
  )
} 