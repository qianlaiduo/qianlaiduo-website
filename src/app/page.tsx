'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import Guestbook from '@/components/sections/Guestbook';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Toolbox } from '@/components/sections/Toolbox';
import { Advantages } from '@/components/sections/Advantages';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  // 确保首屏元素在加载后立即显示
  useEffect(() => {
    const heroReveals = document.querySelectorAll('#hero .reveal, #hero .reveal-scale');
    heroReveals.forEach((el) => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Guestbook />
      <About />
      <Services />
      <Toolbox />
      <Advantages />
      <Contact />
      <Footer />
    </main>
  );
}
