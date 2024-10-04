import React from 'react';

import { MoreVertIcons } from '../../Icons/MoreVertIcon';
import { InfoOutlinedIcons } from '../../Icons/InfoIcon';
import { CheckCircleOutlineIcons } from '../../Icons/CheckCircleOutlineIcon';
import { AccessTimeIcons } from '../../Icons/AccessTimeIcon';

export const IconType = (icon: any, cell: any = {}) => {
    switch(icon?.value) {
        case "more-vert":
            return <MoreVertIcons size={icon?.size} color={icon?.color}/>          
        case "info":
            return <InfoOutlinedIcons size="inherit" color="inherit"/>
        case "check-circle":
            return <CheckCircleOutlineIcons size="inherit" color="inherit"/>
        case "access-time":
            return <AccessTimeIcons size="inherit" color="inherit"/>
        default:
            break;
    }
}