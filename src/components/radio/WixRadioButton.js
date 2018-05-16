import React, { Component } from "react"
import {
  any,
  bool,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from "prop-types"

// import { withFocusable, focusableStates } from "../../common/Focusable"

class RadioButton extends React.Component {
  static displayName = "RadioGroup.Radio"

  static propTypes = {
    value: oneOfType([string, number]),
    vAlign: oneOf(["center", "top"]),
    name: string,
    onChange: func,
    checked: bool,
    disabled: bool,
    children: any,
    style: object,
    type: oneOf(["default", "button"]),
    lineHeight: string,

    /** optional node to be rendered under label. Clicking it will not trigger `onChange` */
    content: node
  }

  static defaultProps = {
    vAlign: "center",
    type: "default",
    content: null
  }

  constructor(props) {
    super(props)
    this.id = uniqueId()
  }

  renderButton() {
    const { checked, disabled, onChange, value, icon, children } = this.props

    return (
      <button
        type="button"
        checked={checked}
        disabled={disabled}
        id={this.id}
        onClick={() => (!checked && !disabled ? onChange(value) : null)}
      >
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </button>
    )
  }

  renderRadio() {
    const {
      checked,
      children,
      content,
      disabled,
      lineHeight,
      name,
      onChange,
      style,
      vAlign,
      value
    } = this.props

    return (
      <div
        // className={classnames(styles.radioWrapper, {
        //   [styles.disabled]: disabled,
        //   [styles.checked]: checked
        // })}
        style={style}
        // tabIndex={disabled ? null : 0}
        // onFocus={this.props.focusableOnFocus}
        // onBlur={this.props.focusableOnBlur}
        // {...focusableStates(this.props)}
      >
        <input
          type="radio"
          name={name}
          value={value}
          id={this.id}
          checked={checked}
          disabled={disabled}
          onChange={() => (!checked && !disabled ? onChange(value) : null)}
        />

        <label style={{ lineHeight }} htmlFor={this.id}>
          <div className={styles.radio} />
          {children && (
            <div className={styles.children} data-hook="radiobutton-children">
              {children}
            </div>
          )}
        </label>

        {content && <div data-hook="radio-button-content">{content}</div>}
      </div>
    )
  }

  render() {
    return this.props.type === "button" ? this.renderButton() : this.renderRadio()
  }
}

// export default withFocusable(RadioButton)
export default RadioButton
