import React from 'react'

import Badge from '../badge/Badge'

const AnalyseCard = props => {
  return (
    <div>
        <div className={`analyse ${ props.backgroundColor}`} >
            <span> {props.badge} </span>
            <img src={ props.image } alt="" />
            <span> {props.conversation} </span>
        </div>
    </div>
  )
}

export default AnalyseCard