import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  return (
    <Card className="bg-white text-[#2E134D] border-none rounded-xl py-2 cursor-pointer">
      <CardContent className="py-0 px-4 sm:px-6 cursor-pointer">
        <Accordion type="single" collapsible defaultValue="closed">
          <AccordionItem value="open" className="border-none bg-transparent p-0">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between text-left text-sm sm:text-base font-semibold py-2 px-0 bg-transparent text-[#2E134D] group">
                <span>{question}</span>
                <span className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#2E134D] ml-2">
                  <Plus size={14} strokeWidth={2.5} className="text-[#2E134D] transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden="true" />
                </span>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pt-2 text-xs sm:text-sm text-[#2E134D]/90">
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQCard; 