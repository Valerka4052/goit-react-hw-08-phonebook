import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import { LogIn } from 'redux/Sign/operations';
import { useDispatch } from 'react-redux';


export function LoginForm() {
   const dispatch = useDispatch()
    const getLoginIformation = (inputValues) => {
     
            const loginUser = {
                email: inputValues.email,
                password: inputValues.password
            };
            dispatch(LogIn(loginUser))
        // console.log(loginUser)
        
    };

        const values = {
            email: '',
            password: '',
        };
        
const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password:Yup.string().required(),
        });

        const submitForm = (values) => {
           getLoginIformation(values);
        };
        
    
    return (
        <Formik
            initialValues={values}
            onSubmit={(values, { resetForm }) => { submitForm(values); resetForm()}}
            validationSchema={validationSchema}
        >
            <Form>
                <label>Email<Field name="email" type="email" /><ErrorMessage name="email" t component="h3" /></label>
                <label>Password<Field name="password" type="password" /><ErrorMessage name="password" component="h3" /></label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
    };
