import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E8E8E8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* LEFT: Logo & Copyright */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#home" className="flex flex-col items-start group">
                <span className="font-serif-editorial text-3xl font-normal tracking-tight text-[#0A0A0A] leading-none">
                  11:11
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#666666] font-medium mt-1">
                  COMPANY
                </span>
              </a>
              <p className="font-sans text-xs text-[#666666] mt-4 max-w-xs leading-relaxed">
                Designing and building digital experiences, products, and intelligent systems.
              </p>
            </div>
            <p className="font-sans text-xs text-[#888888] mt-8 md:mt-0">
              © {currentYear} 11:11 Company. All rights reserved.
            </p>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="md:col-span-4 flex flex-col md:items-center">
            <div className="flex flex-col space-y-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#999999] mb-1 font-medium">
                Navigation
              </span>
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-xs sm:text-[13px] text-[#0A0A0A] hover:text-neutral-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Social & Closing phrase */}
          <div className="md:col-span-4 flex flex-col justify-between md:items-end">
            <div className="flex flex-col md:items-end space-y-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#999999] mb-1 font-medium">
                Connect
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-xs sm:text-[13px] text-[#0A0A0A] hover:text-neutral-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-xs sm:text-[13px] text-[#0A0A0A] hover:text-neutral-500 transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:contact@1111company.com"
                className="font-sans text-xs sm:text-[13px] text-[#0A0A0A] hover:text-neutral-500 transition-colors"
              >
                Email
              </a>
            </div>

            <div className="mt-8 md:mt-0 text-left md:text-right">
              <p className="font-serif-editorial text-lg sm:text-xl text-[#0A0A0A] italic">
                Make a Wish. We Make It Happen.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="border-t border-[#EEEEEE] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#888888] font-sans">
          <span>Crafted with editorial precision for the modern web.</span>
          <span className="mt-2 sm:mt-0">11:11 Studio — Global Digital Practice</span>
        </div>
      </div>
    </footer>
  );
};
