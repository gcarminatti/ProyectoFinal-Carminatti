import { useEffect,useState } from "react"

const FetchingData = () => {
    
    const [data , setData] = useState([]);  //estados
    const [dataById ,setDataById] = useState ({});
    
useEffect (() => {
    const obtenerPost = fetch ("https://jsonplaceholder.typicode.com/posts",)
    obtenerPost
    .then (res =>res.json())
    .then((res) => setData(res))

    const obtenerById = fetch ("https://jsonplaceholder.typicode.com/posts/2")
    obtenerById
    .then (res =>res.json())
    .then((res) => setDataById(res))
},[]);

const crearNewProduct =() => {
    const createProduct = fetch ("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        // headers: {
        //     "authorization": "asdsadsadsadsadas",
        //     "content-type":"aplication-json",

        // }
        body: JSON.stringify ({
            userID :7,
            title: "Prueba",
            body:"esta esta una prueba",
        }),
    });
    createProduct.then(res =>res.json()).then(res => console.log(res))
};
  
  
  
    return (
    <div>
        <h1>Peticiones</h1>
        <button onClick={crearNewProduct}>Crear Producto</button>
    </div>
  )
}

export default FetchingData