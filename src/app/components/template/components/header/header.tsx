import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Container, Box } from "@grid";
import { PrimaryModal } from "@modal/primary";
import {useSwitch} from '@hook'

import { Wrapper, AuthBtn, Logo } from "./styles";


import LogoPath from "@icons/logo.svg";
import LoginIconPath from "@icons/login.svg";
import LogoutIconPath from "@icons/logout.svg";

export const Header: FC = () => {
    const [isModalOpen, openModal, closeModal] = useSwitch(false)

    const isAuth = false

    return (
        <Wrapper>
            <PrimaryModal isOpen={isModalOpen} onClose={closeModal} >
                <Button variant="contained" >
                    Войти
                </Button>
            </PrimaryModal>
            <Container>
                <Box justifyContent="space-between" alignItems="center">
                    <Link to={"/"}>
                        <Logo src={LogoPath} alt="logo" />
                    </Link>

                    {isAuth
                        ? <AuthBtn src={LogoutIconPath} alt="logout" />
                        : <AuthBtn onClick={openModal} src={LoginIconPath} alt="login" />
                    }


                </Box>
            </Container>
        </Wrapper>
    );
};
