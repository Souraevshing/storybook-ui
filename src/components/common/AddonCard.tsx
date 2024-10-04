import React, { useState } from "react";
import "../../styles/components/addoncard.scss";
// import Checkbox from './Checkbox'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Addonprops = {
  heading: string;
  description: string;
  width?: string;
  onChange: (option: any) => void;
  operation_controls?: boolean;
  id: any;
  maximum?: {
    value: number;
    description: string;
  };
  max?: boolean;
  numberofaddons?: number;
  selected?: boolean;
  price: number;
};

/**
 * AddonCard component for user interaction
 */
export const AddonCard = ({
  heading = "Stores",
  description = "50 USD/month",
  width = "396px",
  onChange,
  operation_controls = false,
  id = 1213435325,
  maximum = {
    value: 5,
    description: "Maximum users",
  },
  max = true,
  numberofaddons = 5,
  selected = true,
  price = 13245436,
  ...props
}: Addonprops) => {
  const [state, newstate] = useState<number>(0);

  const increment = () => {
    if (max) {
      if (state >= 0 && state < 5) {
        newstate(state + 1);
        onChange({
          heading,
          description,
          state: state + 1,
          id,
          price,
        });

        console.log({
          heading,
          description,
          state: state + 1,
          id,
          price,
        });
      }
    } else {
      if (state >= 0) {
        newstate(state + 1);
        onChange({
          heading,
          description,
          state: state + 1,
          id,
          price,
        });

        console.log({
          heading,
          description,
          state: state + 1,
          id,
          price,
        });
      }
    }
  };

  const decrement = () => {
    if (state > 0) {
      newstate(state - 1);
      onChange({
        heading,
        description,
        state: state - 1,
        id,
        price,
      });

      console.log({
        heading,
        description,
        state: state - 1,
        id,
        price,
      });
    }
  };

  const changed = (e: any) => {
    if (e.target.checked) {
      onChange({
        heading,
        description,
        state,
        toggle: true,
        id,
        price,
      });

      console.log({
        heading,
        description,
        state,
        toggle: true,
        id,
        price,
      });
    } else if (!e.target.checked) {
      onChange({
        heading,
        description,
        state,
        toggle: false,
        id,
        price,
      });

      console.log({
        heading,
        description,
        state,
        toggle: false,
        id,
        price,
      });
    }
  };

  return (
    <div className="addoncard" style={{ width: `${width}` }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <input
          type="checkbox"
          name="addoncard"
          style={{ height: 30 }}
          onChange={changed}
        />
        <span style={{ marginTop: 2, paddingLeft: 10, height: 50 }}>
          <div style={{ fontWeight: "bold", margin: 0, padding: 0 }}>
            {heading}
          </div>
          <span className="text-xs">{description}</span>
        </span>
      </div>

      <div>
        {operation_controls ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <button
                onClick={decrement}
                style={{
                  background: "#F0F0F0",
                  borderRadius: "50%",
                  border: "1px solid #DFDFDF",
                  padding: "0px 1px",
                }}
              >
                <RemoveIcon />
              </button>
              <input
                type="text"
                style={{
                  width: "49px",
                  height: "26px",
                  textAlign: "center",
                  borderRadius: "2px",
                  border: "1px solid #DFDFDF",
                  margin: "0 5px",
                }}
                value={state}
                onChange={changed}
              />
              <button
                onClick={increment}
                style={{
                  background: "#F0F0F0",
                  borderRadius: "50%",
                  border: "1px solid #DFDFDF",
                  padding: "0px 1px",
                }}
              >
                <AddIcon />
              </button>
            </div>
            {max ? (
              <span className="text-xs text-[#999999] italic">
                {`${maximum.description} ${maximum.value}`}
              </span>
            ) : null}
          </div>
        ) : (
          <div>
            {selected ? (
              <small
                style={{
                  background: "#189B77",
                  padding: "5px 9px",
                  borderRadius: "50%",
                  color: "#fff",
                }}
              >
                {numberofaddons}
              </small>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
