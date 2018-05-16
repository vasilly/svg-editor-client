// import PropTypes, {
//   bool,
//   func,
//   node,
//   number,
//   object,
//   oneOfType,
//   string
// } from "prop-types"
// import React, { Component } from "react"
//
// //22
// export class Radio extends React.Component {
//   render() {
//     const { name, selectedValue, onChange } = this.context.radioGroup
//     const optional = {}
//     if (selectedValue !== undefined) {
//       optional.checked = this.props.value === selectedValue
//     }
//     if (typeof onChange === "function") {
//       optional.onChange = onChange.bind(null, this.props.value)
//     }
//
//     return (
//       <input
//         {...this.props}
//         role="radio"
//         aria-checked={optional.checked}
//         type="radio"
//         name={name}
//         {...optional}
//       />
//     )
//   }
// }
//
// Radio.contextTypes = {
//   radioGroup: object
// }
//
// //21
// export class RadioGroup extends Component {
//   getChildContext() {
//     const { name, selectedValue, onChange } = this.props
//     return {
//       radioGroup: {
//         name,
//         selectedValue,
//         onChange
//       }
//     }
//   }
//
//   render() {
//     const { Component, name, selectedValue, onChange, children, ...rest } = this.props
//     return (
//       <Component role="radiogroup" {...rest}>
//         {children}
//       </Component>
//     )
//   }
// }
//
// RadioGroup.defaultProps = {
//   Component: "div"
// }
//
// RadioGroup.propTypes = {
//   name: string,
//   selectedValue: oneOfType([string, number, bool]),
//   onChange: func,
//   children: node.isRequired,
//   Component: oneOfType([string, func, object])
// }
//
// RadioGroup.childContextTypes = {
//   radioGroup: object
// }
//
// const RadioExample = () => (
//   <RadioGroup
//     name="fruit"
//     // selectedValue={this.state.selectedValue}
//     // onChange={this.handleChange}
//   >
//     <label>
//       <Radio value="apple" />Apple
//     </label>
//     <label>
//       <Radio value="orange" />Orange
//     </label>
//     <label>
//       <Radio value="watermelon" />Watermelon
//     </label>
//   </RadioGroup>
// )
// export default RadioExample
// // example call:
// {
//   /*
//   <RadioGroup
//   name="fruit"
//   selectedValue={this.state.selectedValue}
//   onChange={this.handleChange}>
//   <label>
//     <Radio value="apple" />Apple
//   </label>
//   <label>
//     <Radio value="orange" />Orange
//   </label>
//   <label>
//     <Radio value="watermelon" />Watermelon
//   </label>
// </RadioGroup>
// */
// }
