import React, { useState } from 'react'
import sc from 'styled-components'

import Buttons from '../Buttons/Buttons.jsx'
import { breakpoints } from '../../common/constants'

const Container = sc.div`
    display: flex;
    flex-direction: column;
    margin: 0 25% auto;

    @media (min-width: ${breakpoints.medium}) {
        flex-flow: row wrap;
    }
`

function Multiplier({ limit = 144 }) {
    const [numbers, setNumbers] = useState([...Array(limit)].reduce(
        (acc, _, itemIndex) => [
            ...acc, {
                number: itemIndex + 1,
                selected: false,
            }],
        []
    ))

    const onClick = (selectedNumber) => setNumbers(numbers.map(
        ({ number }) => ({
            number,
            selected: number % selectedNumber === 0,
        })
    ))

    return (
        <Container>
            <Buttons numbers={numbers} onClick={onClick} />
        </Container>
    );
}

export { Container }
export default Multiplier
