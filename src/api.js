const baseUrl = ''

const objectToQueryString = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')

const post = (endpoint, data) =>
  new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('POST', baseUrl + endpoint, true)

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    http.onreadystatechange = () => {
      if (http.readyState == 4) {
        if (http.status == 200) {
          resolve(http.responseText)
        } else {
          reject(http.responseText)
        }
      }
    }

    http.send(objectToQueryString(data))
  })

export const postEmail = email => post('/', { email })
