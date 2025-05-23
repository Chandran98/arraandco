'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Approach from '@/widgets/Approach';
import CallToAction from '@/widgets/CallToAction';
import Careers from '@/widgets/Careers';
import ShadowCursor from '@/components/ui/ShadowCursor'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Careers />
      <CallToAction />
      

      {/* disable cursor here */}
      <ShadowCursor />
    </>
  );
}
