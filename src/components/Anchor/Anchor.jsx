import { Affix, Anchor, Col, Row } from "antd";

import "./Anchor.css";

import { flexibleHeight } from "../../utils/script";

const AnchorLink = ({ children, items }) => {
    const handleClickScroll = (e, data) => {
        const element = document.getElementById(data.key);

        e.preventDefault();
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="section-resume" className="container mt-36 mt-xs-12 w-100">
            <Row>
                <Col xs={0} sm={0} md={6}>
                    <Affix offsetTop={flexibleHeight() / 4}>
                        <Anchor
                            onClick={handleClickScroll}
                            items={items}
                            affix={false}
                        />
                    </Affix>
                </Col>
                <Col xs={24} sm={24} md={18}>
                    {children}
                </Col>
            </Row>
        </div>
    );
};

export default AnchorLink;
