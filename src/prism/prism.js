import { h, app } from 'hyperapp'
import * as singleSpa from 'single-spa'
import singleSpaHyperapp from 'single-spa-hyperapp'

const state = {}

const actions = {}

function Link(props, children) {
  return h(
    'a',
    {
      onclick: function noRefresh(evt) {
        // TODO: this does not activate Routes in another app if it's already loaded
        singleSpaNavigate(props.to)
      }
    },
    children
  )
}

function view(state, actions) {
  return h('div', {}, [
    h('span', {}, ['Prism...']),
    Link({ to: '/' }, 'Home'),
    Link({ to: '/library/browse' }, 'Browse')
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
  let el = document.getElementById('ps-prism')
  if (!el) {
    el = document.createElement('div')
    el.id = 'ps-prism'
    document.body.appendChild(el)
  }

  return el
}
