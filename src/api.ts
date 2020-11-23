
import axios from 'axios'
import dateFormat from 'dateformat'

const API_URL = 'https://api.exchangeratesapi.io'

function createApiUrl(currency: string, day: number): string {
  let dateStr = 'latest'

  if (day !== 0) {
    const date = new Date()
    date.setDate(date.getDate() - day)

    dateStr = dateFormat(date, 'yyyy-mm-dd')
  }

  return `${API_URL}/${dateStr}?base=${currency}`
}

export interface RatesData {
  base: string
  rates: { [key: string]: number | undefined }
}

export function getRatesData(currency: string, day: number): Promise<RatesData> {
  return axios.get(createApiUrl(currency, day))
    .then(response => {
      return response.data
    })
}

