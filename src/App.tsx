
import React from 'react'

import { CurrencyInput } from './CurrencyInput'
import { CurrencySelect } from './CurrencySelect'
import { Layout } from './Layout'
import { RatesTable } from './RatesTable'

export const App: React.FC = () => {
  const [ amount, setAmount ] = React.useState(0)
  const [ currency, setCurrency ] = React.useState('PLN')

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

  const ratesTable = (
    <RatesTable
      amount={amount}
      currency={currency}
    />
  )

  return (
    <Layout
      currencyInput={currencyInput}
      ratesTable={ratesTable}
    />
  )
}

