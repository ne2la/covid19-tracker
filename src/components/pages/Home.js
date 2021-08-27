import React,{useState} from 'react'
import "../styles/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Row,Col,Button} from 'react-bootstrap'
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

const Home = ({data}) => {

    const [graphName,setGraphName] = useState('pie')

    const localData = {
        local_total_cases:data.data.local_total_cases,
        local_recovered:data.data.local_recovered,
        local_deaths:data.data.local_deaths,
        local_active_cases:data.data.local_active_cases,
    }

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
                            <div className="updateTime"> Last Update Time : {data.data.update_date_time} </div>
                            <div className="allCovidCard">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="covidCard">   
                                                <div className="allIcons">
                                                    <i class="fas fa-procedures fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local New Cases </h5>
                                                <h5 className="dataCount"> {data.data.local_new_cases} </h5>

                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull-crossbones fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local New Deaths </h5>
                                                <h5 className="dataCount"> {data.data.local_new_deaths} </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-hospital-user fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Total Cases </h5>
                                                <h5 className="dataCount"> {data.data.local_total_cases} </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-redo fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Recovered </h5>
                                                <h5 className="dataCount"> {data.data.local_recovered} </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard deaths">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Local Total Deaths </h5>
                                                <h5 className="dataCount"> {data.data.local_deaths} </h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                
                        </div>
                        <hr className="hrRule"/>
                        <div className="updateTime"> 
                            These charts are showing local total cases, local active and recovered cases. 
                            The data gathered from the API provided by the ministry of health in Sri Lanka.
                            You can view these data by selecting 3 different charts 
                        </div>
                            <div className="graphs">
                                <div className="graphButtons">
                                    <Button onClick={() => setGraphName('pie')} variant='secondary'> Pie Chart </Button>
                                    <Button onClick={() => setGraphName('bar')} variant='secondary'> Bar Chart </Button>
                                    <Button onClick={() => setGraphName('doughnut')} variant='secondary'> Doughnut Chart </Button>
                                </div>
                                <div className="graphDisplay">
                                    {graphName === 'pie' ? <PieChart apiData={localData}/> :
                                    graphName === 'bar' ? <BarChart apiData={localData}/> :
                                    <DoughnutChart apiData={localData}/>}
                                </div>
                                
                            </div>
                    </div>

                    <div className="box2">
                        <div className="boxContent">
                            <div className="boxTitle"> COVID-19 Global Impact </div>
                            <div className="updateTime"> Last Update Time : 2020-09-21 34:67 </div>
                            <div className="allCovidCard">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="covidCard">   
                                                <div className="allIcons">
                                                    <i class="fas fa-hospital-user fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Global New Cases </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard deaths">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull-crossbones fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Global New Deaths </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-procedures fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Global Total Cases </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard">
                                                <div className="allIcons">
                                                    <i class="fas fa-redo fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Global Recovered </h5>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="covidCard deaths">
                                                <div className="allIcons">
                                                    <i class="fas fa-skull fa-3x"/>
                                                </div>
                                                <h5 style={{paddingLeft:'10px'}}> Global Total Deaths </h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>

            </div>

        </>
    )
}

export default Home
