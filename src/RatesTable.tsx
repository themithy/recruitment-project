
import React from 'react'
import axios from 'axios'
import {
  Table,
} from 'antd'

interface RatesTableProps {
  amount: number
  currency: string
}

const API_URL = 'https://api.exchangeratesapi.io'

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

    axios.get(`${API_URL}/latest?base=${props.currency}`)
      .then(({ data }) => {
        setRates(data.rates)
        setLoading(false)
      })
  }, [ props.currency ])

  if (!props.amount) {
    return null
  }

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

