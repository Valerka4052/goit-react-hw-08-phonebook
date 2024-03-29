import { Box, Typography } from "@mui/material";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useGetContactsQuery } from "../../redux/Contacts/api";

function ContactsPage() {
  const { isLoading, refetch } = useGetContactsQuery(null);
  useEffect(() => { refetch(); }, [refetch]);

  return (
    isLoading ? <Loader /> :
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'flex-start', p: '40px', }}>
        <Box sx={{ width: 'auto' }}>
          <Typography variant="h2">Phonebook</Typography>
          <ContactForm />
          <Filter />
        </Box>
        <ContactList />
      </Box>
  );
};

export default ContactsPage;