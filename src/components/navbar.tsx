"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b pb-2">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-neutral-600 font-medium hover:text-neutral-700"
        >
          Mikko Jokipuu
        </Link>
        <div className="gap-x-2 inline-flex">
          <a
            href="https://github.com/mikkoaukusti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 text-neutral-500 hover:text-neutral-600" />
          </a>
          <a
            href="https://linkedin.com/in/mikko-jokipuu-a22b27264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 text-neutral-500 hover:text-neutral-600" />
          </a>
        </div>
      </nav>
    </header>
  );
}
