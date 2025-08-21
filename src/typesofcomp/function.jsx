import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Function = () => {
  const params=useParams();
  const location =useLocation();
  const {pathname}=location
  console.log(location)
  return (
    <div> Function  {params.id} {pathname}</div>
  )
}

export default Function