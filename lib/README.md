<img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">

# &nbsp; @innet/to

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/to.svg)](https://github.com/d8corp/innet-to/blob/master/CHANGELOG.md)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@innet/to)](https://bundlephobia.com/result?p=@innet/to)
[![downloads](https://img.shields.io/npm/dm/@innet/to.svg)](https://www.npmjs.com/package/@innet/to)
[![license](https://img.shields.io/npm/l/@innet/to)](https://github.com/d8corp/innet-to/blob/master/LICENSE)  
This plugin helps to change types of JSX Elements.

### Installation
npm
```bash
npm i @innet/to
```
yarn
```bash
yarn add @innet/to
```

Or you can include the scripts into the `head`.
```html
<!-- Dependencies (watchState, innet) -->
<script defer src="https://unpkg.com/watch-state/watch-state.min.js"></script>
<script defer src="https://unpkg.com/innet/innet.min.js"></script>

<!-- Target (innetTo) -->
<script defer src="https://unpkg.com/@innet/to/innet-to.min.js"></script>
```

### Using
You can change each element to another.  
For example `div` to `span`:
```typescript jsx
import innet from 'innet'
import to from '@innet/to'
import app from './app'

innet(app, undefined, {div: to('span')})
```
`app.tsx`
```typescript jsx
import innet from 'innet'
export default (
  <div>
    <div />
  </div>
)
```
You will get
```html
<span>
  <span></span>
</span>
```
You can use `Template` or `Component` as the argument
```typescript jsx
function Link (props, children) {...}

innet(<div><a href=''>click me</a></div>, undefined, {
  a: to(Link)
})
```
Any `a` element will be switched to `Link` template.

Also, you can change only peace of application with [@innet/plugins](https://www.npmjs.com/package/@innet/plugins)
```typescript jsx
import innet from 'innet'
import to from '@innet/to'
import plugins from '@innet/plugins'

function Link (props, children) {...}

function PeaceOfApp (props, children) {
  return (
    <plugins a={to(Link)}>{children}</plugins>
  )
}

innet((
  <>
    <a href="/">usual link</a>
    <PeaceOfApp>
      <a href="/">custom link</a>
    </PeaceOfApp>
  </>
), undefined, {plugins})
```

### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-to/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-to)](https://github.com/d8corp/innet-to/issues)
> ---
[![stars](https://img.shields.io/github/stars/d8corp/innet-to?style=social)](https://github.com/d8corp/innet-to/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-to?style=social)](https://github.com/d8corp/innet-to/watchers)
