import React from 'react'
import { mount } from 'enzyme'

import Buttons, { Button } from '../../../src/components/Buttons/Buttons.jsx'

const generateNumbers = (limit = 10) => [...Array(limit)].reduce(
    (acc, _, itemIndex) => [
        ...acc, {
            number: itemIndex + 1,
            selected: false,
        }],
    []
)

const defaultProps = {
    numbers: generateNumbers(),
    onClick: jest.fn()
}

describe('<Buttons />', () => {
    const wrapper = mount(<Buttons {...defaultProps} />)

    it('renders the correct amount of buttons', () => {
        expect(wrapper.find(Button).length).toBe(10)
    })

    it('generates the correct keys', () => {
        expect(wrapper.find(Button).first().key()).toBe(`button-1`)
        expect(wrapper.find(Button).at(4).key()).toBe(`button-5`)
        expect(wrapper.find(Button).last().key()).toBe(`button-10`)
    })

    it('should call onClick prop', () => {
        const firstButton = wrapper.find(Button).first()

        firstButton.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})
