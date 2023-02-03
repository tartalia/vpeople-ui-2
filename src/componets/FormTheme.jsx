//Importação de componentes e bibliotecas
import FormScale from "./FormScale";
import { Divider, TextField } from "@mui/material";

//Cria o componente com suas variáveis e referenciando as informações necessárias
function FormTheme({title,color,question1,question2,question3,scale}) {

    //Retorna o componente em si
    return(<div class="p-10">
        
        {/* Título do assunto/tema do questionário */}
        <div class="w-fit">
            <h1 class="font-semibold text-3xl">{title}</h1>
            <Divider sx={{width:"auto",borderColor:color,borderBottomWidth:".4rem"}}/>
        </div> 

        {/* Perguntas do assunto/tema com suas determinadas escalas de resposta */}
        <section class="py-10 flex flex-col justify-between">

            <br />
            <FormScale question={question1} scale={scale}/>
            <br />

            <br />
            <FormScale question={question2} scale={scale}/>
            <br />

            <br />
            <FormScale question={question3} scale={scale}/>
            <br />
            
            {/* Input de texto */}
            <div class="py-10">
                <TextField
                id="outlined-multiline-static"
                label="Dê exemplos das atitudes:"
                multiline
                rows={7}
                defaultValue=""
                sx={{width:"50rem",backgroundColor:"#ffffff"}}
                />
            </div>
            
        </section>

    </div>)
}

export default FormTheme;