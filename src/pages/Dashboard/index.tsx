import React, { useEffect } from 'react'
import AnimationLoading from '../../animations/loadingAnimation'

import { useAxios } from '../../service/hooks/useAxios'


function Dashboard(){
  const [loading, data, error] = useAxios({
    method: 'GET',
    url: '',
  })
  
  if (loading) return <AnimationLoading />
  if (error !== ' ') return <p>{error}</p>
  if (!data) return <p>dados não encontrados</p>

  return (
    <div>
      <h1>ubgvyuv</h1>
    </div>
  )
}

export default Dashboard
