import React from "react";
import { useQuery } from "react-query";

import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {
  console.log(coinId);

  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "차트로딩중..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((v) => parseFloat(v.close)) ?? [],
            },
          ]}
          options={{
            tooltip: { y: { formatter: (value) => `$ ${value.toFixed(3)}` } },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
              colors: ["red"],
            },
            stroke: { curve: "smooth", width: 3 },
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: true },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories:
                data?.map((v) =>
                  new Date(v.time_close * 1000).toLocaleDateString()
                ) ?? [],
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
