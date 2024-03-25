## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## Notes

### Folder structure

* `/app`: All routes, components, and logic of the application
* `/app/lib`: Functions used in the app, such as reusable utility fucntions and data fetching functions
* `/app/ui`: UI components of the app, such as cards, tables, and forms
* `/public`: all static assets, such as images
* `/scripts`: Seeding script for populating database


### Styling

* You can use Tailwind for styling using `className` or CSS modules to scope
styles to a componenent. 

* Use `clsx` library for conditional styling based on state or some other
  condition. 

### Fonts

* Add a custom font by importing from `/next/font/google`
* Use that font by referencing it in a `className` parameter:
  ```
    <body className={`${inter.className} antialiased`} >{children}</body>
  ```

### Images

* Add images importing `Image` the `next/image` 
* Use TailWind to show an image based on screen size:
  ```
  // hide by default, show as block in screens medium and up
  className="hidden md:block"
  ```

### Navigating between pages

* Instead of `<a>`, Next.js uses `<Link />` to do client-side navigation.
* To get the user's current path from the URL, use `usePathname()` to check the 
  path.  This is a hook, therefore, you must include `"use client"` directive at
  the top of the file that it's imported.  


### Fetching data

* Next.js applications use React Server Components to fetch data.
  * Server componenets support promises so you can use `async`/`await` without 
    using `useEffect`, `useState`, or data fetching libraries
  * Server Components execute on the server so expensive data fetches and logic
    stay on the server and only send results to the client
  * Since they execute on the server, you can query the database directly w/out
    extra API layer
  * In JavaScript, use `await Promise.all([promise1, promise2, etc])` or 
    `await Promise.allSettled([promise1, promise2, etc])` to initiate each
    promise in parallel.

### Static and dynamic rendering

* 2 limitations: 
  * data requests can create unintentional waterfall
  * dashboard is static, so any data updates will not be reflected in application
* Static rendering: data fetching and rendering happens on the **server** at
  build time (when you deploy) or during revalidation.
* Static rendering is useful for UI with no data or data that is shared across
  users, such as static blog post or a product page. 
* Dynamic rendering, content is rendered on the server for each user at request
  time.

### Streaming

* Streaming is a data transfer technique that allows you to break down a route
  into smaller "chunks" and progressively stream them from the server to  the
  client as they become ready.
* Two ways to implement streaming with Next.js:
  1. at the page level with the `loading.tsx` file
  1. for specific components with `<Suspense>`
* `loading.tsx` is a special file built on top of `Suspense` - it allows you to
  create a fallback UI to show as a replacement while a page loads. 
  * Static components such as `<SideNav>` are shown immediately. User can
  interact with it while dynamic content is loading