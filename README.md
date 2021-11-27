# Infos

A quick template with all the basics needed to jumpstart a new project ⚡

# What's in the box 🎁

- Nuxt 2.x (latest)
- TailwindCSS 2 (with PostCSS)
- A default page & layout
- Global style sheet
- Some *maybe* useful components

# Process

## Creating a new Page
Create a new ***Vue*** file in `/pages` folder. The name of the file is also use for its path. For example, `/pages/foo/bar.vue` will be resolved as `www.website.com/foo/bar.html`
<br>
💡 *More info here : [nuxtjs.org/docs/2.x/directory-structure/pages/](https://nuxtjs.org/docs/2.x/directory-structure/pages/)*

## Using Components
Calling a component should be done as follows:
<br>
`/components/utils/FancyButton.vue` should be called with `<utils-fancy-button></utils-fancy-button>`
<br>
💡 *More info here : [nuxtjs.org/docs/2.x/directory-structure/components/](https://nuxtjs.org/docs/2.x/directory-structure/components/)*

## Style
### Global Style Sheet
The global style sheet is a ***postcss*** file in `/assets/css/base.postcss`
<br>
You can write and use basic *CSS* but prefer using `@apply` with *Tailwind* properties.
<br>
💡 *All Tailwind properties here : [tailwindcss.com/docs](https://tailwindcss.com/docs)*

### Component Style
In-component style should be written using PostCSS and `@apply` to re-use *Tailwind* property as much as possible (also know as *Atomic CSS*).
<br>
Inside your component use the `style` tag as follows:
``` html
<style lang="postcss" scoped>
.button-red {
    @apply h-8 w-8;
    @apply bg-red-200 rounded;
}
</style>
```
📝 Note: `scoped` means your style won't leak into other components. Very usefull for *Layouts* components.
<br>
💡 *More info here : [vue-loader.vuejs.org/guide/scoped-css.html](https://vue-loader.vuejs.org/guide/scoped-css.html)*

### Custom Tailwind Config
You can override or add new properties for *Tailwind* inside its config file `/tailwind.config.js`
- To override properties, you can use this as an example: *[tailwindcss.com/docs/customizing-spacing#overriding-the-default-spacing-scale](https://tailwindcss.com/docs/customizing-spacing#overriding-the-default-spacing-scale)*
- To add (or extend) new properties you can use this example: *[https://tailwindcss.com/docs/customizing-colors#extending-the-defaults](https://tailwindcss.com/docs/customizing-colors#extending-the-defaults)* Pay attention to the `extends:` property at the beginning.

## Layouts
💨 *[nuxtjs.org/docs/2.x/directory-structure/layouts](https://nuxtjs.org/docs/2.x/directory-structure/layouts)*

## Static vs Assets
To make things simple. Assets inside the `/assets` folder will be proccesed by some webpack module, like `base.postcss` for example. It can be images, JSON files,... Outputted files will have hashed name to facilitate cache management.
<br>
On the opposite side, `/static` files will be served *as it is* with no hash or handling whatsoever.

## Building
```bash
# install dependencies
$ yarn install

# run dev server (w/ hot reloead)
$ yarn run dev

# build for production
$ yarn run generate
```