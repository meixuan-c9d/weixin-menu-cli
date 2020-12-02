const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports = async ({
  baseAccessToken,
  menuConfString
}) => {

  baseAccessToken = '39_ULn-DzFNXhkzNuUIsXnp1zfAG6LwhDkvzSCiZQTMyqMuWIqT3lHVhfi3KsEFIOT5LtjO83Z1mkFiEZVNQpDO8X6mRhwY4ug2hvkTl1iEI-EN5VB78O_j4tzJP77zIOWlqIwF39FBYOfcsT2OAMBjAGALXM'

  const options = {
    method: 'POST',
    body: menuConfString,
    headers: {'Content-Type': 'application/json'}
  }
  const fetchResponse = await fetch(
    `${process.env.API_WEIXIN_MENU_CREATE}` +
    `?` +
    querystring.encode({
      access_token: baseAccessToken
    }),
    options
  )

  const fetchConcat = await fetchResponse.json()

  const {
    errcode: errorCode,
    errmsg: errorMessage
  } = fetchConcat
  
  if (errorCode != 0) {
    throw new Error(errorMessage)
  }

  return true
  
}