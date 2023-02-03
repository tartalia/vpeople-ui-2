//Importação de componentes
import { Divider } from "@mui/material";
import BtnLight from "./BtnLight";

//Cria o componente com suas variáveis e referenciando as informações necessárias
function PeopleListCard({title,peopleList}) {
    
    //Retorna o componente em si
    return(<div class="card justify-center px-8 py-8 z-10" style={{width:"27rem", overflow:"hidden"}}>

        <div class="z-0" style={{background:"var(--secondary-color)", height:"1rem", width:"30rem",marginTop:"-2rem", marginLeft:"-2rem"}}></div>
        <br />

        {/* Botão de adicionar */}
        <div class="flex flex-row justify-between items-center">
            <h1 class="font-semibold text-2xl">{title}</h1>
            <BtnLight text="Adicionar +"/>
        </div>

        <br />

        <section style={{height:"26rem", overflow:"scroll"}}>

            {//Extende a lista de acordo com as pessoas indicadas na variável 'peopleList'
                peopleList.map((item, index) => (
                    <div>
                        <div class="flex flex-row justify-start items-center">

                            {/* Imagem de usuário */}
                            <img src={item.image} alt="user" class="rounded-full bg-slate-500 h-14 w-14 user" />

                            <div class="p-6 ">
                                <div>
                                    <h1 class="font-semibold">{item.name.split(' ').slice(0, 2).join(' ')}</h1>
                                    <h2 style={{color:"var(--subheading)"}}>{item.role}</h2>
                                </div>
                            </div>
                                                                            
                        </div>
                        
                        <Divider sx={{borderColor:"var(--grey1)", borderBottomWidth:".10rem"}}/>                                                 
                    </div>                                
                ))
            }

        </section>
    </div>)
}

export default PeopleListCard;