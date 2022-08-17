
import React from 'react'
import { BtnStyle, FormStyle } from './styles'





export function Input() {


  return (
    <>
      <FormStyle>
        <input onChange={() => { }} type="text" />


        <BtnStyle onClick={() => { }} >
          Criar +
        </BtnStyle>
      </FormStyle>
    </>
  )
}