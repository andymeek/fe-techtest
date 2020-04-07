import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/app.js';
import Multiplier from '../src/components/Multiplier/Multiplier.jsx';

describe('<App />', () => {
    it('renders the <Multiplier /> component', () => {
        expect(shallow(<App />).find(Multiplier)).toHaveLength(1);
    })
})
