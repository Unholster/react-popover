import React from "react"

const getStyle = (direction, size) => {
  const style = {
    borderTopWidth: size,
    borderRightWidth: size,
    borderBottomWidth: size,
    borderLeftWidth: size,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  }

  switch (direction) {
    case 'up':
      delete style.borderTopWidth
      delete style.borderBottomColor
      break

    case 'right':
      delete style.borderRightWidth
      delete style.borderLeftColor
      break

    case 'down':
      delete style.borderBottomWidth
      delete style.borderTopColor
      break

    case 'left':
      delete style.borderLeftWidth
      delete style.borderRightColor
      break
  }

  return style
}

const Tip = (props) => {
  const { direction } = props
  const size = props.size || 24

  return (
    <div
      className="Popover-tip"
      style={{
        borderStyle: 'solid',
        height: 0,
        width: 0,
        ...getStyle(direction, size),
      }}
    />
  )
}

export default Tip
