import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects, pinnedFirst } from '../../public/data/project';

export default function ProjectShowcase() {
  return (
    <div className="project-grid">
      {pinnedFirst(projects).map((project) => (
        <Card
          key={project.title}
          className="flex h-full flex-col overflow-hidden"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              width={1000}
              height={600}
              sizes="(max-width: 760px) 100vw, 45vw"
              className="project-screenshot"
            />
          )}
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="small-label">
                {project.date} · {project.org}
              </p>
              {project.pinned && <Badge variant="secondary">Pinned</Badge>}
            </div>
            <CardTitle>
              <h3>{project.title}</h3>
            </CardTitle>
            <CardDescription>{project.desc}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="mb-2 text-sm font-medium">My contribution</p>
            <ul className="project-contribution">
              {project.keyResponsibilities.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-wrap gap-2">
            {Array.from(
              new Set([...project.tools.split(', '), ...project.tags]),
            ).map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
            {project.link && (
              <Button asChild variant="link">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project{' '}
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
