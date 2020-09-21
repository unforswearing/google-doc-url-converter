var toOpenIdUrl = function() {
  var baseUrl = document.location.href

  if (!baseUrl.match('google.com')) {
    window.alert('You must be on a google doc (sheets, docs, slides, etc) editing page');
    return false
  }

  let id = function() {
    let tmp = baseUrl.split('/')
    let index = (tmp.length - 2)

    return tmp[index]
  }()

  // this does not work for drawings or fillable form urls. 
  // other gsuite services are untested
  let docType = new RegExp(
    '(document|spreadsheets|presentation|forms)\/d\/.*'
  )

  let url = baseUrl.replace(docType, 'open?id=' + id)

  // the process to copy the url to the clipboard was 
  // found at https://stackoverflow.com/a/49618964
  let container = document.createElement('input')
  document.body.appendChild(container)

  container.value = url
  container.select()

  document.execCommand('copy')
  document.body.removeChild(container)

  window.alert('Copied! ' + url)
}