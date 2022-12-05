import './footer.css'

const Foot = (props)=>{
    const cores ={
        primaria: props.corPrimaria,
        secundaria: props.corSecundaria
    }
    return(
       
        <footer className='foot' style={{backgroundColor: cores.primaria, color: cores.secundaria}}>
            <p>Apenas um experimento</p>
        </footer>
       
    );

}

export default Foot