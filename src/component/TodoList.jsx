import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  // This component displays the list of todos
  const { todos, selectedTab } = props;
  const tab = selectedTab; // This can be dynamic based on the selected tab
  const filteredTodos =
    selectedTab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input === todo.input)}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
