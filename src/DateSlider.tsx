
import React from 'react'
import { atom, useRecoilState } from 'recoil'
import dateFormat from 'dateformat'
import { Slider } from 'antd'

export const dateState = atom<number>({
  key: 'date',
  default: 0,
})

interface DateSliderProps {
}

function tipFormatter(day?: number): string {
  if (!day) {
    return 'Today'
  }

  const date = new Date()
  date.setDate(date.getDate() - day)

  return dateFormat(date, 'dd-mm-yyyy')
}

export const DateSlider: React.FC<DateSliderProps> = (props) => {
  const [ day, setDay ] = useRecoilState(dateState)

  return (
    <Slider
      value={day}
      max={30}
      reverse
      tipFormatter={tipFormatter}
      onChange={setDay}
    />
  )
}

