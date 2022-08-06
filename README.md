This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resources

Backend API

[http://localhost:3000/api/items?q=querySearch](http://localhost:3000/items?q=querySearch) replace querySearch by product you want to search, this service response all products that match your search

[http://localhost:3000/api/items/productID"](http://localhost:3000/items/productID) replace productID by ID of product, this service response a product detail

Client Paths

[http://localhost:3000/](http://localhost:3000/) show home page, where you can search for the desired product

[http://localhost:3000/items?search=querySearch](http://localhost:3000/items?search=querySearch) replace querySearch by product you want to search

[http://localhost:3000/items/productID](http://localhost:3000/items/productID) replace productID by ID of product
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
