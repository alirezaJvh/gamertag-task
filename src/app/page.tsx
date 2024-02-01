import { createTodo, getTodo } from "@/lib/graphqlCall";
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";

export default async function Home() {
  const { data, errors } = await getTodo();

  const todos = data.listTodos.items;
  return (
    <>
      <TheHeader />
      <div className="py-10 flex flex-col items-center w-full min-h-[calc(100vh-50px)] h-full">
        <form action={createTodo}>
          <input name="name" placeholder="Add a todo" />
          <button type="submit">Add</button>
        </form>

        {(!todos || todos.length === 0 || errors) && (
          <div>
            <p>No todos, please add one.</p>
          </div>
        )}

        <ul>
          {todos.map(todo => {
            return <li style={{ listStyle: "none" }}>{todo.name}</li>;
          })}
        </ul>
      </div>
      <TheFooter />
    </>
  );
}
