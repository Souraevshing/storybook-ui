import React, {useState} from "react";
import "../../styles/components/breadcrumb.scss";

type BreadCrumProps = {
    tabsList: [string];
    onTabClick: () => void;
    activeTab?: number;
};

export const BreadCrumNav = ({
    tabsList,
    onTabClick,
    activeTab,
  ...props
}: BreadCrumProps) => {
    const [tabIndex, setTabIndex] = useState(activeTab || 0);
  return (
    <ul className="node-list">
        {tabsList.map((tabName: string, idx: number)=> (
        <li className={tabIndex >= idx ? 'active' : ''} onClick={()=> {
            setTabIndex(idx);
            onTabClick();
            }}>
            <p>{tabName}</p>
        </li>
        ))}
    </ul>
  );
};
