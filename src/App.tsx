
import React from 'react'

import { CurrencyInput } from './CurrencyInput'
import { CurrencySelect } from './CurrencySelect'
import { DateSlider } from './DateSlider'
import { Layout } from './Layout'
import { RatesTable } from './RatesTable'

export const App: React.FC = () => {
  const [ amount, setAmount ] = React.useState(0)
  const [ currency, setCurrency ] = React.useState('PLN')
  const [ day, setDay ] = React.useState(0)

  const currencySelect = (
    <CurrencySelect
      value={currency}
      allowedValues={[ 'PLN', 'USD', 'EUR' ]}
      onChange={setCurrency}
    />
  )

  const currencyInput = (
    <CurrencyInput
      amount={amount}
      select={currencySelect}
      onChange={setAmount}
    />
  )

  const dateSlider = (
    <DateSlider
      day={day}
      onChange={setDay}
    />
  )

  const ratesTable = (
    <RatesTable
      amount={amount}
      baseCurrency={currency}
      day={day}
      preferredCurrencies={[ 'PLN', 'USD', 'EUR', 'CHF', 'CZK', 'JPY', 'DKK' ]}
    />
  )

  return (
    <Layout
      title="Currency converter"
      currencyInput={currencyInput}
      dateSlider={dateSlider}
      ratesTable={ratesTable}
    />
  )
}

