import { useEffect, useRef } from "react";
import style from "./statistic.module.scss";

import anime from "animejs";

const Statistic = ({ content }) => {
  const { indicator, type } = content;
  const indicatorItem = useRef(null);

  const value = {
    prop1: "0",
  };

  useEffect(() => {
    anime({
      targets: value,
      prop1: indicator,
      easing: "linear",
      round: 1,
      duration: 1500,
      update: function () {
        indicatorItem.current.innerHTML = value.prop1;
      },
    });
  }, []);
	
  return (
    <li className={style.item}>
      <p>
        <span ref={indicatorItem} className={style.indicator}>
          {indicator}
        </span>
        {type}
      </p>
    </li>
  );
};

export default Statistic;
