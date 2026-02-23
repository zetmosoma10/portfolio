import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import NotFound from "@/components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // Primary SEO
      { title: "Zet Mosoma | Fullstack Web Developer" },
      {
        name: "description",
        content:
          "Fullstack web developer specializing in React, TypeScript, Node.js, Express.js, MongoDB and modern web technologies. Check out my projects and get in touch.",
      },
      {
        name: "keywords",
        content:
          "fullstack developer, frontend developer, react developer, typescript, web development,MERN Stack, portfolio",
      },
      { name: "author", content: "Zet Mosoma" },

      // Open Graph (for link previews on social media)
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yoursite.com" },
      { property: "og:title", content: "Zet Mosoma | Fullstack Web Developer" },
      {
        property: "og:description",
        content:
          "Fullstack web developer specializing in React, TypeScript, Node.js, Express.js, MongoDB and modern web technologies. Check out my projects and get in touch.",
      },
      { property: "og:image", content: "https://yoursite.com/og-image.png" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Zet Mosoma | Fullstack Web Developer",
      },
      {
        name: "twitter:description",
        content:
          "Fullstack web developer specializing in React, TypeScript, Node.js, Express.js, MongoDB and modern web technologies. Check out my projects and get in touch.",
      },
      { name: "twitter:image", content: "https://yoursite.com/website.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zet Mosoma",
          url: "https://yoursite.com",
          jobTitle: "Fullstack Web Developer",
          sameAs: [
            "https://github.com/zetmosoma10",
            "https://www.linkedin.com/in/zetmosoma/",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
