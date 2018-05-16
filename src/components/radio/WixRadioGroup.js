import React, { Component } from "react"
import { arrayOf, bool, func, number, oneOf, oneOfType, string } from "prop-types"

import RadioButton from "./WixRadioButton"

/**
 * component for easy radio group creation.
 *
 * similar to HTML `<input type="radio"/>` except you don't need to handle `name` or click handlers
 */
class WixRadioGroup extends Component {
  constructor(props) {
    super(props)
    this.name = uniqueId("WixRadioGroup_")
  }

  render() {
    const {
      onChange,
      disabled,
      disabledRadios,
      value,
      vAlign,
      display,
      type,
      spacing,
      lineHeight
    } = this.props
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, (radio, index) => {
          const { value: radioValue, icon, constent, children } = radio.props
          return (
            <WixRadioGroup.Radio
              value={value}
              name={this.name}
              onChange={onChange}
              vAlign={vAlign}
              type={type}
              disabled={disabled || disabledRadios.indexOf(value) !== -1}
              checked={radioValue === value}
              style={display === "vertical" && index > 0 ? { marginTop: spacing } : {}}
              icon={icon}
              lineHeight={lineHeight}
              content={content}
            >
              {children}
            </WixRadioGroup.Radio>
          )
        })}
      </React.Fragment>
    )
  }
}

WixRadioGroup.propTypes = {
  onChange: func,
  value: oneOfType([string, number]),
  disabledRadios: arrayOf(oneOfType([string, number])),
  vAlign: oneOf(["center", "top"]),
  disabled: bool,
  type: oneOf(["default", "button"]),
  display: oneOf(["vertical", "horizontal"]),

  children: arrayOf((propValue, key) => {
    if (propValue[key].type.displayName !== RadioButton.displayName) {
      return new Error(
        `WixRadioGroup: Invalid Prop children was given. Validation failed on child number ${key}`
      )
    }
  }),

  spacing: string,
  lineHeight: string
}

WixRadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: "",
  vAlign: "center",
  display: "vertical",
  spacing: "12px",
  lineHeight: "24px",
  type: "default"
}

WixRadioGroup.Radio = RadioButton

WixRadioGroup.displayName = "WixRadioGroup"

export default { WixRadioGroup }
