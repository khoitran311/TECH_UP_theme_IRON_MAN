import PropTypes from "prop-types";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiTwitter, FiYoutube } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RiSoundcloudLine, RiTelegramLine } from "react-icons/ri";

const LinkStarIcons = props => {
    const icons = {
        facebook: <FiFacebook />,
        youtube: <FiYoutube />,
        gmail: <FiMail />,
        twitter: <FiTwitter />,
        instagram: <FiInstagram />,
        soundcloud: <RiSoundcloudLine />,
        linkedin: <FiLinkedin />,
        whatsapp: <AiOutlineWhatsApp />,
        telegram: <RiTelegramLine />,
        default: <HiOutlineGlobeAlt />
    };

    return React.cloneElement(icons[props?.hostname || "default"], { ...props }, props.children);
};

LinkStarIcons.propTypes = {
    hostname: PropTypes.string,
    children: PropTypes.node
};

export default LinkStarIcons;
