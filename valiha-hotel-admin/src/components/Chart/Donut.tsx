import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Standard", "Deluxe Twin", "Deluxe Double", "Chambre Triple", "Chambre Familiale"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
const data = {
  series: [44, 55, 13, 43, 22],
};

export const Donut = () => {
  return (
    <ReactApexChart
      options={options}
      series={data.series}
      type="pie"
      width={380}
    />
  );
};
