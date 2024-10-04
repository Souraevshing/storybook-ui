import React, { useState } from "react";
import "../../styles/components/card.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type Cardprops = {
    onChange: (option: any) => void;
    width?: string,
    height?: string,
    headtext?: string,
    price: number,
    id: any
};

export const Cards = ({
    onChange,
    width = "323px",
    height = "auto",
    headtext = "BASIC",
    price = 250,
    id
}: Cardprops) => {

    const [state, newstate] = useState({
        headtext,
        price,
        salesunit: "",
        id
    })

    const capture = (e: any) => {

        const name = e.target.name;
        const value = e.target.value;

        newstate((old) => {
            return {
                ...old,
                [name]: value,
            }
        })
    }


    return (
        <Card sx={{ textAlign: "center", width: `${width}`, height: `${height}`, background: '#FFFFFF', border: "2px solid #D9D9D9", borderRadius: '6px', boxShadow: "none", paddingBottom: "14px" }}>
            <CardContent>

                <span className="heading">{headtext}</span>

                <div className="middlebox">
                    <div className="radios">
                        <span style={{ fontStyle: "normal", fontWeight: 400, fontSize: "12px", lineHeight: "18px" }}>Sales unit</span>
                        <input type="radio" value={500} name="salesunit" onChange={capture} />500
                        <input type="radio" value={600} name="salesunit" onChange={capture} />600
                    </div>

                    <div className="pricetag" style={{ fontSize: "37px", lineHeight: '18px', margin: "40px 0" }}>${price}</div>

                    <div className="smalltext">Overage fee/unit sold <span style={{ color: "#000" }}>$0.25</span></div>
                </div>
            </CardContent>
            <span>
                <button className="button" onClick={() => {
                    if (state.salesunit == "") {
                        console.log("please select any value")
                    } else {
                        onChange(state)
                    }

                }}>Select</button>
            </span>
        </Card>
    );
}
