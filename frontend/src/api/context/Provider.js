import PropTypes from "prop-types";
import React, { useState, useMemo } from "react";
import AppContext from "./AppContext";

//Exportando o Provider
function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);

  const contextValue = useMemo(
    () => ({
      users,
      setUsers,
      currentPage,
      setCurrentPage,
      userToDelete,
      setUserToDelete,
      showDeleteConfirmation,
      setShowDeleteConfirmation,
      userToUpdate,
      setUserToUpdate,
    }),
    [
      users,
      setUsers,
      currentPage,
      setCurrentPage,
      userToDelete,
      setUserToDelete,
      showDeleteConfirmation,
      setShowDeleteConfirmation,
      userToUpdate,
      setUserToUpdate,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
