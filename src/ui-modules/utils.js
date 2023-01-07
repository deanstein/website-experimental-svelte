export class ObjectUtils {
  static updateObject(target, update) {
    // for each key/value pair in update object
    for (const [key, value] of Object.entries(update)) {
      // if target has the relevant key and
      // the type in target and update is the same
      if (target.hasOwnProperty(key) && typeof value === typeof target[key]) {
        // update value if string, number, or boolean
        if (
          ['string', 'number', 'boolean'].includes(typeof value) ||
          Array.isArray(value)
        ) {
          target[key] = value
        } else {
          // if type is object then go one level deeper
          if (typeof value === 'object') {
            ObjectUtils.updateObject(target[key], value)
          }
        }
      }
    }
    return target
  }
}
