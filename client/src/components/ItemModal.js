import React, { useState, useEffect } from 'react';
import { addItem } from '../redux/action/itemActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';

function ItemModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [err, setErr] = useState(null);
  // Redux State
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setErr(null);
  }, [isOpen]);

  const toggleModal = (e) => setIsOpen(!isOpen);

  const postItem = (e) => {
    e.preventDefault();

    if (name === '' || name === null) return setErr('Item name is required');
    const newItem = {
      name,
    };
    dispatch(addItem(newItem));
    setName('');
    return toggleModal();
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h6>Welcome {user?.name}</h6>
          <br />
          <Button color='dark' onClick={toggleModal} className='mb-4'>
            Add Item +
          </Button>
        </>
      ) : (
        <h4>Login to Add Items</h4>
      )}

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Add Item to Shopping List
        </ModalHeader>
        <ModalBody>
          {err ? <Alert color='danger'>{err}</Alert> : null}
          <Form onSubmit={postItem}>
            <FormGroup>
              <Label htmlFor='item'>Item</Label>
              <Input
                type='text'
                value={name}
                id='item'
                onChange={(e) => setName(e.target.value)}
              />
              <Button block color='dark' className='mt-3'>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
