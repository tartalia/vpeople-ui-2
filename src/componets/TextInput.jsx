//Importação de arquivo de estilo .css
import './components_css/TextInput.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function TextInput({label, placeholder, icon, htmlFor, type, value, onChange}) {

  //Retorna o componente em si
  return (<div class="flex-col">

    <label class="label text-black text-opacity-70 font-semibold" style={{margin:0, paddingBottom:5}}>{label}</label>

    <div class="flex flex-row items-center">
      <input type={type} htmlFor={htmlFor} value={value} onChange={onChange} class="text-input" placeholder={placeholder}></input>

      {/* Icone para o input de texto */}
      <i class={icon} style={{position:'absolute',marginLeft:"20rem"}}></i>
    </div>

  </div>)
}

export default TextInput;