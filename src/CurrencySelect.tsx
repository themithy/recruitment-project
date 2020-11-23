
import React from 'react'
import { atom, useRecoilState } from 'recoil'
import { Select } from 'antd'

interface CurrencySelectProps {
  allowedValues: string[]
}

export const currencyState = atom<string>({
  key: 'currency',
  default: 'PLN',
})

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  const [ baseCurrency, setCurrency ] = useRecoilState(currencyState)

  return (
    <Select
      value={baseCurrency}
      onChange={(value) => setCurrency(value)}
    >
      { props.allowedValues.map(currency => (
        <Select.Option
          key={currency}
          value={currency}
          children={currency}
        />
      ))}
    </Select>
  )
}

CurrencySelect.defaultProps = {
  allowedValues: [],
}

