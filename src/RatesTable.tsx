
import React from 'react'
import { useQuery } from 'react-query'
import { get } from 'lodash'
import {
  Table,
} from 'antd'

import {
  getRatesData,
  RatesData,
} from './api'

interface RatesTableProps {
  amount: number
  baseCurrency: string
  preferredCurrencies: Array<string>
  day: number
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
  const query = useQuery<RatesData>({
    queryKey: ['rates', props.baseCurrency, props.day],
    queryFn: () => getRatesData(props.baseCurrency, props.day),
    config: {
      staleTime: Infinity,
      cacheTime: Infinity,
      keepPreviousData: true,
    },
  })

  const { data: queryData } = query

  const baseCurrency = queryData
    ? queryData.base
    : props.baseCurrency

  const dataSource = props.preferredCurrencies
    .filter(currency => currency !== baseCurrency)
    .map((currency, i) => {
      const rate = queryData
        ? queryData.rates[currency]
        : 0

      const amount = rate
        ? props.amount * rate
        : 0

      return {
        key: i,
        currency: currency,
        amount: amount.toFixed(2),
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

