import * as Yup from 'yup';
import { Form, Formik, Field,FormikValues } from 'formik';
import { signUp } from '../../redux/Authorisation/operations';
import Notiflix from 'notiflix';
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';
import { SignUpUserType } from '../types';
import { useAppDispatch } from '../../redux/store';


export function SignUpForm() {
    const dispatch = useAppDispatch();
    const getSbmitInformation = (values:FormikValues) => {
        if (values.name === '' || values.email === '' || values.password === '') {
            return Notiflix.Report.failure( "Внимание" ,'Заполните все поля', "ок");
        };
        const newUser:SignUpUserType = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        dispatch(signUp(newUser));
    };

    const values: FormikValues = {
        name: '',
        email: '',
        password: '',
    };
        
    const validationSchema = Yup.object({
        name: Yup.string(),
        email: Yup.string().email(),
        password: Yup.string(),
    });
    
    return (
        <Formik
            initialValues={values}
            onSubmit={(values, { resetForm }) => { getSbmitInformation(values); resetForm() }}
            validationSchema={validationSchema}
        >
            <Form>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '30vw',
                    ml: 'auto',
                    mr: 'auto',
                    p: '30px',
                }}>
                    <Field component={TextField} variant='standard' name="name" label='Name' type="name" disabled={false} margin="normal" />
                    <Field component={TextField} variant='standard' name="email" label='Email' type="email" disabled={false} margin="normal" />
                    <Field component={TextField} variant='standard' name="password" label='Password' type="password" disabled={false} margin="normal" />
                    <Box sx={{ ml: 'auto' }}>
                        <Button variant="outlined" color="primary" type="submit" >Log In</Button>
                    </Box>
                </Box>
            </Form>
        </Formik>
    );
};
