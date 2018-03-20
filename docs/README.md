## Introduction

This repository is created for managing and deploying [Clova Chatbot extension guide](https://pages.oss.navercorp.com/JTF-P6/chatbot_technical_doc/) content. [GitBook](https://toolchain.gitbook.com/) is used for building document in PDF format and web format.

See the following sections for more details:

* [How to build documentation](#HowToBuild)
* [Branches](#Branches)
* [Releases](#Releases)

<a name="HowToBuild" />

## How to build documentation

Prepare the following tools and library:

* [`npm`](https://www.npmjs.com/get-npm)
* [`gitbook-cli`](https://toolchain.gitbook.com/setup.html)
* [`calibre`](https://toolchain.gitbook.com/ebook.html)

> Calibre application is required for PDF documentation build. Make sure put the `ebook-convert` bin file to the $PATH contained in Calibre application.

> You can also make documentation build environment with Docker. See [Setup GitBook env. with Docker](https://oss.navercorp.com/JTF-P6/platform_technical_doc/wiki/Setup-GitBook-env-with-Docker)

To build a documentation, following next steps:

1. Clone this repository.

```bash
git clone https://oss.navercorp.com/JTF-P6/chatbot_technical_doc/.git
```
2. (Required one time) Install required gitbook plugins.

```bash
gitbook install
```

3. Run one of the following commands:

```bash
# If you want to make PDF file.
gitbook pdf . book.pdf

# If you want to make web content in ./book directory
gitbook build . book

# If you want to run web server with GitBook web content. You can access the web server at http://localhost:4000.
gitbook serve
```

<a name="Branches" />

## Branches

Due to the various purposes, this repository has the following branches:

<ul>
  <li>Common branches
    <ul>
      <li><strong>document</strong><br />Main branch that holds whole content of Clova developer guide. Working branches are forked from this branch and after job is done the branches are merged back to this branch.</li>
      <li><strong>master</strong> (document -> master)<br />Branch for internal documentation release</li>
    </ul>
  </li>
</ul>

<a name="Releases" />
