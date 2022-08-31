const path = require('path')
const main = require('../src/index')

const FIXTURE_JSON = JSON.stringify({ name: 'test', description: 'fake data' })
const FIXTURE_PATTERN = 'name'

describe('main pplication', function () {
  it('should display version', function () {
    const version = main.getVersion()
    expect(version).toBe('1.0.0')
  })

  it('should return usage text', function () {
    const msg = main.getUsage()
    expect(msg).toHaveSize(120)
  })

  it('should parse JSON file', async function () {
    const data = await main.parseFile(path.resolve(__dirname, '../package.json'))
    expect(data.version).toEqual(main.getVersion())
  })

  it('should parse JSON string', () => {
    const data = main.parseInput(FIXTURE_JSON)
    expect(data.name).toEqual('test')
  })

  it('should produce JSONata results', function () {
    const name = main.runJsonata(FIXTURE_PATTERN, JSON.parse(FIXTURE_JSON))
    expect(name).toEqual('test')
  })
})
