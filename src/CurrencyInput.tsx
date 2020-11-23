
import React from 'react'
import { atom, useRecoilState } from 'recoil'
import { Input } from 'antd'

interface CurrencyInputProps {
  select: React.ReactNode
}

export const amountState = atom<number>({
  key: 'amount',
  default: 0,
})

export const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {
  const [ amount, setAmount ] = useRecoilState(amountState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = Number.parseFloat(event.target.value)

    const value = Number.isNaN(rawValue)
      ? 0
      : rawValue

    setAmount(value)
  }

  const value = amount !== 0 ? String(amount) : ''

  return (
    <Input
      addonAfter={props.select}
      type="number"
      value={value}
      onChange={onChange}
    />
  )
}

