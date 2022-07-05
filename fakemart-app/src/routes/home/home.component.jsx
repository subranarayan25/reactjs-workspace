// import CategoryItem from "../../components/category-item/category-item.component"
// import "./catalog.styles.scss"
import {Fragment} from "react"
import Catalog from "../../components/catalog/Catalog.component"

// import Card from "react-bootstrap/Card"
// import CardGroup from "react-bootstrap/CardGroup"
// import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

// const Home = () => (
//     <Container>
//     <Row>
//       <Col lg="auto"><img src="https://i.ibb.co/cvpntL1/hats.png" /></Col>
//       <Col lg="auto"><img src="https://i.ibb.co/px2tCc3/jackets.png" /></Col>
//       <Col lg="auto"><img src="https://i.ibb.co/0jqHpnp/sneakers.png" /></Col>
//     </Row>
//     <Row>
//         <Col lg="auto"><img src="https://i.ibb.co/GCCdy8t/womens.png" /></Col>
//         <Col lg="auto"><img src="https://i.ibb.co/R70vBrQ/men.png" /></Col>
//     </Row>
//   </Container>
// );

const Home = ()=> {
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]
      
    return (
        // <div className="categories-container">
        //     {
        //       categories.map((category) => (
        //         <CategoryItem category={category} key={category.id}/>
        //       ))
        //     }
        // </div>
        <Fragment>
            <Catalog categories={categories}   /> 
        </Fragment>
    )
}



export default Home