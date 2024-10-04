import React, { useState } from 'react';
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export interface ILCASidebarItem {
    id: number,
    title: string,
    path: string,
    icon?: JSX.Element
}

export interface IDefaultSelectedMenu {
    id: number;
    default_slug: string;
}

type ILCASidebar = {
    sidebarDetails: ILCASidebarItem[],
    customSidebarClasses?: string,
    currentRoute?: string,
    defaultSelectedMenu?: IDefaultSelectedMenu | null,
    onMenuClick: (menu: ILCASidebarItem) => void;
}

export const LcaSidebar = ({ sidebarDetails, currentRoute = '', onMenuClick, customSidebarClasses, defaultSelectedMenu = null }: ILCASidebar) => {

    const [selectedSidebar, setSelectedSidebar] = useState<IDefaultSelectedMenu | null>(defaultSelectedMenu);


    const sendValidPath = (navItem: ILCASidebarItem) => {
        if (selectedSidebar) {
            // const activePath = data.sidebar_toggle.find((activeSidebar) => {
            //     return activeSidebar.id === selectedSidebar.id;
            // });
            // const path = activePath?.default_slug + navItem.path;
            // return path;
            return navItem.id;
        } else {
            return navItem.id;
        }
    };


    const renderSidebar = (sidebarDetails: ILCASidebarItem[], currentRoute: string) => {
        return <>
            <div className={`lca-sidebar text-black max-h-screen bg-white overflow-auto ${customSidebarClasses}`}>
                {((sidebarDetails && sidebarDetails.length) ? (sidebarDetails) : []).map((item) => (
                    <div
                        key={`sidebar-item-link-${item.title.toLowerCase()}`}
                        id={`sidebar-item-link-${item.path.toLowerCase()}`}
                        onClick={() => {
                            setSelectedSidebar({ default_slug: item.path, id: item.id })
                            onMenuClick(item);
                        }}
                    // href={sendValidPath(item)}
                    >
                        <div key={`sidebar-item-a-${item.title.toLowerCase()}`}>
                            <div
                                // className={`${router.asPath === sendValidPath(item)
                                className={`${selectedSidebar && selectedSidebar.id === sendValidPath(item)
                                    ? "rounded m-2 bg-base-grey"
                                    : "m-2"
                                    } flex p-2.5 hover:bg-base-grey pointer`}
                            >
                                <span className="pl-2 pr-2 self-center">
                                    {item.icon ? item.icon :
                                        // createElement(Icons.getIcon(item.icon), {
                                        //     height: 15,
                                        //     width: 15,
                                        // })}
                                        <AddCircleOutlineRoundedIcon />}
                                </span>
                                <div className='sidebar-item-label'>{item.title} </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    }
    return <>
        <div className='sidebar-container'>
            {renderSidebar(sidebarDetails, currentRoute)}
        </div>
    </>
}