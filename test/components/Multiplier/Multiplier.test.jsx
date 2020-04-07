import React from 'react'
import { mount } from 'enzyme'

import Multiplier, { Container } from '../../../src/components/Multiplier/Multiplier.jsx'
import Buttons, { Button } from '../../../src/components/Buttons/Buttons.jsx'

describe('<Multiplier />', () => {
    const wrapper = mount(<Multiplier limit={50} />)

    it('renders the <Container /> component', () => {
        expect(wrapper.find(Container)).toHaveLength(1)
    })

    it('renders the <Buttons /> component', () => {
        expect(wrapper.find(Buttons)).toHaveLength(1)
    })

    it('renders the correct amount of buttons', () => {
        expect(wrapper.find(Button).length).toEqual(50)
    })

    it('selected prop should be true when when first button is clicked', () => {
        expect(wrapper.find(Button).first().prop('selected')).toBe(false)

        wrapper.find(Button).first().simulate('click')

        expect(wrapper.find(Button).first().prop('selected')).toBe(true)
    })
})
