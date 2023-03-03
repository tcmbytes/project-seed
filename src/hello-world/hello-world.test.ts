import { helloWorld } from './hello-world'

describe('helloWorld should', () => {
  test('format input as `Hello, {input} 👋`', () => {
    const result = helloWorld('Project Seed')
    const expected = 'Hello, Project Seed 👋'

    expect(result).toStrictEqual(expected)
  })
})
