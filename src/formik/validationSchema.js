import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    nombre: Yup.string().required('El campo nombre es requerido'),
    apellido: Yup.string().required('El campo apellido es requerido'),
    email: Yup.string().email('Ingrese un email valido').required('El campo email es requerido'),
    mensaje: Yup.string().min(10, 'Ingrese un minimo de 10 caracteres').required('El campo mensaje es requerido'),
})