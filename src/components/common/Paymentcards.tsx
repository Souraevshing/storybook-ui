import React, { useState } from "react";
import "../../styles/components/payment.scss";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type Paymentcardprops = {
    heading: string,
    description: string,
    width?: string,
    onChange: (option: any) => void;
    id?: any,
    selected?: boolean,
    info?: string
};

/**
 * AddonCard component for user interaction
 */
export const Paymentcards = ({
    heading = "Stores",
    description = "50 USD/month",
    width = '325px',
    onChange,
    id = 1213435325,
    selected = true,
    info = "random text",
    ...props
}: Paymentcardprops) => {


    return (
        <label>
            <div className="wrappercard" style={{ width: `${width}` }}>
                <div className="paymentcard">
                    <div className="optionradio">
                        <input type="radio" name="paymethod" id="pay" style={{ height: '25px' }} />
                        <h5 style={{ height: '25px', marginLeft: '10px', fontWeight: 700 }}>Invoice</h5>
                    </div>

                    <Tooltip title={info} sx={{ width: '25px', height: "25px" }}>
                        <IconButton>
                            <InfoOutlinedIcon sx={{ width: '16px', height: "16px" }} />
                        </IconButton>
                    </Tooltip>
                </div>

                <div style={{padding: '10px 20px'}}>
                    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5 gap-x-4 lg:gap-x-5">
                        <div className="items-center justify-center payimages" style={{margin: '0 5px'}}><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-visa-logo-high-quality-png-latest.png" /></div>
                        <div className="items-center justify-center payimages" style={{margin: '0 5px'}}>1</div>
                        <div className="items-center justify-center payimages" style={{margin: '0 5px'}}>1</div>
                        <div className="items-center justify-center payimages" style={{margin: '0 5px'}}><img src="https://pngimg.com/uploads/paypal/paypal_PNG22.png" /></div>
                    </div>
                </div>


            </div>
        </label>
    );
};
