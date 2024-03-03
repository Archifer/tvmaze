import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SeriesPreviewCard from '../SeriesPreviewCard.vue'

// TODO use before each to create and customise series object
describe('SeriesPreviewCard', () => {
  it('renders the component with correct text when Series prop is provided', () => {
    const series: Series = {
      title: 'Test Series',
      description: 'test description',
      imageUrl: '',
      seriesId: '1',
      genres: ['Action'],
      rating: '5,6'
    };
    const wrapper = shallowMount(SeriesPreviewCard, {
      props: {
        series
      }
    });

    expect(wrapper.text()).toContain('Test Series');
  });

  it('Check if description is stripped from html tags', () => {
    const series: Series = {
      title: 'Test Series',
      description: 'test <b>html</b> description',
      imageUrl: '',
      seriesId: '1',
      genres: ['Action'],
      rating: '5,6'
    };

    const wrapper = shallowMount(SeriesPreviewCard, {
      props: {
        series
      }
    });

    expect(wrapper.text()).toContain('test html description');
  });

  it('Check if tag id of the card is correctly set', () => {
    const series: Series = {
      title: 'Test Series',
      description: 'test <b>html</b> description',
      imageUrl: '',
      seriesId: '1',
      genres: ['Action'],
      rating: '5,6'
    };

    const wrapper = shallowMount(SeriesPreviewCard, {
      props: {
        series
      }
    });

    const customIdElement = wrapper.find('#series-card-1');
    expect(customIdElement.exists()).toBe(true);
  });
});
