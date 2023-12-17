import React from 'react'
import classes from './mystyles.scss'
import './mystyles.scss'
import myImage from '../src/img/canary.png'

export const Test = () => {
  console.log(`Api base: ${process.env.API_BASE}`);
  return (
    <div className={classes.redBackground}>
      <h1>Hola Mundo!</h1>
      <img src={myImage} alt='Mi imagen' />
    </div>
  )
}
