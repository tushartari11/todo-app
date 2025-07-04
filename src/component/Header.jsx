export function Header(props) {
  // This component displays the header of the todo app
  const { todos } = props;
  // Count the number of open tasks
  const todosLength = todos.length;
  const taskMoreThanOne = todosLength != 1;
  const taskText = taskMoreThanOne ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskText}.{" "}
      </h1>
    </header>
  );
}
