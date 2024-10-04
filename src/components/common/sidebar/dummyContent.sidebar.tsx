import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


export const CONSTANCE = {
    SIDEBAR_THEME: {
        default: 'default',
        blueish: 'blue'
    }
}

export const LCASidebarContent = [
    {
        id: 29,
        title: "Industries",
        path: "/industries",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 30,
        title: "Product Categories",
        path: "/product-categories",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 31,
        title: "Sub-categories",
        path: "/sub-categories",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 32,
        title: "Style",
        path: "/style",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 33,
        title: "Variations",
        path: "/variations",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 52,
        title: "Attribute Type",
        path: "/attribute-type",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 53,
        title: "Attribute",
        path: "/attribute",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 34,
        title: "Raw-materials",
        path: "/raw-materials",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 35,
        title: "Chemical List",
        path: "/chemical-materials",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 36,
        title: "Background flow",
        path: "/background-flow",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 37,
        title: "Geography classification",
        path: "/geography-classification",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 38,
        title: "Impact categories",
        path: "/impact-categories",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 39,
        title: "Reporting standards",
        path: "/reporting-standards",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 40,
        title: "Process technologies",
        path: "/process-technologies",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 41,
        title: "Geographical P.T.",
        path: "/geographical-pt",
        icon: <InfoOutlinedIcon />,
    },
    {
        id: 42,
        title: "LCA Stage",
        path: "/lca-stage",
        icon: <InfoOutlinedIcon />,
    },
];

export const offsetSidebarContent = [
    {
        id: 1,
        title: "Overview",
        link: "/",
        icon: <SearchIcon />,
        sidebar_child_items: [],
    },
    {
        id: 2,
        title: "Impact",
        link: "/impact",
        icon: <SearchIcon />,
        sidebar_child_items: [],
    },
    {
        id: 3,
        title: "Products",
        link: "/products",
        icon: <SearchIcon />,
        sidebar_child_items: [],
    },
    {
        id: 4,
        title: "Network",
        link: "/network",
        icon: <SearchIcon />,
        sidebar_child_items: [],
    },
    {
        id: 5,
        title: "Promos",
        link: "/promos",
        icon: null,
        sidebar_child_items: [],
    },
    {
        id: 6,
        title: "Reports",
        link: "/reports",
        icon: "",
        sidebar_child_items: [],
    },
    {
        id: 7,
        title: "Settings",
        link: "/setting",
        icon: null,
        sidebar_child_items: [
            {
                id: 2,
                title: "My Profile",
                link: "/setting/profile",
                icon: null,
            },
            {
                id: 3,
                title: "Organization",
                link: "/setting/organization",
                icon: null,
            },
            {
                id: 4,
                title: "Billing",
                link: "/setting/billing",
                icon: "",
            },
            {
                id: 5,
                title: "Integration",
                link: "/setting/integration",
                icon: null,
            },
            {
                id: 6,
                title: "Content Library",
                link: "/setting/content-library",
                icon: <SearchIcon />,
            },
            {
                id: 7,
                title: "Team Members",
                link: "/setting/team-members",
                icon: null,
            },
            {
                id: 8,
                title: "Configuration",
                link: "/setting/configuration",
                icon: null,
            },
            {
                id: 9,
                title: "Security",
                link: "/setting/security",
                icon: "",
            },
            {
                id: 10,
                title: "Notification",
                link: "/setting/notification",
                icon: null,
            },
        ],
    },
];
