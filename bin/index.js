#!/bin/sh
':' //; exec "$(which node)" "$0" "$@"
require('dotenv').config()
const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))

;(async () => {
  const fetchBaseAccessToken = require('../libs/fetch/base-access-token')
  const baseAccessToken = await fetchBaseAccessToken()
  
  if (argv.c) {
    const DEFAULT_PATH_MENU_CONF = path.resolve('menu.conf')
    // create menu
    if (argv.c === true) {
      // use default json file
      const readFile = promisify(fs.readFile)
      try {
        const menuConfString = await readFile(DEFAULT_PATH_MENU_CONF, 'utf8')

        const createMenu = require('../libs/create-menu')
        const resultCreateMenu = await createMenu({
          baseAccessToken,
          menuConfString
        })
        if (resultCreateMenu) {
          console.log(`
Menu created according to ${DEFAULT_PATH_MENU_CONF}
          `)
        }
        
      } catch (error) {
        console.error(error)
      }  

    } else {
      // use specified file
    }
  }

})()

