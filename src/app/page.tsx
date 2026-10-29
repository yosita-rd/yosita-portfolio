import Image from 'next/image';
import Guide from '@/components/GuideBar';
import ProjectShowcase from '@/components/ProjectShowcase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { experiences, pinnedFirst } from '../../public/data/project';

const skills = [
  {
    name: 'Programming languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'Java', 'C++'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Prisma ORM'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TanStack Query', 'Zod', 'Tailwind CSS'],
  },
  { name: 'Databases & DevOps', items: ['PostgreSQL', 'GitHub Actions'] },
  {
    name: 'Soft skills',
    items: [
      'Communication',
      'Leadership',
      'Collaboration',
      'Requirement gathering',
    ],
  },
];

function Arrow() {
  return <ArrowUpRight className="inline size-3" aria-hidden="true" />;
}
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Guide />
      <main id="main" className="site-shell">
        <section id="about" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Yosita Rodwattanakul</h1>
            <p className="hero-role">
              Full-stack software development · Bangkok, Thailand
            </p>
            <p className="hero-description">
              I’m a Computer Engineering student focused on full-stack software
              development, with a strong foundation in frontend engineering. I’m
              a fast learner who thrives in fast-paced teams building modern,
              high-impact software solutions.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#projects">
                  Explore my work{' '}
                  <ArrowDown data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/yosita_resume.pdf" download>
                  Download resume{' '}
                  <ArrowDown data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="hero-links">
              <a
                href="https://github.com/yosita-rd"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow />
              </a>
              <span aria-hidden="true">/</span>
              <a href="mailto:yosita.rd@gmail.com">
                Email <Arrow />
              </a>
            </div>
          </div>
          <Image
            src="/profile.jpg"
            alt="Yosita Rodwattanakul"
            width={480}
            height={480}
            priority
            className="portrait"
          />
        </section>
        <section id="experience" className="section" aria-label="Experience">
          <SectionHeading title="Experience" />
          <div className="experience-list">
            {pinnedFirst(experiences).map((experience) => (
              <article className="experience-row" key={experience.company}>
                <div className="experience-meta">
                  <span className="small-label">{experience.date}</span>
                  {experience.pinned && (
                    <Badge variant="secondary" className="mt-2 w-fit">
                      Pinned
                    </Badge>
                  )}
                </div>
                <div className="experience-content">
                  <h3>{experience.company}</h3>
                  <p className="role">{experience.role}</p>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {experience.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="section" aria-label="Projects">
          <SectionHeading title="Projects" />
          <ProjectShowcase />
        </section>
        <section id="skills" className="section" aria-label="Skills and tools">
          <SectionHeading title="Skills & strengths" />
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="language-row">
            <span className="eyebrow">Languages</span>
            <p>
              Thai <span>Native</span>
            </p>
            <p>
              English <span>TOEIC 920</span>
            </p>
          </div>
        </section>
        <section
          id="education"
          className="section"
          aria-label="Education and achievements"
        >
          <SectionHeading title="Education & achievements" />
          <div className="beyond-grid">
            <div>
              <h3 className="column-heading">Education</h3>
              <article className="education-item">
                <span className="small-label">2023 — November 2026</span>
                <h4>Chulalongkorn University</h4>
                <p>
                  Bachelor of Engineering
                  <br />
                  Computer Engineering and Digital Technology
                </p>
              </article>
              <article className="education-item">
                <span className="small-label">2020 — 2023</span>
                <h4>Triamudom Suksa School</h4>
                <p>High School</p>
              </article>
            </div>
            <div>
              <h3 className="column-heading">Leadership & achievements</h3>
              <article className="achievement">
                <span className="small-label">2025 · Leadership</span>
                <h4>Vice President, FECamp Club</h4>
                <p>
                  Led the Public Relations and IT divisions and directed FEST
                  and FECamp 19th, serving over 600 students combined.
                </p>
              </article>
              <article className="achievement">
                <span className="small-label">2025 · Semi-finalist</span>
                <h4>Intania Case Competition</h4>
                <p>
                  Proposed a Cloud & AI-driven Urban Air Mobility solution for
                  ICC Airways to improve operational efficiency and
                  sustainability.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div>
            <h2 id="contact-title">Contact</h2>
            <p>
              Feel free to reach out about software development opportunities or
              projects.
            </p>
            <a className="contact-email" href="mailto:yosita.rd@gmail.com">
              yosita.rd@gmail.com <Arrow />
            </a>
          </div>
          <div className="contact-details">
            <div>
              <span className="small-label">Based in</span>
              <p>Bangkok, Thailand</p>
            </div>
            <div>
              <span className="small-label">Give me a call</span>
              <a href="tel:+66850936599">
                +66 85 093 6599 <Arrow />
              </a>
            </div>
            <div>
              <span className="small-label">Find me online</span>
              <a
                href="https://github.com/yosita-rd"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yosita-rd <Arrow />
              </a>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="/yosita_resume.pdf" download>
                Download resume{' '}
                <ArrowDown data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="site-footer site-shell">
        <p>© {new Date().getFullYear()} Yosita Rodwattanakul</p>
        <a href="#about">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
