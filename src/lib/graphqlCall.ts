import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import config from "@/amplifyconfiguration.json";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

type MutationOperation = keyof typeof mutations;
type QueryOperation = keyof typeof queries;
type GraphqlOperation = MutationOperation | QueryOperation;

type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

type MutationVariablesType<T> =
  T extends GeneratedMutation<infer K, unknown> ? K : unknown;

type QueryVariablesType<T> =
  T extends GeneratedQuery<infer K, unknown> ? K : unknown;

type MutationReturnType<T> =
  T extends GeneratedMutation<unknown, infer K> ? K : unknown;

type QueryReturnType<T> =
  T extends GeneratedQuery<unknown, infer K> ? K : unknown;

type QeuryVariables<T> = T extends QueryOperation
  ? QueryVariablesType<(typeof queries)[T]>
  : unknown;

type VariablesType<T> = T extends MutationOperation
  ? MutationVariablesType<(typeof mutations)[T]>
  : QeuryVariables<T>;

type QueryReturn<T> = T extends QueryOperation
  ? QueryReturnType<(typeof queries)[T]>
  : unknown;

type ReturnGraphQlType<T> = T extends MutationOperation
  ? MutationReturnType<(typeof mutations)[T]>
  : QueryReturn<T>;

type ReturnGraphQlCall<T> = {
  data: ReturnGraphQlType<T>;
  errors: unknown;
};

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export async function graphqlCall<T extends GraphqlOperation>(
  operatoinName: T,
  variables?: VariablesType<T>,
): Promise<ReturnGraphQlCall<T>> {
  "use server";

  const query = mutations[operatoinName as MutationOperation]
    ? mutations[operatoinName as MutationOperation]
    : queries[operatoinName as QueryOperation];

  const { data, errors } = await cookiesClient.graphql({
    query,
    variables,
  });
  return { data, errors } as unknown as ReturnGraphQlCall<T>;
}
