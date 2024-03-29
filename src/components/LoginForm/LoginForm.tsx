import * as Yup from 'yup';
import { Form, Formik, Field, FormikValues } from 'formik';
import { LogIn } from '../../redux/Authorisation/operations';
import Notiflix from 'notiflix';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { useAppDispatch } from '../../redux/store';
import { LoginUserType } from '../types';


export function LoginForm() {
    const dispatch = useAppDispatch();
    const getLoginIformation = (values: FormikValues): void => {
        const { email, password } = values;
        if (email === '' || password === '') return Notiflix.Report.warning("Внимание", 'Заполните все поля ввода', "oк");
        const loginUser: LoginUserType = { email, password };
        dispatch(LogIn(loginUser));
    };
    const values: FormikValues = { email: '', password: '' };
    const validationSchema = Yup.object({
        email: Yup.string().email(),
        password: Yup.string(),
    });
    return (
        <Box sx={{ p: '40px', height: '100%', }}>
            <Formik
                initialValues={values}
                onSubmit={(values, { resetForm }) => { getLoginIformation(values); resetForm() }}
                validationSchema={validationSchema}
            >
                <Form >
                    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        width: '30vw',
                        ml: 'auto',
                        mr: 'auto',
                        p: '30px',
                    }}>
                        <Field component={TextField} variant='standard' name="email" label='Email' type="email" disabled={false} margin="normal" />
                        <Field component={TextField} variant='standard' name="password" label='Password' type="password" disabled={false} margin="normal" />
                        <Box sx={{ ml: 'auto', }}>
                            <Button variant="outlined" color="primary" type="submit" >Log In</Button>
                        </Box>
                    </Box>
                </Form>
            </Formik>
        </Box>
    );
};
