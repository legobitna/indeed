import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {Form, inputGroupPrepend, InputGroup, Button, Col, Container, Row} from 'react-bootstrap'

export default function Login() {
    let history =useHistory();// 다음화면으로 이동 
    const dispatch = useDispatch();//state를 보내줌 
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [currentUser,setCurrentUser] = useState({});
    const onSubmit= (e) => {
        e.preventDefault()
        setCurrentUser (email, password);
        history.push('/homepage')// 다음화면으로 이동 
        dispatch({type:'SIGN_IN',payload:{email,password}}); //state를 보내줌 
    }

    return (
        <Container>
            
            <Form onSubmit ={onSubmit}>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
    </Col>
  </Form.Group>
  <fieldset>
   
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
</Container>
    )
}
