import PropTypes from "prop-types";
import React from "react";
import { FiFacebook, FiMail, FiYoutube } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const LinkStarIcons = ({ children, ...anotherProps }) => {
    const icons = {
        facebook: <FiFacebook />,
        youtube: <FiYoutube />,
        gmail: <FiMail />,
        default: <HiOutlineGlobeAlt />
    };

    return React.cloneElement(icons["default"], { ...anotherProps }, children);
};

LinkStarIcons.propTypes = {
    hostname: PropTypes.string,
    children: PropTypes.node
};

export default LinkStarIcons;
