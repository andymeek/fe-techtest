import React from 'react';
import { mount, shallow } from 'enzyme';

import Multiplier from '../../../src/components/Multiplier/Multiplier.jsx';

describe('<Multiplier />', () => {
    it('renders the component', () => {
        const wrapper = mount(<Multiplier />);

        expect(wrapper.text()).toContain('Col 1');
        expect(wrapper.text()).toContain('Col 2');
        expect(wrapper.text()).toContain('Col 3');
        expect(wrapper.text()).toContain('Col 4');
        expect(wrapper.text()).toContain('Col 5');
        expect(wrapper.text()).toContain('Col 6');
    })
})
