import { FaRegTrashAlt } from "react-icons/fa";

const Main = ({ option, handleArr }) => {
  const deleteTask = (indexer) => {
    let newArray = [];
    for (let y = 0; y < option.length; y++) {
      if (y !== indexer) {
        newArray.push(option[y]);
      }
    }
    localStorage.setItem("tester", JSON.stringify(newArray));
    handleArr();
  };
  const changeCheck = (index, value) => {
    option[index].checked = !value;
    localStorage.setItem("tester", JSON.stringify(option));
    handleArr();
  };

  return (
    <div className="main">
      <div className="task">
        {option.map((e, i) => {
          return (
            <div className="singleTask" key={i}>
              <p className="textTask">{e.task}</p>
              <p className="fromTask">{e.from}</p>
              <input
                className="inputTask"
                onChange={() => changeCheck(i, e.checked)}
                type="checkbox"
                checked={e.checked}
              />
              <FaRegTrashAlt
                className="trasher"
                onClick={() => deleteTask(i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
