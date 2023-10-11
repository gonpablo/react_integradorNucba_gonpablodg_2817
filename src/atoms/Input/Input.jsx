import { InputElement, InputStyle, InputTextError, TextAreaElement } from './InputStyles'
import { ErrorMessage, Field } from 'formik'
import { RiErrorWarningFill } from "react-icons/ri";

const Input = ({
    name,
    htmlFor,
    type,
    id,
    children,
    full = '',
}) => {

    switch(type) {
        case 'textarea':
        return (
            <Field name={name}>
                {
                ({field, form: {errors, touched}}) => (
                <>
                <InputStyle full={full}>
                    <TextAreaElement type={type} id={id} {...field} isError={errors[field.name] && touched[field.name]} />
                    <label className='--textarea' htmlFor={htmlFor}>{children}</label>
                    <ErrorMessage name={field.name}>
                        {
                        (message) => <InputTextError><RiErrorWarningFill/>{message}</InputTextError>
                        }
                    </ErrorMessage>
                </InputStyle>
                </>
                )
                }
                
            </Field>
        );

        default:  
        return (
            <Field name={name}>
                {
                ({field, form: {errors, touched}}) => (
                <>
                <InputStyle full={full}>
                    <InputElement type={type} id={id} {...field} isError={errors[field.name] && touched[field.name]} />
                    <label htmlFor={htmlFor}>{children}</label>
                    <ErrorMessage name={field.name}>
                        {
                        (message) => <InputTextError><RiErrorWarningFill/>{message}</InputTextError>
                        }
                    </ErrorMessage>
                </InputStyle>
                </>
                )
                }
            </Field>
        )       
    } 

    
}
  

export default Input
