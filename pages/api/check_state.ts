import {get} from './fetch'
import { check_state_url } from './urls'

export const check_state = async (uid: string) => {
    return await get(`${check_state_url}/${uid}`)
}