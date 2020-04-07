import React from 'react'
import sc from 'styled-components'

import { breakpoints } from './constants'

const Container = sc.div`
    display: flex;
    flex-direction: column;
    background-color: green;

    @media (min-width: ${breakpoints.medium}) {
        flex-flow: row wrap;
        div {
            flex: 1 0 calc(50% - 20px);
        }
        background-color: yellow;
    }

    @media (min-width: ${breakpoints.large}) {
        background-color: blue;
        div {
            flex: 1 0 calc(33.333% - 20px);
        }
    }
`

function Multiplier() {
    return (
        <Container>
            <div>Col 1</div>
            <div>Col 2</div>
            <div>Col 3</div>
            <div>Col 4</div>
            <div>Col 5</div>
            <div>Col 6</div>
        </Container>
    );
}

export default Multiplier
