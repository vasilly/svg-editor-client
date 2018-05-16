import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, Welcome } from "@storybook/react/demo"
import NavRight from "./NavRight"

storiesOf("NavRight", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("NavRight/nav", module)
  .add("NavRight", () => <NavRight onClick={action("clicked")}/>)
