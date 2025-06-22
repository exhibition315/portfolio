import PropTypes from "prop-types";
import AnimatedSection from "@components/AnimatedSection";

const About = ({ about = "" }) => {
  return (
    <AnimatedSection className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        ABOUT
      </h2>
      <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
        {about}
      </p>
    </AnimatedSection>
  );
};

About.propTypes = {
  about: PropTypes.string.isRequired,
};

export default About;
