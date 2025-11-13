import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
export default function Home() {
  return (
   <main className="min-h-screen w-full  mt-30">
<HeroSection />
<Tech/>
<Projects />
   </main>
  );
}
