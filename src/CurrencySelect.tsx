
import React from 'react'
import {
  Input,
  Select,
} from 'antd'

interface CurrencySelectProps {
  value: string
  allowedValues: string[]
  onChange: (currency: string) => void
}

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
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

