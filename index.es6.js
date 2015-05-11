export default (p = Promise) => f =>
  (...args) =>
    new p((resolve, reject) =>
      f(...args, (err, val) => err ? reject(err) : resolve(val))
    )
