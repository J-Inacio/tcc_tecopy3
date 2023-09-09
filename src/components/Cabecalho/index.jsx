import Logo from '../Logo'
import './Cabecalho.css'
import BotaoCarrinho from '../BotaoCarrinho'
import BotaoUsuario from '../BotaoUsuario'
import BarraPesquisa from '../BarraPesquisa'
import Menu from '../Menu'

function Cabecalho() {
    return (
        <header className='main-cabecalho'>
            <div className='metade-cima-cabecalho'>
                <Logo className='logo-cabecalho' />
                <div className='carrinho-e-user-cabecalho'>
                    <BotaoCarrinho />
                    <BotaoUsuario />
                </div>
            </div>
            <div className='metade-baixo-cabecalho'>
                <Menu/>
                <BarraPesquisa/>
            </div>
        </header>
    )

}

export default Cabecalho