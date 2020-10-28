
import dateFormat from 'dateformat'

const API_URL = 'https://api.exchangeratesapi.io'

export function getUrl(currency: string, day: number): string {
  let dateStr = 'latest'

  if (day !== 0) {
    const date = new Date()
    date.setDate(date.getDate() - day)

    dateStr = dateFormat(date, 'yyyy-mm-dd')
  }

  return `${API_URL}/${dateStr}?base=${currency}`
}

