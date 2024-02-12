//Imports
import React, { useContext, useState, useEffect } from "react";
import AppContext from "../api/context/AppContext";
import api from "../api/users";
import { useNavigate } from "react-router-dom";

//Exportando o componente que lista os usuários que existem no banco
export default function UsersList() {
  const navigate = useNavigate();
  const [usersPerPage] = useState(10);
  const {
    users,
    setUsers,
    currentPage,
    setCurrentPage,
    setUserToDelete,
    setShowDeleteConfirmation,
    showDeleteConfirmation,
    userToDelete,
    setUserToUpdate,
  } = useContext(AppContext);

  const quantityPages = Math.ceil(users.length / usersPerPage);
  const firstUser = currentPage * usersPerPage;
  const lastUser = firstUser + usersPerPage;
  const currentUsers = users.slice(firstUser, lastUser);

  //Buscando os usuários existentes no banco
  useEffect(() => {
    const fetchUsers = async () => {
      const request = await api.getUsers();

      setUsers(request.data);
    };
    fetchUsers();
  }, []);

  //Botão de atualizar
  const updateUser = async (user) => {
    setUserToUpdate(user);

    navigate("/update");
  };

  //Botão de deletar que chama um modal para uma segunda confirmação do delete
  const deleteModal = (user) => {
    setShowDeleteConfirmation(true);
    setUserToDelete(() => {
      return user.name;
    });
  };

  //Botão do modal caso o usuário não queria deletar
  const hideDeleteModal = () => {
    setUserToDelete(null);
    setShowDeleteConfirmation(false);
  };

  //Botão do modal para confirmação caso o usuário realmente queira deletar
  const confirmDelete = async () => {
    await api.deleteUser(userToDelete);
    alert("Usuário deletado com sucesso!");
    hideDeleteModal();
    window.location.reload();
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Profissão</th>
              <th>Ações</th>
            </tr>
          </thead>
          {users.length > 0 ? (
            currentUsers.map((user) => (
              <tbody key={user.name}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.occupation}</td>
                  <td>
                    <button type="button" onClick={() => updateUser(user)}>
                      Atualizar
                    </button>
                  </td>
                  <td>
                    <button
                      id="button-delete"
                      value={user}
                      onClick={() => deleteModal(user)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <h3>Nenhum usuário encontrado</h3>
          )}
        </table>
      </div>
      <div>
        {showDeleteConfirmation && (
          <div className="modal">
            <div className="modal-content">
              <p>Deseja realmente excluir o usuário {userToDelete}?</p>
              <button onClick={confirmDelete}>Sim</button>
              <button onClick={hideDeleteModal}>Não</button>
            </div>
          </div>
        )}
      </div>
      <footer>
        {Array.from(Array(quantityPages), (_item, index) => (
          <button
            className="button-footer"
            key={index}
            value={index}
            onClick={({ target }) => setCurrentPage(Number(target.value))}
          >
            {index + 1}
          </button>
        ))}
      </footer>
    </div>
  );
}
