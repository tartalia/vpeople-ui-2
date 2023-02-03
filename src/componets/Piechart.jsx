//Componente retirado de uma biblioteca chamada Rechart ( https://recharts.org/en-US/examples/PieChartWithCustomizedLabel ) e adaptado para utilização mais adequada à plataforma

//Importação de componentes e bibliotecas
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function PiechartTest({data, size}) {

    //As modificações relevantes para esse gráfico estão apenas em 'data' e 'size', onde é necessário indicar de maneira respectiva os dados do gráfico e o tamanho no qual ele aparecerá
      
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
    };
    
    //Retorna o componente em si
    return (
        <ResponsiveContainer width={size*2} height={size*2}>
            <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={size}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PiechartTest;

// Para saber mais sobre o respectivo componente e outros disponibilizados pela biblioteca, acesse: https://recharts.org/en-US