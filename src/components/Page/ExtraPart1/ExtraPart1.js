import React from 'react';
import { Accordion } from 'react-bootstrap';
import faq from '../../../imges/faq-2.jpg';
import './ExtraPart.css'

const ExtraPart1 = () => {
    return (
      <div className="container">
        <h1 className="text-style">Frequently Ask Question ?</h1>
        <div className="faq">
          <div className="me-5">
            <img src={faq} alt="" />
          </div>

          <div className="mt-5">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2 className="fs-1"> what is fruit warehouse meaning?</h2>
                </Accordion.Header>
                <Accordion.Body>
                  A place for storing fresh fruits. In order to preserve fruits
                  most efficiently, a certain air temperature, air humidity, and
                  composition of the gaseous medium (content of oxygen and
                  carbon dioxide) must be maintained.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How fruits are stored warehouse?
                </Accordion.Header>
                <Accordion.Body>
                  There are five methods of storing vegetables and fruit:
                  drying, canning, curing and salting, freezing and common
                  storage. Which method is chosen depends upon the type of
                  produce, the quality desired and the facilities available for
                  storage.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What is the best material to store fruit in?
                </Accordion.Header>
                <Accordion.Body>
                  Any bowl can be a vessel for fresh fruit, but look for styles
                  that permit better air circulation all around to help maintain
                  freshness. It is better to choose a ceramic or, preferably, a
                  wire mesh bowl. Plastic or metal bowls tend to make fruit
                  sweat which can speed up deterioration.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    );
};

export default ExtraPart1;