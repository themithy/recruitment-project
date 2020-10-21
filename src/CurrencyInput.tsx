
import React from 'react'
import {
  Input,
  Select,
} from 'antd'

interface CurrencyInputProps {
  amount: number
  select: React.ReactNode
  onChange: (value: number) => void
}

export const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = Number.parseFloat(event.target.value)

    const value = Number.isNaN(rawValue)
      ? 0
      : rawValue

    props.onChange(value)
  }

  const value = props.amount !== 0 ? String(props.amount) : ''

  return (
    <Input
      addonAfter={props.select}
      type="number"
      value={value}
      onChange={onChange}
    />
  )
}

