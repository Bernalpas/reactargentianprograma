

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ImagenesWeb() {
    return (
        <Container>
            <Row>
                <Col xs={2} md={2}>
                    <Image src="https://okdiario.com/img/2018/03/13/como-calcular-porcentaje-de-error.jpg" />
                </Col>
            </Row>
        </Container>
    );
}

export default ImagenesWeb;