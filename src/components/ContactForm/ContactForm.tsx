import * as Yup from 'yup';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/Contacts/api';
import Notiflix from 'notiflix';
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';
import { Form, Formik, Field, FormikValues } from 'formik';
import { Box } from '@mui/material';
import { ContactCreateType } from '../types';

export function ContactForm() {
    const { data: contacts } = useGetContactsQuery(null);
    const [addContact, { isLoading }] = useAddContactMutation();

    const getValues = (values: FormikValues): void => {
        const { name, number } = values;
        if(contacts){
            if (name === '' || number === '') {
            return;
        } else if (contacts.some((contact) => contact.name === name)) {
            return Notiflix.Report.info("Внимание", `${name} is already in contacts`, "ок");
        } else {
            const contact: ContactCreateType = { name, number };
            addContact(contact);
            values.name = '';
            values.number = '';
        };}
    };
    const values: FormikValues = { name: '', number: '', };
    const phoneSchema = Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(5)
        .required('A phone number is required');
        
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        number: phoneSchema,
    });

    return (
        <Formik initialValues={values} onSubmit={(getValues)} validationSchema={validationSchema}>
            <Form>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        width: '100%',
                        ml: 'auto',
                        mr: 'auto',
                        // p: '30px',
                    }}>
                    <Field component={TextField} name="name" label="name" id="standard-basic" variant="standard" disabled={false} margin="normal" />
                    <Field component={TextField} name="number" label="number" id="standard-basic" variant="standard" disabled={false} margin="normal" />
                    <Box sx={{ ml: 'auto' }}>
                        <Button variant="contained" color="primary" type="submit" disabled={isLoading}>{isLoading ? 'please wait...' : 'add contact'}</Button>
                    </Box>
                </Box>
            </Form>
        </Formik>
    );
};
