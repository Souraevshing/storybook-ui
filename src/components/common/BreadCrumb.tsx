import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export interface BreadCrumbProps {
  /**bread is an array which contains `label` and `href`.`href` is optional don't pass it if you want to show that label as active */
  bread: [{ label: string; href?: string }];
  /**`fs` used for increaing or decreasing a font.it accepts only number `fs=15`*/
  fs?: number;
}

export const BreadCrumb = ({ bread, fs = 10 }: BreadCrumbProps) => {
  return (
    <div role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            fontSize: fs - 1,
            margin: "4px",
            paddingTop: "5px",
          },
        }}
      >
        {bread.map((key, ind) => (
          <Link
            underline="hover"
            {...(key.href
              ? {
                  color: "black",
                  href: key.href,
                  sx: { fontSize: fs, lineHeight: "12px" },
                }
              : {
                  color: "#1A577E",
                  sx: {
                    fontWeight: "bolder",
                    fontSize: fs,
                    lineHeight: "12px",
                  },
                  underline: "none",
                })}
            key={ind}
          >
            {key.label}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
