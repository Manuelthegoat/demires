import React from "react";
import Accordion from "react-bootstrap/Accordion";

const DrinkComponent = () => {
  return (
    <>
    
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header >Beer </Accordion.Header>
          <Accordion.Body>Carla rose</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Energy</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Can Drinks</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Bitters</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Spirit</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Red Wine</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Champagne</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Cream</Accordion.Header>
          <Accordion.Body>Arsor Wine</Accordion.Body>
          <Accordion.Body>Arsor Wine</Accordion.Body>
        </Accordion.Item>
        <br/>
      </Accordion>
    </>
  );
};

export default DrinkComponent;
