import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'
import { hidden } from 'ansi-colors'

const Accordion = () => {
  const [on, toggle] = useState(false)
  const [bind, { height, top }] = useMeasure()
  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0,
  })

  return (
    <div>
      <h1>
        <button onClick={() => toggle(!on)}>Toggle</button>
      </h1>
      <animated.div style={animation}>
        <div {...bind} className="accordion">
          <p>Hello, I'm in the accordion</p>
        </div>
      </animated.div>
    </div>
  )
}

export default Accordion
