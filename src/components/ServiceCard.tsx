import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number?: string;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className="group relative bg-white border border-[#E8E8E8] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-neutral-900 hover:shadow-sm cursor-pointer min-h-[320px]"
    >
      <div>
        {/* Centered / clean minimal line icon */}
        <div className="w-12 h-12 mb-8 flex items-center justify-center text-[#0A0A0A] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Heading */}
        <h3 className="font-serif-editorial text-2xl text-[#0A0A0A] font-normal tracking-tight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-[#666666] leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Footer link */}
      <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center text-xs font-sans font-medium text-[#0A0A0A] tracking-wider uppercase group-hover:text-black">
        <span>Learn More</span>
        <ArrowRight
          size={13}
          className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300 text-[#0A0A0A]"
        />
      </div>
    </div>
  );
};
