import "./ToDos.css";
import ToDo from "./ToDo";

const ToDos = ({ toDos, onDelete, onToggle }) => {
  return (
    <div className="toDos__body">
      {toDos.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ToDos;
