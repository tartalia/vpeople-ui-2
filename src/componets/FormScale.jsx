//Importação de componentes e bibliotecas
import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function FormScale({scale, question}) {

    //Retorna o componente em si
    return(<div>

        <FormControl>

            {/* Mostra a pergunta com as respostas de sua determinada escala */}
            <FormLabel id="demo-row-radio-buttons-group-label">{question}</FormLabel>

            <br />

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {//Analisa a variável 'scale' (escala) e cria as respostas para a referente pergunta de acordo
                    scale.map((item, index) => (
                        <FormControlLabel value={item.value} control={<Radio sx={{'&.Mui-checked': {color: "var(--accent-color)"}}} />} label={item.label} />
                    ))
                }

                <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
                />
            </RadioGroup>
        </FormControl>

    </div>)
}

export default FormScale;