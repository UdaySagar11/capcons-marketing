import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SelectCategoryProps {
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
  filteredFaqs: Array<{ category: string; items: Array<{ question: string; answer: string }> }>;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ activeCategory, setActiveCategory, filteredFaqs }) => {
  return (
    <div className="lg:hidden w-full px-2 sm:px-4 py-4">
      <Select value={activeCategory || ''} onValueChange={setActiveCategory}>
        <SelectTrigger className="w-full p-2 border border-gray-200 rounded-lg bg-white">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {filteredFaqs.map((section) => (
            <SelectItem key={section.category} value={section.category}>
              {section.category.split("_").join(" ").replace(/\b\w/g, c => c.toUpperCase())}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategory; 