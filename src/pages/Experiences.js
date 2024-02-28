import { useEffect } from "react";

import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";

import Experiences2 from "../assets/images/2.png";
import Experiences3 from "../assets/images/3.png";
import Experiences4 from "../assets/images/4.jpg";
import Experiences5 from "../assets/images/5.png";
import Experiences6 from "../assets/images/6.png";
import Experiences7 from "../assets/images/7.png";
import Experiences8 from "../assets/images/8.png";
import Experiences9 from "../assets/images/9.png";
import Experiences10 from "../assets/images/10.png";

import { Card, Tag } from "../components";

function Experiences() {
  useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <div id="section-experiences" className="section-space">
      <Fade bottom distance="10%">
        <h2 className="mb-3 font-xlarge text-uppercase">
          💼 My <span className="color-primary">Experiences</span>
        </h2>
      </Fade>
      <Fade bottom distance="10%">
        <Row
          gutter={[
            {
              xs: 16,
              sm: 16,
              md: 16,
              lg: 24,
            },
            {
              xs: 16,
              sm: 16,
              md: 16,
              lg: 24,
            },
          ]}
          wrap
        >
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences4} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2021</div>
                <div className="font-large font-bold">
                  National Vocational Skills Competition
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      It is a regional WIO Terminal microcontroller skill.
                      Competition. Write code to connect to IoT and various
                      sensors. with maximum efficiency and with minimal defects.
                    </li>
                    <li>Microcontroller Theory Exam and C Language Exam.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences2} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2020</div>
                <div className="font-large font-bold">
                  Regional Vocational Skills Competition
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      It is a regional WIO Terminal microcontroller skills
                      competition. Write code to solve problems efficiently and
                      with minimal defects.
                    </li>
                    <li>Microcontroller Theory Exam and C Language Exam.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences3} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2019</div>
                <div className="font-large font-bold">
                  Regional Vocational Skills Competition
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      It is a regional level M5stack microcontroller skills
                      competition. Write code to solve problems efficiently and
                      with minimal defects.
                    </li>
                    <li>Microcontroller Theory Exam and C Language Exam.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences8} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2019</div>
                <div className="font-large font-bold">
                  Inventions of the new generation, Vocational education
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      Design a circuit to connect to the pt100 sensor and write
                      a code to control the machine to notify according to the
                      temperature level.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences5} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2019</div>
                <div className="font-large font-bold">ABU ROBOCON 2019</div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      Design and assemble the structure of the Abu robot and
                      write code to control the operation of the drive part.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences6} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2019</div>
                <div className="font-large font-bold">Sumo Robot</div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>Design circuits and build robots</li>
                    <li>
                      Write a control program that receives the values of 7
                      sensors and controls the operation of the wheels.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences7} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2018</div>
                <div className="font-large font-bold">Line Follower Robot</div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>Design circuits and build robots</li>
                    <li>
                      Write a control program that receives the values of 4
                      sensors to find the error values. By controlling the
                      operation of the wheels with PID.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img alt="Tanapon Portfolio Project Image" src={Experiences9} />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2018</div>
                <div className="font-large font-bold">
                  Self-Balancing Robot Using Gyro Sensor
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>Design circuits and build robots</li>
                    <li>
                      Write a control program that receives the gy-521 sensor
                      values to find the error values. By controlling the
                      operation of the wheels with PID.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              cover={
                <img
                  alt="Tanapon Portfolio Project Image"
                  src={Experiences10}
                />
              }
              className="card-project"
            >
              <div>
                <div className="font-small">2023</div>
                <div className="font-large font-bold">
                  3D Printer (Voron 2.4)
                </div>
                <br />
                <div
                  style={{
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                ></div>
                <div className="mb-3">
                  <div className="mb-2 font-bold">Responsibilities</div>
                  <ul>
                    <li>
                      Install the program to connect to the Raspberry Pi and
                      control the printer through the website.
                    </li>
                    <li>Assemble the printer and fine-tune it to find the best settings.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default Experiences;
