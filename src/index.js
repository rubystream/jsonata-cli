const packageJson = require('../package.json')
const jsonata = require('jsonata')
const minimist = require('minimist')
const fs = require('fs/promises')

// usage message
const usageMsg = `jsonata-cli version: ${packageJson.version}\n\n` +
  'Usage:\n' +
  'jsonata-cli <pattern> <json-string>\n\n' +
  'jsonata-cli <pattern> --file [-f] <json-file>\n\n' +
  'jsonata-cli -v [--version] // prints the application version\n' +
  'jsonata-cli -h [--help] // prints this usage description\n\n'

// command line options
const options = {
  alias: {
    help: 'h',
    version: 'v',
    file: 'f'
  },
  boolean: [
    'help',
    'version'
  ],
  string: [
    'file'
  ]
}

const getUsage = () => {
  return usageMsg
}
// Show the usage of the application
const showUsage = () => {
  console.log(getUsage())
}

const getVersion = () => {
  return packageJson.version
}

const showVersion = () => {
  console.log(getVersion())
}

const isFile = async (fileName) => {
  const fileNameDefined = Boolean(fileName)
  if (fileNameDefined) {
    const stats = await fs.stat(fileName)
    return stats.isFile()
  } else {
    console.error('file is not provided')
  }
}

const parseInput = (str) => {
  return JSON.parse(str)
}

const parseFile = async (fileName) => {
  return parseInput(await fs.readFile(fileName, { encoding: 'utf8' }))
}

const showResult = (result) => {
  console.log(result)
}

const showError = (msg) => {
  console.error(msg)
}

const runJsonata = (pattern, str) => {
  const expression = jsonata(pattern)
  return expression.evaluate(str)
}

const main = async () => {
  try {
    // parse command line and extract options
    const opts = minimist(process.argv.slice(2), options)

    if (opts.v) {
      showVersion()
    } else if (opts.help) {
      showUsage()
    } else if (opts.file && opts._.length > 0) {
      if (await isFile(opts.file)) {
        showResult(runJsonata(opts._[0], await parseFile(opts.file)))
      } else {
        showUsage()
      }
    } else if (opts._.length > 1) {
      showResult(runJsonata(opts._[0], parseInput(opts._[1])))
    } else {
      showUsage()
    }
  } catch (e) {
    showError(e.message)
  }
}

// execute main program
if (!module.parent) {
  main()
} else {
  exports.parseFile = parseFile
  exports.parseInput = parseInput
  exports.getUsage = getUsage
  exports.getVersion = getVersion
  exports.runJsonata = runJsonata
}
