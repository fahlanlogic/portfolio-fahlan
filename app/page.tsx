import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="relative h-[9999px] bg-black-100 flex mx-auto flex-col overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
