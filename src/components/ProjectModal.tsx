import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState('Web Experiences');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    wish: '',
    budget: '$10k - $25k',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/11n11company@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Project Request from 11:11 Website: ${service} (${formData.name})`,
          focus_service: service,
          wish_details: formData.wish,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity duration-300">
      <div
        className="relative w-full max-w-xl bg-white border border-[#E5E5E5] shadow-2xl p-8 sm:p-10 transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#666666] hover:text-black p-1 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle size={48} className="text-black mb-4 stroke-1" />
            <h3 className="font-serif-editorial text-3xl text-black font-normal mb-2">
              Wish Received.
            </h3>
            <p className="font-sans text-xs text-[#666666] max-w-sm">
              Thank you for reaching out to 11:11 Company. Our partners will review your vision and connect within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#888888] font-medium">
                MAKE A WISH
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal mt-1">
                Start a Project
              </h2>
              <p className="font-sans text-xs text-[#666666] mt-2">
                Tell us about the digital experience or product you wish to create.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-2">
                  Select Focus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Web Experiences', 'Mobile Applications', 'SaaS Products', 'AI & Automation'].map(
                    (item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setService(item)}
                        className={`text-xs py-2.5 px-3 border transition-all text-left truncate ${
                          service === item
                            ? 'border-black bg-black text-white font-medium'
                            : 'border-[#E8E8E8] text-[#444444] hover:border-black'
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-[#D4D4D4] py-2 text-xs focus:border-black outline-hidden transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-[#D4D4D4] py-2 text-xs focus:border-black outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-1">
                  What is your wish / idea?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your project, timeline, and goals..."
                  value={formData.wish}
                  onChange={(e) => setFormData({ ...formData, wish: e.target.value })}
                  className="w-full border border-[#E0E0E0] p-3 text-xs focus:border-black outline-hidden transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center bg-[#0A0A0A] text-white py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin mr-2" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <span>Make It Happen</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
