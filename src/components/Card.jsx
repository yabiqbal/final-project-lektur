import React, { Component, Fragment } from 'react';
// import Detail from '../page/Detail'
import { Card, Container, CardDeck, CardColumns, Image } from 'react-bootstrap'
import axios from 'axios'
// import { 
//     Switch,
//     Route,
//     Link
//   } from 'react-router-dom';

class learnCard extends Component {
    constructor(){
        super()
        this.state = {
          data: []
        }
    }

    componentDidMount(){
        axios.get("https://lektur.kuyrek.com/courses/all")
    .then(res => { console.log(res, 'TS2')
        const data = res.data.data
        this.setState({data});
    })
    .catch(err => console.log('parsing data is failed, err'))

    }

render() {
    const{data} = this.state
    console.log(data, 'CH')
    return (
    <div>
        <Container >
            <Fragment>
            <CardDeck className="cardList">

                {data?  data.map(item => {
                    // const { image } = data
                    console.log(item.image)
                    return (
                        <div >
            
                <Card className="Card" key={item.id} ><a href="Detail" className="Judul stretched-link">
                    <Card.Img className="cardimg" as={Image} variant="top" fluid={true} alt="Card image" src="https://lektur.kuyrek.com/imgCourses/e92fa7d8c98b8ca95a8ae936800648c0.jpg"/></a>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                    <small className="text-muted">{item.user.name}</small>
                    <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{item.category}</small>
                    </Card.Footer>
                </Card>

                <br />
            </div>
            )
            } ):null}
            </CardDeck><br />
            
            </Fragment>
        </Container> 
        
    </div>
    )
}
}
export default learnCard