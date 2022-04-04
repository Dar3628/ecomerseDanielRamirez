import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Item from '../item/Item';
import items, { getItems } from '../itemList/ItemList';
//import Counter from './counter/Counter';


const ItemListContainer = () => {
    const [selectedItem, setSelItem] = useState(null);
    const [productDetail, setProductDetail] = useState({})
    const [cargandin, setCargandin] = useState(false)
    const otherFunction = (name) => {
         setTimeout(console.log({...items.name}), 1000);
         console.log(name);
    }
    useEffect(()=>{
        setCargandin(true)
        getItems.then(
          (res) => setProductDetail(res.find((item) => item.id === '03')))
        .catch((error) => console.log(error))
        .finally(() => setCargandin(false))
    }, [])


    return (
        <container>
            <Row xs={1} md={'auto'} className="g-4">
                
                    {items.map(({ id, name, price, stock, img}) => (
                        <Col >   
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body className="card-body">
                                    <Card.Title></Card.Title>
                                    <Item 
                                        key={id}
                                        id={id}
                                        name={name}
                                        price={price}
                                        stock={stock}
                                        setSelectedItem={setSelItem}
                                        otherFunction={otherFunction}
                                    />
                                    {console.log(selectedItem)};
                                </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                            </Card>
                        </Col>    
                    ))}
                            
                        
                        
                
            </Row>
        </container>    
    )

   
};



export default ItemListContainer;
