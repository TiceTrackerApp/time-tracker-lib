import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

const Loading: React.FC<Props> = ({ size = "medium" }) => {
  const sizes = {
    small: 20,
    medium: 35,
    large: 50,
  };

  return <img src="/loading.svg" alt="Loading..." width={sizes[size]} />;
};

export default Loading;
