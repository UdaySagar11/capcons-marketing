"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import RoundedBottom from "@/components/common/rounded-bottom";
import { Banner } from "./_components/banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, ArrowRight } from "lucide-react";
import { getFAQs } from "./_components/_action/faq-fetch";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="flex flex-1 bg-white">
        {/* Sidebar */}
        <div className="w-full max-w-xs min-w-[250px] bg-transparent py-8 px-2 sm:px-4 overflow-y-auto border-r border-gray-200" style={{ maxHeight: 'calc(100vh - 120px)' }}>
          <div className="flex flex-col gap-3">
            {filteredFaqs.map((section) => (
              <Card
                key={section.category}
                className={`cursor-pointer transition-colors px-4 py-4 rounded-xl border-none shadow-none ${activeCategory === section.category ? 'bg-[#8E2784] text-white' : 'bg-white text-[#2E134D] hover:bg-[#F0F0F0]'}`}
                onClick={() => setActiveCategory(section.category)}
              >
                <div className="font-semibold text-base flex items-center justify-between ">
                  <span>{section.category.split("_").join(" ").replace(/\b\w/g, c => c.toUpperCase())}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
                <div className="text-xs mt-1 opacity-80">
                  {section.items.length} Questions
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 px-2 sm:px-8 py-8 overflow-y-auto">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              {isPending || isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 min-h-screen mx-auto w-full max-w-4xl"
                >
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-6 w-2/4 bg-gray-300" />
                      <div className="space-y-1">
                        {[...Array(3)].map((_, j) => (
                          <Skeleton key={j} className="h-4  bg-gray-200" />
                        ))}
                      </div>
                    </div>
                  ))}
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
                            <Card key={ind} className="bg-white text-[#2E134D] border-none rounded-xl py-2 cursor-pointer">
                              <CardContent className="py-0 px-6 cursor-pointer">
                                <Accordion type="single" collapsible defaultValue="closed">
                                  <AccordionItem value="open" className="border-none bg-transparent p-0">
                                    <AccordionPrimitive.Header className="flex">
                                      <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between text-left text-base font-semibold py-2 px-0 bg-transparent text-[#2E134D] group">
                                        <span>{item.question}</span>
                                        <span className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#2E134D] ml-2">
                                          <Plus size={14} strokeWidth={2.5} className="text-[#2E134D] transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden="true" />
                                        </span>
                                      </AccordionPrimitive.Trigger>
                                    </AccordionPrimitive.Header>
                                    <AccordionContent className="pt-2 text-sm text-[#2E134D]/90">
                                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              </CardContent>
                            </Card>
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
