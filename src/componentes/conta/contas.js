import './conta.css'
import React, {useState} from 'react';


const Exemplo = ()=>{
  
    const [count, setCount] = useState(0);
    return(
        <div className='camposCSS'>
            <section className='camposCSS-sec1'>

               <p>{count} </p>
              <section className='camposCSS-sec'>
                  <button onClick={()=> setCount(count + 1)}>+</button>
                  <button onClick={()=> setCount(count - 1)}>-</button>
            </section>
            </section>



        </div>
    );
}

export default Exemplo;