import PropTypes from "prop-types";
import { ExperienceItem } from "@/types/resume";
import AnimatedSection from "@components/AnimatedSection";

const Experience = ({ experience = [] }: { experience: ExperienceItem[] }) => {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
      <ol className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 space-y-6">
        {experience.map(
          (
            item: { time: string; title: string; details: string[] },
            index: number
          ) => {
            return (
              <li key={index}>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.time}
                  </span>
                  <span className="font-semibold">{item.title}</span>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                    {item.details.map((detail, detailIndex) => {
                      return <li key={detailIndex}>{detail}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </AnimatedSection>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Experience;
