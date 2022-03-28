import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Item from '../item/Item';
import items from '../itemList/ItemList';
// import Counter from './counter/Counter';


const ItemListContainer = () => {
    const [selectedItem] = useState(null);
    
    const otherFunction = () => {
        console.log({items:items.name});
    }

    return (
        <container>
            <Row sm->
                
                    <Col>   
                        {items.map(({ id, name, price}) => (
                            <Card>
                                <Card.Img variant="top" src="holder.js/60px120" />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Item 
                                        key={id}
                                        id={id}
                                        name={name}
                                        price={price}
                                        selectedItem={selectedItem}
                                        otherFunction={otherFunction}
                                    />
                                </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                            </Card>
                        ))}
                            
                        
                        
                    </Col>    
                
            </Row>
        </container>    
    )

   
};



export default ItemListContainer;
