import Statistic from "@/shared/statistic/Statistic";
import style from "./statisticList.module.scss";

const statisticList = [
  { indicator: "240k+", type: "Total Sale" },
  { indicator: "100k+", type: "Auctions" },
  { indicator: "240k+", type: "Artists" },
];

const StatisticList = () => {
  return (
    <ul className={style.statisticList}>
      {statisticList.map((item, i) => (
        <Statistic key={i} content={...item} />
      ))}
    </ul>
  );
};

export default StatisticList;
