import React from 'react'
import "../styles/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Container ,Row,Col} from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <div className="homeImage">
                <div className="homeImageContent">
                    <p>
                        Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                        Most people who fall sick with COVID-19 will experience mild to moderate symptoms and 
                        recover without special treatment. However, some will become seriously ill and require medical attention.
                    </p>
                </div>
            </div>

            <div className="homeBody">

                <div className="box1">
                        <div className="boxContent">
                            <div className="boxTitle"> COVID-19 impact for Sri Lanka </div>
                            <div className="allCovidCard">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="covidCard">   
                                                <div className="allIcons">
                                                    <i class="fas fa-hospital-user fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local New Cases </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull-crossbones fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local New Deaths </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-procedures fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Total Cases </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-redo fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Recovered </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Total Deaths </h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>

                    <div className="box2">
                        <div className="boxContent">
                            <Card className="cardSL">
                                <Card.Img variant="top"/>
                                <Card.Body>
                                    <Card.Title> New Deaths </Card.Title>
                                    <Card.Text>
                                        10
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

            </div>

        </>
    )
}

export default Home
