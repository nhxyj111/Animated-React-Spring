import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
  const [isToggle, setToggle] = useState(false)
  const fade = useSpring({
    // opacity: isToggle ? 1 : 0,
    color: isToggle ? 'tomato' : 'green',
    // fontSize: isToggle ? '2em' : '8em',
    // transform: isToggle ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
    y: isToggle ? 0 : -50,
  })

  return (
    <div>
      <animated.h1
        style={{
          ...fade,
          transform: fade.y.interpolate(y => `translate3d(0, ${y}px, 0)`),
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggle)}>Toggle</button>
    </div>
  )
}

// const AnimatedTitle = animated.h1

export default Toggle
