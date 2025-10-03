
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../src/app.css';
function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
 
      <div className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold text-primary">Welcome to the Employee Portal</h1>
          <p className="lead">
            Manage your employee data, settings, and more – all in one place.
          </p>
        </Container>
        </div>
  <Carousel slide={false}>
      <Carousel.Item>
  <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80" alt="placeholder" style={{width: "100%", height: "400px", objectFit: "cover"}} />
        <Carousel.Caption>
          <h3>First Image</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" alt="placeholder" style={{width: "100%", height: "400px", objectFit: "cover"}} />
        <Carousel.Caption>
          <h3>Second Image</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
  <img src="https://png.pngtree.com/thumb_back/fh260/background/20240731/pngtree-beautiful-lake-with-autumn-leaves-autumn-nature-background-image_15937423.jpg" alt="placeholder" style={{width: "100%", height: "400px", objectFit: "cover"}} />
        <Carousel.Caption>
          <h3>Third Image</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Container className="py-5 flex-grow-1">
        <Row className="g-4 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <Card.Title>Employee Directory</Card.Title>
                <Card.Text>
                  View, search, and manage employee information with ease.
                </Card.Text>
                <Button variant="primary">Go to Directory</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <Card.Title>Company Features</Card.Title>
                <Card.Text>
                  Explore tools and features designed to boost productivity.
                </Card.Text>
                <Button variant="primary">View Features</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <Card.Title>Settings</Card.Title>
                <Card.Text>
                  Customize your portal preferences and user settings.
                </Card.Text>
                <Button variant="primary">Go to Settings</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <Container>
          <p className="mb-1">© {new Date().getFullYear()} Employee Portal. All rights reserved.</p>
          <p className="mb-0">Designed with ❤️ using React and Bootstrap.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
