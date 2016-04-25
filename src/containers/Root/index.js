/* Global styles */
import 'normalize.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/custom.css'

module.exports = __DEV__ ?
  require('./Root.dev')
: require('./Root.prod')
