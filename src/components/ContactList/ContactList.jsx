import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';


export function ContactList () {
    const contacts = useSelector(state => state.contacts.items);
   
    const filter = useSelector(state => state.filter);
     if(!contacts)return
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });

    return (
        contacts.length > 0 && <List>
            {filteredContacts.map(({ name, number, id },index) => {
                return <ContactListItem
                    index={index}
                    array={filteredContacts}
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            }
            )}
        </List>
    );
};
