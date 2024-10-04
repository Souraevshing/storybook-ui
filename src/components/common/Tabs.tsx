import React, { ReactHTMLElement, useState,useEffect } from "react";
import "../../styles/components/tabs.scss";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


type Tabs={
label:string,
}

type Tabprops = {
    tab1: any,
    tab2: any,
    tabs:Array<Tabs>,
    //fetch current clicked tab
    getCurrentTab:(tab:Tabs)=>any
};

export const Tabswitch = ({
    tab1 = 'Tab 1',
    tab2 = 'Tab 2',
    tabs,
    getCurrentTab,
    }: Tabprops) => {

    const [value, setValue] = useState("1");
	const [state,setState] = useState<any>([]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        //console.log(value) 1 2 initial value = 1  and then 2 , vice versa
    };
	const tabChange=(tab:Tabs)=>{
		const currentIndex:any=state?.findIndex((t:any)=>t.label===tab.label);
		const updatedState:Array<Tabs>=[...state];
		updatedState.map((items)=>{
		return items;
		});
		setState(updatedState);
		getCurrentTab(tab);
	};
	
	useEffect(()=>{
	setState(tabs);
	},[tabs]);


    return(<>
            <div className="tabswitch">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}  aria-label="lab API tabs example" sx={{ borderBottom: 'none', '& .MuiTabs-indicator': { position: "static" }, '& .MuiButtonBase-root': { fontFamily: 'Sofia Pro', fontWeight: 600, fontSize: '12px', lineHeight: '18px', color: '#A2A2A2', paddingLeft: '34px', paddingRight: '34px' }, '& .MuiButtonBase-root.Mui-selected': { background: '#189B77', borderRadius: '26px', fontStyle: 'normal', fontWeight: 700, fontSize: '12px', lineHeight: '18px', color: '#FFFFFF' } }}>
                            <Tab label="ANNUAL SAVE 10%" value="1" />
                            <Tab label="MONTHLY" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">{tab1}</TabPanel>
                    <TabPanel value="2">{tab2}</TabPanel>
                </TabContext>
            </div>

        </>
    );
}
