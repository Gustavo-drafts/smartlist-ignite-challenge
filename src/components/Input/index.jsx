import { PlusCircle } from 'phosphor-react'
import { FormStyle, LinkStyle } from './styles'



export function Input() {


  return (
    <>
      <FormStyle action="">
        <input /* onChange={handleChange} */ type="text" />


        <LinkStyle /* onClick={handleSendTask} */ >
          Criar
          <PlusCircle size={16} />
        </LinkStyle>

      </FormStyle>
    </>
  )
}