const userData = {
    first_name: "LinkStar",
    last_name: "Demo Theme",
    avatar_img_absolute: Math.random() > 0.5 ? null : "https://picsum.photos/480/480", // null || string
    cover_img_absolute: Math.random() > 0.5 ? null : "https://picsum.photos/1920/1080",
    username: "linkstar",
    user_links: [
        {
            uuid: 1,
            link: "https://www.facebook.com/linkstar",
            host: "www.facebook.com",
            host_key: "facebook",
            title: "Follow me on Facebook",
            user_uuid: 1,
            priority: 0,
            is_published: true
        },
        {
            uuid: 2,
            link: "https://www.twitter.com/linkstar",
            host: "www.twitter.com",
            host_key: "twitter",
            title: "Follow me on Twitter",
            user_uuid: 1,
            priority: 0,
            is_published: false
        },
        {
            uuid: 3,
            link: "https://www.instagram.com/linkstar",
            host: "www.instagram.com",
            host_key: "instagram",
            title: "Follow me on Instagram",
            user_uuid: 1,
            priority: 0,
            is_published: false
        }
    ]
};

export default userData;
