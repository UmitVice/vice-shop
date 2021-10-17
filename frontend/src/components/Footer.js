import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
          <Row>
              <Col className='text-center py-3'>
                  Copyright &copy; ViceShop <br/>
                  Made By <a href="https://www.umitvice.com/" target="_blank">Ümit Vice</a>
              </Col>
          </Row> 
      </Container>   
    </footer>
  )
}

export default Footer
