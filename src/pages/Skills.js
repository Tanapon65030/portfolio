import { Space } from "antd";
import { CodeOutlined, FormatPainterOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Card, Tag } from "../components";

function Skills() {
    return (
        <div id="section-skills" className="section-space">
            <Fade bottom distance="10%">
                <h2 className="mb-3 font-xlarge text-uppercase">
                    💻 My <span className="color-primary">Skills</span>
                </h2>
            </Fade>
            <Fade bottom distance="10%">
                <div>
                    <Card>
                        <div className="mb-4">
                            <div className="mb-3">
                                <CodeOutlined className="font-title" />
                                <span className="ml-1 font-title font-bold">
                                    Technical Skills
                                </span>
                            </div>
                            <div className="mb-3">
                                <Space size={[0, 8]} wrap>
                                    <Tag color="#f50">C++</Tag>
                                    <Tag color="#2db7f5">JAVA</Tag>
                                    <Tag color="#87d068">Javascript</Tag>
                                    <Tag color="#108ee9">HTML/CSS</Tag>
                                    <Tag color="#108ee9">Bootstrap</Tag>
                                    <Tag color="#52c41a">Flutter/Dart</Tag>
                                    <Tag color="#1890ff">React.js</Tag>
                                    <Tag color="#722ed1">Microsoft Azure</Tag>
                                    <Tag color="#faad14">Arduino</Tag>
                                </Space>
                            </div>
                            <div>
                                <div className="mb-2">Version Control</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>Git</Tag>
                                </Space>
                            </div>
                        </div>
                    </Card>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
