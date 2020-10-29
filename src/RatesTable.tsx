
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { get } from 'lodash'
import {
  Table,
} from 'antd'

import { getUrl } from './api'

interface RatesTableProps {
  amount: number
  currency: string
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
  const query = useQuery({
    queryKey: ['rates', props.currency, props.day],
    queryFn: () => axios.get(getUrl(props.currency, props.day)),
    config: {
      cacheTime: Infinity,
    },
  })

  const rates = get(query, 'data.data.rates', {})

  const dataSource = Object.keys(rates)
    .filter(currency => currency !== props.currency)
    .map((currency, i) => {
      return {
        key: i,
        currency: currency,
        amount: (rates[currency] * props.amount).toFixed(2),
      }
    })

  return (
    <Table
      // @ts-ignore
      columns={columns}
      dataSource={dataSource}
      loading={query.isLoading}
      pagination={false}
      size="small"
    />
  )
}

