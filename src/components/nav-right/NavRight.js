import React, { Component } from "react"
import glamorous from "glamorous"
import Icon from "assets/Icon"
import ToggleGroup from "components/radio/ToggleGroup"

const items = [
  {
    value: "a",
    label: "Male",
    contentProps: { icon: "google" }
  },
  {
    value: "b",
    label: "Fem",
    contentProps: { icon: "facebook" }
  }
]
{
  /* <Icon icon="bold" stroke="none" fill="white" /> */
}

function inUpdate(value) {
  console.log(value)
}

const Wrap = ({ children }) => <NavColItem>{children}</NavColItem>
const Content = ({ icon }) => <Icon icon={icon} stroke="none" fill="white" />

const ToggleStory = () => (
  <ToggleGroup
    items={items}
    name="right-nav"
    value="a"
    data-TEST-ID="rightNav"
    className="TEST-ID-rightNav"
    onUpdate={inUpdate}
    wrap={Wrap}
    content={Content}
  />
)

const NavCol = glamorous.div({
  overflow: "auto",
  width: "50px",
  height: "100%",
  position: "fixed",
  backgroundColor: "#1E1E1E",
  color: "#fff",
  top: 0,
  right: 0,
  border: "1px solid grey"

  // display: "flex",
  // flex: 1,
  // flexDirection: "column",
  // justifyContent: "center"
})

const NavColItem = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.1rem",
  margin: "0.1rem",
  border: "1px solid grey",
  // ":hover": { cursor: "pointer" },
  height: "40px",
  ":hover": {
    // opacity: 0.9,
    cursor: "pointer",
    backgroundColor: "red",
    color:"white",
    // transform: 'translateY(-1px)',
    // boxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)"
  }
})

const NavColItemEmpty = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.1rem",
  margin: "0.1rem",
  height: "40px"
})

class NavRight extends Component {
  render() {
    return (
      <NavCol>
        <div>
          <NavColItemEmpty />
          {/* <NavColItem>
            <Icon icon="bin2" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="bold" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="underline" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="google" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="facebook" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="twitter" stroke="none" fill="white" />
          </NavColItem>
          <NavColItem>
            <Icon icon="linkedin2" stroke="none" fill="white" />
          </NavColItem> */}
          <ToggleStory />
        </div>
      </NavCol>
    )
  }
}

export default NavRight
