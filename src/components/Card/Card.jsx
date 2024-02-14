import { Card } from "antd";

import "./Card.css";

const CardComponent = ({ children, className, title, extra, cover, actions }) => {
    return (
        <Card title={title} extra={extra} cover={cover} actions={actions} className={className}>
            {children}
        </Card>
    );
};

export default CardComponent;
