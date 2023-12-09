import { HomePage } from "./pages/HomePage";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Footer } from "./pages/Footer";
import { WorkExperience } from "./pages/WorkExperience";

export default function Home() {
  return (
    <main className="grid items-center ">
      <HomePage />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
