This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

The main purpose of of this project was to implement a generic funtion in order to handle the graphql qeueries and mutations. For this purpose i create a simple Todo app to show a correctness of my generic function that I implemented in `src/lib/graphqlCall.ts`.

## What I do 


At first i confige the `eslint`, `prettier`  with `husky` which is used as `pre-commit` tools. it means that before commiting the `husky` checks your commit name which should be match with `commit-convetions`. it does not match with `commit-convention` it does not allow you to commit. Furthermore I have configed `lint-stage` with `husky` to check the potential `eslint` and `prettier` errors befor commiting.

Then I connect the project to the `amplify aws` to build the Todo aps api with `graphql` as a test case of my generic functions. In the home page you can add new todo and also you can see the list of todos.

After that I start to implement the generic function. Working with function is so simple. you have to import the `graphqlCall` and pass `operationName` you want to do as it's argument.
Regarding the your backend mutations and queries the `operationName` is limited to the mutations and queries and if you write other name operation that does not exist in list of mutations and queris it gives you error like the below image:

<img width="876" alt="Screenshot 1402-11-13 at 10 46 16 in the morning" src="https://github.com/alirezaJvh/gamertag-task/assets/30807540/216be17e-7bff-43f7-8599-30b89c81f834">

after choosing your operationName like this image the query variables type automaticly set and you can pass your variables as second argument of `graphqlCall` function.
Furthermore the return vlaue of `graphqlCall` function is set base on your `operationName` and you do not need to do anything :) .

The `graphqlCall` funciton return the `data` and `errors` if your query have errors.
 
## How to run

Install dependencies: `npm install`

run the project : `npm run dev`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

