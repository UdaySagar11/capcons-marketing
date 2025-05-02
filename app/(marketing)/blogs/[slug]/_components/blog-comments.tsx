"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface User {
  name: string;
  avatar: string;
}

export interface Comment {
  id: number;
  user: User;
  time: string;
  text: string;
  likes: number;
  comments: number;
  commentsList: Comment[];
}

const mockReviews: Comment[] = [];

const sortOptions = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Most Liked', value: 'liked' },
];

const REVIEWS_PER_PAGE = 2;

interface CommentItemProps {
  comment: Comment;
  onLike: (id: number) => void;
  onAddReply: (id: number) => void;
  replyInput: { [key: number]: string };
  setReplyInput: (id: number, value: string) => void;
  isReply?: boolean;
  children?: React.ReactNode;
}

function CommentItem({
  comment,
  onLike,
  onAddReply,
  replyInput,
  setReplyInput,
  isReply = false,
  children,
  showReplyForm = false,
  onReplyClick,
}: CommentItemProps & { showReplyForm?: boolean; onReplyClick?: () => void }) {
  return (
    <div className={`bg-transparent rounded-xl p-0`}>
      <div className="flex items-start gap-2 sm:gap-4">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
          <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
          <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="font-bold text-base sm:text-lg text-[#2E134D]">{comment.user.name}</span>
            <span className="text-xs sm:text-sm text-[#A5A5A5]">{comment.time}</span>
          </div>
          <div className="flex items-start gap-1 sm:gap-2 justify-between">
            <div className="text-xs sm:text-sm mt-1 mb-2 text-[#39089D] max-w-[calc(100%-48px)] break-words whitespace-pre-wrap">{comment.text}</div>
            <span
              className="flex items-center justify-center text-[#FF9C00] hover:bg-[#FF9C00]/10 rounded-full p-1 sm:p-2 ml-1 sm:ml-2 cursor-pointer shrink-0"
              onClick={() => onLike(comment.id)}
            >
              <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm mb-2">
            <span className="text-[#A5A5A5]">{comment.likes} Likes</span>
            {!isReply && comment.comments > 0 && (
              <span className="text-[#A5A5A5]">{comment.comments} Comments</span>
            )}
            {!isReply && (
              <button
                className="text-[#39089D] text-xs sm:text-sm font-medium ml-1 sm:ml-2 hover:underline focus:outline-none"
                onClick={onReplyClick}
              >
                Reply
              </button>
            )}
          </div>
          {children}
          {!isReply && showReplyForm && (
            <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Input
                className="flex-1 bg-neutral-200 dark:bg-neutral-800 text-xs sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-[#39089D] shadow-none focus:ring-0 focus:outline-none text-[#2E134D] placeholder-[#A5A5A5]"
                placeholder="Add comment"
                value={replyInput[comment.id] || ''}
                onChange={e => setReplyInput(comment.id, e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') onAddReply(comment.id); }}
              />
              <Button
                className="bg-[#39089D] text-white rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
                onClick={() => onAddReply(comment.id)}
              >
                Add
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const formSchema = z.object({
  review: z.string().min(1, "Review cannot be empty"),
});

const BlogComments = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  const [reviews, setReviews] = useState<Comment[]>(mockReviews);
  const [replyInput, setReplyInputState] = useState<{ [key: number]: string }>({});
  const [sort, setSort] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [openReplyId, setOpenReplyId] = useState<number | null>(null);

  const handlePostReview = (values: z.infer<typeof formSchema>) => {
    setReviews([
      {
        id: Date.now(),
        user: {
          name: 'Current User',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        time: 'Just now',
        text: values.review,
        likes: 0,
        comments: 0,
        commentsList: [],
      },
      ...reviews,
    ]);
    form.reset();
    setCurrentPage(1);
  };

  const handleLike = (id: number) => {
    setReviews((reviews) =>
      reviews.map((r) =>
        r.id === id
          ? { ...r, likes: r.likes + 1 }
          : {
            ...r,
            commentsList: r.commentsList.map((c) =>
              c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c
            ),
          }
      )
    );
  };

  const setReplyInput = (id: number, value: string) => {
    setReplyInputState((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddReply = (reviewId: number, parentId?: number) => {
    const commentText = replyInput[reviewId]?.trim();
    if (!commentText) return;
    setReviews((reviews) =>
      reviews.map((r) => {
        if (r.id === reviewId && !parentId) {
          const newReply: Comment = {
            id: Date.now(),
            user: { name: 'Current User', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            text: commentText,
            likes: 0,
            commentsList: [],
            comments: 0,
            time: 'Just now',
          };
          return {
            ...r,
            commentsList: [...r.commentsList, newReply],
            comments: r.comments + 1,
          };
        } else if (r.commentsList && parentId) {
          return {
            ...r,
            commentsList: r.commentsList.map((c) => {
              if (c.id === parentId) {
                const newReply: Comment = {
                  id: Date.now(),
                  user: { name: 'Current User', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                  text: commentText,
                  likes: 0,
                  commentsList: [],
                  comments: 0,
                  time: 'Just now',
                };
                return {
                  ...c,
                  commentsList: [...(c.commentsList || []), newReply],
                  comments: (c.comments || 0) + 1,
                };
              }
              return c;
            }),
          };
        }
        return r;
      })
    );
    setReplyInputState((prev) => ({ ...prev, [reviewId]: '' }));
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sort === 'recent') return b.id - a.id;
    if (sort === 'oldest') return a.id - b.id;
    if (sort === 'liked') return b.likes - a.likes;
    return 0;
  });

  const totalPages = Math.ceil(sortedReviews.length / REVIEWS_PER_PAGE);
  const paginatedReviews = sortedReviews.slice((currentPage - 1) * REVIEWS_PER_PAGE, currentPage * REVIEWS_PER_PAGE);

  const renderReplies = (replies: Comment[]): React.ReactNode =>
    replies.map((reply) => (
      <CommentItem
        key={reply.id}
        comment={reply}
        onLike={handleLike}
        onAddReply={() => { }}
        replyInput={replyInput}
        setReplyInput={setReplyInput}
        isReply={true}
        showReplyForm={false}
      >
        {reply.commentsList && reply.commentsList.length > 0 && renderReplies(reply.commentsList)}
      </CommentItem>
    ));

  return (
    <div className="w-full max-w-3xl mt-8 sm:mt-16 mb-6 sm:mb-10">
      <h2 className="mb-4 md:mb-0 font-bold text-[#160925] text-xl md:text-2xl text-left">Reviews</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlePostReview)} className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="bg-white dark:bg-black text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-4 rounded-full border border-[#39089D] shadow-none focus:ring-0 focus:outline-none text-[#2E134D] placeholder-[#A5A5A5]"
                    placeholder="Write your review..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-lime-300 hover:bg-lime-400 text-black rounded-full px-3 sm:px-8 text-sm sm:text-base"
          >
            Post
          </Button>
        </form>
      </Form>
      <div className="relative flex gap-2 mb-4 sm:mb-6">
        <Select value={sort} onValueChange={(value) => { setSort(value); setCurrentPage(1); }}>
          <SelectTrigger className="text-lg sm:text-xl font-semibold text-[#2E134D] focus:outline-none border-none shadow-none px-0">
            <SelectValue placeholder="Select sort" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {reviews.length === 0 ? (
        <div className="text-center text-gray-500 text-sm sm:text-base">No reviews yet</div>
      ) : (
        <div className="space-y-6 sm:space-y-10">
          {paginatedReviews.map((r) => (
            <CommentItem
              key={r.id}
              comment={r}
              onLike={handleLike}
              onAddReply={(id: number) => handleAddReply(id)}
              replyInput={replyInput}
              setReplyInput={setReplyInput}
              showReplyForm={openReplyId === r.id}
              onReplyClick={() => setOpenReplyId(openReplyId === r.id ? null : r.id)}
            >
              {r.commentsList && r.commentsList.length > 0 && renderReplies(r.commentsList)}
            </CommentItem>
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex items-center gap-2 sm:gap-4 mt-8 sm:mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n)}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-base sm:text-lg font-semibold ${n === currentPage ? 'bg-[#39089D] text-white' : 'bg-transparent text-[#A5A5A5]'}`}
            >
              {n}
            </button>
          ))}
          <button
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-base sm:text-lg font-semibold bg-transparent text-[#A5A5A5] border border-[#A5A5A5]"
            onClick={() => setCurrentPage((p) => (p < totalPages ? p + 1 : p))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogComments;