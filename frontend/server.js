const fs = require('fs')

const env    = process.env.NODE_ENV || 'development'
const isProd = env === 'production'
const port   = process.env.PORT || 8080

const express = require('express')
const app     = express()

const { createBundleRenderer } = require('vue-server-renderer')

function createRenderer() {
  const _createRenderer = function(bundle, options) {
    const template = fs.readFileSync('./src/index.html', 'utf-8')

    return createBundleRenderer(bundle, Object.assign(options, {
      template,
      runInNewContext: false,
    }))
  }

  return new Promise((resolve, reject) => {
    if (isProd) {
    } else {
      require('./build/setup-dev-server')(app, (bundle, options) => {
        resolve(_createRenderer(bundle, options))
      })
    }
  })
}

function createRequestHandler(cb) {
  createRenderer().then((renderer) => {
    const handler = function(req, res) {
      const context = { url: req.url }
      renderer.renderToString(context, (err, html) => {
        if (err) {
          if (err.code === 404) return res.status(404).end('Page not found')
          if (err.code === 500) return res.status(500).end('Internal server error')
        }

        res.setHeader("Content-Type", "text/html")
        res.end(html)
      })
    }

    cb(handler)
  })
}


createRequestHandler((handler) => {
  app.get('*', handler)

  app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
  })
})


















// const createApp = require('./src/app')
// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('./src/index.html', 'utf-8')
// })

// const { createBundleRenderer } = require('vue-server-renderer')
// const serverBundle = null
// const renderer = createBundleRenderer(serverBundle, {
//   runInNewContext: false,
// })

// app.get('*', (req, res) => {
//   const context = { url: req.url }
  
//   renderer.renderToString(context, (err, html) => {
//     if (err) {
//       if (err.code === 404) return res.status(500).end('Page not found')
//       if (err.code === 500) return res.status(500).end('Internal server error')
//     }

//     res.end(html)
//   })
// })

// app.listen(port, () => {
//   console.log(`server started at localhost:${port}`)
// })
