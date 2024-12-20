import { FC } from 'react';

type GuideProps = {
  sections: { name: string; ref: React.RefObject<HTMLElement | null> }[];
};

const Guide: FC<GuideProps> = ({ sections }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='top-0 left-0 z-10 fixed bg-white/40 w-full'>
      <div className='flex justify-between items-end mx-auto px-8 md:px-0 py-4 container'>
        <button
          onClick={scrollToTop}
          className='inline-block bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 to-violet-500 font-bold text-3xl text-transparent hover:text-zinc-900'
        >
          Yosita
        </button>
        <div>
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() =>
                section.ref.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='ml-4 md:ml-12 font-semibold text-md text-zinc-700 md:text-lg hover:text-zinc-900'
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Guide;
