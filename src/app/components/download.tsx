import { buttonClass } from "@components/style";

const DownloadResume = () => {
  return (
    <a
      href="/Alvin-Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      <span>下載 PDF</span>
    </a>
  );
};

export default DownloadResume;
