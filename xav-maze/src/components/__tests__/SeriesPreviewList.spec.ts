import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SeriesPreviewList from '../SeriesPreviewList.vue'
import SeriesPreviewCard from '../SeriesPreviewCard.vue'
import router from '../../router/index'

// TODO use before each to create and customise series object
describe('SeriesPreviewCard', () => {
  it('Check if two cards are created when two series are passed in the seriesList', () => {
    const series1: Series = {
      title: 'Test Series',
      description: 'test description',
      imageUrl: '',
      seriesId: '1',
      genres: ['Action'],
      rating: '5,6'
    };

    const series2: Series = {
      title: 'Test Series2',
      description: 'test description2',
      imageUrl: '',
      seriesId: '2',
      genres: ['Action'],
      rating: '5,6'
    };

    const seriesList: Series[] = [series1, series2];

    const wrapper = shallowMount(SeriesPreviewList, {
      props: {
        seriesList,
      }
    });

    const seriesPreviewCards = wrapper.findAllComponents(SeriesPreviewCard);
    expect(seriesPreviewCards.length).equals(2);
  });

  it('Check if correct text is displayed when no shows are passed', () => {
    const seriesList: Series[] = [];
    const wrapper = shallowMount(SeriesPreviewList, {
      global: {
        plugins: [router],
      },
      props: {
        seriesList,
      }
    });

    expect(wrapper.text()).toContain('No shows were found');
  });
});
