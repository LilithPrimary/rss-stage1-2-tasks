import './slider.css'
import noUiSlider, { target } from 'nouislider';

export default class Slider {
  constructor(public slider: target) {
    this.slider = slider;
  }

  createSlider(values: number[]) {
    noUiSlider.create(this.slider, {
      start: [values[0], values[1]],
      connect: true,
      step: 1,
      tooltips: [true, true],
      range: {
        'min': values[0],
        'max': values[1]
      },
      format: {
        to: function (value) {
          return parseInt(value.toString())
        },
        from: function (value) {
          return parseInt(value)
        }
      }
    })
  }
}