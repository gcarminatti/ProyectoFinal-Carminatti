import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });

  console.log(userData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioInput = (evento) => {
    evento.preventDefault();
  };

  return (
    <div>
      <h1>Formulario de productos</h1>

      <form onSubmit={envioInput}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Form;
