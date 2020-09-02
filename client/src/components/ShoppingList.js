import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

function ShoppingList (){
  const [items, setItems] = useState([
    { id: uuid(), name: 'Bat' },
    { id: uuid(), name: 'Ball' },
    { id: uuid(), name: 'Stump' },
    { id: uuid(), name: 'Cap' }
  ]);

  const addItem = (e) => {
    let name = prompt('Enter Item : ');
    if (name === '' || name === null) { alert('Empty!'); return false; }
    setItems(items => (
      [...items, { id: uuid(), name }]
    ));
    
  }

  return(
    <Container>

      <Button
        color="dark"
        onClick={addItem}
        className="mb-4"
      >
        Add Item +
      </Button>

      <ListGroup>
        <TransitionGroup>
          {items.map((item) => (
            <CSSTransition timeout={500} classNames="fade">
              <ListGroupItem key={item.id}>
              
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    setItems(items => (
                      items.filter(entry => entry.id !== item.id)
                    ))
                  }}
                >&times;</Button>
                {item.name}

              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>

    </Container>
  );
}

export default ShoppingList;