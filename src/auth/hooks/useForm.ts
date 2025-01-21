import { FormEvent, useState } from "react";
import { Admin, FormErrors } from "../interfaces";

export const useForm = (initialForm: Admin) => {
  const [formState, setFormState] = useState<Admin>(initialForm);

  const [errors, setErrorMessage] = useState<FormErrors>({})

  const onInputChange = ({ target }: FormEvent) : void  => {
    const { name, value } = target as HTMLInputElement;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));

    setErrorMessage(( currentError ) => {
      return {
        ...currentError,
        [name] : false,
      }
    } );
  
  };

  const onResetForm = () : void  => {
    setFormState( initialForm);
  }


  const formValidation = ( { username, password, email} : Admin) : boolean  => {
    const message : FormErrors= {}
    let isValidate : boolean = true;

    if ( username.length <= 0 ) {
      message.username = 'Field empty, please enter your name ';
      isValidate = false;
    }
    if ( email.length <= 0 ) {
      message.email = 'Field empty, please enter your name ';
      isValidate = false;
    }
    if ( password.length <= 0 ) {
      message.password = 'Field empty, please enter your password ';
      isValidate = false;
    }

    setErrorMessage( message );

    return isValidate;
  }
  

  return {
    formState,
    ...formState,
    onInputChange,
    onResetForm,
    errors,
    formValidation,
  };
};