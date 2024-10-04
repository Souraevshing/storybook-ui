import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { action } from "@storybook/addon-actions";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { Button } from "../Button";

const dummySearchIcon = () => {
    return (
        <>
            <SearchIcon />
        </>
    );
};

const dummyNotificationIcon = () => {
    return (
        <>
            <NotificationAddIcon />
        </>
    );
};

const dummyButton = () => {
    return <Button>Calculated Footprint </Button>;
};

// ../../../styles/assets/icons/greenStory.svg
export const dummyNavContents = {
    dummyNavIcon:
        "https://storage.googleapis.com/cms-staging-storage/green_Story_8ad06f34d3/green_Story_8ad06f34d3.svg",
    dummyCustomNavClass: "bg-light-grey px-2 py-3",
    dummyNavHeader: <div>Offset Credit Management</div>,
    dummyActionItems: {
        searchElement: (
            <div
                onClick={() => {
                    action("search element clicked")();
                }}
            >
                {" "}
                {dummySearchIcon()}{" "}
            </div>
        ),
        notificationElement: (
            <div
                className="px-6"
                onClick={() => {
                    action("notification element clicked")();
                }}
            >
                {" "}
                {dummyNotificationIcon()}
            </div>
        ),
        extraButton: (
            <div
                onClick={() => {
                    action("button element clicked")();
                }}
            >
                {" "}
                {dummyButton()}{" "}
            </div>
        ),
    },
    dummyOnMenuSelect: () => { },
    dummyProfileItems: {
        profileCustomClasses:
            "bg-gray text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
        headerLabel: "Header",
        subHeaderLabel: "Header Label",
        userIcon:
            "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png",
        menus: [
            {
                id: 1,
              name: "Settings",
              value: "/settings",
              icon: <></>,
          },
          {
              id: 2,
              name: "Profile",
              value: "/Profile",
              icon: <></>,
          },
          {
              id: 3,
              name: "Logout",
              value: "/Logout",
              icon: <></>,
          },
        ],
    },
};

/* 

Dummy content for customer navbar

*/

const dummyCustomerNotificationIcon = () => {
    return (
        <div
            onClick={() => {
                action("notification element clicked")();
            }}
        >
            <NotificationAddIcon />
        </div>
    );
};

const dummyCustomerExtraElement = () => {
    return (
        <div className="pointer"
            onClick={() => {
                action("extra custom element clicked")();
            }}
        >
            {" "}
            Extra custom Element{" "}
        </div>
    );
};

const dummyCustomerHeader = () => {
    return (
        <>
            <img
                src="https://storage.googleapis.com/cms-staging-storage/green_Story_8ad06f34d3/green_Story_8ad06f34d3.svg"
                alt="nav-header-label-icon"
            />
    </>
    );
};

export const dummyCustomerNavContent = {
    dummyNavIcon:
        "https://storage.googleapis.com/cms-staging-storage/green_Story_8ad06f34d3/green_Story_8ad06f34d3.svg",
    dummyCustomNavClass: "bg-light-grey px-2 py-3",
    dummyNavHeader: dummyCustomerHeader(),
    dummyActionItems: {
        notificationElement: <> {dummyCustomerNotificationIcon()}</>,
        extraElement: <> {dummyCustomerExtraElement()} </>,
    },
    dummyProfileItems: {
        profileCustomClasses:
            "bg-gray text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
        headerLabel: "Header",
        subHeaderLabel: "Header Label",
        userIcon:
            "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png",
        menus: [
            {
                id: 1,
              name: "Settings",
              icon: <></>,
              value: "/settings",
          },
          {
              id: 2,
              name: "Profile",
              icon: <></>,
              value: "/Profile",
          },
          {
              id: 3,
              name: "Logout",
              icon: <></>,
              value: "/Logout",
          },
        ],
    },
};
