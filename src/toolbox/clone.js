/* A shallow cloner */
export default (obj) => Array.isArray(obj) ? obj.splice(0) : Object.assign({}, obj)
