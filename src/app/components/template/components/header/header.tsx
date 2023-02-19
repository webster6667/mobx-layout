import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import {profile} from '@store/profile'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Container, Box } from "@grid";
import { PrimaryModal } from "@modal/primary";
import {useSwitch} from '@hook'

import { Wrapper, AuthBtn, Logo, UserData } from "./styles";


import LogoPath from "@icons/logo.svg";
import LoginIconPath from "@icons/login.svg";
import LogoutIconPath from "@icons/logout.svg";

export const Header: FC = observer(() => {
    const [isModalOpen, openModal, closeModal] = useSwitch(false),
          isAuth = profile.isAuth,
          loginClickHandler = () => {
            profile.auth({id: 1, username: 'Webster'})
            closeModal()
          },
          logoutClickHandle = () => {
              profile.logout()
          }

    return (
        <Wrapper>
            <PrimaryModal isOpen={isModalOpen} onClose={closeModal} >
                <Button variant="contained" onClick={loginClickHandler} >
                    Войти
                </Button>
            </PrimaryModal>
            <Container>
                <Box justifyContent="space-between" alignItems="center">
                    <Link to={"/"}>
                        <Logo src={LogoPath} alt="logo" />
                    </Link>

                    <Box alignItems="center" >
                        {isAuth && <UserData>{profile.profileData}</UserData>}
                    {isAuth
                        ? <AuthBtn onClick={logoutClickHandle} src={LogoutIconPath} alt="logout" />
                        : <AuthBtn onClick={openModal} src={LoginIconPath} alt="login" />
                    }
                    </Box>


                </Box>
            </Container>
        </Wrapper>
    );
});
