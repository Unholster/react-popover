import "../base.css"
import "./main.css"
import F from "ramda"
import React from "react"
import Popover from "../../lib"



class Row extends React.Component {
  state = {
    isOpen: false,
  }
  toggle (toState = null) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
  }
  render () {
    const { isOpen } = this.state
    return (
      <Popover
        enterExitTransitionDurationMs={0}
        isOpen={isOpen}
        body="!"
        children={
          <div
            className="Row"
            onMouseOver={() => this.toggle(true)}
            onMouseOut={() => this.toggle(false)}
            children={this.props.children}
          />
        }
      />
    )
  }
}

const Main = () =>
  <div
    id="app"
    children={
      F.range(0, 51).map((i) => <Row key={i} children={i} />)
    }
  />

export default Main
