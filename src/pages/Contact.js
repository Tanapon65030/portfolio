import { useEffect } from "react";

import { Col, Row, message, Tooltip, Typography } from "antd";
import {
    SmileOutlined,
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    GithubOutlined,
    ArrowRightOutlined,
    CopyOutlined,
    LinkOutlined,
} from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Card } from "../components";

function Contact() {
    const { Paragraph } = Typography;
    const [messageApi, contextHolder] = message.useMessage();
    const copied = () => {
        messageApi.open({
            type: "success",
            content: "Copied to clipboard",
        });
    };

    useEffect(() => {
        document.documentElement.scrollTop =
            document.documentElement.clientHeight;
        document.documentElement.scrollLeft =
            document.documentElement.clientWidth;
    }, []);

    return (
        <>
            {contextHolder}
            <div id="section-contact-me" className="section-space">
                <Fade bottom distance="10%">
                    <h2 className="font-xlarge text-uppercase">
                        📭 Contact <span className="color-primary">Me</span>
                    </h2>
                    <Paragraph>
                        <blockquote className="mt-2 mb-3">
                            I'm available for new opportunities. Please feel
                            free to contact me to discuss further{" "}
                            <SmileOutlined />
                        </blockquote>
                    </Paragraph>
                </Fade>
                <Fade bottom distance="10%">
                    <div className="d-flex flex-row flex-column-contact align-items-stretch gap-3">
                        <Card className="card-contact">
                            <div className="mb-2 font-title font-bold">
                                Hire me!
                            </div>
                            <div>
                                <Tooltip title="Copy">
                                    <a
                                        onClick={() => {
                                            copied();
                                            navigator.clipboard.writeText(
                                                "0637437737"
                                            );
                                        }}
                                        className="list-info-link"
                                    >
                                        <PhoneOutlined />
                                        <span className="w-100">
                                            061-3297628
                                        </span>
                                        <CopyOutlined />
                                    </a>
                                </Tooltip>
                                <Tooltip title="Drop a message">
                                    <a
                                        href="mailto:boom.tanapon030@gmail.com"
                                        className="list-info-link"
                                    >
                                        <MailOutlined />
                                        <span className="w-100">
                                            boom.tanapon030@gmail.com
                                        </span>
                                        <ArrowRightOutlined />
                                    </a>
                                </Tooltip>
                            </div>
                        </Card>
                        <Card className="card-contact">
                            <div className="mb-2 font-title font-bold">
                                On the web
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/tanapon-sakulphetaram-1116b02b1/"
                                    target="_blank"
                                    className="list-info-link"
                                >
                                    <LinkedinOutlined />
                                    <span className="w-100">
                                        Tanapon Sakulphetaram
                                    </span>
                                    <LinkOutlined />
                                </a>
                                <a
                                    href="https://github.com/Tanapon65030"
                                    target="_blank"
                                    className="list-info-link"
                                >
                                    <GithubOutlined />
                                    <span className="w-100">@Tanapon65030</span>
                                    <LinkOutlined />
                                </a>
                            </div>
                        </Card>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Contact;
