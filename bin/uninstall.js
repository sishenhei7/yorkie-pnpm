'use strict'

// Run when package is uninstalled
const path = require('path')
const uninstallFrom = require('../src/uninstall')
const findDepDir = require('../src/utils/find-dep-dir')

console.log('husky')
console.log('uninstalling Git hooks')

const depDir = findDepDir(path.join(__dirname, '..'))
uninstallFrom(depDir)
