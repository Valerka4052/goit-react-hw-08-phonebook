import { Button, Container, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { CustomNavLink } from "../MuiCustom.styled";
import { useSelector } from "react-redux";
import { LogOut } from "../../redux/Authorisation/operations";
import { RootState, useAppDispatch } from "../../redux/store";

export function UserMenu() {
    const dispatch = useAppDispatch();
    const user = useSelector((state:RootState) => state.authorisation.user.name);

    return (
        <Container sx={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <CustomNavLink to='/contacts'>Contacts</CustomNavLink>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography sx={{ mr: '20px' }}>Welcome, {user}</Typography>
                <Button variant="contained" type="button" onClick={() => dispatch(LogOut())}>Logout</Button>
            </Box>
        </Container>
    );
};