import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface SidebarProps {
  filteredFaqs: Array<{ category: string; items: Array<{ question: string; answer: string }> }>;
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filteredFaqs, activeCategory, setActiveCategory }) => {
  return (
    <div className="hidden lg:block w-full lg:w-[300px] bg-transparent py-4 lg:py-8 px-2 sm:px-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
        {filteredFaqs.map((section) => (
          <Card
            key={section.category}
            className={`cursor-pointer transition-colors px-4 py-4 rounded-xl shadow-none min-w-[200px] lg:min-w-0 ${activeCategory === section.category
              ? 'bg-[#8E2784] text-white border-none'
              : 'text-[#2E134D] hover:bg-[#F0F0F0] border border-gray-200'
              }`}
            onClick={() => setActiveCategory(section.category)}
          >
            <div className="font-semibold text-sm lg:text-base flex items-center justify-between">
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
  );
};

export default Sidebar; 