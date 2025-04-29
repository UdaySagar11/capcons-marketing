"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import RoundedBottom from "@/components/common/rounded-bottom";
import ScrollOverEffect from "@/components/common/scroll-over-effect";
import { Banner } from "./_components/banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { getFAQs } from "./_components/_action/faq-fetch";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["fetch-faq"],
    queryFn: getFAQs,
  });

  const filteredFaqs = Object.entries(data?.data || {})
    .map(([category, items]) => {
      if (!Array.isArray(items)) return null;

      const filteredItems = items.filter((item) => {
        if (!item || typeof item !== "object") return false;

        const question =
          typeof item.question === "string" ? item.question.toLowerCase() : "";
        const answer =
          typeof item.answer === "string" ? item.answer.toLowerCase() : "";
        const search = searchQuery.toLowerCase();

        return question.includes(search) || answer.includes(search);
      });

      return filteredItems.length > 0
        ? { category, items: filteredItems }
        : null;
    })
    .filter((section) => section !== null);

  return (
    <ScrollOverEffect
      overlay={
        <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      }
      className="bg-transparent"
    >
      <div className="relative bg-white -mt-[50px] rounded-t-[30px] md:rounded-t-[50px]">
        <div className="px-4 md:px-8 lg:px-20 pt-1 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <AnimatePresence mode="wait">
              {isPending || isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 min-h-screen mx-auto w-full max-w-7xl"
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
                  {Object.entries(filteredFaqs || {}).map(
                    ([CategoryPage, items]) => (
                      <div
                        key={CategoryPage}
                        className="space-y-3 mt-6 sm:mt-8"
                      >
                        <h2 className="bg-[#F0F0F0] px-4 py-2.5 sm:py-3 rounded-xl font-bold text-[#2E134D] text-lg sm:text-xl capitalize md:text-2xl">
                          {items.category.split("_").join(" ")}
                        </h2>

                        <Accordion
                          type="single"
                          collapsible
                          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                          defaultValue="3"
                        >
                          {items.items.map((item, ind) => (
                            <AccordionItem
                              value={item.question
                                .substring(0, 15)
                                .split(" ")
                                .join("_")}
                              key={ind}
                              className="bg-white has-focus-visible:border-ring has-focus-visible:ring-ring/50 h-fit rounded-md border dark:border-neutral-300 px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
                            >
                              <AccordionPrimitive.Header className="flex">
                                <AccordionPrimitive.Trigger className="focus-visible:ring-0 flex flex-1 items-center text-[#2E134D] justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none">
                                  <div className="flex-1 text-left">
                                    <span className="font-semibold ">
                                      {" "}
                                      {item.question}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#2E134D]">
                                    <Plus
                                      size={14}
                                      strokeWidth={2.5}
                                      className="text-[#2E134D] transition-transform duration-200 group-data-[state=open]:rotate-45"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </AccordionPrimitive.Trigger>
                              </AccordionPrimitive.Header>
                              <AccordionContent className="pb-2">
                                <div
                                  className="prose text-[11px] sm:text-sm prose-neutral"
                                  dangerouslySetInnerHTML={{
                                    __html: item.answer,
                                  }}
                                />
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )
                  )}

                  <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
                    <Button className="bg-[#39089D] hover:bg-[#39089D]/90 px-4 sm:px-6 md:px-8 rounded-full text-white text-sm sm:text-base">
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
    </ScrollOverEffect>
  );
}
