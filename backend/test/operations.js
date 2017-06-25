let Add = require('../app/operations/add');

Add
  .run()
  .then((resp) => {
    console.log(`response: ${resp}`)
  })
  .catch((err) => {
    console.log(`error: ${JSON.stringify(err, null, 2)}`)
  })

Add
  .run([1,2, 4,'wd'])
  .then((resp) => {
    console.log(`response: ${resp}`)
  })
  .catch((err) => {
    console.log(`error: ${JSON.stringify(err, null, 2)}`)
  })

Add
  .run([1,2,3,4])
  .then((resp) => {
    console.log(`response: ${resp}`)
  })
  .catch((err) => {
    console.log(`error: ${JSON.stringify(err, null, 2)}`)
  })