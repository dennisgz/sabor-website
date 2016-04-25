/* Returns a modified the url of a facebook image that points to the original, high-resolution version. */
export default (url) => url.replace(/\/[a-z][0-9]+x[0-9]+\//, '/')
