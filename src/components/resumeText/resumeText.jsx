import './resumeText.css'

export default function ResumeText() {
  return (
    <a
      className="resume"
      href={`${process.env.PUBLIC_URL}/Moskoff_Joshua_Resume.pdf`}
      download="Moskoff_Joshua_Resume.pdf"
    >
      Download my resume
    </a>
  );
}