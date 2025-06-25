import { buttonClass } from "@components/style";

const DownloadResume = () => {
  return (
    <a
      href="/Alvin-Resume.pdf"
      download="Alvin-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      <span>履歷下載</span>
    </a>
  );
};

export default DownloadResume;
