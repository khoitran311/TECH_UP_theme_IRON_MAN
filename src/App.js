import React from "react";
import LinkItem from "./components/LinkItem";

export const App = ({
    user,
    themeConfigs,
    icons: LinkStarIcons,
    onClickLink
}) => {
    const userLinks = user.user_links;

    return (
        <React.Fragment>
            <div className="linkstar">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full">
                        <img
                            src={
                                themeConfigs.cover ||
                                user.cover_img_absolute ||
                                user.avatar_img_absolute ||
                                themeConfigs.default_avatar
                            }
                            className="object-cover object-center w-full h-full"
                            alt={user.username}
                        />
                    </div>
                    <div className="relative grid min-h-full backdrop-blur-2xl bg-white/30">
                        <div className="relative z-10 flex flex-col h-full text-stone-700">
                            <div>
                                {user.cover_img_absolute ? (
                                    <div className="w-full aspect-[5/2] sm:aspect-[4] xl:aspect-[5/1] px-3 mx-auto sm:px-6 lg:px-8 xl:px-36">
                                        <img
                                            src={user.cover_img_absolute}
                                            alt={`${user.username}'s cover`}
                                            className="object-cover object-center w-full h-full bg-gray-100 shadow-md rounded-b-2xl shadow-black/10"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-24 md:h-32"></div>
                                )}
                            </div>
                            <div className="w-full max-w-screen-sm mx-auto mb-6 -mt-14 md:-mt-[3.75rem]">
                                <div className="mt-2.5 sm:mt-1 rounded-3xl md:mt-0">
                                    <div
                                        className={`w-20 h-20 sm:w-24 md:w-28 sm:h-24 md:h-28 mx-auto overflow-hidden border-4 shadow-md border-white rounded-full bg-white ${
                                            !user.avatar_img_absolute && "p-4"
                                        }`}
                                    >
                                        <img
                                            src={
                                                user.avatar_img_absolute ||
                                                themeConfigs.default_avatar
                                            }
                                            className="object-cover object-center w-full h-full"
                                            alt={user.username}
                                        />
                                    </div>
                                    <div className="mt-6 font-semibold text-center text-black md:text-lg">
                                        <div>
                                            {user.first_name} {user.last_name}
                                        </div>
                                        <div className="mt-1">
                                            @{user.username}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 px-4 mt-10 md:mt-16 md:px-0">
                                    {userLinks.map(link => (
                                        <LinkItem
                                            key={link.uuid}
                                            link={link}
                                            icons={LinkStarIcons}
                                            onClickLink={onClickLink}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mx-auto mt-auto">
                                <div className="flex flex-col items-center w-full pb-10 mx-auto mt-6">
                                    <div className="mb-1 text-sm font-semibold">
                                        Powered By
                                    </div>
                                    <img
                                        src={themeConfigs.linkstar_logo}
                                        alt="LinkStar"
                                        className="h-10"
                                    />
                                    <div className="mt-1 text-sm font-semibold">
                                        © LinkStar. All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
