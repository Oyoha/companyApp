import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, id: 1 },
        { name: "Alex M.", salary: 3000, id: 2 },
        { name: "Carl W.", salary: 5000, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        // data: newArr,
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increased: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo></AppInfo>
        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
        ></EmployeesList>
        <EmployeesAddForm onAdd={this.addItem}></EmployeesAddForm>
      </div>
    );
  }
}

export default App;
