import React from 'react'

const badgeStyle = {

}

const Badge = props => {
  return (
    <div className={`badge badge-${props.type}`}>
        { props.content }
    </div>
  )
}

export default Badge