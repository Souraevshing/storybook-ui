import React, { useState } from "react";
import "../../styles/submenu.scss";

type sidebarArray = {
  title: string;
  path: string;
};

export interface SidebarSubMenuProps {
  /**used for mapping sidebar labels with path  */
  sidebarData: Array<sidebarArray>;
}

export const SidebarSubMenu = ({ sidebarData }: SidebarSubMenuProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sendValidPath = (navItem: any) => {
    return navItem.path;
  };

  const renderSidebar = () => {
    return (
      <div className="side-bar">
        <div className="bg-base-white secondary-text uppercase m-1 ml-3 p-2 w-2/3 rounded">
          Settings
        </div>

        {(sidebarData && sidebarData.length ? sidebarData : []).map(
          (item, index) => (
            <a
              key={`sidebar-item-link-${item.title.toLowerCase()}`}
              id={`sidebar-item-link-${item.path.toLowerCase()}`}
              onClick={() => setActiveTab(index)}
              href={sendValidPath(item)}
            >
              <div
                className={`flex side-bar-item ${
                  sidebarData.length > index + 1 ? "separator" : ""
                }`}
              >
                <span
                  key={`sidebar-item-a-${item.title.toLowerCase()}`}
                  className={`cursor-pointer ${
                    activeTab === index
                      ? "side-bar-active"
                      : "side-bar-inactive"
                  }`}
                >
                  <span className="mx-3 header-text">{item.title}</span>
                </span>
              </div>
            </a>
          )
        )}
      </div>
    );
  };

  return renderSidebar();
};
