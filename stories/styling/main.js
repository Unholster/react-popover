import "../base.css"
import "./main.css"
import Debug from "debug"
import React from "react"
import Popover from "../../lib"

const debug = Debug("demo")

Debug.enable("react-popover,demo")

class Main extends React.Component {
  render () {
    debug("render")

    return (
      <div id="app">
        {[ "above", "below", "right", "left" ].map((place) =>
          <Popover
            body="Popover contents"
            className="custom-styling"
            isOpen
            key={place}
            place={place}
            tipSize={16}
            >
            <div className="Trigger" />
          </Popover>
        )}
      </div>
    )
  }
}

export default Main
