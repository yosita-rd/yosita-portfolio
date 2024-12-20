'use client';

import React, { useRef } from 'react';
import Guide from '@/components/GuideBar';
import { TextFade } from '@/components/TextFade';
import Image from 'next/image';
import Link from 'next/link';
import Project from '../../public/data/project';

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
              <span className='font-bold text-xl md:text-3xl text-zinc-800'>
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
      <section ref={projectsRef} id='projects' className='py-16 px-8 md:px-0'>
        <h2 className='text-3xl font-semibold text-zinc-900'>Projects</h2>
        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
          {Project.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                date={project.date}
                description={project.desc}
                tags={project.tags}
                tools={project.toolsIcon}
                image={project.image}
              />
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} id='contact' className='py-12 px-8 md:mx-0'>
        <div className='bg-zinc-700 rounded-lg px-16 py-12 flex flex-col space-y-4 text-pretty md:text-nowrap items-center'>
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

const ProjectCard: React.FC<{
  title: string;
  date: string;
  description: string;
  tags: string[];
  tools: string[];
  image: string;
}> = ({ title, date, description, tags, tools, image }) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start w-full rounded-xl'>
      <div
        className='bg-no-repeat bg-center bg-contain md:bg-cover h-56 w-full md:w-64 md:min-h-full rounded-t-xl md:rounded-l-xl shadow'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='w-full md:w-4 h-4 md:h-full'></div>
      {/* Details */}
      <div className='flex-1 w-full h-full shadow p-4 text-zinc-900 flex flex-col justify-between gap-6 rounded-b-xl md:rounded-r-xl'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col mb-2 md:flex-row justify-between md:items-center'>
            <h2 className='text-xl font-medium'>{title}</h2>
            <p className='text-sm text-zinc-600'>{date}</p>
          </div>
          {tags.length > 0 && (
            <div className='flex flex-row gap-2 items-center flex-wrap'>
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className='px-2 py-0.5 rounded-full border border-zinc-700 text-sm text-zinc-700'
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <p className='text-sm text-justify text-zinc-600'>{description}</p>
        </div>
        {tools.length > 0 && (
          <div className='flex flex-row gap-2 items-center place-self-end'>
            {tools.map((tool, i) => (
              <Image
                key={i}
                src={`/tools/${tool}.png`}
                alt={tool}
                width={1000}
                height={1000}
                className='h-6 w-fit'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
