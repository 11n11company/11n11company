import React from 'react';
import { Hero } from '../sections/Hero';
import { Intro } from '../sections/Intro';
import { Services } from '../sections/Services';
import { Projects } from '../sections/Projects';
import { Philosophy } from '../sections/Philosophy';
import { Process } from '../sections/Process';
import { CTA } from '../sections/CTA';
import { Contact } from '../sections/Contact';

interface HomeProps {
  onOpenContactModal: () => void;
  onSelectService: (serviceName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenContactModal, onSelectService }) => {
  return (
    <main className="flex flex-col w-full">
      <Hero onOpenContactModal={onOpenContactModal} />
      <Intro />
      <Services onSelectService={onSelectService} />
      <Projects />
      <Philosophy />
      <Process />
      <CTA onOpenContactModal={onOpenContactModal} />
      <Contact />
    </main>
  );
};
