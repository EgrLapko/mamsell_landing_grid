import React from 'react'

const Story = ({ header, title, text }) => {
    return (
        <div className="story">
            <h3 className="story__header">{header}</h3>
            <h2 className="story__title">&ldquo;{title}&rdquo;</h2>
            <p className="story__text">
                {text}
            </p>
            <button className="btn white">Find your beauty</button>
        </div>
    )
}

export default Story;