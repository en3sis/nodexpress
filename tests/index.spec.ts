import expect from 'expect';

const user: {
  name: string
  age: number
} = {
  name: 'Jhon Doe',
  age: 40
}

describe('Hello world', () => {
  it('should have the right age', () => {
    expect(user.age).toBe(40)
  })
})
