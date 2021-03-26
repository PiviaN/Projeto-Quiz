'use strict';

export default class Auxiliary {
  get queryParams() {
    let params = new URLSearchParams(window.location.href.split('?')[1])
    const result = {}
    for (const [key, value] of params.entries()) {
      result[key] = value
    }
    return result
  }
}