import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/Contacts/api";
import { useEffect } from "react";


 function ContactsPage() {
   const { error, isLoading } = useSelector(state => state.contacts);
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

    return (
            <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        
        {error ? <h1>{error.message}</h1> :
          <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
        </div>
          } 
        <ContactList />
        {isLoading && <Loader />}
      </div>
    </div>
    )
}
export default ContactsPage