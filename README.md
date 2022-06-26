<div align="center">
  <img alt="Logo" src="https://github.com/pycoder2000/blog/raw/master/public/static/images/logo.png" width="100" />
</div>

<h1 align="center">
  Personal Blog - <em>Mere Musings</em>
</h1>

<p align="center">
  This is my personal portfolio blog hosted <a href="https://musing.vercel.app/" target="_blank">here</a> built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and hosted with <a href="https://www.vercel.com/" target="_blank">Vercel</a>.
</p>

<p align="center">
  The original template is designed by <a href="https://github.com/timlrx" target="_blank">Timothy Lin</a> and can be found <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" target="_blank">here</a>. The demo for the same can be found <a href="https://tailwind-nextjs-starter-blog.vercel.app/" target="_blank">here</a>.
</p>

<div align="center">

<a href="https://musing.vercel.app/" target="blank" >![View Demo](https://img.shields.io/badge/-View%20Demo%20-orange?color=%23DE1D8D&style=for-the-badge)</a> <a href="https://github.com/pycoder2000/blog/issues/new?assignees=&labels=bug&template=bug_report.md&title=">![Report Bug](https://img.shields.io/badge/-Report%20Bug%20-orange?color=%23ee0701&style=for-the-badge)</a> <a href="https://github.com/pycoder2000/blog/issues/new?assignees=&labels=&template=feature_request.md&title=">![Request Feature](https://img.shields.io/badge/-Request%20Feature%20-orange?color=%230e8a16&style=for-the-badge)</a> <a href="https://github.com/pycoder2000/blog/fork">![Fork](https://img.shields.io/github/forks/pycoder2000/blog?color=%23bfe5bf&style=for-the-badge)</a>

</div>

![demo](https://github.com/pycoder2000/blog/raw/master/public/static/images/demo.png)

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

</div>

## 🛠 Installation & Set Up

1. Clone this repository

   ```sh
   gh repo fork repository --clone=true
   ```

2. Change directories

   ```sh
   cd blog
   ```

3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

4. Install dependencies

   ```sh
   npm install
   ```

5. Start the development server

   ```sh
   npm start
   ```

6. Create a .env.local and following the .env.example input some environment variables so that can run normally.

   ```txt
   NEXT_PUBLIC_GISCUS_REPO=
   NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
   NEXT_PUBLIC_GISCUS_CATEGORY=
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=

   EMAILOCTOPUS_API_URL=
   EMAILOCTOPUS_API_KEY=
   EMAILOCTOPUS_LIST_ID=
   ```

## 🏗️ Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run dev
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## 👨‍🎨️ Customization

1. Personalize `siteMetadata.js` (site related information)
2. Modify the content security policy in `next.config.js` if you want to use any analytics provider or a commenting solution other than giscus.
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts

## 📝 Files to customize

- `data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

- `data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

- `data/projectsData.js` - data used to generate styled card on the projects page.

- `data/headerNavLinks.js` - navigation links.

- `data/logo.svg` - replace with your own logo.

- `data/blog` - replace with your own blog posts.

- `public/static` - store assets such as images and favicons.

- `tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

- `css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

- `components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

- `components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

- `layouts` - main templates used in pages.

- `pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

- `next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## 🔨 Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## 📚 Tech Stack

| Tool           | Link                                                      |
| -------------- | --------------------------------------------------------- |
| Framework      | [Next.js](https://nextjs.org/)                            |
| ORM            | [Prisma](https://prisma.io/)                              |
| Authentication | [NextAuth.js](https://next-auth.js.org/)                  |
| Deployment     | [Vercel](https://vercel.com)                              |
| Styling        | [Tailwindcss](https://tailwindcss.com/)                   |
| Comment        | [Tailwindcss](https://tailwindcss.com/)                   |
| Newsletter     | [Email Octopus](https://emailoctopus.com/)                |
| Favicon        | [realfavicongenerator](https://realfavicongenerator.net/) |
| Content        | [MDX](https://mdxjs.com/)                                 |

## 📈 Stats

<img src="https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fmusings.vercel.app"> <img src="https://img.shields.io/github/repo-size/pycoder2000/blog?style=for-the-badge&color=darkgreen" /> <img src="https://img.shields.io/github/languages/top/pycoder2000/blog?style=for-the-badge" /> <img src="https://img.shields.io/github/commit-activity/m/pycoder2000/blog?style=for-the-badge&color=orange" /> <img src="https://img.shields.io/github/deployments/pycoder2000/blog/Preview%20–%20blog?style=for-the-badge" /> <img src="https://img.shields.io/github/stars/pycoder2000/blog?color=yellow&style=for-the-badge"> <a href="https://makeapullrequest.com" target="blank" >![PRs Welcome](https://img.shields.io/badge/PR-Welcome-brightgreen?style=for-the-badge)</a>

## 🪜 Project structure

```bash
📦 root
├── 🗂️ components             # React files to customize the components for the site
├── 🗂️ css                    # Tailwind and Prisma CSS files
├── 🗂️ data                   # Files to change the content of pages
│ ├── 🗂️ authors              # Markdown files for authors of blog
│ ├── 🗂️ blog                 # Markdown files for blog posts
│ └── 🗂️ snippets             # Markdown files for code snippets
├── 🗂️ layouts                # Templates for pages
├── 🗂️ lib                    # Non-react modules
├── 🗂️ pages                  # Page files for website
├── 🗂️ public                 # Static files for images, rss, and assets
│ ├── 🗂️ static               # Holds images, favicons, and other assets
│ │ ├── 🗂️ favicon            # Favicon files
│ │ └── 🗂️ images             # Image Files
│ ├── 📝 feed.xml             # RSS feed
│ ├── 📝 robots.txt           # Helps crawlers to crawl your site
│ └── 📝 sitemap.xml          # Sitemap
├── 🗂️ scripts                # Scripts to run for different tasks
├── 📝 tailwind.config.js     # Contains tailwind stylesheet to change the look
└── 📝 next.config.js         # configuration related to Next.js
```

## 📊 Google Lighthouse Performance Metrics

![Google Lighthouse Performance Metrics](https://github.com/pycoder2000/blog/raw/master/public/static/images/Google%20Lighthouse%20Performance%20Metrics.png)

## 🚀 Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

## 🍰 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Commit your Changes

   ```bash
   git commit -m 'Add some Feature'
   ```

3. Push to the Branch

   ```bash
   git push origin main
   ```

4. Open a Pull Request

<div align="center">

<a href="https://makeapullrequest.com" target="blank" >![PRs Welcome](https://img.shields.io/badge/PR-Welcome-brightgreen?style=for-the-badge)</a>

</div>
