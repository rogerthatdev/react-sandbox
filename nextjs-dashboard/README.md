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

