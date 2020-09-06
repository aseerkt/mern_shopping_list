import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, logoutUser } from '../../redux/action/authActions';
import { returnErrors, clearErrors } from '../../redux/action/errorActions';
import { REGISTER_FAIL } from '../../redux/action/actionTypes';
import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';

function RegisterModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux States
  const errorType = useSelector((state) => state.error.id);
  const errorMessage = useSelector((state) => state.error.msg);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(clearErrors());
  }, [isOpen]);

  const toggleModal = (e) => setIsOpen(!isOpen);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    if (isAuthenticated) {
      setName('');
      setEmail('');
      setPassword('');
      setIsOpen(false);
    }
  };

  return (
    <div>
      <NavLink onClick={toggleModal} href='#'>
        Register
      </NavLink>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Register</ModalHeader>
        <ModalBody>
          {errorType === REGISTER_FAIL ? (
            <Alert color='danger'>{errorMessage}</Alert>
          ) : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor='name'>Name</Label>
              <Input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='text'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type='submit' block color='dark'>
              Register
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterModal;
