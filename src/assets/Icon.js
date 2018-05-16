import React from "react";
import icons from "./icons";

export default ({ icon, stroke = "white", fill = "white", width = "22", height = "22" }) => (
  <svg width={width} height={height} viewBox="0 0 1024 1024">
    <path stroke={stroke} fill={fill} d={icons[icon]} />
  </svg>
);
