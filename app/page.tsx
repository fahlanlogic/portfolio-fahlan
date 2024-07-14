import Hero from "@/components/Hero";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center mx-auto flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
