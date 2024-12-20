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
        className='flex md:flex-row flex-col justify-between items-center mx-auto pt-32 pb-16 max-w-6xl'
      >
        <Image
          src='/profile.jpg'
          alt='Profile Picture'
          className='rounded-full md:size-64 lg:size-80 size-48'
          width={1080}
          height={1080}
        />
        <div className='flex flex-col space-y-8 w-3/5'>
          <div className='text-justify text-pretty text-sm text-zinc-600 md:text-base'>
            <TextFade
              direction='up'
              className='flex md:flex-row flex-col justify-start items-start md:items-end mb-4'
            >
              <span className='mr-4 font-medium text-base md:text-lg italic'>
                Hi, I'm
              </span>
              <span className='font-bold text-xl text-zinc-800 md:text-3xl'>
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
          <div className='flex md:flex-row flex-col justify-between items-center md:space-x-4 space-y-8 md:space-y-0'>
            <div className='flex flex-row space-x-8'>
              <Link href={`mailto:yosita.rd@gmail.com`} passHref>
                <i className='text-xl text-zinc-500 md:text-3xl hover:text-zinc-700 bi bi-envelope-fill'></i>
              </Link>
              <Link href={`callto:0850936599`} passHref>
                <i className='text-xl text-zinc-500 md:text-3xl hover:text-zinc-700 bi bi-telephone-fill'></i>
              </Link>
              <Link href={`https://line.me/ti/p/kCRvPO9V9c`} passHref>
                <i className='text-xl text-zinc-500 md:text-3xl hover:text-zinc-700 bi bi-line'></i>
              </Link>
              <Link href={`https://github.com/yosita-rd`} passHref>
                <i className='text-xl text-zinc-500 md:text-3xl hover:text-zinc-700 bi bi-github'></i>
              </Link>
            </div>
            <Link href='/yosita_resume.pdf' passHref>
              <Button>
                Download Resume <i className='ml-2 bi bi-download'></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} id='projects' className='px-8 md:px-0 py-16'>
        <h2 className='font-semibold text-3xl text-zinc-900'>Projects</h2>
        <div className='gap-8 grid grid-cols-1 xl:grid-cols-2 grid-flow-row mt-8'>
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
      <section ref={contactRef} id='contact' className='px-8 md:px-0 py-12'>
        <div className='flex flex-col items-center space-y-4 bg-zinc-800 px-16 py-12 rounded-lg text-pretty md:text-nowrap'>
          <h1 className='font-semibold text-3xl text-white'>Contact</h1>
          <div className='gap-2 grid grid-cols-1 grid-flow-row text-white'>
            <span className='font-medium'>
              <i className='mr-1 font-medium bi bi-envelope-fill'></i> Email
            </span>
            <Link href={`mailto:yosita.rd@gmail.com`} passHref>
              yosita.rd@gmail.com
            </Link>
            <span className='mt-4 font-medium'>
              <i className='mr-1 font-medium bi bi-telephone-fill'></i> Phone
            </span>
            <Link href={`callto:0850936599`} passHref>
              085-093-6599
            </Link>
            <span className='mt-4 font-medium'>
              <i className='mr-1 font-medium bi bi-line'></i> Line
            </span>
            <Link href={`callto:0850936599`} passHref>
              085-093-6599 (Add via phone number)
            </Link>
          </div>
          <Link href='/yosita_resume.pdf' passHref>
            <button className='bg-white hover:bg-white/80 mt-4 px-4 py-2 rounded-lg font-medium text-base text-zinc-900'>
              Download Resume <i className='ml-2 bi bi-download'></i>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className='bg-zinc-700 hover:bg-zinc-900 px-4 py-2 rounded-full font-medium text-base text-white transition delay-300 hover:scale-105'>
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
    <div className='flex md:flex-row flex-col items-center md:items-start rounded-xl w-full'>
      <div
        className='md:bg-cover bg-contain bg-no-repeat bg-center shadow rounded-t-xl md:rounded-tr-none md:rounded-bl-xl w-full md:w-64 h-56 md:min-h-full'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='w-full md:w-4 h-2 md:h-full'></div>
      {/* Details */}
      <div className='flex flex-col flex-1 justify-between gap-6 shadow p-4 rounded-b-xl md:rounded-tr-xl md:rounded-bl-none w-full h-full text-zinc-900'>
        <div className='flex flex-col gap-2'>
          <div className='flex md:flex-row flex-col justify-between md:items-center mb-2'>
            <h2 className='font-medium text-xl'>{title}</h2>
            <p className='text-sm text-zinc-600'>{date}</p>
          </div>
          {tags.length > 0 && (
            <div className='flex flex-row flex-wrap items-center gap-2'>
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className='border-zinc-700 px-2 py-0.5 border rounded-full text-sm text-zinc-700'
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <p className='text-justify text-sm text-zinc-600'>{description}</p>
        </div>
        {tools.length > 0 && (
          <div className='flex flex-row items-center gap-2 place-self-end'>
            {tools.map((tool, i) => (
              <Image
                key={i}
                src={`/tools/${tool}.png`}
                alt={tool}
                width={1000}
                height={1000}
                className='w-fit h-6'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
