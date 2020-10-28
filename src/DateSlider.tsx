
import React from 'react'
import dateFormat from 'dateformat'
import {
  Slider,
} from 'antd'

interface DateSliderProps {
  day: number
  onChange: (value: number) => void
}

function tipFormatter(day: number): string {
  if (day === 0) {
    return 'Today'
  }

  const date = new Date()
  date.setDate(date.getDate() - day)

  return dateFormat(date, 'dd-mm-yyyy')
}

export const DateSlider: React.FC<DateSliderProps> = (props) => {

  return (
    <Slider
      value={props.day}
      max={30}
      reverse
      tipFormatter={tipFormatter}
      onChange={props.onChange}
    />
  )
}

