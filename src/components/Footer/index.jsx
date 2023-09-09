import Copyright from '../Copyright'
import Logo from '../Logo'
import './Footer.css'

function Footer() {
    return (
        <div className="main-container-footer">
            <div className="child-container-footer">
                <div className="container-sobre-empresa">
                    <div className="container-logo-sobre-empresa">
                        <Logo />
                    </div>
                    <div className="container-texto-empresa">
                        <p>"Somos especialistas no atendimento ao público universitário e apaixonados por tecnologia, porque a tecnologia cria conexões humanas e conectamos seu negócio ao seu cliente!"</p>
                    </div>
                    <div className="container-redes-sociais">
                        <p>email</p>
                        <p>insta</p>
                        <p>facebook</p>
                    </div>
                </div>
                <div className="right-container-footer-info">
                    <div className="container-footer-info">
                        <div className="container-info-atendimento">
                            <h3>Atendimento:</h3>
                            <p>Segunda a Sexta</p>
                            <p>8:00 a 12:00/ 18:00 a 22:00</p>
                        </div>
                        <div className="container-forma-pagamento">
                            <h3>Formas de Pagamento:</h3>
                            <div className="pagamento-info-dinheiro">
                                <p>//icone//Dinheiro</p>
                            </div>
                            <div className="container-info-pix">
                                <p>//icone//Pix</p>
                            </div>
                            <div className="container-info-cartao">
                                <p>//icone//Débito/Crédito</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-info-email-wpp-endereco">
                        <div className='info-footer-link'>
                            <div className="info-footer-icon-titulo-link">
                                <a href='#'>Icone Email</a>
                                <h3>E-mail:</h3>
                            </div>
                            <a href='#'>alunostaboao@gmail.com</a>
                        </div>
                        <div className='info-footer-link'>
                            <div className="info-footer-icon-titulo-link">
                                <a href='#'>Icone WPP</a>
                                <h3>Whatsapp:</h3>
                            </div>
                            <a href='#'>11 98627-3774</a>
                        </div>
                        <div className='info-footer-link'>
                            <div className="info-footer-icon-titulo-link">
                                <a href='#'>Icone endereco</a>
                                <h3>Endereço:</h3>
                            </div>
                            <a href='#'>Rod. Régis Bittencourt, 199 - Centro, Taboão da Serra - SP, 06768-000</a>
                        </div>
                    </div>
                </div>
                {/* <div className="info-footer-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.87565955686!2d-46.75759742369011!3d-23.60879186333819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54187bb170db%3A0xbdb4a310f301f86b!2sRod.%20R%C3%A9gis%20Bittencourt%2C%20199%20-%20Centro%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006768-000!5e0!3m2!1spt-BR!2sbr!4v1686859842754!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div> */}
            </div>
            <Copyright />
        </div>

    )

}

export default Footer