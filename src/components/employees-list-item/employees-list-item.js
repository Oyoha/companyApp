import "./employees-list-item.css";
// import { Component } from "react";

// class EmployeesListItem extends Component { //Все это нужно если вызываем функцию с этого уровня, и нужен класс и setState
//   constructor(props) {
//     super(props);
//     this.state = {
//       increased: false,
//       rised: false,
//     };
//   }

//   onIncrease = () => {
//     this.setState(({ increased }) => ({
//       increased: !increased,
//     }));
//   };

//   onLike = () => {
//     this.setState(({ rised }) => ({
//       rised: !rised,
//     }));
//   };
const EmployeesListItem = (props) => {
  // render() { //При классах
  const {
    name,
    salary,
    onDelete,
    // onToggleIncrease,
    // onToggleRise,
    onToggleProp,
    increased,
    rised,
  } = props;
  // const { increased, liked } = this.state; //При классах, сейчас нет стейта

  let classNames = "list-group-item d-flex justify-content-between";
  if (increased) {
    classNames += " increase";
  }
  if (rised) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      {/* <span className="list-group-item-label" onClick={this.onLike}>  если вызываем функцию с этого уровня*/}
      <span
        className="list-group-item-label"
        // onClick={onToggleRise} //если вызываем две разные фунции с верхнего уровня
        onClick={onToggleProp}
        data-toggle="rised"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      ></input>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          type="button"
          // onClick={this.onIncrease} //если вызываем функцию с этого уровня
          // onClick={onToggleIncrease} //если вызываем две разные фунции с верхнего уровня
          onClick={onToggleProp}
          data-toggle="increased"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
