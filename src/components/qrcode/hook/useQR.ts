import { SocketAddress } from 'net'
import { io } from 'socket.io-client'
import React, { useEffect, useState } from 'react'

function useQr<T>(
  url: string,
  loadOnStart: boolean = true
): [T | undefined, boolean | undefined, string, () => void] {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(' ')
  const socket = io(url)

  useEffect(() => {
    if (loadOnStart) sendReq()
    else setLoading(false)
  }, [])

  function request() {
    sendReq()
  }
  const sendReq = () => {
    socket.on('connect', () => {
      socket.emit('controlstart', 'qualquercoisa')
      setLoading(true)
      setError(' ')
    })
    socket.on('conn',async (obj: T) => {
     await setData(obj)
      setLoading(false)
      setError(' ')
    })
  }

  return [data, loading, error, request]
}

export default useQr
