import { useForm } from "../hooks/useForm"

export const LoginPage = () => {

  const { errorMessage, onInputChange, formValidation } = useForm({ 
    username : "",
    password : "",
  })

  return (
    <>
    
    </>
  )
}
