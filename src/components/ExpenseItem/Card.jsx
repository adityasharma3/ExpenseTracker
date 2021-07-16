import React from 'react'
import { CardDisplay } from './ExpenseItemStyles'

const Card = (props) => {
    return (
        <CardDisplay>
            {props.children}
        </CardDisplay>
    )
}

export default Card
