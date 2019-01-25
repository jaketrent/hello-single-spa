import * as singleSpa from 'single-spa'

const prism = {
  name: 'prism',
  load: _ => import('./prism/prism.js'),
  isActive: location => true
}

const library = {
  name: 'library',
  load: _ => import('./library/library.js'),
  isActive: location => {
    return /\/library.*/.test(location.pathname) || location.pathname === '/'
  }
}

const apps = [prism, library]

apps.forEach(app => {
  singleSpa.registerApplication(app.name, app.load, app.isActive)
})

singleSpa.start()
