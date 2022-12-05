import './cabecalho.css'

const Cabecalho = (props)=>{
    const cores ={
        primaria: props.corPrimaria,
        secundaria: props.corSecundaria
    }
    return(
       
        <header className='cabecalho' style={{backgroundColor: cores.primaria, color: cores.secundaria}}>
            <h1>{props.titulo}</h1>
        </header>
       
    );

}

export default Cabecalho