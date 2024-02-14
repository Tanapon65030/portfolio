import { useEffect } from "react";

import { Col, Row, Space, Tooltip } from "antd";
import { GithubOutlined, LoginOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import Experiences4 from "../assets/images/4.jpg";
import Experiences2 from "../assets/images/2.png";
import Experiences3 from "../assets/images/3.png";

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
                <img
                  alt="Patteera's Portfolio Project Image"
                  src={Experiences4}
                />
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
                      It is a regional WIO Terminal microcontroller skills
                      competition. Write code to solve problems efficiently and
                      with as few bugs as possible.
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
                <img
                  alt="Patteera's Portfolio Project Image"
                  src={Experiences2}
                />
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
                <img
                  alt="Patteera's Portfolio Project Image"
                  src={Experiences3}
                />
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
        </Row>
      </Fade>
    </div>
  );
}

export default Experiences;
