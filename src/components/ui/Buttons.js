import React from 'react';
import { render } from 'react-dom';
import Button from './StyledButton';

const App = () =>
  <div>
    <Button
      type="success"
      onClick={() => {
        console.log('success');
      }}
    >
      Success
    </Button>
    <Button
      type="danger"
      onClick={() => {
        console.log('danger');
      }}
    >
      Danger
    </Button>
    <Button
      type="primary"
      onClick={() => {
        console.log('primary');
      }}
    >
      Primary
    </Button>
    <Button
      type="gray"
      onClick={() => {
        console.log('gray');
      }}
    >
      Gray
    </Button>
    <Button
      type="accent"
      onClick={() => {
        console.log('accent');
      }}
    >
      Accent
    </Button>
  </div>;

render(<App />, document.getElementById('root'));
