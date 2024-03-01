import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SeriesPreviewCard from '../SeriesPreviewCard.vue'

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = mount(SeriesPreviewCard, { props: { title:"titel", description:"dwd", imageUrl:"", seriesID:"1" } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})