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

const skills = {
  name: 'skills',
  load: _ => System.import('//localhost:8080/skills.js'),
  isActive: location => {
    return /\/skills.*/.test(location.pathname)
  }
}

const apps = [prism, library, skills]

apps.forEach(app => {
  singleSpa.registerApplication(app.name, app.load, app.isActive)
})

singleSpa.start()
