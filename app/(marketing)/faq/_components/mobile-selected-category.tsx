import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MobileSelectedCategoryProps {
  activeCategory: string | null;
  filteredFaqs: Array<{ category: string; items: Array<{ question: string; answer: string }> }>;
}

const MobileSelectedCategory: React.FC<MobileSelectedCategoryProps> = ({ activeCategory, filteredFaqs }) => {
  return (
    <div className="lg:hidden w-full px-2 sm:px-4 py-4">
      {activeCategory && (
        <Card className="bg-[#8E2784] text-white border-none rounded-xl px-4">
          <CardContent className="space-y-2">
            <div className="font-semibold text-sm lg:text-base flex items-center justify-between">
              <span>{activeCategory.split("_").join(" ").replace(/\b\w/g, c => c.toUpperCase())}</span>
            </div>
            <div className="text-xs mt-1 opacity-80">
              {filteredFaqs.find(section => section.category === activeCategory)?.items.length} Questions
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MobileSelectedCategory; 