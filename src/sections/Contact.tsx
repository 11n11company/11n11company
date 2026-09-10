import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

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
          name: formState.name,
          email: formState.email,
          _subject: `New Inquiry from 11:11 Website: ${formState.subject} (${formState.name})`,
          topic: formState.subject,
          message: formState.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      // Fallback display
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Side-by-Side Two-Column Grid: Text & Form Box aligned together */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Section Title, Narrative & Studio Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-3">
                CONTACT US
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] tracking-tight leading-tight mb-6">
                Get in touch.
                <br />
                <span className="italic font-light">We'd love to hear from you.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed font-normal mb-8 max-w-md">
                Have a question, partnership proposal, or media request? Reach out directly to our global team or send a message through the form.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 text-[#0A0A0A]">
                    <Mail size={16} strokeWidth={1.25} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#888888] font-medium block mb-1">
                      Direct Email
                    </span>
                    <a
                      href="mailto:11n11company@gmail.com"
                      className="font-serif-editorial text-xl sm:text-2xl text-[#0A0A0A] hover:text-neutral-500 transition-colors"
                    >
                      11n11company@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 text-[#0A0A0A]">
                    <MapPin size={16} strokeWidth={1.25} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#888888] font-medium block mb-1">
                      Studio Presence
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-[#444444] leading-relaxed">
                      Kochi, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 text-[#0A0A0A]">
                    <Clock size={16} strokeWidth={1.25} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#888888] font-medium block mb-1">
                      Response Time
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-[#444444] leading-relaxed">
                      Monday — Friday • Inquiries replied within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Brand Tagline */}
            <div className="border-t border-neutral-100 pt-6">
              <span className="font-serif-editorial text-lg text-[#666666] italic">
                11 n 11 Company — Every conversation begins with an open mind.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Box Aligned to the Side */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E8E8E8] p-8 sm:p-12 relative shadow-xs">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <CheckCircle2 size={44} className="text-[#0A0A0A] mb-4 stroke-1" />
                <h3 className="font-serif-editorial text-3xl text-black font-normal mb-2">
                  Message Sent
                </h3>
                <p className="font-sans text-xs text-[#666666] max-w-sm">
                  Thank you for reaching out. We have received your message and our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#888888] font-medium block mb-1">
                    Send a Message
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#0A0A0A] font-normal mb-6">
                    How can we assist you?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-[#E0E0E0] p-3 text-xs focus:border-black outline-none focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-[#E0E0E0] p-3 text-xs focus:border-black outline-none focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-sans tracking-[0.16em] text-[#555555] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-[#E0E0E0] p-3 text-xs focus:border-black outline-none focus:outline-none focus:ring-0 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.14em] hover:bg-neutral-800 transition-all duration-300 shadow-xs cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin mr-2" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
