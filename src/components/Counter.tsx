import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex } from "ticeboxes";
import { H1, Span } from "./Typography";
import StopwatchButton from "./StopwatchButton";

dayjs.extend(duration);

interface Props {
  initialStartTime?: Date | string;
  running?: boolean;
}

const Counter: React.FC<Props> = ({
  initialStartTime = new Date(),
  running,
}) => {
  const [ms, setMs] = useState("00");
  const [s, setS] = useState("00");
  const [m, setM] = useState("00");
  const [h, setH] = useState("00");

  const [isRunning, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(initialStartTime);

  const interval = useRef<any>();

  const toStopwatchString = (num: number) => {
    let strNum = num.toString();
    if (strNum.length === 3) return "00";
    if (strNum.length === 1) return "0" + strNum;
    return strNum;
  };

  const updateTime = () => {
    const duration = dayjs.duration(
      (new Date() as any) - (new Date(startTime) as any)
    );

    const ms = Math.round(duration.milliseconds() / 10);
    setMs(toStopwatchString(ms));

    const s = duration.seconds();
    setS(toStopwatchString(s));

    const m = duration.minutes();
    setM(toStopwatchString(m));

    const h = Math.round(duration.asHours());
    setH(toStopwatchString(h));
  };

  useEffect(() => {
    setStartTime(initialStartTime);
  }, [initialStartTime]);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(updateTime, 1);
    } else {
      clearInterval(interval.current);
    }
  }, [isRunning]);

  const syncRunning = () => setRunning(!!running);

  useEffect(() => {
    syncRunning();
  }, [running]);

  useEffect(() => {
    if (!startTime) {
      clearCounter();
    }
  }, [startTime]);

  const clearCounter = () => {
    setRunning(false);
    setTimeout(() => {
      setStartTime(new Date());
      setH("00");
      setM("00");
      setS("00");
      setMs("00");
    }, 10);
  };

  return (
    <Flex align-items="end">
      <Box mr="4" pr="2">
        <StopwatchButton playing={isRunning} />
      </Box>
      <Flex align-items="baseline" style={{ position: "relative", bottom: -2 }}>
        <H1 display>
          {h}:{m}:{s}
        </H1>
        <Box ml="2">
          <Span style={{ fontSize: "1.1em" }}>{ms}</Span>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Counter;
