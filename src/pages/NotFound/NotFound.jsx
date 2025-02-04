import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './NotFound.css'
const NotFound = () => {
    return (
        <>
            <div className='not-found-div h-100 w-100 position-fixed d-flex align-items-center'>
                <Container>
                  <Row className='text-center'>
                    <p className='fw-bold text-secondary px-2'>404  <span className='ms-2'>|</span> Not Found</p>
                  </Row>
                </Container>
            </div>
        </>
    )
}

export default NotFound;
