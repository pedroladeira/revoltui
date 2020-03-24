import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div className="m-6">{storyFn()}</div>);
