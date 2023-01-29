import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Character from '../Character.vue'

describe('Character', () => {
  it('renders properly', () => {
    const wrapper = mount(Character, { props: { id: 1, name: 'Batman', image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/70-batman.jpg', powerstats: {
      "intelligence": 100,
      "strength": 26,
      "speed": 27,
      "durability": 50,
      "power": 47,
      "combat": 100
    } } })
    expect(wrapper.text()).toContain('Batman')
  })
})
