'use client';

import React, { useRef } from 'react';
import Guide from '@/components/GuideBar';
import { TextFade } from '@/components/TextFade';
import Image from 'next/image';
import Link from 'next/link';

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
    <main className='mx-auto container'>
      {/* Guild Bar */}
      <Guide sections={sections} />

      {/* About */}
      <section
        ref={aboutRef}
        id='about'
        className='flex flex-row items-center justify-between pt-32 pb-16 max-w-5xl mx-auto'
      >
        <Image
          src='/profile.jpg'
          alt='Profile Picture'
          className='rounded-full size-64'
          width={1080}
          height={1080}
        />
        <div className='flex flex-col space-y-8 w-3/5'>
          <div className='text-md text-justify text-pretty text-zinc-600'>
            <TextFade
              direction='up'
              className='flex flex-row justify-start items-end mb-4'
            >
              <span className='mr-4 font-medium text-lg italic'>Hi, I'm</span>
              <span className='font-bold text-3xl'>Yosita Rodwattanakul</span>
            </TextFade>
            A passionate Computer Engineering student with a strong interest in
            software development, design, and problem-solving. I excel in
            collaborative environments and am eager to gain hands-on experience
            through real-world projects. Currently, I am developing my skills in
            frontend development and UX/UI design, with a focus on delivering
            intuitive and visually compelling user experiences.
          </div>
          <div className='flex flex-row items-center justify-between space-x-4'>
            <div className='flex flex-row space-x-8'>
              <Link href={`mailto:yosita.rd@gmail.com`} passHref>
                <i className='bi bi-envelope-fill text-zinc-500 hover:text-zinc-700 text-3xl'></i>
              </Link>
              <Link href={`callto:0850936599`} passHref>
                <i className='bi bi-telephone-fill text-zinc-500 hover:text-zinc-700 text-3xl'></i>
              </Link>
              <Link href={`https://github.com/yosita-rd`} passHref>
                <i className='bi bi-github text-zinc-500 hover:text-zinc-700 text-3xl'></i>
              </Link>
            </div>
            <Link href='/yosita_resume.pdf' passHref>
              <Button>
                Download Resume <i className='bi bi-download ml-2'></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} id='projects' className='py-16'>
        <h2>Projects</h2>
        <p>Content for Projects section...</p>
        <div className='bg-black w-full h-screen'></div>
      </section>
      <section ref={contactRef} id='contact' className='py-16'>
        <h2>Contact</h2>
        <p>Content for Contact section...</p>
        <div className='bg-black w-full h-screen'></div>
      </section>
    </main>
  );
}

const ButtonWithAnimation: React.FC = () => {
  return (
    <div className='flex justify-center items-center mx-auto w-full max-w-md'>
      <div className='relative z-10 flex items-center p-[1.5px] border rounded-xl w-full cursor-pointer overflow-hidden'>
        <div className='absolute inset-0 bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] rounded-full w-full h-full animate-rotate'></div>
        <div className='relative z-20 flex bg-white p-2 rounded-[0.60rem] w-full'>
          Subscribe
        </div>
      </div>
    </div>
  );
};

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className='bg-zinc-700 hover:bg-zinc-900 px-4 py-2 rounded-full font-medium text-white text-md transition delay-300 hover:scale-105'>
      {children}
    </button>
  );
};
