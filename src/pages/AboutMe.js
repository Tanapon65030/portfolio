import Fade from "react-reveal/Fade";

import myProfile from "../assets/images/my_profile.jpg";

function AboutMe() {
  return (
    <div id="section-about-me" className="section-space pt-3">
      <div className="d-flex flex-row flex-md-column align-items-stretch gap-5 gap-xs-4">
        <div className="d-flex justify-content-center align-items-stretch">
          <Fade bottom distance="10%">
            <img className="my-profile" src={myProfile} alt="My Profile" />
          </Fade>
        </div>
        <div className="py-5 py-md-0">
          <div className="mb-4">
            <Fade bottom distance="10%">
              <p className="mb-1">About Me</p>
              <h2 className="mb-3 font-xlarge text-uppercase">
                😶 Who am <span className="color-primary">I</span>?
              </h2>
              <p className="mb-2 indent-4">
                Hello! I'm Tanapon Sakulphetaram (Boom), who started the journey into the world of {" "}
                <span className="font-bold">Developer</span>. With a passion for coding and creating user-friendly interfaces. So I was keen to put my skills to use in the digital world.
              </p>
              <p className="indent-4">
                I'm interested in{" "}
                <span className="color-primary font-bold">
                  Full-stack Developer,
                  Mobile Developer, IoT.
                </span>{" "}
                Now I'm preparing to find an internship. That will help me
                develop my skills and learn new things
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
