import page from 'page'
import * as singleSpa from 'single-spa'

// const appName = 'prism'
//
// // eventually use systemjs -- client loader
// const loadingFunction = _ => import('./prism/prism.js')
// // prism is on every page
// const activityFunction = location => true // location.pathname.startsWith('/prism')

const prism = {
  name: 'prism',
  load: _ => import('./prism/prism.js'),
  isActive: location => /\/.*/.test(location.pathname)
}

const library = {
  name: 'library',
  load: _ => import('./library/library.js'),
  isActive: location => {
    return /\/library.*/.test(location.pathname)
  }
}

const apps = [prism, library]

apps.forEach(app => {
  singleSpa.registerApplication(app.name, app.load, app.isActive)
})

singleSpa.start()

page.start()
