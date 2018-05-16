import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Button, Welcome } from "@storybook/react/demo"
import WixRadioGroup from "./WixRadioGroup"

const RadioStory = () => (
  <WixRadioGroup onChange={value => value} value={1}>
    <WixRadioGroup value={1}>Option 1</WixRadioGroup>
    <WixRadioGroup value={2}>Option 2</WixRadioGroup>
  </WixRadioGroup>
)
// storiesOf("Radio", module)
//   .add("RadioGroup", () => <RadioGroup />)
