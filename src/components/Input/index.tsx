
import React, { InputHTMLAttributes } from 'react'
import { BtnStyle, FormStyle, InputStyle } from './styles'

import { Task } from '../../@types/tasks';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  btn?: () => void,
}




export function Input({ btn, ...props }: InputProps ) {






  return (
    <FormStyle>      
      <InputStyle  {...props} />

      <BtnStyle onClick={btn}>
        Criar +
      </BtnStyle>
    </FormStyle>
  )
}