"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import RoundedBottom from "@/components/common/rounded-bottom";
import { Banner } from "./_components/banner";
import { getFAQs } from "./_components/_action/faq-fetch";
import { useQuery } from "@tanstack/react-query";
import Sidebar from './_components/sidebar';
import MobileSelectedCategory from './_components/mobile-selected-category';
import SkeletonUI from './_components/skeleton';
import FAQCard from './_components/faq-card';
import SelectCategory from './_components/select-category';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["fetch-faq"],
    queryFn: getFAQs,
  });

  const filteredFaqs = Object.entries(data?.data || {})
    .map(([category, items]) => {
      if (!Array.isArray(items)) return null;
      const filteredItems = items.filter((item) => {
        if (!item || typeof item !== "object") return false;
        const question = typeof item.question === "string" ? item.question.toLowerCase() : "";
        const answer = typeof item.answer === "string" ? item.answer.toLowerCase() : "";
        const search = searchQuery.toLowerCase();
        return question.includes(search) || answer.includes(search);
      });
      return filteredItems.length > 0 ? { category, items: filteredItems } : null;
    })
    .filter((section) => section !== null);

  React.useEffect(() => {
    if (!activeCategory && filteredFaqs.length > 0) {
      setActiveCategory(filteredFaqs[0].category);
    }
  }, [filteredFaqs, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col lg:flex-row flex-1 bg-white container">

        <SelectCategory activeCategory={activeCategory} setActiveCategory={setActiveCategory} filteredFaqs={filteredFaqs} />
        <Sidebar filteredFaqs={filteredFaqs} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <MobileSelectedCategory activeCategory={activeCategory} filteredFaqs={filteredFaqs} />
        <div className="flex-1 px-2 sm:px-4 lg:px-8 py-4 lg:py-8 overflow-y-auto">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              {isPending || isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SkeletonUI />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredFaqs
                    .filter((section) => section.category === activeCategory)
                    .map((section) => (
                      <div key={section.category} className="space-y-6">
                        <div className="flex flex-col gap-4">
                          {section.items.map((item, ind) => (
                            <FAQCard key={ind} question={item.question} answer={item.answer} />
                          ))}
                        </div>
                      </div>
                    ))}
                  <div className="flex justify-center mt-8">
                    <Button className="bg-[#39089D] hover:bg-[#39089D]/90 px-4 rounded-full text-white text-base">
                      Load More
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <RoundedBottom />
    </div>
  );
}
