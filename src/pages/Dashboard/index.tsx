import React, { useEffect, useState } from 'react'
import AnimationLoading from '../../animations/loadingAnimation'
import QRcode from '../../components/qrcode'
import { useSocket } from '../../service/hooks/useSocket'

function Dashboard() {
  return (
    <div>
      <QRcode />
    </div>
  )
}

export default Dashboard
