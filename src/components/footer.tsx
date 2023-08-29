import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="border-t pt-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-neutral-500 font-medium dark:text-neutral-600">
          Built with Next.js
        </span>
        <ThemeToggle />
      </div>
    </footer>
  );
}
