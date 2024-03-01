import React from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";

import { Button, Modal, Carousel } from "antd";
import { EyeOutlined, DownloadOutlined} from "@ant-design/icons";

import "../App.css";

import kmutnbLogo from "../assets/images/logo_kmutnb.png";
import stcLogo from "../assets/images/logo_stc.png";
import Resume from "../assets/images/Resume.pdf";
import Transcript from "../assets/images/Transcript.pdf";
import resumeImage from "../assets/images/resume-image.png";
import TranscriptImage1 from "../assets/images/transcript_image_1.png";
import TranscriptImage2 from "../assets/images/transcript_image_2.png";

function Education() {
  const ResumeFileDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Resume;
    downloadLink.download = "Resume Tanapon Sakulphetaram.pdf";
    downloadLink.click();
  };

  const TranscriptFileDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Transcript;
    downloadLink.download = "Transcript Tanapon Sakulphetaram.pdf";
    downloadLink.click();
  };

  const [resumeVisible, setResumeVisible] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(false);

  const showResumeModal = () => {
    setResumeVisible(true);
  };

  const showTranscriptModal = () => {
    setTranscriptVisible(true);
  };

  const handleCancel = () => {
    setResumeVisible(false);
    setTranscriptVisible(false);
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
              alt="KMUTNB Logo"
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
              alt="STC Logo"
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
      <div className="centered-buttons">
        <Button
          type="primary"
          shape="round"
          icon={<EyeOutlined />}
          onClick={showResumeModal}
          className="mr-3"
        >
          Resume
        </Button>
        <Modal
          title="Resume Tanapon Sakulphetaram"
          visible={resumeVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <img src={resumeImage} alt="Resume" style={{ width: "100%" }} />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={ResumeFileDownload}
            >
              Download Resume
            </Button>
          </div>
        </Modal>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          type="primary"
          shape="round"
          icon={<EyeOutlined />}
          onClick={showTranscriptModal}
          className="mr-3"
        >
          Transcript
        </Button>
        <Modal
          title="Transcript Tanapon Sakulphetaram"
          visible={transcriptVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Carousel>
            <img src={TranscriptImage1} alt="Transcript" style={{ width: "100%" }} />
            <img src={TranscriptImage2} alt="Transcript" style={{ width: "100%" }} />
          </Carousel>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={TranscriptFileDownload}
            >
              Download Transcript
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Education;
