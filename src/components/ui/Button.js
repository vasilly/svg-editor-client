import React from "react"
import glamorous from "glamorous"
import colors from "theme/colors"

// const colors = {
//   success: "#29A88E",
//   danger: "#C65F4A",
//   primary: "#6DCFD3",
//   info: "#FFD035",
//   gray: "#5A6E73",
//   accent: "#8E83A3"
// }

export const styleButtons = {
  fontSize: 16,
  fontFamily: "Montserrat",
  margin: 10,
  border: "1px solid transparent",
  cursor: "pointer",
  display: "inline-block",
  padding: "10px 20px",
  textAlign: "center",
  transition: "0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)",
  borderRadius: 4,
  color: "#fff",
  boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
  ":hover": {
    opacity: 0.9,
    // transform: 'translateY(-1px)',
    boxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)"
  },
  ":focus": { border: "1px solid green", backgroundColor: "black" },
  ":active": {
    transform: "translateY(2px)"
  }
}

export default glamorous.button(styleButtons, ({ type }) => ({
  backgroundColor: colors[type] || colors["gray"]
}))

export const LabelButton = glamorous.label(styleButtons, ({ type, checked }) => ({
  backgroundColor: checked ? "black" : colors[type] || colors["gray"]
  // borderColor: checked ? "red" : colors[type] || colors["gray"]
}))
