import React , {useState} from 'react';
import { addItem } from '../redux/action/itemActions';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function ItemModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const toggleModal = (e) => setIsOpen(!isOpen);

  const postItem = (e) => {
    e.preventDefault();

    if (name ==='' || name === null) return false;
    const newItem = {
      name
    }
    dispatch(addItem(newItem));
    setName('');
    return toggleModal();
  }

  return (
    <div>
      <Button
        color="dark"
        onClick={toggleModal}
        className="mb-4"
      >
        Add Item +
      </Button>
      
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Add Item to Shopping List
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={postItem}>
            <FormGroup>
              <Label htmlFor="item">Item</Label>
              <Input
                type="text"
                value={name}
                id="item"
                onChange={e => setName(e.target.value)}
              />
              <Button block color="dark" className="mt-3">Add Item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal
