//Importação de arquivos de estilo .css
import './components_css/BtnDark.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function BtnDark({type, text, onClick, onSubmit}) {

    //Retorna o componente em si
    return (     
        <button class="btnDark shadow-md" type={type} onClick={onClick} onSubmit={onSubmit} style={{margin:'0',width:"10rem",height:'fit-content',fontWeight:600,fontSize:'15px', letterSpacing:"1px"}}>{text}</button>
    )
}

export default BtnDark;