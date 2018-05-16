import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, Welcome } from "@storybook/react/demo"
import PizzaSizePicker from "./PizzaSizePicker"
import PizzaSizePicker2 from "./PizzaSizePicker2"
import RadioExample from "./ChengLouRadio"

storiesOf("PizzaSizePicker", module)
  .add("PizzaSizePicker", () => <PizzaSizePicker onClick={action("clicked")}/>)
  .add("PizzaSizePicker2", () => <PizzaSizePicker2 onClick={action("clicked")}/>)
  // .add("RadioExample", () => <RadioExample onClick={action("clicked")}/>)
