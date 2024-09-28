import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  const [products] = useState([
    {
      image: "https://images.indianexpress.com/2024/09/iPhone-16-Pro-Max-1.jpg",
      title: "IPhone 16 Pro Max",
      price: "$1732.92",
      description: "iPhone 16 Pro Max. Built for Apple Intelligence. Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And A18 Pro chip."
    },
    {
      image: "https://media.gq.com.mx/photos/66df44567d3ceddfd877165b/16:9/w_2992,h_1683,c_limit/Apple_iPhone_16_gama_colores%20(1).jpg",
      title: "Iphone 16",
      price: "$954.39",
      description: "Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections."
    },
    {
      image: "https://reboxed.co/cdn/shop/articles/ip15pm_header_1024x.jpg?v=1705077309",
      title: "Iphone 15 Pro Max",
      price: "$1611.36",
      description: " iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPetoCSu6dk4w8Gy-WSThdUVBigHAPhPEZnU_3A_b88u00BLB3uAiNl6_l9wLc7Yby-p0&usqp=CAU",
      title: "Iphone 15",
      price: "$656.95",
      description: "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride."
    },
    {
      image: "https://www.mobilegyans.com/wp-content/uploads/2022/01/iPhone-14-Pro-Max.jpeg",
      title: "Iphone 14 Pro",
      price: "$1790.53",
      description: "12MP 2x Telephoto (enabled by quad-pixel sensor): sensor-shift optical image stabilisation."
    },
    {
      image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
      title: "IPhone 14",
      price: "$609.17",
      description: "Stay productive and improve your performance with the Super Retina XDR display that is comfortable."
    },
    {
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/iphone13_pro-promax-press.jpg",
      title: "Iphone 13 Pro",
      price: "$2029.43",
      description: "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures."
    },
    {
      image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021_big.jpg.slideshow-large.jpg",
      title: "Iphone 13",
      price: "$489.73",
      description: "The iPhone 13 features a stylish design and innovative features that make it a delight to use."
    },
    {
      image: "https://img.freepik.com/free-vector/new-smartphone-different-perspectives_23-2148799053.jpg",
      title: "Iphone 12 Pro",
      price: "$1432.19",
      description: "The iPhone 12 Pro display has rounded corners that follow a beautiful curved design, and these corners are standard rectangle."
    },
    {
      image: "https://assets.hardwarezone.com/img/2023/09/ap12.jpg",
      title: "Iphone 12",
      price: "$370.28",
      description: "Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display. This beast of a smartphone packs."
    },
  ])

  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <div className='main_heading-tag'>
          <h1 className='store-heading'><span className='black'>Store.</span>The best way to buy the products you love.</h1>
          <div className='secound-tag'>
            <p>Need a shopping help?</p>
            <p>Visit our store</p>
          </div>
        </div>
      </Container>
      <main>
        <Container>
          <Row>
            {products.map((product, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3} key={index} className='my-4'>
                  <Card>
                    <Card.Img variant="top" src={product.image} className='pro-image' />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <p className='price-tag'>{product.price}</p>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <div className='btn-div'>
                        <Button variant="dark" size="sm" className='product-btn'>View Product</Button>
                        <Button variant="secondary" size="sm" className='cart-btn'>Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
      <hr />
      <footer>
        <Container>
          <div className='footer-sec'>
            <div className='first-foo'>
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            </div>
            <div className='last-foo'>
              <p>India</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default App
