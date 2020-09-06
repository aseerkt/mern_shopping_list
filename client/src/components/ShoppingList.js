import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Importing actionCreators
import { deleteItem } from '../redux/action/itemActions';

import ItemModal from './ItemModal';

function ShoppingList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.docs);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Container>
      <ItemModal />

      <ListGroup>
        <TransitionGroup>
          {items.map((item) => (
            <CSSTransition key={item._id} timeout={500} classNames='fade'>
              <ListGroupItem>
                {isAuthenticated ? (
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={(e) => dispatch(deleteItem(item._id))}
                  >
                    &times;
                  </Button>
                ) : null}
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
