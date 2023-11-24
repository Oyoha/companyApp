import "./app-info.css";

const AppInfo = (props) => {
  const { numberOfWorkers, numberOfIncreasedWorkers } = props;
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании "ИП Васильев"</h1>
      <h2>Общее число сотрудников: {numberOfWorkers} </h2>
      <h2>Премию получат: {numberOfIncreasedWorkers}</h2>
    </div>
  );
};

export default AppInfo;
