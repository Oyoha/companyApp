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
        { name: "John C.", salary: 800, increased: false, rised: true, id: 1 },
        { name: "Alex M.", salary: 3000, increased: true, rised: false, id: 2 },
        {
          name: "Carl W.",
          salary: 5000,
          increased: false,
          rised: false,
          id: 3,
        },
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
      rised: false,
      id: this.maxId++,
    };
    if (name !== "" && salary !== "") {
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    } else {
      alert("У сотрудника должно быть имя и фамилия, а также зарплата!!!");
    }
  };

  // onToggleIncrease = (id) => {                                 //Переделаю две функции в одну, для удобства
  //   // this.setState(({ data }) => {                           // первый способ
  //   //   const index = data.findIndex((elem) => elem.id === id);
  //   //   const old = data[index];
  //   //   const newItem = { ...old, increased: !old.increased };
  //   //   const newArr = [
  //   //     ...data.slice(0, index),
  //   //     newItem,
  //   //     ...data.slice(index + 1),
  //   //   ];

  //   //   return {
  //   //     data: newArr,
  //   //   };
  //   // });

  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increased: !item.increased };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleRise = (id) => {                 //Переделаю две функции в одну, для удобства
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rised: !item.rised };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo
          numberOfWorkers={this.state.data.length}
          numberOfIncreasedWorkers={
            this.state.data.filter((item) => item.increased).length
          }
        ></AppInfo>
        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          // onToggleIncrease={this.onToggleIncrease} //При двух функциях
          // onToggleRise={this.onToggleRise}
          onToggleProp={this.onToggleProp}
        ></EmployeesList>
        <EmployeesAddForm onAdd={this.addItem}></EmployeesAddForm>
      </div>
    );
  }
}

export default App;
