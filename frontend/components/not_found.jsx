import React from 'react'

const NotFound = () => (
    <div className="not-found">
        <h2 className="not-found-child">This page isn't available</h2>
        <h3 className="not-found-child">The link you followed may be broken, or the page may have been removed.</h3>
        <img className="not-found-child" src={window.notFoundURL}/>
    </div>
)

export default NotFound