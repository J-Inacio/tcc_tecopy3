import './CardProduto.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto() {
    return (
        <div className="main-container-card-produto">
            <Card className="w-100 h-100">
                <Card.Img variant="top" src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg" />
                <Card.Body className="card-body-container">
                    <Card.Title>Produto 1</Card.Title>
                    <Card.Text>
                        1 Unidade
                    </Card.Text>
                    <Card.Text>
                        R$ 999,99
                    </Card.Text>
                    <Button variant="primary">+ Detalhes</Button>
                    <Button variant="primary">ADD carrinho</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardProduto;