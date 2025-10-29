import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";

const CvButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/amjad-mehmood.pdf"; // path to your static file in /public
    link.download = "Amjad-Resume.pdf"; // the filename to download as
    link.click();
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="Button px-[40px] py-[20px] flex items-center gap-2 transition-all duration-300"
    >
      <span className="ButtonText">Download CV</span>
      <CgSoftwareDownload className="cvButtonIcon" />
    </button>
  );
};

export default CvButton;
