import axios from 'axios'
import {host} from './consts'

export const get = async (url: string) => {
    return  (await axios.get(url)).data
}