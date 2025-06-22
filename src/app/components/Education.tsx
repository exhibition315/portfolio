import PropTypes from "prop-types";
import { EducationItem } from "@/types/resume";
import AnimatedSection from "@components/AnimatedSection";

const Education = ({ education = [] }: { education: EducationItem[] }) => {
  const { school, degree, desc } = education[0];

  return (
    <AnimatedSection>
      <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
      <div className="space-y-2">
        <div>
          <div className="font-semibold">{school}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">
            {degree}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{desc}</div>
        </div>
      </div>
    </AnimatedSection>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
