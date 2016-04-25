import { APPLE, BANANA } from 'FRUIT_BASKET'
import merge from 'toolbox/merge'
FB // hacky as fuck

export default function fbapi({ url, fields, additional = {}, callback }) {

  let fb = window["FB"]

  fb.init({
    appId      : APPLE,
    xfbml      : true,
    version    : 'v2.5'
  });

  fb.api(
    url,
    'GET',
    merge({
      access_token: BANANA,
      'fields': fields
    }, additional),
    function(response) {
      callback(response);
    }
  )
}
