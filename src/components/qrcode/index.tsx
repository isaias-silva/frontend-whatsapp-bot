import React, { useCallback, useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import AnimationLoading from '../../animations/loadingAnimation'
import { io } from 'socket.io-client'

interface IQr {
  status?: string
  qr:
    | undefined
    | {
        qr: string
      }
}

function Fetch<T>(): [boolean, T | undefined, string, () => void] {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(' ')
  const socket = io('ws://localhost:8081/')

  const sendReq = () => {
    socket.on('connect', () => {
      socket.emit('controlstart', 'qualquercoisa')
      setLoading(true)
      setError(' ')
    })
    socket.on('conn', (obj) => {
      setData(obj)
      console.log(obj)
      setLoading(false)
    })
  }
  const handleFetch = () => {
    sendReq()
  }

  return [loading, data, error, handleFetch]
}

function QRcode() {
  const [qr, setQr] = useState<string>(' ')
  const [loading, data, error, handleFetch] = Fetch<IQr>()

  const handleQrcode = useCallback(() => {
    if (data?.qr?.qr) {
      setQr(String(data.qr.qr))
    }
  }, [data])

  useEffect(() => {
    handleFetch()
    handleQrcode()
  })
  return (
    <div style={{ height: '700', margin: 'auto', width: '500', background: 'white' }}>
      {qr ? <QRCode value={qr} /> : error}
    </div>
  )
}

export default QRcode
