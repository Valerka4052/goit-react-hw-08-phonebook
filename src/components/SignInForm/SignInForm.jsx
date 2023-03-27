import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import { signUp } from 'redux/Sign/operations';
import { useDispatch } from 'react-redux';


export function SignInForm() {
   const dispatch = useDispatch()
    const getSbmitInformation = (inputValues) => {
     
            const signUpUser = {
                name: inputValues.name,
                email: inputValues.email,
                password: inputValues.password
            };

        // console.log(signUpUser)
        dispatch(signUp(signUpUser))
    };

        const values = {
            name: '',
            email: '',
            password: '',
        };
        
const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password:Yup.string().required(),
        });

        const submitForm = (values) => {
           getSbmitInformation(values);
        };
        
    
        return (
            <Formik
                initialValues={values}
                onSubmit={(values, { resetForm }) => { submitForm(values); resetForm()}}
                validationSchema={validationSchema}
            >
                <Form>
                    <label>Name<Field name="name" /><ErrorMessage name="name" component="h3" /></label>
                    <label>Email<Field name="email" type="email"/><ErrorMessage name="email" t component="h3" /></label>
                    <label>Password<Field name="password" type="password"/><ErrorMessage name="password"  component="h3" /></label>
                    <button type="submit">Sign up</button>
                </Form>
            </Formik>
        );
    };
