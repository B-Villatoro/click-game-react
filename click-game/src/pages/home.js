import React from "react"
import {Col,Container,Row} from "react-bootstrap"
import Main from "../components/Main"
import Navbar from "../components/navbar"
import "./style.css"

class Home extends React.Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Container className="py-4">
                
                <Row className="my-4 justify-content-center">
                    <Col md="6" sm="12" className="whatever">
                        <Main  />
                    </Col>
                </Row >
            </Container>
            </div>
        )
    }
}//end class

export default Home;