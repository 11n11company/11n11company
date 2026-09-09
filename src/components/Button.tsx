import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  showArrow?: boolean;
  arrowDirection?: 'right' | 'up-right';
  children: React.ReactNode;
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  showArrow = false,
  arrowDirection = 'right',
  children,
  className = '',
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-[#0A0A0A] text-white px-6 sm:px-7 py-3.5 rounded-full hover:bg-neutral-800 active:scale-[0.98] shadow-sm',
    secondary:
      'bg-white text-[#0A0A0A] border border-neutral-300 px-6 sm:px-7 py-3.5 rounded-full hover:border-black hover:bg-neutral-50 active:scale-[0.98]',
    outline:
      'bg-transparent text-[#0A0A0A] border border-neutral-300 px-5 sm:px-6 py-3 rounded-full hover:border-black hover:bg-white',
    link: 'bg-transparent text-[#0A0A0A] p-0 hover:opacity-70 group underline-offset-4',
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className={`transition-transform duration-300 ${
            arrowDirection === 'up-right'
              ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45'
              : 'group-hover:translate-x-1'
          } ml-2 shrink-0`}
        />
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        onClick={onClick as any}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
