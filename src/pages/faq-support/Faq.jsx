import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'
const FaqPage = () => {
  return (
    <Container>
      <Row className="mt-1">

        <div className='faq-container-wrapper my-4'>

          <h5 className='font-weight-semi-bold '>Basics</h5>
          <Col md={12}>
            <Accordion>
              <Accordion.Item eventKey="0" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'>Do you have any built-in caching?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non veniam perferendis minima blanditiis eaque exercitationem molestiae eum iste ipsam necessitatibus recusandae reprehenderit commodi ad quod deserunt, animi assumenda culpa!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'> Can I add/upgrade my plan at any time?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'>What access comes with hosting plan?</Accordion.Header>
                <Accordion.Body>

                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'>How do I change my password?</Accordion.Header>
                <Accordion.Body>

                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </div>


        <div className='faq-container-wrapper my-4'>
          <h5 className='font-weight-semi-bold '> Account</h5>
          <Col md={12}>
            <Accordion>
              <Accordion.Item eventKey="0" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'>How do I change my password?</Accordion.Header>
                <Accordion.Body>

                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'> 
                <Accordion.Header className='border-bottom'>How do I delete my account?</Accordion.Header>
                <Accordion.Body>

                Lorem, ipsum dolor sit amet consectetur adipisicing elit.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom' >
                  How do I change my account settings?</Accordion.Header>
                <Accordion.Body>

                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden'>
                <Accordion.Header className='border-bottom'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Accordion.Header>
                <Accordion.Body>

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </div>
      </Row>

    </Container>
  );
};

export default FaqPage;