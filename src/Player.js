import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Player = ({ id, Name, team, nationality, jerseyNumber, age, imgURL }) => {
  return (
    <div>
      {
        <Card
          style={{ width: "18rem" }}
          border="gray"
          bg="light"
          className="text-center"
        >
          <Card.Img width={200} height={400} variant="top" src={imgURL} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Card.Text>{nationality}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span>team:</span>
              {team}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>jerseyNumber:</span>
              {jerseyNumber}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>age:</span>
              {age}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      }
    </div>
  );
};

export default Player;
