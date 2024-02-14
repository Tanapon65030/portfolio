import { useEffect } from "react";

import { Col, Row, Space, Tooltip } from "antd";
import { GithubOutlined, LoginOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import portfolioImg from "../assets/images/Resume.png";
import Food from "../assets/images/Food.png";

import { Card, Tag } from "../components";

function Projects() {
  useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <div id="section-projects" className="section-space">
      <Fade bottom distance="10%">
        <h2 className="mb-3 font-xlarge text-uppercase">
          📂 My <span className="color-primary">Projects</span>
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
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              cover={
                <img
                  alt="Tanapon Portfolio Project Image"
                  src={portfolioImg}
                />
              }
              actions={[
                <a
                  href="https://github.com/Tanapon65030/portfolio"
                  target="_blank"
                >
                  <GithubOutlined key="github" />
                </a>,
              ]}
              className="card-project"
            >
              <div className="mb-2">
                <Space size={[0, 8]} wrap>
                  <Tag>React.js</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Ant Design</Tag>
                  <Tag>JavaScript</Tag>
                </Space>
              </div>
              <div>
                <div className="font-title font-bold">Portfolio</div>
                <div className="mt-1 font-small">
                  &nbsp; Web Portfolio React.js is a project in the SELECTED
                  TOPIC IN COMPUTER class. Learn about React.js, Node.js, github
                  desktop.
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              cover={<img alt="Flutter Web Hosting" src={Food} />}
              actions={[
                <Tooltip title="Flutter Web Hosting">
                  <a
                    href="https://food-application-85697.web.app"
                    target="_blank"
                  >
                    <LoginOutlined key="demo-link" />
                  </a>
                </Tooltip>,
              ]}
              className="card-project"
            >
              <div className="mb-2">
                <Space size={[0, 8]} wrap>
                  <Tag>Flutter</Tag>
                  <Tag>Dart</Tag>
                </Space>
              </div>
              <div>
                <div className="font-title font-bold">Food Application</div>
                <div className="mt-1 font-small">
                  &nbsp; MiniProject in Mobile app development course in the classroom There is
                  a menu bar for logging in, displaying products, and ordering.
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default Projects;
