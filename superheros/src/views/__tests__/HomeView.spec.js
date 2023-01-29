import { describe, it, expect, vi, test } from 'vitest'
import axios from 'axios';
import { mount } from '@vue/test-utils'

vi.mock('axios',  () => ({
  default: {
    get: vi.fn(),
  },
}))

it('mocked axios', async () => {
  await axios.get('string')

  expect(axios.get).toHaveBeenCalledWith('string')
  expect(axios.post).toBeUndefined()
})

test('can get actual axios', async () => {
  const ax = await vi.importActual<typeof axios>('axios')

  expect(vi.isMockFunction(ax.get)).toBe(false)
})

test("get characters", async () => {
    const characters = [
      { id: 1, name: "A-Bomb" },
      { id: 2, name: "Abe Sapien" },
    ];
    axios.get.mockImplementation(() => Promise.resolve({ data: characters }));
    axios.get.mockResolvedValueOnce(characters);

    expect(axios.get).toHaveBeenCalledTimes(1);
});
