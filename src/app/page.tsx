'use client';

import { useRef } from 'react';
import Guide from '@/components/GuideBar';

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
    { name: 'About', ref: aboutRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef },
  ];

  return (
    <main className="mx-auto container">
      <Guide sections={sections} />
      <section ref={aboutRef} id="about" className="py-16">
        <h2>About</h2>
        <p>Content for About section...</p>
        <div className="bg-black w-full h-screen"></div>
      </section>
      <section ref={projectsRef} id="projects" className="py-16">
        <h2>Projects</h2>
        <p>Content for Projects section...</p>
        <div className="bg-black w-full h-screen"></div>
      </section>
      <section ref={contactRef} id="contact" className="py-16">
        <h2>Contact</h2>
        <p>Content for Contact section...</p>
        <div className="bg-black w-full h-screen"></div>
      </section>
    </main>
  );
}
