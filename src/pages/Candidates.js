import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  ListGroupItem
} from "react-bootstrap";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch("http://localhost:3001/candidates");
      const data = await response.json();
      setCandidates(data);
    };
    getCandidates();
  }, []);

  const onDeleteCandidate = (e, id) => {
    e.preventDefault();
    const config = {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3001/candidates/${id}`, config);
    const newCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(newCandidates);
  };

  return (
    <Container fluid>
      <Row>
        {candidates.map(candidate => {
          return (
            <Col col="3" key={candidate.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={candidate.photo_url} />
                <Card.Body>
                  <Card.Title>
                    {candidate.first_name + " " + candidate.last_name}
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{candidate.email}</ListGroupItem>
                  <ListGroupItem>{candidate.company}</ListGroupItem>
                  <ListGroupItem>{candidate.job_title}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={`/candidates/${candidate.id}`}>
                    Edit
                  </Card.Link>
                  <Card.Link
                    onClick={e => onDeleteCandidate(e, candidate.id)}
                    href={`/candidates/${candidate.id}`}
                  >
                    Delete
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
