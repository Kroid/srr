const api = require('../app/api');

api.call('add', [1,2,3,4,5]).then((resp) => {
  console.log(`response: ${resp}`)
})
.catch((err) => {
  console.log(`error: ${JSON.stringify(err, null, 2)}`)
})

api.call('add', []).then((resp) => {
  console.log(`response: ${resp}`)
})
.catch((err) => {
  console.log(`error: ${JSON.stringify(err, null, 2)}`)
})

api.call('add', {}).then((resp) => {
  console.log(`response: ${resp}`)
})
.catch((err) => {
  console.log(`error: ${JSON.stringify(err, null, 2)}`)
})

api.call('add').then((resp) => {
  console.log(`response: ${resp}`)
})
.catch((err) => {
  console.log(`error: ${JSON.stringify(err, null, 2)}`)
})

api.call('add', ['qwe']).then((resp) => {
  console.log(`response: ${resp}`)
})
.catch((err) => {
  console.log(`error: ${JSON.stringify(err, null, 2)}`)
})
