import React from 'react'

const Button = ({button}) => {
  return (
    <div>
      <div className="button">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button"className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
      </div>
    </div>
  )
}

export default Button
