import React from 'react'
import { Card1 } from "@ui-kit/cards/card-1"
import Button from '@mui/material/Button';
import {Container, Row, Col, Box} from "@grid"


export const MainPage = () => {
    const isAuth = true
    const users = [
        {id: 1, name: 'Jon'},
        {id: 2, name: 'Ben'},
        {id: 3, name: 'Alex'}
    ]


    return <div>

        <br/>

        <Container>
            <Row
                mobile={{ offsetY: 20 }}
                tablet={{ offsetX: 10 }}
            >
                {users.map((user) => (
                    <Col mobileSize={12}
                         tabletSize={4}
                    >
                        <Card1 {...user} />
                    </Col>))
                }
            </Row>

        </Container>

        <br/>

        <Box justifyContent='center' >
            <Button variant="contained" >
                Добавить юзера
            </Button>
        </Box>


    </div>
}