
import React from 'react'
import axios from 'axios'
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
  const [ loading, setLoading ] = React.useState(true)
  const [ rates, setRates ] = React.useState<{ [key: string]: number }>({})

  React.useEffect(() => {
    setLoading(true)

    axios.get(getUrl(props.currency, props.day))
      .then(({ data }) => {
        setRates(data.rates)
        setLoading(false)
      })
  }, [ props.currency, props.day ])

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
      loading={loading}
      pagination={false}
      size="small"
    />
  )
}

