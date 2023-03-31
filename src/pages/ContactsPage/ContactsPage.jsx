import { Box, Typography } from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useGetContactsQuery } from "redux/Contacts/api";

function ContactsPage() {
  const { error, isLoading, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    isLoading ? <Loader /> :
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '40px', }}>
        {error ? <h1>{error.message}</h1> :
          <Box sx={{ width: '40%' }}>
            <Typography variant="h2">Phonebook</Typography>
            <ContactForm />
            <Filter />
          </Box>}
        <ContactList />
      </Box>
  );
};

export default ContactsPage;