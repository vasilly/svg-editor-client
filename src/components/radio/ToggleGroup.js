import React, { Component } from "react"
import glamorous from "glamorous"
import Icon from "assets/Icon"
import Button, { styleButtons, LabelButton } from "components/ui/Button"
import { arrayOf, bool, func, shape, string } from "prop-types"
import { visuallyHidden } from "styles/objects"
// https://codepen.io/satya164/pen/qdgYaO?editors=0010

const Input = glamorous.input(visuallyHidden)
const Label = glamorous.label({ cursor: "pointer" })
const Empty = () => <div />
class ToggleGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: this.props.value }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    let value = e.target.value
    const { onUpdate } = this.props
    this.setState(
      { value: value },
      () => typeof onUpdate === "function" && onUpdate(value)
    )
  }

  render() {
    const {
      content: Content,

      icon,
      items,
      name,
      wrap: Wrapper
    } = this.props
    return (
      <React.Fragment>
        {items.map(({ isDisabled, label, contentProps, value }) => {
          const isChecked = this.state.value === value
          console.log()
          return (
            <Wrapper key={value}>
              <Label checked={isChecked}>
                <Input
                  checked={isChecked}
                  disabled={isDisabled}
                  name={name}
                  onChange={this.onChange}
                  type="radio"
                  value={value}
                />
                <Content {...contentProps} />
              </Label>
            </Wrapper>
          )
        })}
      </React.Fragment>
    )
  }
}

ToggleGroup.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  items: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
      checked: bool
    })
  ).isRequired,
  onUpdate: func
}

export default ToggleGroup
