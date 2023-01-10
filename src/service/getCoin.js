import axios from "axios"
import { BASE_URL } from "consts"

export const getCoin = () => {
  return axios.get(`${BASE_URL}`)
} 
