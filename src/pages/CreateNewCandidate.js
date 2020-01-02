import React,{useState} from 'react'
import {Form, inputGroupPrepend, InputGroup, Button, Col, Container, Row} from 'react-bootstrap'

export default function CreateNewCandidate() {
    const [validated, setValidated] = useState(false);
    const [candidate, setCandidate] = useState({});

    const handleSubmit = async(event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      
      const config={
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(candidate)
    }
    const response= await fetch("http://localhost:3001/candidates",config)
    };

    return (
        <div>
    <Container>    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange= {(e)=> setCandidate({...candidate, first_name:e.target.value})}
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange= {(e)=> setCandidate({...candidate, lastfirst_name:e.target.value})}
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange= {(e)=> setCandidate({...candidate, email:e.target.value})}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>genderFirst name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="gender"
            onChange= {(e)=> setCandidate({...candidate, gender:e.target.value})}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Photo URL"
            onChange= {(e)=> setCandidate({...candidate, photo_url:e.target.value})}
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required   onChange= {(e)=> setCandidate({...candidate, city:e.target.value})}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" required  onChange= {(e)=> setCandidate({...candidate, country:e.target.value})} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company" required  onChange= {(e)=> setCandidate({...candidate, company:e.target.value})}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
         
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Job Title" required  onChange= {(e)=> setCandidate({...candidate, job_title:e.target.value})}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>     
        </div>
    )
}
