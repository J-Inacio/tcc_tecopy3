import './HomePage.css'
import Cabecalho from '../../components/Cabecalho'
import Carrosel from '../../components/Carrosel'
import CarrosselCircular from '../../components/CarrosselCircular'


function HomePage() {
  return (
    <div>
      <Cabecalho/>
      <Carrosel/>
      <CarrosselCircular/>
      {/* <CardProduto/> */}
    </div>
  )
}

export default HomePage