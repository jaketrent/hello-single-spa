import { h, app } from 'hyperapp'
import page from 'page'
import singleSpaHyperapp from 'single-spa-hyperapp'

const state = {}

const actions = {}

function Link(props, children) {
  return h(
    'a',
    {
      href: props.to,
      onclick: function noRefresh(evt) {
        evt.preventDefault()
        window.history.pushState({}, '', props.to)
      }
    },
    children
  )
}

function view(state, actions) {
  return h('div', {}, [
    h('h1', {}, ['Prism']),
    h('div', {}, [
      Link({ to: '/library/something' }, 'Go to library'),
      Link({ to: '/' }, 'Go home')
    ])
  ])
}

const lifecycles = singleSpaHyperapp({
  hyperApp: app,
  appState: state,
  appActions: actions,
  appView: view,
  mountEl: domElementGetter()
})

export function bootstrap(props) {
  console.log('boot prism', props)
  return lifecycles.bootstrap(props)
}

export function mount(props) {
  console.log('mount prism', props)
  return lifecycles.mount(props)
}

export function unmount(props) {
  console.log('unmount prism', props)
  return lifecycles.unmount(props)
}

function domElementGetter() {
  let el = document.getElementById('prism')

  if (!el) {
    el = document.createElement('div')
    el.id = 'prism'
    document.body.appendChild(el)
  }

  return el
}
