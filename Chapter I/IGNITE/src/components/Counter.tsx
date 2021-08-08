import { useState } from "react"

// imutabilidade 

// numeros = [1 ,2 ,3] // não pode
// numeros.push = [4,5] // não pode

//novoNum = [...numeros, 4, 5] // pode = // imutabilidade 



export function Counter(props: any) {

    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type='button' onClick={increment}>
                INCREMENTO</button>
        </div>
    )
}