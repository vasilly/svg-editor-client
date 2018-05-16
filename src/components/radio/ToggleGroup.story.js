import React, { Component } from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import ToggleGroup from "./ToggleGroup"

const items1 = [
  { value: "a", label: "1" },
  { value: "b", label: "2" },
  { value: "c", label: "3" },
  { value: "g", label: "7", disabled: true }
]

const items = [{ value: "a", label: "Male" }, { value: "b", label: "Female" }]

function inUpdate(value) {
  console.log(value)
}
// const Wrap=<div></div>
const Wrap = ({ children }) => <React.Fragment>{children}</React.Fragment>
const ToggleStory = () => (
  <ToggleGroup
    items={items}
    name="opt-group"
    value="c"
    className="radio-group"
    onUpdate={inUpdate}
    wrap={Wrap}
  />
)

const ToggleStoryChildren = () => (
  <ToggleGroup
    items={items}
    name="opt-group"
    className="radio-group"
    onUpdate={inUpdate}
    wrap={Wrap}
  >
    <div>div</div>
  </ToggleGroup>
)

const ToggleNoUpdateFunction = () => (
  <ToggleGroup
    items={items}
    name="opt-group"
    value="c"
    className="radio-group"
    wrap={Wrap}
  >
    <div>div</div>
  </ToggleGroup>
)

storiesOf("Radio", module)
  .add("ToggleStory", () => <ToggleStory />)
  .add("ToggleStoryChildren", () => <ToggleStoryChildren />)
  .add("ToggleNoUpdateFunction", () => <ToggleNoUpdateFunction />)
