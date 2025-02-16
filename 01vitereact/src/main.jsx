import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function CustomApp() {
  return(
    <h1>Custom App | Pranjal Rai</h1>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'React Basic'

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target:'_blank'},
  'Click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
)
