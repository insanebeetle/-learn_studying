import React, { Component } from "react";
import "./App.css";
import "./button.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  };

  btnstyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      boderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터 만들기
    let newTodo = {
      id: Date.now(), //유니크한 값으로 데이프 메소드이용
      title: this.state.value,
      completed: false,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="tilte">
            <h1>할일 목록</h1>
          </div>{" "}
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                onChange={this.handleCompleteChange(data.id)}
                defaultChecked={false}
              />{" "}
              {data.title}
              <button
                style={this.btnstyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
              <p />
            </div>
          ))}
          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="추가"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        </div>
      </div>
    );
  }
}
