import React, { Children } from 'react'

const Lists = ({ children, className }) => {
    return (
        <ul className={className}>{children}</ul>
    )
}

export default Lists