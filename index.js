class PromiseBack {

  static reject (err, callback) {
    callback(err)
    return Promise.reject(err)
  }

  static resolve (res, callback) {
    callback(null, res)
    return Promise.resolve(res)
  }

  constructor (fn, callback) {
    if (typeof callback !== 'function') {
      return new Promise(fn)
    }

    return new Promise((resolve, reject) => {
      let resolve_back = (res) => {
        callback(null, res)
        resolve(res)
      }

      let reject_back = (err) => {
        callback(err, null)
        reject(err)
      }

      fn(resolve_back, reject_back)
    })
  }

}

module.exports = PromiseBack
