import page from 'page'

let domEl

export function bootstrap(props) {
  return Promise.resolve().then(() => {
    domEl = document.createElement('div')
    domEl.id = 'prism'
    document.body.appendChild(domEl)
  })
}

export function mount(props) {
  return Promise.resolve().then(() => {
    domEl.innerHTML =
      '<h1>Prism is mounted</h1><a href="/library/something">Go to library</a><a href="/">Go home</a>'
  })
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    domEl.textContent = ''
  })
}
