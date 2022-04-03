import React, { useEffect, useState } from 'react'
import ItemDetail from '../item/ItemDetail'
import getItems  from '../itemList/ItemList'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState({})
const [cargandin, setCargandin] = useState(false)

        useEffect(()=>{
            setCargandin(true)
            getItems
            .then((res) => setProductDetail(res.find((item) => item.id === '03')))
            .catch((error) => console.log(error))
            .finally(() => setCargandin(false))
        }, [])
  return (
    <div>
        {cargandin ? <p>CARGANDING</p> :  <ItemDetail productDetail={productDetail}/>}
       
    </div>
  )
}

export default ItemDetailContainer