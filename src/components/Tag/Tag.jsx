import { Tag } from "antd";

import "./Tag.css";

import tagColor from "../../utils/tag-color";

const TagComponent = ({ bordered = false, color, children, className }) => {
    return (
        <Tag
            bordered={bordered}
            color={tagColor(children, color)}
            className={className}
        >
            {children}
        </Tag>
    );
};

export default TagComponent;
