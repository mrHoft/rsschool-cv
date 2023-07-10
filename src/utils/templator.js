class Counter {
  constructor(start = 0) {
    this.count = start
  }

  add() {
    ++this.count
    return this.count
  }

  get() {
    return this.count
  }
}

// Inserts content from external .tmpl file
// Example:
// <Wrapper-tmpl include="./src/article/info.tmpl"></Wrapper-tmpl>
function includeTMPL(progressCallback = null, doneCallback = null) {
  const elements = document.getElementsByTagName('Wrapper-tmpl')
  const counter = new Counter()
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i]
    // Search for elements with a certain atrribute
    const file = el.getAttribute('include')
    if (file) {
      // Make an HTTP request using the attribute value as the file name
      const xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            el.innerHTML = this.responseText
          }
          if (this.status == 404) {
            el.innerHTML = 'Page not found.'
          }
          // Remove the attribute
          el.removeAttribute('include')

          const count = counter.add()
          if (progressCallback) {
            // console.log(`${count} Added: ${file}`)
            progressCallback(Math.floor((count / elements.length) * 100))
          }
          if (count == elements.length) {
            // console.log('All is done!')
            if (doneCallback) doneCallback()
          }
        }
      }
      xhttp.open('GET', file, true)
      xhttp.send()
    }
  }
}

// Performs render page.
// splash<string> it is a path to a page that can be used as splash screen.
export default function render(splash = null) {
  let doneCallback = null
  let progressCallback = null

  if (splash) {
    const collection = document.getElementsByTagName('main')
    const main = collection.length > 0 ? collection[0] : undefined
    if (main) {
      const div = document.createElement('div')
      const att = document.createAttribute('id')
      att.value = 'splash'
      div.setAttributeNode(att)
      main.appendChild(div)

      const xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            div.innerHTML = this.responseText
          }
          if (this.status == 404) {
            div.innerHTML = 'Page not found.'
          }
        }
      }
      xhttp.open('GET', splash, true)
      xhttp.send()

      progressCallback = percent => {
        const el = document.getElementById('loading-progress')
        if (el) {
          el.textContent = `Loading: ${percent}%`
        }
      }

      doneCallback = () => {
        div.remove()
      }
    }
  }

  includeTMPL(progressCallback, doneCallback)
}
