# Orchejs - REST (@orchejs/rest)

REST API package of Orchejs.

---

* [About Orchejs](#aoj)
* [Orchejs REST](#wor)
* [Quick start](#qks)
  * [Installation](#ins)
  * [Setup](#set)
* [Documentation](#doc)
* [Contributing](#con)
* [Contact](#cot)
* [License](#lic)

---

## <a name="aoj"></a> About Orchejs

The Orchejs project provides a set of libraries aggregating key technologies and consolidated libraries for API development in Node.js.

The goal is to make the backend development in Node.js even more productive, simpler, organized and that promotes scalability and maintainability.

## <a name="wor"></a> Orchejs REST

Use this library to create your REST APIs in Node.js and take advantage of the following benefits:

* Simple server configuration and setup.
* Type checking with **Typescript**.
* Clean and organized code.
* Decorators to specify your endpoints, query, path params and properties.
* Validators.
* Request and Response generic classes.
* Interceptors to manipulate your requests and hooks.
* API Logging.
* Open-API endpoint documentation.

## <a name="qks"></a> Quick start

If you don't want to use the <a href="https://github.com/orchejs/orchejs/cli" target="_blank">Orchejs cli</a> and decide to build your app from scratch,
follow this quickstart.

### <a name="ins"></a> Installation

Installation, **without** CORS support:

With yarn:

```bash
yarn add @orchejs/rest
```

With npm:

```bash
npm install --save @orchejs/rest
```

### <a name="set"></a> Setup

Enable `experimentalDecorators` and `emitDecoratorMetadata` compiler options in tsconfig.json.

tsconfig.json example:

```json
{
  "compilerOptions": {
    "target": "es6",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## <a name="doc"></a> Documentation

// TODO: add documentation

## <a name="con"></a> Contributing

If you want to contribute to the project, please check out the [contributing](CONTRIBUTING.md)
document.

**Thanks for supporting Orchejs!**

## <a name="cot"></a> Contact

// TODO: add documentation

## <a name="lic"></a> License

MIT License

Copyright (c) 2018 Mauricio Gemelli Vigolo and contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
