import './HomePage.css'
import Cabecalho from '../../components/Cabecalho/index.jsx'
import {BsWhatsapp} from 'react-icons/bs'

const icone = <BsWhatsapp/>
function HomePage() {
  return (
    <div>
      <Cabecalho/>
      {/* <div className="div-main-info-adicionais-home-page">
        <InfoAdicional icone={icone} h2="TITULO" paragrafo = "testando paragrafo"  />
        <InfoAdicional icone={icone} h2="WhatsApp" paragrafo = "11 95259999"  />
        <InfoAdicional icone={icone} h2="TITULO" paragrafo = "testando paragrafo"  />
      </div> */}
      {/* <CardProduto/> */}
    </div>
  )
}

export default HomePage