import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux'; 
import { removeContact } from 'api';

export function ContactListItem({ name, number, id }) {
const dispatch = useDispatch()
    return (
        <Item >{name}: {number}
            <Button
                onClick={() => {
                    dispatch(removeContact(id))
                }}
                type='button'
            >
                Delete
            </Button>
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

