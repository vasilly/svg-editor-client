import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import  './storybook.css';

const req = require.context('../src/components', true, /\.story\.js$/)

addDecorator(story => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename));
  require('../src/stories');
}

configure(loadStories, module);
