import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [boolean, T | undefined, string, () => unknown ] => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>()
  const [error, setError] = useState(' ')
  useEffect(() => {
    if (loadOnStart) sendRequest()
    else setLoading(false)
  }, [])

  const request = () => {
    sendRequest()
  }

  const sendRequest = () => {
    setLoading(true)
    axios(config)
      .then((response) => {
        setError('')
        setData(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  return [loading, data, error, request]
}
