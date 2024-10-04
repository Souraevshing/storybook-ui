import React, { useEffect, useRef, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Calendar } from "react-date-range";
import "../../styles/components/DateCalendar.scss";
import { format } from "date-fns";
import { CalendarIcon } from "./Icons/CalendarIcon";

export interface DateProps {
  dateFormat?: "MM/dd/yyyy" | "MM-dd-yyyy" | "dd/MM/yyyy" | "dd-MM-yyyy";
  getDate: (value: string) => void;
  setDate?: string;
  placeholder?: string
}

export const DatePicker = ({
  dateFormat = "MM/dd/yyyy",
  getDate,
  setDate,
  placeholder =  "Select date",
}: DateProps) => {
  //states
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string | Date>(
    setDate ?? new Date()
  );
  const [count, setCount] = useState<number>(0);
  //ref
  const refCalendar = useRef<HTMLInputElement>(null);

  //method
  const handleSelect = (date: Date) => {
    setSelectedDate(format(date, dateFormat));
    setCurrentDate(format(date, "MM/dd/yyyy"));
    setOpen(false);
  };

  const hideOnClickOutside = (e: any) => {
    if (refCalendar.current && !refCalendar.current.contains(e.target)) {
      setOpen(false);
    }
  };

  //useEffect

  useEffect(() => {
    if (setDate) {
      setSelectedDate(format(new Date(setDate), dateFormat));
    }
  }, [setDate]);

  useEffect(() => {
    if (!setDate) {
      if (count >= 1) {
        setSelectedDate(format(new Date(currentDate), dateFormat));
      }
    } else {
      setSelectedDate(format(new Date(currentDate), dateFormat));
    }
    setCount((count) => count + 1);
  }, [dateFormat]);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  useEffect(() => {
    getDate(selectedDate);
  }, [selectedDate, getDate]);

  return (
    <div className="calendarWrap">
      <TextField
        sx={{
          width: 200,
          "& .MuiInputBase-root": {
            height: 40,
            fontFamily: "Sofia Pro",
            border: "1px solid #D9D9D9",
            borderRadius: "4px",
            background: "#FFFFFF",
          },
          // "&:hover fieldset": {
          //   border: "none",
          // },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },

          "& input::placeholder": {
            fontSize: "12px",
          },
        }}
        id="outlined-basic"
        placeholder = {placeholder}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setOpen((preValue) => !preValue)}>
                <CalendarIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={selectedDate}
      />
      <div ref={refCalendar}>
        {open && (
          <Calendar
            date={new Date(currentDate)}
            onChange={handleSelect}
            className="calendarElement"
            color="#1A577E"
          />
        )}
      </div>
    </div>
  );
};
