import React from 'react'
import axios from 'axios'
import './Style.css'

function Api1(){
  const [data, setData] = React.useState([])

  React.useEffect(()=>{
    axios.get("https://api.escuelajs.co/api/v1/products")
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return(<>
    <div className='main'>
  {data.map((value, index)=>{
    return(
      <div className='product' key={index}>
        <img className='product-img' src={value.images} alt={value.title}/>
        <h2 className='product-title'>{value.title}</h2>
        <p className='product-price'>${value.price}</p>
      </div>
    )
  })}
</div>
  </>)
}
export default Api1
