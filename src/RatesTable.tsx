
import React from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { get } from 'lodash'
import { Table } from 'antd'

import {
  getRatesData,
  RatesData,
} from './api'
import { amountState } from './CurrencyInput'
import { currencyState } from './CurrencySelect'
import { dateState } from './DateSlider'

interface RatesTableProps {
  preferredCurrencies: Array<string>
}

const columns = [
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right',
  },
]

export const RatesTable: React.FC<RatesTableProps> = (props) => {
  const [ amount ] = useRecoilState(amountState)
  const [ baseCurrency ] = useRecoilState(currencyState)
  const [ day ] = useRecoilState(dateState)

  const query = useQuery<RatesData>({
    queryKey: ['rates', baseCurrency, day],
    queryFn: () => getRatesData(baseCurrency, day),
    config: {
      staleTime: Infinity,
      cacheTime: Infinity,
      keepPreviousData: true,
    },
  })

  const { data: queryData } = query

  const currentBaseCurrency = queryData
    ? queryData.base
    : baseCurrency

  const dataSource = props.preferredCurrencies
    .filter(currency => currency !== currentBaseCurrency)
    .map((currency, i) => {
      const rate = queryData
        ? queryData.rates[currency] as number
        : 0

      return {
        key: i,
        currency: currency,
        amount: (amount * rate).toFixed(2),
      }
    })

  return (
    <Table
      // @ts-ignore
      columns={columns}
      dataSource={dataSource}
      loading={query.isFetching}
      pagination={false}
      size="small"
    />
  )
}

RatesTable.defaultProps = {
  preferredCurrencies: [],
}

