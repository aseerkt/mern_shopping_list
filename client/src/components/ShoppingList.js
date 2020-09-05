import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Importing actionCreators
import { getItems, deleteItem } from '../redux/action/itemActions';

import ItemModal from './ItemModal';

function ShoppingList (){
  const dispatch = useDispatch();
  const items = useSelector(state=> state.items.docs);

  useEffect(() => {
    console.log('GET');
    dispatch(getItems());
  }, []);

  return(
    <Container>

      <ItemModal />

      <ListGroup>
        <TransitionGroup>
          {items.map((item) => (
            <CSSTransition key={item._id} timeout={500} classNames="fade">
              <ListGroupItem >
              
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={(e) => dispatch(deleteItem(item._id))}
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