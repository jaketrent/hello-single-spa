let domEl

export function bootstrap(props) {
  return Promise.resolve().then(() => {
    domEl = document.createElement('div')
    domEl.id = 'library'
    document.body.appendChild(domEl)
  })
}

export function mount(props) {
  return Promise.resolve().then(() => {
    console.log('mounting library...')
    domEl.textContent = 'Library is mounted'
  })
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    // TODO: cleaner -- remove domEl
    domEl.textContent = ''
  })
}
