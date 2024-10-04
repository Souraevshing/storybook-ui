import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
interface DoughnutData {
  key: number;
  label: string;
  count: number;
  keyName: string;
}
interface DoughnutProps {
  title: string;
  borderRadius: number;
  background: string;
  data: Array<DoughnutData>;
}

const chartColors = ["#1B587F", "#759EBE", "#C8D8E5"];

export const DoughnutChart = ({
  title,
  borderRadius = 4,
  background = "#F8F8F8",
  data,
  ...props
}: DoughnutProps) => {
  const donutData = {
    data: {
      datasets: [
        {
          data: data?.map((i) => i.count),
          backgroundColor: chartColors,
        },
      ],
    },

    donutOptions: {
      events: [],
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
    },
  };

  const kFormatter = (num: number) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + " k"
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <div
      className="doughnut-container"
      style={{
        backgroundColor: background ? background : "#F8F8F8",
        borderRadius: borderRadius ? borderRadius : 4,
      }}
    >
      {data?.length && data?.length <= 3 ? (
        <>
          <div className="doughnut-content-wrapper">
            <h3 className="doughnut-header">{title}</h3>
            <div className="doughnut-img">
              <Doughnut
                width={128}
                height={128}
                data={donutData.data}
                options={donutData.donutOptions}
                {...props}
              />
              <div className="doughnut-count">
                {kFormatter(
                  donutData.data.datasets[0].data.reduce((a, b) => a + b, 0)
                )}
              </div>
            </div>
          </div>

          <div className="doughnut-legend-wrapper">
            {data?.map(({ key, label, count, keyName }: any, i: number) => (
              <div key={key} className="doughnut-item-container">
                <div className="doughnut-legend-content">
                  <div
                    className="doughnut-mark"
                    style={{ backgroundColor: chartColors[i] }}
                  ></div>
                  <p className="doughnut-legend-text-one">{label}</p>
                </div>
                <p className="doughnut-legend-text-two">
                  {kFormatter(count)} &nbsp; {keyName}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            height: "inherit",
            width: "inherit",
            color: "red",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "inherit",
          }}
        >
          Please load data{data?.length > 3 && ", should not exceed 3 items"} !
        </div>
      )}
    </div>
  );
};
