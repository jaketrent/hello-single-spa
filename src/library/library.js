export function bootstrap(props) {
  return Promise.resolve().then(() => {
    domElementGetter()
  })
}

export function mount(props) {
  return Promise.resolve().then(() => {
    domElementGetter().textContent = 'Browse app'
  })
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    // TODO: cleaner -- remove domEl
    domElementGetter().textContent = ''
  })
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
