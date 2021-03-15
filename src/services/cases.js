import api, { endpoits } from './index'

export async function getCases(){
  const { get } = await api
  return get(endpoits.cases)
}