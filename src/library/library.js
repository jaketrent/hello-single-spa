import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import singleSpaReact from 'single-spa-react'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
})

function App() {
  // TODO: fix these Routes to trigger on pushstate changes in prism app
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/library/browse" component={Browse} />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Browse() {
  return (
    <div>
      <h2>Browsing, yo!</h2>
      <Link to="/">Internal link back to home</Link>
    </div>
  )
}

export function bootstrap(props) {
  return lifecycles.bootstrap(props)
}

export function mount(props) {
  return lifecycles.mount(props)
}

export function unmount(props) {
  return lifecycles.unmount(props)
}

function domElementGetter() {
  let el = document.getElementById('ps-main')
  if (!el) {
    el = document.createElement('div')
    el.id = 'ps-main'
    document.body.appendChild(el)
  }

  return el
}
