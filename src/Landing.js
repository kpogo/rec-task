import React from 'react';
import Form from './components/form/Form';

const Landing = () => {
  return (
    <div className="container">
      <div className="form-card">
        <div className="form-card-header">
          <h2>
            <i className="fas fa-user-plus mr-2"></i>Sign-up
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Landing;
