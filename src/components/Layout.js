import React from 'react'
import Container from 'react-bootstrap/Container'
export default function Layout(props) {
    return (
        <div className="d-flex justify-content-center">
            {props.children}
        </div>
    )
}
