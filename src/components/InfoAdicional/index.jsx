import './InfoAdicional.css'


function InfoAdicional(props) {
    return (
        <aside className='info-global-container'>
            <div className="info-main-container">
                <div className="info-orcamento-whatsapp">
                    <a href='#####'>{props.icone}</a>
                </div>
                <div className="info-orcamento-texto">
                    <h2>{props.h2}</h2>
                    <p>{props.paragrafo}</p>
                </div>
            </div>
        </aside>
    )

}

export default InfoAdicional