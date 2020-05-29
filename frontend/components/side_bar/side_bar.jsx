import React from 'react'

const SideBar = () => (
    <div className="social-links">

        <span className= "social-link-header">Contact</span>

        <a className="social-link-item" href="https://github.com/xavixastro">
            <img src={window.gitHubURL} />
            <span>Github</span>
        </a>

        <a className="social-link-item" href="https://www.linkedin.com/in/xavixastro/">
            <img src={window.linkedInURL} />
            <span>LinkedIn</span>
        </a>

    </div>
)

export default SideBar