import React from "react";
import LinkItemIcon from "./LinkItemIcon";

const LinkItem = ({ link, icons: LinkStarIcons, onClickLink }) => {
    const { title, link: url, host, is_published, host_key } = link;

    const iconColors = {
        facebook: "text-blue-600 border-blue-600",
        youtube: "text-red-600 border-red-600",
        twitter: "text-blue-500 border-blue-500",
        instagram: "text-red-600 border-red-600",
        linkedin: "text-blue-600 border-blue-600",
        soundcloud: "text-red-600 border-red-600",
        telegram: "text-blue-600 border-blue-600",
        default: "text-zinc-800 border-zinc-800"
    };

    const handleClick = e => {
        e.preventDefault();
        onClickLink(link.uuid);
    };

    return (
        <React.Fragment>
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={` flex items-center group rounded-2xl bg-white py-2 px-3 md:py-3 mb-4 md:px-4 last:mb-0 transition-all border-2  hover:bg-gradient-to-r from-[#EDC33D] to-[#6E1616] outline-none hover:scale-105 text-black ${
                    !is_published && "opacity-60"
                } shadow-md`}
                onClick={handleClick}
            >
                <LinkItemIcon isAlwaysShow className={`${iconColors[host_key] || iconColors.default} opacity-70`}>
                    <LinkStarIcons hostname={host_key} size={24} />
                </LinkItemIcon>
                <div className="flex-1 px-4 font-semibold text-center">{title || host}</div>
                <LinkItemIcon invisible isAlwaysShow>
                    <LinkStarIcons hostname={host_key} size={24} />
                </LinkItemIcon>
            </a>
        </React.Fragment>
    );
};

export default LinkItem;
