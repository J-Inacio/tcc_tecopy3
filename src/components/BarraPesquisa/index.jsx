import './BarraPesquisa.css'
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react';





function BarraPesquisa() {
    const [busca, setBusca] = useState('');
    console.log(busca)
    return (
        <div className = "barra-pesquisar">
            <div className='input-container-barra-pesquisar'>
            <input 
                type='search' 
                placeholder='Pesquisar...' 
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
            />
            </div>
            <div className='ancora-container-barra-pesquisar'>
            <a href="#"><BiSearchAlt className='icone-pesquisar'/></a> 
            </div>    
        </div>
    )

}

export default BarraPesquisa