import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
  const [isToggle, setToggle] = useState(false)
  const [items, setItems] = useState([
    {
      letters: 'S',
      key: 1,
    },
    {
      letters: 'S',
      key: 2,
    },
    {
      letters: 'O',
      key: 3,
    },
    {
      letters: 'T',
      key: 4,
    },
    {
      letters: 'T',
      key: 5,
    },
  ])
  // const fade = useSpring({
  //   // opacity: isToggle ? 1 : 0,
  //   color: isToggle ? 'tomato' : 'green',
  //   // fontSize: isToggle ? '2em' : '8em',
  //   // transform: isToggle ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
  //   y: isToggle ? 0 : 1,
  // })
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letters}
        </animated.h1>
      ))}
      {/* <animated.h1
      // style={{
      //   ...fade,
      //   transform: fade.y
      //     .interpolate({
      //       range: [0, 0.25, 0.5, 0.75, 1],
      //       output: [0, -25, -50, -100, -50],
      //     })
      //     .interpolate(y => `translate3d(0, ${y}px, 0)`),
      // }}
      >
        Hello
      </animated.h1> */}
      <button
        onClick={() =>
          setItems([
            {
              letters: 'S',
              key: 1,
            },
          ])
        }
      >
        Toggle
      </button>
    </div>
  )
}

// const AnimatedTitle = animated.h1

export default Toggle
