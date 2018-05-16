import React, { Component } from "react"
import glamorous from "glamorous"
import Icon from "assets/Icon"
import Button from "components/ui/Button"

const Wrap = glamorous.div({
  width: "250px",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid grey"
})

const RedBox = glamorous.div({
  width: "2rem",
  height: "2rem",
  backgroundColor: "red",
  ":focus": { outline: 0, border: "10px solid red" }
})

const FormPick = glamorous.form({
  // ":focus": { border: "1px solid red",color:'blue' }
  ":focus": { outline: 0, border: "1px solid red" }
})

const Btn = ({ isActive }) => {
  console.log({ isActive })
  return (
    <Wrap>
      <RedBox>{isActive && "YES"}</RedBox>
      <RedBox>A</RedBox>
      <Icon icon="google" stroke="none" fill="black" width={"10"} height={"10"} />
    </Wrap>
  )
}

const RadioLabel = ({ thisValue, checkedValue, changeHandler }) => {
  const isChecked = checkedValue === thisValue
  return (
    <label>
      <input
        type="radio"
        value={thisValue}
        checked={isChecked}
        onChange={changeHandler}
      />
      <Btn isActive={isChecked} />
      {thisValue}
    </label>
  )
}
const RadioGroup = ({ options, checkedValue, changeHandler }) => {
  // options={["small", "medium"]}
  // checkedValue={this.state.size}
  // changeHandler={this.handleChange}
console.log({options, checkedValue, changeHandler})
  return (
    <React.Fragment>
      {options && options.map( (value)  => (
      <RadioLabel
        thisValue={value}
        checkedValue={checkedValue}
        changeHandler={changeHandler}
      />))}
    </React.Fragment>
  )
}
class PizzaSizePicker extends React.Component {
  constructor() {
    super()

    this.state = {
      size: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    alert(`You chose the ${this.state.size} pizza.`)
  }

  render() {
    return (
      <FormPick onSubmit={this.handleSubmit}>
        {/* <RadioLabel
          thisValue={"small"}
          checkedValue={this.state.size}
          changeHandler={this.handleChange}
        />

        <RadioLabel
          thisValue={"medium"}
          checkedValue={this.state.size}
          changeHandler={this.handleChange}
        /> */}
        <RadioGroup
          options={["small", "medium"]}
          checkedValue={this.state.size}/* don't have*/
          changeHandler={this.handleChange}
        />
        {/* <RadioGroup
          options={["Machine Learning", "Learning How to Learn", "Learn Python"]}
          onChange={function()}
          value="Learn Python"
          labelPosition="left"
          isVertical={true}
        /> */}

        <Button>Button</Button>
        <Button>Cancel</Button>
      </FormPick>
    )
  }
}

export default PizzaSizePicker
