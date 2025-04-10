import React from "react";

function Links(props) {
    console.log('links in Links', props)
    const linkStyling = {
        display: 'flex',
        flexDirection: 'column'
    };

    const gitgubLinkStyle = {
        textDecoration: "underline", cursor: "pointer"
    }

    const linkedinLinkStyle = {
        textDecoration: "underline", cursor: "pointer"
    }

    return (
        <div style={linkStyling}>
            <h3>Links</h3>
            <div style={{flexDirection: "column", gap: "3px", color: 'blue', marginLeft: '5px',justifyContent: "start"}}>
                <div style={gitgubLinkStyle}><a href="{props.github}">{props.github}</a></div>
                <div style={linkedinLinkStyle}><a href="{props.linkedin}">{props.linkedin}</a></div>
            </div>

        </div>
    );
}

export default Links;