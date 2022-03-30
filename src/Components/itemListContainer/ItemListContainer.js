import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Item from '../item/Item';
import items from '../itemList/ItemList';
// import Counter from './counter/Counter';


const ItemListContainer = () => {
    const [selectedItem, setSelItem] = useState(null);
    
    const otherFunction = (name) => {
         setTimeout(console.log({...items.name}), 1000);
         console.log(name);
    }

    return (
        <container>
            <Row xs={1} md={2} className="g-4">
                
                    {items.map(({ id, name, price, stock}) => (
                        <Col>   
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/60px120" /> */}
                                <Card.Body>
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
