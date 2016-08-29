// React core modules for import
import React from 'react'
import { render } from 'react-dom'
// Our projects top level component
import Main from './lib/main'

// This uses JSX https://facebook.github.io/react/docs/jsx-in-depth.html
render((
  <div>
    <h2>This was updated</h2>
    <Main name="Boilerplate"/>
  </div>
), document.getElementById('app'))
