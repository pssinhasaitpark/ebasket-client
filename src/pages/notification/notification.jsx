import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './notification.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotification, setSortOrder } from '../../store/slices/notification';
import Noresult from '../../asset/images/no-result copy.png';

function Notification() {
  const dispatch = useDispatch();
  const { notifications, sortOrder } = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(fetchNotification());
  }, [dispatch]);

  const handleSortChange = (order) => {
    dispatch(setSortOrder(order));
  };

  return (
    <div>
      <Container>
        <div className='notification-container rounded p-5 mt-4'>
          <Row className='flex-column'>
            <Col>
              <h3 className='font-weight-bold h4 text-light'>
                Total Notifications: {notifications.length || 0}
              </h3>
            </Col>
          </Row>
        </div>
        <div className='ms-2 d-flex justify-content-end'>
          <button
            className='language-btn btn dropdown-toggle ps-0 '
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='text-secondary'>
              {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
            </span>
          </button>
          <ul className='language dropdown-menu m-0 p-0'>
            <li>
              <a
                href='#'
                className='dropdown-item m-0'
                onClick={(e) => {e.preventDefault(); handleSortChange('asc');}}
              >
                Oldest
              </a>
            </li>
            <li>
              <a
                href='#'
                className='dropdown-item m-0'
                onClick={(e) => { e.preventDefault(); handleSortChange('desc');}}
              >
                Newest
              </a>
            </li>
          </ul>
        </div>
        <div>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <Card key={notification._id} className='border mb-3'>
                <Card.Body>
                  <Card.Title>{notification.subject}</Card.Title>
                  <Card.Text>{notification.message}</Card.Text>
                  <Card.Footer className='text-muted'>
                    Received at: {new Date(notification.createdAt).toLocaleString()}
                  </Card.Footer>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className='text-center'>
              <img src={Noresult} alt='No result' />
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Notification;
