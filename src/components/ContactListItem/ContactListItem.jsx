import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage} from 'formik';


import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux'; 
import { editContact, removeContact } from 'redux/Contacts/api';
import { useState } from 'react';

export function ContactListItem({ name, number, id, array, index }) {
    console.log(array)
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch()

            const values = {
            name,
            number,
        };
        
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
    
    function changeContact(inputValues){
       
            const contact = {
                name: inputValues.name,
                number: inputValues.number,
        };
      
        if (array.find(({name}, pos) => name === contact.name && pos !== index)) {
            alert('такой контакт уже сущевствует')
            return
        }
        if (array.find(({ name, number }) => name === contact.name && number === contact.number)) {
            alert('изменения не внесены')
            return
        }
        dispatch(editContact({ id, contact }))
        setShowForm(false)
    };
  


    return (
        <Item >{!showForm ?
            (<div>{name}: {number}
            <Button
                onClick={() => {
                    setShowForm(true)
                }}
                type='button'
            >
                Edit
            </Button>
            <Button
                onClick={() => {
                    dispatch(removeContact(id))
                }}
                type='button'
            >
                Delete
            </Button></div>):
           ( <Formik
                initialValues={values}
                onSubmit={changeContact}
                validationSchema={validationSchema}
            >
                <Form>
                    <Field name="name" /><ErrorMessage name="name" component="p" />
                    <Field name="number" /><ErrorMessage name="number" type="number" component="p" />
                    <Button type="submit">Confirm</Button>
                    <Button type="button" onClick={() => {
                       
                        setShowForm(false);
                    }}>Cancel</Button>
                </Form>
            </Formik>)}
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    array: PropTypes.array.isRequired,
    index:PropTypes.number.isRequired,
};

