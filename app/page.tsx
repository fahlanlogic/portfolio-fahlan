import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { DotBackgroundDemo } from "@/components/ui/DotBackground";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="relative h-[9999px] bg-black-100 flex mx-auto flex-col overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/", icon: <FaHome /> },
            { name: "Contact", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
