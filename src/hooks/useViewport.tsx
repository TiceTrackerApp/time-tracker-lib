import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

type Dimensions = {
  height: number;
  width: number;
};

const initialDimensions = {
  height: typeof window !== "undefined" ? window.innerHeight : 740,
  width: typeof window !== "undefined" ? window.innerWidth : 360,
};

export enum BreakPoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

const useViewPort = () => {
  const [dimensions, setDimensions] = useState<Dimensions>(initialDimensions);
  const theme = useTheme() as any;

  const updateDimensions = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  let breakpoint = BreakPoints.xs;

  if (dimensions.width > theme.breakPointXl) {
    breakpoint = BreakPoints.xl;
  } else if (dimensions.width > theme.breakPointLg) {
    breakpoint = BreakPoints.lg;
  } else if (dimensions.width > theme.breakPointMd) {
    breakpoint = BreakPoints.md;
  } else if (dimensions.width > theme.breakPointSm) {
    breakpoint = BreakPoints.sm;
  }

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return { ...dimensions, breakpoint };
};

export default useViewPort;
