import PropTypes from "prop-types";
import { ProjectItem } from "@/types/resume";
import AnimatedSection from "@components/AnimatedSection";

const Projects = ({ projects = [] }: { projects: ProjectItem[] }) => {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
      <div className="grid gap-4">
        {projects.map(({ name, desc, demo, code }) => (
          <div
            key={name}
            className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800"
          >
            <div className="font-semibold mb-1">{name}</div>
            <div className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
              {desc}
            </div>
            <div className="flex gap-2">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold hover:underline"
                >
                  Demo
                </a>
              )}
              {code && code !== "#" && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:underline"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      demo: PropTypes.string,
      code: PropTypes.string,
    })
  ).isRequired,
};

export default Projects;
