import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormControl, Container } from 'react-bootstrap';

function Search() {
  return (
    <Container>
      <div className="mb-4 d-flex align-items-center">
        <FormControl
          className="food_search border-right-0 form-control form-control-lg input_search"
          placeholder="Search Product Items"
          aria-label="Search Product Items"
          style={{ width: '100%' }} 
        />
        <div
          variant="outline-primary"
          className="p-0 ml-2"
          style={{
            height: '100%',
            borderRadius: '0.25rem', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FaSearch />
        </div>
      </div>
    </Container>
  );
}

export default Search;
