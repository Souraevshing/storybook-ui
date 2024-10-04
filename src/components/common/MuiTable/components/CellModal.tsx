import { RowObj } from "../InfiniteLoading";

interface ValueField {    
    value: string;
    variant?: string;
    className?: string;
}

interface Tooltip {    
    title: string;
}
interface ItemField {      
    id: number;
    item: string;
    icon?: string;  
    color?: "primary" | "secondary";
    onItemClick: (row: RowObj, menuItem: ItemField) => void;
}

export interface Card {
    avatar: {
        src: string;
        isRounded?: boolean;
    };    
    link?: ValueField;
    text?: ValueField;
    subText?: ValueField;
    infoIcon?: Tooltip;
}

export interface Chip {
    text?: ValueField;
    list: Array<string>;
    label?: ValueField;
    infoIcon?: Tooltip;
}

export interface Icon {
    icon: ValueField;
    size?: "inherit" | "small" | "medium" | "large";
    color?: string;
    isMenu?: boolean;
    menuItems?: ItemField[];
}

export interface Image {
    imageList: Array<string>;
}

export interface Label {
    type?: "single" | "multi";
    text?: ValueField;
    subText?: ValueField;
    icon?: ValueField;
    label: ValueField;  
    labelType: "primary" | "secondary"; 
    infoIcon?: Tooltip;
}

export interface Link {
    link: ValueField;
    infoIcon?: Tooltip;
    onLinkClick: (row: RowObj) => void;
}

export interface Text {
    text?: ValueField;
    subText?: ValueField;
    icon?: ValueField;
    infoIcon?: Tooltip;
}