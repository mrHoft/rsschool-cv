export default function includeTMPL() {
  const elements = document.getElementsByTagName('wrapper-tmpl')
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i]
    // Search for elements with a certain atrribute
    const file = el.getAttribute('include-html')
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
          el.removeAttribute('include-html')
					// Call this function once more
					includeTMPL()
        }
      }
      xhttp.open('GET', file, true)
      xhttp.send()
      return
    }
  }
}
