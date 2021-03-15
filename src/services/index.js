import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid-api.mmediagroup.fr/v1'
})

export const endpoits ={
  cases: '/cases'
}

export default api