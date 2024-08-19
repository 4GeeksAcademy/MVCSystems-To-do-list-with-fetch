import React, { useState } from "react";
import { Items } from "./items";

export const List = ({ tasks, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 12;

  // Calcular el índice de las tareas actuales
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <ul
                className="list-group"
                style={{ height: "60vh", overflowY: "auto" }}
              >
                {currentTasks.length > 0 ? (
                  currentTasks.map((task) => (
                    <Items
                      key={task.id}
                      task={task.label}
                      index={task.id}
                      handleDelete={handleDelete}
                    />
                  ))
                ) : (
                  <li className="list-group-item text-center">
                    Contenedor vacío
                  </li>
                )}
              </ul>
              <nav>
                <ul className="pagination justify-content-center mt-3">
                  {Array.from(
                    { length: Math.ceil(tasks.length / tasksPerPage) },
                    (_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
