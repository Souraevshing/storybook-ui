import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "../../styles/dateRangeStyle.scss"; //main style file
import "../../styles/dateRange.scss"; //theme css file
import "../../styles/components/DateCalendar.scss";
import { addDays, format } from "date-fns";
import { TextField } from "@mui/material";
import { ArrowIcon } from "./Icons/ArrowIcon";

export interface DateRangeProps {
  /**callback function for cancel button */
  onCancel: () => void;
  /**callback function for submit button  */
  onSubmit: () => void;
  /**setRange used for setting range(startDate and endDate).pass this format only `MM/dd/yyyy` `setRange={startDate:"12/6/22",endDate:"12/25/22"}` */
  SetRange?: { startDate: string; endDate: string };
  /**getRange function for getting startDate and endDate `getRange={(dates)=>{console.log(dates)}}`*/
  getRange: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
}

export const DateRangeCalendar = ({
  onCancel,
  onSubmit,
  SetRange,
  getRange,
}: DateRangeProps) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [state, setState] = useState<
    [{ startDate?: Date; endDate?: Date; key?: string }]
  >([
    {
      startDate: SetRange ? new Date(SetRange.startDate) : new Date(),
      endDate: SetRange ? new Date(SetRange.endDate) : addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setStartDate(format(state[0].startDate!, "dd/MM/yyyy"));
    setEndDate(format(state[0].endDate!, "dd/MM/yyyy"));
  }, [state]);

  useEffect(() => {
    getRange({ startDate, endDate });
  }, [startDate, endDate, getRange]);

  useEffect(() => {
    setState([
      {
        startDate: SetRange ? new Date(SetRange.startDate) : new Date(),
        endDate: SetRange ? new Date(SetRange.endDate) : addDays(new Date(), 7),
        key: "selection",
      },
    ]);
  }, [SetRange]);
  return (
    <div className="calendarWrap">
      <DateRangePicker
        ranges={state}
        onChange={(item: any) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        direction={"horizontal"}
        rangeColors={["#1A577E"]}
        //showSelectionPreview={true}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ width: "250px" }}></div>
        <div style={{ display: "flex" }}>
          <TextField
            sx={{
              width: 126,
              mr: 1,
              "& .MuiInputBase-root": {
                height: 40,
                fontFamily: "Sofia Pro",
                border: "1px solid #D9D9D9",
                borderRadius: "8px",
                background: "#F8F7FA",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            value={startDate}
          />{" "}
          <ArrowIcon />
          <TextField
            sx={{
              width: 126,
              ml: 1,
              "& .MuiInputBase-root": {
                height: 40,
                fontFamily: "Sofia Pro",
                border: "1px solid #D9D9D9",
                borderRadius: "8px",
                background: "#F8F7FA",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            value={endDate}
          />
        </div>

        <div
          style={{
            width: "320px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={() => onCancel()}
            style={{
              marginRight: "8px",
              width: "77px",
              height: "40px",
              borderRadius: "8px",
              background: "#F8F7FA",
              fontStyle: "normal",
            }}
            className={"cancel"}
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit()}
            style={{
              width: "77px",
              height: "40px",
              borderRadius: "8px",
              background: "#1A577E",
              color: "white",
              fontStyle: "normal",
            }}
            className={"submit"}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
