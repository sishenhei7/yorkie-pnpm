function findDepDir(depDir) {
  const projDir = depDir.split(/[\\/]/) // <- would split both on '/' and '\'
  const indexOfPnpmDir = projDir.indexOf('.pnpm')
  if (indexOfPnpmDir > -1) {
    return projDir.slice(0, indexOfPnpmDir).join('/') + '/yorkie';
  }

  return depDir
}

module.exports = findDepDir