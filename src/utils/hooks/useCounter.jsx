
const useCounter = () => {
    const [counter,setCounter] = useState(0);

    const sumar = ( ) => {
        setCounter (counter + 1)
    }

    const restar = ( ) => {
        setCounter (counter - 1)
    }

    const reiniciar = ( ) => {
        setCounter (0)
    }

    return {counter,sumar,restar,reiniciar}
}

export default useCounter