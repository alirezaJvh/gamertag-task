import { graphqlCall } from "@/lib/graphqlCall";
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const { data, errors } = await graphqlCall("listTodos");

  const createTodo = async (formData: FormData) => {
    "use server";

    await graphqlCall("createTodo", {
      input: { name: formData.get("name")?.toString() ?? "" },
    });
    revalidatePath("/");
  };

  const todos = data?.listTodos?.items;
  return (
    <>
      <TheHeader />
      <div className="py-10 flex flex-col items-center w-full min-h-[calc(100vh-50px)] h-full">
        <div className="text-xl font-semibold pb-5">Todo list app</div>
        <form className="w-[400px] flex justify-between" action={createTodo}>
          <input
            className="border border-gray-300 px-2 outline-none"
            name="name"
            placeholder="Add a todo"
          />
          <button
            className="rounded-md bg-blue-400 px-4 py-2 text-white"
            type="submit"
          >
            Add
          </button>
        </form>

        <div className="w-[400px] p-3 mt-4 rounded-md border border-gray-300">
          {!todos || todos.length === 0 || errors ? (
            <div>
              <p>No todos, please add one.</p>
            </div>
          ) : (
            todos.map((todo, index) => {
              return (
                <li
                  className={`list-none py-2 ${index !== todos.length - 1 ? "border-b border-gray-300" : ""}`}
                >
                  {todo?.name}
                </li>
              );
            })
          )}
          <ul>{}</ul>
        </div>
      </div>
      <TheFooter />
    </>
  );
}
