//Importação de componentes
import DropdownCardLarge from "./DropdownCardLarge";
import DashboardContent from "./DashboardContent";

//Cria o componente com suas variáveis e referenciando as informações necessárias
function DashboardCard({title, chartData, count, status, periodo, published}) {

    //Soma o total de valores para juntar o total para o gráfico
    var total = 0
    chartData.map((item) => (
        total += item.value
    ))

    //Retorna o componente em si
    return(<div>

        {/* O componente em si é uma variação personalizada do componente DropdownCardLarge para a página de dashboard */}
        <DropdownCardLarge count={count} title={title} 
        headerContent={<div class="flex flex-row justify-between pr-20">
            {/* Conteúdo do cabeçalho do card */}

            {/* Informações da esquerda do cabeçalho do card */}
            <div class="py-4">

                <div class="flex flex-row items-center">
                    <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Status:</h3>
                    <h3 class="p-1" style={{background:status ? '#E5F5E4' : '#FFD79B',color: status ? '#3F8B35' : '#E57E1F', borderRadius:"10px"}}>
                        {status ? "Ativo" : "Inativo"}
                    </h3> 
                </div>

                <div class="flex flex-row">
                    <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Período programado:</h3>
                    <h3>{periodo}</h3> 
                </div>

            </div>

            {/* Informações do centro do cabeçalho do card */}
            <div class="flex flex-col items-center" style={{marginTop:"-1rem"}}>
                <div class="flex flex-row justify-between w-full px-6 items-center">

                    {/* Para quem a avaliação é direcionada */}
                    <div class="flex flex-row">
                        <h1 class="pr-1 font-semibold text-lg" style={{color:"var(--subheading)"}}>Aberto: </h1>
                        <h1 class="font-semibold text-lg">Todas as gerências</h1>
                    </div>

                    {/* Total de usuários para os quais a avaliação é direcionada */}
                    <div class="flex flex-row">
                        <h1 class="pr-1 font-semibold text-lg" style={{color:"var(--subheading)"}}>Total: </h1>
                        <h1 class="font-semibold text-lg">{total}</h1>
                    </div>

                </div>

                <div class=" flex flex-row w-full py-2 h-1">

                    {//Divide o valor total de pessoas em "Não iniciaram", "Em progresso", e "Entregues" e dispõe dividindo proporcionalmente em uma barra de porcentagens
                        chartData.map((item) => (
                            console.log((item.value/(total/100))*10),
                            <div class="h-2" style={{width:(item.value/(total/100))*4, background:item.color, borderRadius:"3px"}}></div>
                        ))
                    }

                </div>
                
                <div class="flex flex-row justify-between">

                    {//Divide o valor total de pessoas em "Não iniciaram", "Em progresso", e "Entregues" e dispõe os valores exatos de cada
                        chartData.map((item) => (
                            console.log(item),
                            <div class="flex flex-row justify-between items-center p-2">
                                <label class="h-2 w-2 mr-1" style={{background:item.color}}></label>
                                <h1 class="pr-1 font-semibold text-sm">{item.value}</h1>
                                <h1 class="text-sm">{item.name}</h1>
                            </div>
                        ))
                    }
                </div>
                
            </div>

            {/* Indica o status de avaliação "Publicada" e "Não publicada" */}
            <div class=" flex flex-row justify-between items-center shadow-md h-fit -mt-1 p-2" style={{border:"1px solid var(--subheading)", borderRadius:"20px"}}>
                <div class="h-3 w-3" style={{background: published ? "var(--confirm)" : "var(--neg)", borderRadius:"100px"}}></div>
                <h1 class="font-semibold text-lg pl-2">{published ? "Publicado" : "Não Publicado"}</h1>
            </div>

        </div>} 
        
        content={
            //Conteúdo do card do dashboard aberto, referindo-se diretamente para o componente DashboardContent específico para isso
            <DashboardContent chartData={chartData}/>
        }/>

    </div>)
}

export default DashboardCard;