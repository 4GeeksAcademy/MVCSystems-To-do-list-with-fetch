import React from "react";

export const Task = ({ input, handleInput, handleMakeTasks }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List with fetch</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={input}
                  onInput={handleInput}
                  placeholder="Enter your task"
                />
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleMakeTasks}
                >
                  Add task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
