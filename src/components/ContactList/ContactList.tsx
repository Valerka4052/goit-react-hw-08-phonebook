import { Box, List, Typography } from '@mui/material';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/Contacts/api';
import { RootState } from '../../redux/store';
import { ContactRequestType } from '../types';


export function ContactList () {
    const { data } = useGetContactsQuery(null);
    const filter = useSelector((state: RootState) => state.filter);
    if (!data) return null;
    const normalizedFilter = filter.trim().toLowerCase();
    const filteredContacts = data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    return (
        data.length > 0 ?
        <Box sx={{ width: 'auto', pt: '40px' }}>
            <Typography variant="h3">Contacts [{data.length}]</Typography>
            <List>
                {filteredContacts.map(({id,name,number}:ContactRequestType, index) => {
                    return <ContactListItem
                        key={id}
                        index={index}
                        array={filteredContacts}
                        contactProps={{ id, name, number }} number={''} id={''} name={''}                    />
                }
                )}
            </List>
            </Box> :
          <Typography variant="h3">There is no contacts yet</Typography>  
    );
};
