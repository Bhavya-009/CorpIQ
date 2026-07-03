import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Workflow from "@/components/landing/Workflow";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <UseCases />
    </div>
  );
}