import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../hooks/usefetch';
import useWindowresize from '../hooks/usewindowresize';

const Function = () => {
  const params=useParams();
  const location =useLocation();
  const {pathname}=location

  const {data,error,loading}=useFetch('https://dummyjson.com/products')
  const size=useWindowresize();
  console.log(size);
  
  
  
 

  if(loading){return (
    <div>loading</div>
  )}
  return (
    <div> Function  {params.id} {pathname}
    <div>
      {
        data?.products.length>0? data.products.map(data=>{return (
          <div key={data.id}>{data?.title}</div>
        )}):(
          <div>no products found</div>
        )
      }
    </div>
    
    
    </div>
  )
}

export default Function