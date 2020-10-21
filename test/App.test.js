
import React from 'react'
import Renderer from 'react-test-renderer'

import { App } from '../src/App'

it('should render app', () => {
  const renderer = Renderer.create(<App />)
})

