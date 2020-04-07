import React from 'react'
import sc from 'styled-components'

import { breakpoints } from '../../common/constants'

const Button = sc.button`
    background: ${({ selected }) => selected ? 'orange' : 'yellow'};
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    min-height: 50px;

    &:focus {
        border: 5px solid red;
        outline: none;
    }

    @media (min-width: ${breakpoints.medium}) {
        flex: 1 0 calc(50% - 20px);
    }

    @media (min-width: ${breakpoints.large}) {
        flex: 1 0 calc(33.333% - 20px);
    }
`

function Buttons({ numbers, onClick: onButtonClick }) {
    return numbers && numbers.map(({ number, selected }) => {
        const onClick = () => onButtonClick(number)
        return <Button key={`button-${number}`} onClick={onClick} selected={selected}>{number}</Button>
    })
}

export { Button }
export default Buttons
