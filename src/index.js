import { EventEmitter } from 'events'
import _ from 'lodash'

export default class DumbHuman extends EventEmitter {

  constructor (options = {}) {
    super()

    this.options = _.defaults(options, {
      configFile: ''
    })

    this.name = this.options.name
  }

}
