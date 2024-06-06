import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";

const CvButton = () => {
  return (
    <button
      type="submit"
      className={`Button px-[40px] py-[20px] flex items-center gap-2 transition-all duration-300`}
    >
      <span className="ButtonText">Download CV</span>
      <CgSoftwareDownload className="cvButtonIcon" />
    </button>
  );
};

export default CvButton;
