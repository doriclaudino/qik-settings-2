import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
// import { action } from '@storybook/addon-actions';

import README from './README.md';
import ColorPicker from './ColorPicker';

const stories = storiesOf('ColorPicker', module).addDecorator(withReadme(README));

stories.add('Default', () => {
  const [color, setColor] = useState('red');
  return <ColorPicker color={color} onChange={(color)=>setColor(color.rgb)}/>
});

stories.add('With title', () => {
  const [color, setColor] = useState('red');
  return <ColorPicker title='teste' color={color} onChange={(color)=>setColor(color.rgb)}/>
});

stories.add('No color', () => {
  return <ColorPicker />
});