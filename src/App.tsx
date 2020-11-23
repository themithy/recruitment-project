
import React from 'react'
import { RecoilRoot } from 'recoil'

import { CurrencyInput } from './CurrencyInput'
import { CurrencySelect } from './CurrencySelect'
import { DateSlider } from './DateSlider'
import { Layout } from './Layout'
import { RatesTable } from './RatesTable'

export const App: React.FC = () => {

  const currencySelect = (
    <CurrencySelect
      allowedValues={[ 'PLN', 'USD', 'EUR' ]}
    />
  )

  const currencyInput = (
    <CurrencyInput
      select={currencySelect}
    />
  )

  const dateSlider = (
    <DateSlider />
  )

  const ratesTable = (
    <RatesTable
      preferredCurrencies={[ 'PLN', 'USD', 'EUR', 'CHF', 'CZK', 'JPY', 'DKK' ]}
    />
  )

  return (
    <RecoilRoot>
      <Layout
        title="Currency converter"
        currencyInput={currencyInput}
        dateSlider={dateSlider}
        ratesTable={ratesTable}
      />
    </RecoilRoot>
  )
}

