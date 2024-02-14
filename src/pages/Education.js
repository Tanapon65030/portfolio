import React from "react";
import Fade from "react-reveal/Fade";

import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

import kmutnbLogo from "../assets/images/logo_kmutnb.png";
import stcLogo from "../assets/images/logo_stc.png";
import Resume from "../assets/images/Resume.pdf";
import Transcript from "../assets/images/Transcript.pdf";

function Education() {
  const ResumeFileDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Resume;
    downloadLink.download = "Resume.pdf";
    downloadLink.click();
  };

  const TranscriptFileDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Transcript;
    downloadLink.download = "Transcript.pdf";
    downloadLink.click();
  };

  return (
    <div id="section-education" className="section-space">
      <Fade bottom distance="10%">
        <h2 className="mb-3 font-xlarge text-uppercase">🎓 Education</h2>
        <div className="d-flex">
          <div className="mr-4 mr-xs-3">
            <img
              className="logo-cmu"
              src={kmutnbLogo}
              alt="Chiang Mai University Logo"
            />
          </div>
          <div>
            <p className="mb-1 font-large font-bold">
              KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (KMUTNB)
            </p>
            <p>Electronic Engineering Technology (Computer)</p>
            <p className="font-small">2022-Present</p>
            <p>GPAX: 3.79</p>
          </div>
        </div>
        <br />
        <div className="d-flex">
          <div className="mr-4 mr-xs-3">
            <img
              className="logo-cmu"
              src={stcLogo}
              alt="Chiang Mai University Logo"
            />
          </div>
          <div>
            <p className="mb-1 font-large font-bold">
              SUPHANBURI TECHNICAL COLLEGE (STC)
            </p>
            <p>Vocational Certificate in lndustrial Electronics</p>
            <p className="font-small">2017-2020</p>
            <p>Diploma in lndustrial Electronics</p>
            <p className="font-small">2020-2022</p>
          </div>
        </div>
      </Fade>
      <br />
      <br />
      <div className="d-flex">
        <Button
          type="primary"
          shape="round"
          icon={<ArrowDownOutlined />}
          onClick={ResumeFileDownload}
          className="mr-3"
        >
          Download Resume
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          type="primary"
          shape="round"
          icon={<ArrowDownOutlined />}
          onClick={TranscriptFileDownload}
        >
          Download Transcript
        </Button>
      </div>
    </div>
  );
}

export default Education;
