import "./style.css";
import { FaRegTrashCan } from "react-icons/fa6";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const getUsers = async () => {
    const response = await api.get("/usuarios");
    setUsers(response.data);
  };

  const createUsers = async () => {
    const response = await api.post("/usuarios", {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value,
    });

    setUsers((prevState) => [...prevState, response.data]);
  };

  const deleteUsers = async (id) => {
    await api.delete(`/usuarios/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" placeholder="Nome" type="text" ref={inputName} />
        <input name="idade" placeholder="Idade" type="number" ref={inputAge} />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users?.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <FaRegTrashCan />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
