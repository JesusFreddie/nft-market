import { TimerModule } from "@/modules/TimerModule";
import style from "./timer.module.scss";
import { useEffect, useRef } from "react";

const Timer = () => {
  const housr = useRef(null);
  const minutes = useRef(null);
  const seconds = useRef(null);

  useEffect(() => {
    const timer = new TimerModule(
      housr.current,
      minutes.current,
      seconds.current
    );
  }, []);

  return (
    <div className={style.timer}>
      <p className={style.action}>Auction ends in:</p>
      <div className={style.content}>
        <p className={style.time}>
          <span ref={housr}></span> <span className={style.measure}>Hours</span>{" "}
        </p>
        <span className={style.time}>:</span>
        <p className={style.time}>
          <span ref={minutes}></span>{" "}
          <span className={style.measure}>Minutes</span>{" "}
        </p>
        <span className={style.time}>:</span>
        <p className={style.time}>
          <span ref={seconds}></span>{" "}
          <span className={style.measure}>Seconds</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Timer;
