import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increased: false,
      liked: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increased }) => ({
      increased: !increased,
    }));
  };

  onLike = () => {
    this.setState(({ liked }) => ({
      liked: !liked,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increased, liked } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increased) {
      classNames += " increase";
    }
    if (liked) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onLike}>
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
            onClick={this.onIncrease}
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
  }
}

export default EmployeesListItem;
