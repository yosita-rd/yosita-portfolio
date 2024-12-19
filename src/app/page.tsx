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
        className='flex flex-col md:flex-row items-center justify-between pt-32 pb-16 max-w-5xl mx-auto'
      >
        <Image
          src='/profile.jpg'
          alt='Profile Picture'
          className='rounded-full size-48 md:size-64 lg:size-80'
          width={1080}
          height={1080}
        />
        <div className='flex flex-col space-y-8 w-3/5'>
          <div className='text-sm md:text-base text-justify text-pretty text-zinc-600'>
            <TextFade
              direction='up'
              className='flex flex-col md:flex-row justify-start items-start md:items-end mb-4'
            >
              <span className='mr-4 font-medium text-base md:text-lg italic'>
                Hi, I'm
              </span>
              <span className='font-bold text-xl md:text-3xl'>
                Yosita Rodwattanakul
              </span>
            </TextFade>
            A passionate Computer Engineering student with a strong interest in
            software development, design, and problem-solving. I excel in
            collaborative environments and am eager to gain hands-on experience
            through real-world projects. Currently, I am developing my skills in
            frontend development and UX/UI design, with a focus on delivering
            intuitive and visually compelling user experiences.
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between md:space-x-4 md:space-y-0 space-y-8'>
            <div className='flex flex-row space-x-8'>
              <Link href={`mailto:yosita.rd@gmail.com`} passHref>
                <i className='bi bi-envelope-fill text-zinc-500 hover:text-zinc-700 text-xl md:text-3xl'></i>
              </Link>
              <Link href={`callto:0850936599`} passHref>
                <i className='bi bi-telephone-fill text-zinc-500 hover:text-zinc-700 text-xl md:text-3xl'></i>
              </Link>
              <Link href={`https://line.me/ti/p/kCRvPO9V9c`} passHref>
                <i className='bi bi-line text-zinc-500 hover:text-zinc-700 text-xl md:text-3xl'></i>
              </Link>
              <Link href={`https://github.com/yosita-rd`} passHref>
                <i className='bi bi-github text-zinc-500 hover:text-zinc-700 text-xl md:text-3xl'></i>
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
        <h2 className='text-3xl font-semibold text-zinc-900'>
          Projects Section
        </h2>
        <p>Coming Soon...</p>
      </section>

      {/* Contact */}
      <section ref={contactRef} id='contact' className='py-16'>
        <div className='bg-zinc-700 rounded-lg px-16 py-12 flex flex-col space-y-4 text-nowrap items-center'>
          <h1 className='text-3xl font-semibold text-white'>Contact</h1>
          <div className='grid grid-flow-row grid-cols-1 gap-2 text-white'>
            <span className='font-medium'>
              <i className='bi bi-envelope-fill mr-1 font-medium'></i> Email
            </span>
            <Link href={`mailto:yosita.rd@gmail.com`} passHref>
              yosita.rd@gmail.com
            </Link>
            <span className='font-medium mt-4'>
              <i className='bi bi-telephone-fill mr-1 font-medium'></i> Phone
            </span>
            <Link href={`callto:0850936599`} passHref>
              085-093-6599
            </Link>
            <span className='font-medium mt-4'>
              <i className='bi bi-line mr-1 font-medium'></i> Line
            </span>
            <Link href={`callto:0850936599`} passHref>
              085-093-6599 (Add via phone number)
            </Link>
          </div>
          <Link href='/yosita_resume.pdf' passHref>
            <button className='bg-white hover:bg-white/80 px-4 py-2 rounded-lg font-medium text-zinc-900 text-base mt-4'>
              Download Resume <i className='bi bi-download ml-2'></i>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className='bg-zinc-700 hover:bg-zinc-900 px-4 py-2 rounded-full font-medium text-white text-base transition delay-300 hover:scale-105'>
      {children}
    </button>
  );
};
