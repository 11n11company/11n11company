import React from 'react';
import { ArrowRight, Mouse } from 'lucide-react';
import { Button } from '../components/Button';

interface HeroProps {
  onOpenContactModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-20 flex flex-col justify-between overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small uppercase tracking label */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777]">
                MAKE A WISH
              </span>
              <span className="w-8 h-[1px] bg-neutral-300" />
            </div>

            {/* Large Serif Heading with exact line breaks */}
            <h1 className="font-serif-editorial text-[44px] sm:text-[62px] lg:text-[76px] xl:text-[84px] font-normal text-[#0A0A0A] leading-[1.04] tracking-[-0.02em] mb-7">
              Make a Wish.
              <br />
              <span className="italic font-light">We Make It Happen.</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="font-sans text-sm sm:text-base text-[#555555] max-w-xl leading-relaxed font-normal mb-10">
              We design and build digital experiences, products and intelligent systems that turn ambitious ideas into reality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
              <button
                onClick={onOpenContactModal}
                className="group inline-flex items-center justify-center bg-[#0A0A0A] text-white px-7 sm:px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.14em] hover:bg-neutral-800 transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center bg-white text-[#0A0A0A] border border-neutral-300 px-7 sm:px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.14em] hover:border-black hover:bg-neutral-50 transition-all duration-300 cursor-pointer"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Metrics with thin vertical separators */}
            <div className="pt-8 border-t border-neutral-200/80 flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col">
                <span className="font-serif-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal leading-none mb-1">
                  10+
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#777777] font-normal tracking-wide">
                  Projects Delivered
                </span>
              </div>

              <div className="h-10 w-[1px] bg-neutral-200" />

              <div className="flex flex-col">
                <span className="font-serif-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal leading-none mb-1">
                  5+
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#777777] font-normal tracking-wide">
                  Happy Clients
                </span>
              </div>

              <div className="h-10 w-[1px] bg-neutral-200" />

              <div className="flex flex-col">
                <span className="font-serif-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal leading-none mb-1">
                  100%
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#777777] font-normal tracking-wide">
                  Commitment
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LAPTOP & SMARTPHONE MOCKUP COMPOSITION */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] lg:max-w-none">
              
              {/* LAPTOP MOCKUP */}
              <div className="relative transform lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Laptop Display Shell */}
                <div className="bg-[#1C1C1E] p-2.5 sm:p-3 rounded-t-xl sm:rounded-t-2xl shadow-subtle-device border border-neutral-700/50">
                  {/* Web Browser Frame */}
                  <div className="bg-white rounded-md sm:rounded-lg overflow-hidden border border-neutral-200">
                    {/* Browser top chrome */}
                    <div className="bg-neutral-100/90 px-3 py-2 border-b border-neutral-200 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                      </div>
                      <div className="bg-white px-6 py-0.5 rounded-full text-[9px] font-sans text-neutral-400 tracking-wider">
                        1111company.com
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Web Content Screen */}
                    <div className="p-6 sm:p-8 bg-[#FAFAFA] aspect-[16/10] flex flex-col justify-between select-none">
                      <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                        <span className="font-serif-editorial text-sm tracking-tight font-semibold text-black">
                          11:11
                        </span>
                        <div className="flex space-x-3 text-[9px] font-sans text-neutral-500 uppercase tracking-widest">
                          <span>Works</span>
                          <span>Services</span>
                          <span>Contact</span>
                        </div>
                      </div>

                      <div className="my-auto py-2">
                        <span className="text-[8px] font-sans tracking-[0.25em] text-neutral-400 uppercase">
                          ARCHITECTURAL DIGITAL SYSTEMS
                        </span>
                        <h4 className="font-serif-editorial text-xl sm:text-2xl text-black font-normal leading-tight mt-1">
                          Crafting Digital Presence <br />
                          <span className="italic font-light">With Purpose.</span>
                        </h4>
                        <div className="w-12 h-[1px] bg-black mt-3" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-200">
                        <div className="h-9 bg-neutral-200/70 rounded-xs" />
                        <div className="h-9 bg-neutral-300/60 rounded-xs" />
                        <div className="h-9 bg-neutral-900 rounded-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative bg-[#C2C2C4] h-3.5 sm:h-4 rounded-b-lg sm:rounded-b-xl shadow-md flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#8E8E93] rounded-b-sm" />
                </div>
              </div>

              {/* SMARTPHONE MOCKUP OVERLAPPING LAPTOP */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-36 sm:w-44 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-[#1A1A1A] p-1.5 sm:p-2 rounded-[28px] sm:rounded-[36px] shadow-2xl">
                  {/* Notch / Speaker */}
                  <div className="w-12 h-2.5 bg-[#1A1A1A] mx-auto rounded-b-md z-30 mb-1" />
                  
                  {/* Phone Screen */}
                  <div className="bg-white rounded-[22px] sm:rounded-[28px] overflow-hidden p-3 aspect-[9/18] flex flex-col justify-between border border-neutral-200">
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-serif-editorial text-[10px] font-bold text-black">11:11</span>
                      <div className="w-2.5 h-1.5 border border-black rounded-xs" />
                    </div>

                    <div className="my-auto text-center py-2">
                      <div className="w-8 h-8 rounded-full border border-black mx-auto mb-2 flex items-center justify-center">
                        <span className="font-serif text-[10px]">✦</span>
                      </div>
                      <p className="font-serif-editorial text-xs text-black font-medium leading-tight">
                        Wish. Built.
                      </p>
                    </div>

                    <div className="w-full py-1.5 bg-black text-white text-[7px] tracking-widest text-center uppercase font-sans rounded-full">
                      Explore
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT EDGE VERTICAL ACCENT TEXT */}
              <div className="hidden xl:flex flex-col items-start absolute -right-16 top-1/4 select-none">
                <div className="w-8 h-[1px] bg-black mb-4" />
                <span className="font-sans text-[9px] tracking-[0.28em] text-[#888888] uppercase leading-relaxed font-semibold">
                  DIGITAL
                  <br />
                  BEYOND
                  <br />
                  POSSIBILITIES.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM-RIGHT SCROLL INDICATOR */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-12 flex justify-end">
        <a
          href="#intro"
          className="inline-flex items-center space-x-2 text-[#777777] hover:text-black transition-colors select-none"
        >
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-medium">
            SCROLL
          </span>
          <div className="w-4 h-7 rounded-full border border-neutral-400 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-neutral-700 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
