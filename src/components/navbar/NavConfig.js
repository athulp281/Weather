export const MenuItems = [
    // { id: 1, text: "Home", href: "/" },
    {
        id: 2,
        text: "Asia",
        href: "/asia",
        children: [
            { id: 1, name: "INDIA", href: "/asia/india" },
            { id: 2, name: "CHINA", href: "/asia/china" },
            { id: 3, name: "INDONASIA", href: "/asia/indonasia" },
            { id: 4, name: "JAPAN", href: "/asia/japan" },
            { id: 5, name: "SINGAPORE", href: "/asia/singapore" },
        ],
    },
    {
        id: 3,
        text: "Africa",
        href: "/africa",
        children: [
            { id: 1, name: "SOUTH AFRICA", href: "/africa/south-africa" },
            { id: 2, name: "CHINA", href: "/asia/china" },
            { id: 3, name: "INDONASIA", href: "/asia/indonasia" },
            { id: 4, name: "JAPAN", href: "/asia/japan" },
            { id: 5, name: "SINGAPORE", href: "/asia/singapore" },
        ],
    },
    { id: 4, text: "Europe", href: "/europe" },
    { id: 5, text: "North America", href: "/north-america" },
    { id: 6, text: "South America", href: "/south-smerica" },
];
