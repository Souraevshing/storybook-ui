import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

type Tabs = {
  /** use for setting label */
  label: string;
  /**use for setting path */
  path: string;
  /**use for setting tab as active */
  active: boolean;
};

export type TabViewProps = {
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
export const TabView = ({
  tabs,
  getTab,
  width = 450,
  ...props
}: TabViewProps) => {
  const [state, setState] = useState<any>([]);

  // fetch tabs data from parent component
  useEffect(() => {
    setState(tabs);
  }, [tabs]);

  const changeTab = (tab: Tabs) => {
    const index: any = state?.findIndex((t: any) => t.label === tab.label);
    const newState: Array<Tabs> = [...state];
    newState.map((item) => {
      item.active = false;
      return item;
    });
    newState[index].active = true;
    setState(newState);
    getTab(tab);
  };

  return (
    <div className="grid-col-2 my-4" style={{ width }}>
      <Tab.Group>
        <Tab.List className="flex p-2">
          {state &&
            state.map((tab: Tabs) => (
              <Tab
                key={tab.label}
                className="w-1/2 py-2.5 text-xs  text-center font-bold outline-none"
                onClick={() => changeTab(tab)}
                {...props}
              >
                <>
                  {tab.label}
                  <div
                    className={`h-[2px] w-full mt-[6px]   ${
                      tab.active ? "bg-[#1A577E] rounded-sm" : "bg-[#C7D7E4]"
                    } `}
                  />
                </>
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-2" />
      </Tab.Group>
    </div>
  );
};
