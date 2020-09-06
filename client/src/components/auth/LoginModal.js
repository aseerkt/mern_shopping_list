import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lo, loginUser, logoutUser } from '../../redux/action/authActions';
import { LOGIN_FAIL } from '../../redux/action/actionTypes';
import {
  Modal,
  ModalHeader,
  NavLink,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import { clearErrors } from '../../redux/action/errorActions';

function LoginModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux State
  const errorType = useSelector((state) => state.error.id);
  const errorMessage = useSelector((state) => state.error.msg);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleModal = (e) => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(clearErrors());
  }, [isOpen]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
    if (isAuthenticated) {
      setEmail('');
      setPassword('');
      toggleModal();
    }
  };

  return (
    <div>
      <NavLink onClick={toggleModal} href='#'>
        Login
      </NavLink>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          {errorType === LOGIN_FAIL ? (
            <Alert color='danger'>{errorMessage}</Alert>
          ) : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                id='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type='submit' block color='dark'>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LoginModal;
