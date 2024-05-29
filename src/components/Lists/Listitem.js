import Link from 'next/link'
import React from 'react'

const ListItem = ({ children, className, href }) => {
    return (
        <li className={className}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

export default ListItem