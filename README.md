This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

The main purpose of of this project was to implement a generic funtion in order to handle the graphql qeueries and mutations. For this purpose i create a simple Todo app to show a correctness of my generic function that I implemented in `src/lib/graphqlCall.ts`.

## What I do 

At first i connect the project to the `amplify aws` to build the Todo aps api with `graphql` as a test case of my generic functions. In the home page you can add new todo and also you can see the list of todos.

Then I start to implement the generic function. Working with function is so simple. you have to import the `graphqlCall` and pass `operationName` you want to do as it's argument.
Regarding the your backend mutations and queries the `operationName` is limited to the mutations and queries and if you write other name operation that does not exist in list of mutations and queris it gives you error like the below image:

<img width="876" alt="Screenshot 1402-11-13 at 10 46 16 in the morning" src="https://github.com/alirezaJvh/gamertag-task/assets/30807540/216be17e-7bff-43f7-8599-30b89c81f834">








First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
