import React, { FC, useEffect, useState } from "react";
import { ArrowBackIosNewOutlinedIcons } from "../../..";

export interface IMenuItem {
    title: string;
    icon: string;
    path: string;
    child?:
    | undefined
    | {
        title: string;
        path: string;
        icon: string;
    }[];
}

export type ISidebarProps = {
    sidebarItem: IMenuItem[];
    alignMenus: boolean;
    attachChileBar: boolean;
    showChildIcons: boolean;
    // allowChildSidebarToggle: boolean;
    currentRoute?: string;
    customClasses: {
        sidebar_content: string,
        child_sidebar_content: string
    },
    onMenuSelect: (item: IMenuItem, isChildMenu: boolean) => void;
    theme: | 'blue' | 'default';
}

export interface ISidebar {
    isChildActive: boolean;
}

export interface ISidebarChildItem {
    title: string;
    path: string;
    icon: string;
}

export const CustomSidebar = ({
    sidebarItem,
    currentRoute = '/',
    alignMenus,
    onMenuSelect,
    theme,
    attachChileBar,
    showChildIcons,
    customClasses,
    // allowChildSidebarToggle,
    ...props
}: ISidebarProps) => {
    const [isSidebarChildOpen, setSidebarChildOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState<{ parent: string, child: ISidebarChildItem | null }>({ parent: currentRoute, child: null });

    useEffect(() => {
        const selectedPath = sidebarItem.find((item) => {
            return currentRoute === item.path || (item && item.child ? item?.child.find((childMenu) => childMenu.path === currentRoute) : undefined);
        });
        if (selectedPath) {
            isChildBarActive(selectedPath);
            if (selectedPath.child && selectedPath.child.length) {
                const isChildActive = selectedPath.child.find((item) => {
                    return currentRoute === item.path;
                });

                if (isChildActive && isChildActive.path) {
                    setCurrentPath({ parent: selectedPath.path, child: isChildActive })
                } else {
                    setCurrentPath({ parent: selectedPath.path, child: null })
                }
            } else {
                setCurrentPath({ parent: selectedPath.path, child: null })
            }
        }
    }, [sidebarItem, currentRoute])

    const isChildBarActive = (item: IMenuItem) => {
        if (item.child && item.child.length) {
            const isChildOfParent = item.child.find((childPaths) => {
                return (
                    childPaths.path &&
                    childPaths.path.length &&
                    childPaths.path.includes(currentPath.parent) &&
                    currentPath.parent !== "/"
                );
            });
            if (isChildOfParent?.path) {
                setSidebarChildOpen(true);
            } else {
                setSidebarChildOpen(false);
            }
        } else if (item.path === currentPath.parent) {
            setSidebarChildOpen(false);
        } else {
            setSidebarChildOpen(false);
        }
    };

    const childSidebarContent = (isOpen: boolean, item: IMenuItem) => {
        return (
            <>
                {isOpen && (
                    <div className={`${alignMenus ? `${attachChileBar ? 'child-full-sub-menu' : 'child-full-sub-menu-20'}` : 'child-sub-menu'}  sub-menu sidebar-theme-active-${theme} pointer p-6`}>
                        <div className="sub-menu-title pt-2">{item.title}</div> <br />
                        {(item && item.child ? item.child : []).map((child, index) => (
                            <div className="pt-10" key={`nav-link-${index}`}>
                                <div
                                    //   to={child.path}
                                    onClick={() => {
                                        setCurrentPath({ parent: item.path, child });
                                        onMenuSelect(child, true);
                                    }}
                                    key={`child-menu-${child.title.toLowerCase()}`}
                                    id={`child-menu-${child.title.toLowerCase()}`}
                                    className={`${currentPath.child?.path === child.path
                                        ? "child-sidebar-active-border"
                                        : ""
                                        } sidebar-item p-0 plain`}
                                >
                                    <div
                                        className={`child-sidebar-labels pointer`}
                                        key={`child-menu-labels-${index}`}
                                    >
                                        {/* <div
                                            className={
                                                currentPath.parent === child.path
                                                    ? "child-sidebar-active"
                                                    : "child-sidebar-inactive"
                                            }
                                        /> */}

                                        {showChildIcons ? <div>
                                            {item.icon ? (
                                                item.icon
                                            ) : (
                                                <div className={`${currentPath.parent === child.path ? 'child-sidebar-active' : 'child-sidebar-inactive'} `}></div>
                                            )}
                                        </div>
                                            : ''}
                                        <div
                                            className="child-menu-label"
                                            key={`child-menu-${child.title.toLowerCase()}-${index}`}
                                        >
                                            {child.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
    };

    const customerSidebarContent = (isOpen: boolean, item: IMenuItem) => {
        return (
            <>
                {isOpen && (
                    <div className={`${alignMenus ? `${attachChileBar ? 'customer-child-full-sub-menu' : 'customer-child-full-sub-menu-20'}` : 'child-sub-menu'}  customer-sub-menu sidebar-theme-active-${theme}`}>
                        <div className="flex">
                        <div className="customer-sub-menu-title pt-2">{item.title.toUpperCase()}</div>
                            {/* <div className="toggle-icon pointer" onClick={() => {
                                // toggle child menu event handler
                            }}>
                                <ArrowBackIosNewOutlinedIcons />
                            </div> */}
                        </div>
                        {(item && item.child ? item.child : []).map((child, index) => (
                            <div key={`nav-link-${index}`}>
                                <div className="pt-10" >
                                    <div
                                        //   to={child.path}
                                        onClick={() => {
                                            setCurrentPath({ parent: item.path, child });
                                            onMenuSelect(child, true);
                                        }}
                                        key={`child-menu-${child.title.toLowerCase()}`}
                                        id={`child-menu-${child.title.toLowerCase()}`}
                                        className={`${currentPath.child?.path === child.path
                                            ? "customer-child-sidebar-active"
                                            : ""
                                            } sidebar-item plain customer-child-sidebar-item  } `}
                                    >
                                        <div
                                            className={`child-sidebar-labels pointer`}
                                            key={`child-menu-labels-${index}`}
                                        >
                                            {showChildIcons ? <div>
                                                {item.icon ? (
                                                    item.icon
                                                ) : (
                                                    <div className={`${currentPath.parent === child.path ? 'child-sidebar-active' : 'child-sidebar-inactive'} `}></div>
                                                )}
                                            </div>
                                                : ''}
                                            <div
                                                className="child-menu-label"
                                                key={`child-menu-${child.title.toLowerCase()}-${index}`}
                                            >
                                                {child.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${(index + 1) !== item.child?.length ? 'customer-child-item-separator mt-2' : ''} `} />
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
    }

    const showSideMenu = (item: IMenuItem, menuIndex: number) => {
        if (item.child && item.child.length) {
            return (
                <div key={`menu-item-${menuIndex}-${item.title.toLowerCase()}`}>
                    <div className={isSidebarChildOpen ? " p-0 open" : ""}>
                        <div
                            key={`child-menu-item-${menuIndex}-${item.title.toLowerCase()}`}
                            id={`child-menu-item-${item.title.toLowerCase()}`}
                            onClick={() => {
                                setCurrentPath({ parent: item.path, child: null });
                                onMenuSelect(item, false);
                                setSidebarChildOpen(!isSidebarChildOpen);
                            }}
                            className={`${currentPath.parent === item.path
                                ? `sidebar-theme-active-${theme} sidebar-theme-active-${theme}-border pointer`
                                : ""
                                } ${alignMenus ? "" : "text-center"} custom-sidebar-item sidebar-theme-${theme} plain sidebar-theme-hover-${theme}  pointer`}
                        >
                            {alignMenus ? (
                                <>
                                    <div className="flex">
                                        <div className="pr-2">
                                            {item.icon ? (
                                                item.icon
                                            ) : (
                                                    <div className={`${currentPath.parent === item.path ? 'sidebar-active' : 'sidebar-inactive'} `}></div>
                                            )}
                                        </div>
                                        <div className="menu-label">{item.title} </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        {item.icon ? (
                                            item.icon
                                        ) : (
                                                    <div className={`${currentPath.parent === item.path ? 'sidebar-active' : 'sidebar-inactive'} `}></div>
                                        )}
                                    </div>
                                        <div className="pt-2 menu-label" >{item.title}</div>
                                </>
                            )}
                        </div>
                        <div className="custom-sidebar-content">
                            {/* Content */}
                            {theme === 'blue' ? customerSidebarContent(isSidebarChildOpen, item) : childSidebarContent(isSidebarChildOpen, item)} 

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    //   to={item.path}
                    key={`menu-item-${menuIndex}-${item.title.toLowerCase()}`}
                    id={`menu-item-${item.title.toLowerCase()}`}
                    onClick={() => {
                        setCurrentPath({ parent: item.path, child: null });
                        isChildBarActive(item);
                        onMenuSelect(item, false);
                    }}
                    className={`${currentPath.parent === item.path
                        ? `sidebar-theme-active-${theme} sidebar-theme-active-${theme}-border pointer`
                        : ""
                        } custom-sidebar-item plain sidebar-theme-${theme} sidebar-theme-hover-${theme} pointer`}
                >
                    {alignMenus ? (
                            <div className="flex">
                                <div className="pr-2">
                                    {item.icon ? (
                                        item.icon
                                    ) : (
                                        <div className={`${currentPath.parent === item.path ? 'sidebar-active' : 'sidebar-inactive'} `}></div>
                                    )}
                                </div>
                            <div className="menu-label">{item.title} </div>
                        </div>
                    ) : (
                            <div key={`one-liner-items-${menuIndex}-`}>
                                <div >
                                {item.icon ? (
                                    item.icon
                                ) : (
                                            <div className={`${currentPath.parent === item.path ? 'sidebar-active' : 'sidebar-inactive'} `}></div>
                                )}
                            </div>
                                <div className="pt-2 menu-label">{item.title}</div>
                            </div>
                    )}
                </div>
            );
        }
    };

    return (
        <>
            {sidebarItem && sidebarItem.length && (
                <div className="custom-sidebar-child-menu">
                    <div className={` ${alignMenus ? 'custom-sidebar-full' : 'custom-sidebar'} custom-sidebar sidebar-theme-${theme}`}>
                        {sidebarItem?.map((item, index) => showSideMenu(item, index))}
                    </div>
                </div>
            )}
        </>
    );
};
