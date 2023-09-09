import CardProduto from '../CardProduto';
import './GridProduto.css'

function GridProduto() {
  return (
    <div className='main-container-grid-produto'>
      <div className='child-container-grid-produto'>
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  );
}

export default GridProduto;