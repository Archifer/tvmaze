import { describe, it, expect } from 'vitest'

// Import the RouterLink component
import { RouterLink } from 'vue-router';
// Import the Vue Test Utils library
import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

jest.mock('vue-router', () => ({
  RouterLink: {
    template: '<a><slot /></a>'
  }
}));

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.text()).toContain('XAV TV MAZE')
  })
})
