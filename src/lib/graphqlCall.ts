import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import config from "@/amplifyconfiguration.json";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export async function createTodo(formData: FormData) {
  "use server";

  const { data } = await cookiesClient.graphql({
    query: mutations.createTodo,
    variables: {
      input: {
        name: formData.get("name")?.toString() ?? "",
      },
    },
  });

  console.log("Created Todo: ", data?.createTodo);

  revalidatePath("/");
}

export async function getTodo() {
  return cookiesClient.graphql({
    query: queries.listTodos,
  });
}
