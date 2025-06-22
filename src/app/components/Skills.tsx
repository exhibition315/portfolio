import PropTypes from "prop-types";
import { SkillItem } from "@/types/resume";
import AnimatedSection from "@components/AnimatedSection";

const Skills = ({ skills = [] }: { skills: SkillItem[] }) => {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
      <div className="space-y-4">
        {skills.map(
          ({ category, list }: { category: string; list: string[] }) => (
            <div key={category}>
              <div className="font-semibold mb-2">{category}</div>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </AnimatedSection>
  );
};

Skills.PropTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Skills;
