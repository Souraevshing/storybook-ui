import React, { Fragment } from "react";
import { FC } from "react";
import { Menu, Transition } from "@headlessui/react";
import { dummyCustomerNavContent } from "./dummyContent.navbar";

export interface IActionItems {
    notificationElement?: JSX.Element;
    extraElement?: JSX.Element;
}

export interface IMenuItems {
    id: number;
    name: string;
    value: string;
    icon?: JSX.Element;
}

export interface IUserActionItem {
    headerLabel: string;
    profileCustomClasses?: string;
    subHeaderLabel?: string;
    userIcon?: string;
    menus: IMenuItems[] | [];
}

export interface ICustomerCommonNavbar {
    navIcon?: string;
    navHeader?: JSX.Element;
    customNavClass?: string;
    actionItems: IActionItems;
    profileItems: IUserActionItem;
    onMenuSelect(menu: IMenuItems): void;
}

const {
    dummyActionItems,
    dummyCustomNavClass,
    dummyNavHeader,
    dummyNavIcon,
    dummyProfileItems,
} = dummyCustomerNavContent;

export const CustomerNavbarTemplate: FC<ICustomerCommonNavbar> = ({
    navIcon = dummyNavIcon,
    customNavClass = dummyCustomNavClass,
    navHeader = dummyNavHeader,
    actionItems = dummyActionItems,
    onMenuSelect,
    profileItems = dummyProfileItems,
}) => {
    return (
        <>
          <nav
              className={`z-50 relative flex flex-wrap items-center justify-between ${customNavClass}`}
          >
              <div className="common-navbar-container items-center">
                  <div className="logo pr-5">
                      {navIcon && (
                          <img
                              className="nav-logo"
                              width="150"
                              height="150"
                              src={navIcon}
                              alt="nav-icon"
                          />
                      )}
                  </div>
                  {navHeader ? (
                      <div className="header header-label border-l-2 pl-5">
                          {" "}
                          {navHeader}{" "}
                      </div>
                  ) : (
                      <></>
                  )}

                  <div className="action-items">
                      <ul className="flex flex-col lg:flex-row justify-end pr-6 list-none lg:ml-auto">
                          <li className="extra-element pr-3">{actionItems.extraElement}</li>
                          {actionItems.notificationElement ? (
                              <li className="nav-item pl-2 pointer">
                                  {actionItems.notificationElement}
                              </li>
                          ) : (
                              <></>
                          )}
                      </ul>
                  </div>
                  <div className="user-action-items pl-2 text-right">
                      <Menu as="div" className="relative inline-block text-left">
                          <div>
                              <Menu.Button
                                  className={`items-center inline-flex justify-center w-full px-4 py-1 rounded-md border border-gray-300 shadow-sm ${profileItems.profileCustomClasses}`}
                              >
                                  <div>
                                      {navIcon && (
                                          <img
                                              width="40"
                                              height="40"
                                              src={profileItems.userIcon}
                                              alt="dummy-user-icon"
                                          />
                                      )}
                                  </div>
                                  <div className="ml-5 text-left">
                                      <p className="mb-1">
                                          {" "}
                                          {profileItems && profileItems.headerLabel
                                              ? profileItems.headerLabel
                                              : ""}{" "}
                                      </p>
                                      <p className="font-bold">
                                          {" "}
                                          {profileItems && profileItems.subHeaderLabel
                                              ? profileItems.subHeaderLabel
                                              : ""}{" "}
                                      </p>
                                  </div>
                              </Menu.Button>
                          </div>
                          <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                          >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="py-1">
                                      {profileItems.menus.map((menuItem, menuItemIndex) => (
                                          <Menu.Item key={`menu-item-${menuItemIndex}`}>
                                              {({ active }) => (
                                                  <div
                                                      onClick={() => {
                                                          onMenuSelect(menuItem);
                                                      }}
                                    className={`${active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                        } block px-4 py-2 text-sm pointer`}
                                >
                                    {menuItem && menuItem?.icon ? (
                                        <>
                                            <div className="flex">
                                                <div className="pr-2">{menuItem?.icon}</div>
                                                <div>{menuItem.name}</div>
                                            </div>
                                        </>
                                    ) : (
                                        <>{menuItem.name}</>
                                    )}
                                </div>
                            )}
                        </Menu.Item>
                    ))}
                                  </div>
                              </Menu.Items>
                          </Transition>
                      </Menu>
                  </div>
              </div>
          </nav>
      </>
  );
};
