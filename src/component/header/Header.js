import React, { useState } from "react";
import logoDark from "../../img/logoDark.png";
import logoLight from "../../img/logoLight.png";
import ReactSwitch from "react-switch";

const Header = ({ option, themer, theme, handleArr }) => {
  const [createTask, setCreateTask] = useState("");
  const taskHandler = (event) => {
    setCreateTask(event.target.value);
  };
  const submitTask = () => {
    if (createTask !== "") {
      let dater = new Date();
      const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      const date = dater.getDate();
      const month = dater.getMonth();
      const year = dater.getFullYear();
      const hours = dater.getHours();
      const min = dater.getMinutes();
      let datering = `${date} ${months[month]} ${year} ${hours}:${min}`;
      const newArray = option;
      newArray.unshift({ task: createTask, checked: false, from: datering });
      localStorage.setItem("tester", JSON.stringify(newArray));
      setCreateTask("");
      handleArr();
    }
  };
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={theme === "dark" ? logoDark : logoLight}
          alt={theme === "light" ? "Light logo" : "Dark logo"}
        />
      </div>
      <div className="creater">
        <input
          className="submiting"
          value={createTask}
          onChange={taskHandler}
          type="text"
          placeholder="Nom d'une nouvelle tâche"
        />
        <button className="submiter" onClick={submitTask}>
          Créer
        </button>
      </div>
      <div>
        <ReactSwitch
          onChange={themer}
          checked={theme === "light" ? false : true}
          offColor="#6F1313"
          onColor="#317331"
        />
      </div>
    </div>
  );
};

export default Header;
