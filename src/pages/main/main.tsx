import React from 'react'
import {observer} from "mobx-react-lite";
import { Card1 } from "@ui-kit/cards/card-1"
import Button from '@mui/material/Button';
import {Container, Row, Col, Box} from "@grid"
import { users } from '@store/users'
import { profile } from '@store/profile'


export const MainPage = observer(() => {
    const addUserHandler = (e) => {
              users.add()
          }
    
    return <div>

        <br/>

        <Container>
            <Row
                mobile={{ offsetY: 20 }}
                tablet={{ offsetX: 10 }}
            >
                {users.userList.map((user) => (
                    <Col mobileSize={12}
                         tabletSize={4}
                    >
                        <Card1 {...user} key={user.id} />
                    </Col>))
                }
            </Row>

        </Container>

        <br/>

        {profile.isAuth && <Box justifyContent='center' >
            <Button variant="contained" onClick={addUserHandler} >
                Добавить юзера
            </Button>
        </Box>}

        <br/>

    </div>
})