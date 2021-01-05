# @innet/to
[![NPM](https://img.shields.io/npm/v/@innet/to.svg)](https://github.com/d8corp/innet-to/blob/master/CHANGELOG.md)
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

Or just download a minified js file
[here](https://github.com/d8corp/innet-to/blob/master/lib/innet-to.min.js)

### Using
You can change each `div` to `span`
```typescript jsx
import innet from 'innet'
import to from '@innet/to'

innet(<div><div /></div>, undefined, {
  div: to('span')
})
```
You will get
```html
<span><span></span></span>
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
