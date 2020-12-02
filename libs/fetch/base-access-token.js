const fetch = require('node-fetch')
module.exports = async () => {
  const fetchResponse = await fetch(process.env.API_WEIXIN_GATEWAY)
  const { baseAccessToken } = await fetchResponse.json()
  return baseAccessToken
}