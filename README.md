# Next.js

## Server Components vs Client Components
If we were to split the page into smaller components, you'll notice that the majority of components are non-interactive and can be rendered on the server as Server Components. For smaller pieces of interactive UI, we can sprinkle in Client Components. This aligns with Next.js server-first approach.

Server Components allow developers to better leverage server infrastructure. For example, you can move data fetching to the server, closer to your database, and keep large dependencies that previously would impact the client JavaScript bundle size on the server, leading to improved performance. Server Components make writing a React application feel similar to PHP or Ruby on Rails, but with the power and flexibility of React and the components model for templating UI.

To make the transition to Server Components easier, all components inside the App Router are Server Components by default, including special files and colocated components. This allows you to automatically adopt them with no extra work, and achieve great performance out of the box. You can also optionally opt-in to Client Components using the 'use client' directive.


### Client Components
- prerendered on server, hydrated on the client.


## Routing

### Routing Files
layout	.js .jsx .tsx	Layout
page	.js .jsx .tsx	Page
loading	.js .jsx .tsx	Loading UI
not-found	.js .jsx .tsx	Not found UI
error	.js .jsx .tsx	Error UI
global-error	.js .jsx .tsx	Global error UI
route	.js .ts	API endpoint
template	.js .jsx .tsx	Re-rendered layout
default	.js .jsx .tsx	Parallel route fallback page


### Dynamic Routes
[folder]	Dynamic route segment
[...folder]	Catch-all route segment
[[...folder]]	Optional catch-all route segment
Route Groups and Private Folders
(folder)	Group routes without affecting routing
_folder	Opt folder and all child segments out of routing



### Root Layout
The root layout is defined at the top level of the app directory and applies to all routes.
The app directory must include a root layout.
The root layout must define <html> and <body> tags since Next.js does not automatically create them.
You can use the built-in SEO support to manage <head> HTML elements, for example, the <title> element.
You can use route groups to create multiple root layouts. 
The root layout is a Server Component by default and can not be set to a Client Component.

### Navigating

<Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.


# tailwind.css