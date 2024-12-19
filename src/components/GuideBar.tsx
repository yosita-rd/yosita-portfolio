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
      <div className='flex justify-between items-center mx-auto py-4 container'>
        <button
          onClick={scrollToTop}
          className='font-bold hover:text-zinc-900 text-3xl
          bg-gradient-to-r from-blue-600 via-emerald-400 to-violet-500 inline-block text-transparent bg-clip-text'
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
              className='ml-4 md:ml-12 font-semibold text-zinc-700 hover:text-zinc-900 text-md md:text-lg'
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
