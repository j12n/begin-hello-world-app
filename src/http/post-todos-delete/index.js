const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = async function destroy (req) {
  const key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  await data.destroy({
    table: 'todos',
    key
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}