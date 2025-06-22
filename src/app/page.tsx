import { fetcher } from "@fetcher";
import type { ResumeData } from "@/types/resume";
import Header from "@components/Header";
import About from "@components/About";
import Skills from "@components/Skills";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Education from "@components/Education";
import Contact from "@components/Contact";

const Home = async () => {
  const data: ResumeData = await fetcher("/api/resume", {
    next: { revalidate: 60 },
  });
  const { about, skills, experience, projects, education } = data;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Header />
      <About about={about} />
      <div className="space-y-8 my-8">
        <Experience experience={experience} />
        <Skills skills={skills} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Projects projects={projects} />
        <Education education={education} />
      </div>
      <Contact />
    </main>
  );
};

export default Home;
