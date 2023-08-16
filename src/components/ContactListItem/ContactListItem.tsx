import * as Yup from 'yup';
import { Form, Formik, Field, FormikValues } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDeleteContactMutation, useEditContactMutation } from '../../redux/Contacts/api';
import Notiflix from 'notiflix';
import { TextField } from 'formik-mui';
import { Box, Button, ListItem, Typography } from '@mui/material';
import { ContactCreateType, ContactRequestType } from '../types';

export function ContactListItem({array,index,contactProps }:{array:ContactRequestType[],index:number,contactProps:ContactRequestType}) {
    const [removeContact, { isLoading }] = useDeleteContactMutation();
    const [editContact, { isLoading: load }] = useEditContactMutation();
    const [showForm, setShowForm] = useState<boolean>(false);
    const values: FormikValues = { name:contactProps.name, number:contactProps.number };
        
        const phoneSchema = Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(5)
            .required('A phone number is required');
        
        const validationSchema = Yup.object({
            name: Yup.string().max(20).required(),
            number: phoneSchema,
        });
    
    function changeContact(inputValues: FormikValues){
        const contact: ContactCreateType = {
            name: inputValues.name,
            number: inputValues.number,
        };
      
        if (array.find(({name}, pos) => name === contact.name && pos !== index)) {
           Notiflix.Report.info("warning!",'a contact with that name already exists',"ok");
            return
        }
        if (array.find(({ name, number }) => name === contact.name && number === contact.number)) {
            Notiflix.Report.info("warning!",'cotact data has not changed',"ok");
            return
        }
        editContact({ id:contactProps.id, contact });
        setShowForm(false)
    };
  
    return (
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', borderBottom:'1px solid black' }}>
            {!showForm ?
                (load || isLoading ? <Typography><b>please wait............</b></Typography> :
                    < >
                        <Box>
                            <Typography ><b>{contactProps.name} : </b> {contactProps.number}</Typography>
                        </Box>
                        <Box sx={{ ml: 'auto' }}>
                            <Button variant="contained" onClick={() => { setShowForm(true) }} type='button' sx={{ ml: '10px' }}>Edit</Button>
                            <Button variant="contained" onClick={() => { removeContact(contactProps.id) }} type='button' sx={{ ml: '10px' }}>Delete</Button>
                        </Box>
                    </>) : (
                    <Formik initialValues={values} onSubmit={changeContact} validationSchema={validationSchema} >
                        <Form style={{ width: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                <Box>
                                    <Field component={TextField} name="name" variant="standard" disabled={false} />
                                    <Field component={TextField} name="number" variant="standard" disabled={false} />
                                </Box>
                                <Box>
                                    <Button variant="contained" color='secondary' type="submit" sx={{ ml: '10px' }}>Confirm</Button>
                                    <Button variant="contained" color='secondary' type="button" onClick={() => { setShowForm(false) }} sx={{ ml: '10px' }} >Cancel</Button>
                                </Box> </Box>
                        </Form>
                    </Formik>
                )}
        </ListItem>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    array: PropTypes.array.isRequired,
    index:PropTypes.number.isRequired,
};

