import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

type Tabs = {
  /** use for setting label */
  label: string;
  /**use for setting path */
  path: string;
  /**use for setting tab as active */
  active: boolean;
  /**use for setting tab as disable*/
  disable?: boolean;
};

type TopBarProps = {
  /**tab is an array of object which contains label,path,active and disable */
  tabs: Array<Tabs>;
  /** method to acess current tab value */
  getTab: (tab: Tabs) => any;
  /**width for setting topbar width */
  width?: number;
};

/**
 * Button component for user interaction
 */
export const TopBar = ({
  tabs,
  getTab,
  width = 450,
  ...props
}: TopBarProps) => {
  const [state, setState] = useState<any>([]);

  // fetch tabs data from parent component
  useEffect(() => {
    setState(tabs);
  }, [tabs]);

  const changeTab = (tab: Tabs) => {
    const index: any = state?.findIndex((t: any) => t.label === tab.label);
    const newState: Array<Tabs> = [...state];
    newState.map((item) => {
      item.active = false ;
      return item;
    });
    newState[index].active = true;
    setState(newState);
    getTab(tab);
  };

  return (
    <div className="top-bar grid-col-2 my-4" style={{ width }}>
      <Tab.Group>
        <Tab.List className="flex flex-1 space-x-1 rounded-full border border-light-grey p-2">
          {state &&
            state.map((tab: Tabs) => (
              <Tab
                key={tab.label}
                {...(tab.disable && { disabled: true })}
                className={`w-1/2 rounded-full py-2.5 body-bold-text text-center text-xs
                  ${
                    tab.active
                      ? "bg-black text-white shadow"
                      : tab.disable
                      ? "text-[#B7B7B7]"
                      : "text-black"
                  }
                
              `}
                onClick={() => changeTab(tab)}
                {...props}
              >
                {tab.label}
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-2" />
      </Tab.Group>
    </div>
  );
};
