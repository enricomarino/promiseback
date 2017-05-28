class PromiseBack {

  constructor (fn, callback) {
    if (typeof callback !== 'function') {
      return new Promise(fn)
    }

    return new Promise((resolve, reject) => {
      let resolve_back = (res) => {
        resolve(res)
        callback(null, res)
      }

      let reject_back = (err) => {
        reject(err)
        callback(err, null)
      }

      fn(resolve_back, reject_back)
    })
  }

}

module.exports = PromiseBack
