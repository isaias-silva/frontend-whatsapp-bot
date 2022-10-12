import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import AnimationLoading from '../../animations/loadingAnimation'
import useQr from './hook/useQR'

interface IQr {
  status?: string
  qr: undefined | {
    qr: string
  }
}

function QRcode() {
  const [qr, setQr] = useState<string>(' ')

  const [data, loading, error] = useQr<IQr>('ws://localhost:8081/')

  
  useEffect(() => {
    if (data?.qr?.qr) setQr(String(data.qr.qr))
  }, [data])

  return (
    <div style={{ height: '700', margin: 'auto', width: '500', background: 'white' }}>
      <QRCode size={300} value={qr} />
    </div>
  )
}

export default QRcode
