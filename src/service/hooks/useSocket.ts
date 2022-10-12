import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const useSocket = <T extends any>(url: string) : [ T | any, boolean |ArrayBuffer, undefined | string] => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>()
  const [error, setError] = useState(' ')
  useEffect(() => {
    request()
  }, [])

  function request() {
    const socket = io(url)
    socket.on('connect', () => {
      setLoading(false)
      console.log('Connectado')
      socket.emit('controlstart', 'qualquercoisa')
    })

    socket.on("conn", (obj) => {
      setLoading(false)
      setData(obj)
    })
  }

  return [data, loading, error]
}
