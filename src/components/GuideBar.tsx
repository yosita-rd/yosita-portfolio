'use client';

import { ArrowDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const sections = ['Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Guide() {
  return (
    <header className="site-header">
      <nav className="site-shell nav-inner" aria-label="Main navigation">
        <a
          href="#about"
          className="wordmark"
          aria-label="Yosita, back to introduction"
        >
          yosita<span>.</span>
        </a>
        <div className="nav-links">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`}>
              {section}
            </a>
          ))}
          <Button asChild variant="outline" size="sm">
            <a href="/yosita_resume.pdf" download>
              Resume <ArrowDown data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="mobile-navigation">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Open navigation">
                Menu <Menu data-icon="inline-end" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8">
              <SheetHeader>
                <SheetTitle>Explore my portfolio</SheetTitle>
                <SheetDescription>
                  Experience, projects, and the person behind the code.
                </SheetDescription>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-3"
              >
                {sections.map((section) => (
                  <SheetClose asChild key={section}>
                    <Button asChild variant="ghost" className="justify-start">
                      <a href={`#${section.toLowerCase()}`}>{section}</a>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild variant="outline">
                  <a href="/yosita_resume.pdf" download>
                    Download resume{' '}
                    <ArrowDown data-icon="inline-end" aria-hidden="true" />
                  </a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
