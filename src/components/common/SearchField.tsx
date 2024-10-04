import React, { useState } from "react";
import searchIcon from "./Icons/svg/search.svg";

export type SearchFieldProps = {
  /**action returns value in its parameter so that you can easily implement your custom logic accordingly*/
  action: (value: string) => void;
};

export const SearchField = ({ action }: SearchFieldProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="relative flex w-[200px] flex-wrap items-stretch">
      <input
        type="text"
        placeholder="Search"
        className="relative w-[200px] h-[34px] border border-[#D9D9D9] rounded-sm bg-[#F8F8F8] placeholder-style focus:outline-none px-3 py-3 text-xs"
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="z-9 h-full leading-snug absolute text-center bg-transparent rounded items-center justify-center right-0 pr-2 py-2 cursor-pointer">
        <img src={searchIcon} alt="search" onClick={() => action(value)} />
      </span>
    </div>
  );
};
