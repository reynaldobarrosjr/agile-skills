<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Agile Skills</h1>
<p align="center">
	Trilha da Agilidade é um panorama visual de habilidades que você deve buscar como especialista Ágil. Visite <a href="https://reynaldobarrosjr.github.io/agile-skills" target="_blank" aria-label="Link para a trilha Ágil">https://reynaldobarrosjr.github.io/agile-skills</a> para checar o panorama ou role esta página para visualizar como <a href="#-fundamentals" target="_blank" aria-label="Link para a lista de habilidades">uma lista</a>. Se você é um Agile Coach, Scrum Master ou entusiasta de Agilidade, <a href="https://github.com/reynaldobarrosjr/agile-skills/#seja-um-parceiro" aria-label="Become Agilizer link">seja um parceiro 🤩, será uma honra sua colaboração aqui.</a>
</p> 
<p align="center">
	<a href="http://andreasbm.github.io/web-skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Web Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Lista de conteúdo</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Lista de conteúdo

* [➤ FAQ](#-faq)
	* [O que é a trilha da Agilidade?](#o-que-é-a-trilha-da-agilidade)
	* [How did you choose the skills?](#how-did-you-choose-the-skills)
	* [How can I support you?](#how-can-i-support-you)
	* [Como posso contribuir?](#como-posso-contribuir)
	* [How can I keep track of what skills I know?](#how-can-i-keep-track-of-what-skills-i-know)
	* [I am overwhelmed! Help me!](#i-am-overwhelmed-help-me)
	* [Why haven't you included XYZ Technology?](#why-havent-you-included-xyz-technology)
	* [What does the "experimental" banner mean?](#what-does-the-experimental-banner-mean)
	* [How can I get in contact with you?](#how-can-i-get-in-contact-with-you)
* [➤ Fundamentos](#-fundamentos)
	* [LEAN](#lean)
		*[lean Startup](#lean-startup)
	
* [➤ Accessibility](#-accessibility)
	* [The why](#the-why)
	* [Screen Readers](#screen-readers)
	* [Accessibility tree](#accessibility-tree)
		* [ARIA](#aria)
		* [Accessible HTML](#accessible-html)
			* [Alt text](#alt-text)
		* [Accessible CSS](#accessible-css)
	* [Accessible forms](#accessible-forms)
	* [UI States](#ui-states)
	* [Keyboard Accessibility](#keyboard-accessibility)
		* [Focus](#focus)
	* [Accessible Colors](#accessible-colors)
	* [Laws & Policies](#laws--policies)
		* [Audits](#audits)
* [➤ Web Components](#-web-components)
	* [Custom Elements](#custom-elements)
	* [HTML Templates](#html-templates)
	* [Shadow DOM](#shadow-dom)
		* [Shadow Parts](#shadow-parts)
		* [Slots](#slots)
	* [Best practices](#best-practices)
	* [Constructible Stylesheets](#constructible-stylesheets)
	* [Form Participation](#form-participation)
* [➤ Progressive Webapps](#-progressive-webapps)
	* [API's](#apis)
	* [Storage](#storage)
	* [Routing](#routing)
		* [History API](#history-api)
	* [Service Workers](#service-workers)
		* [Offline first](#offline-first)
		* [Push notifications](#push-notifications)
	* [Web App manifest](#web-app-manifest)
	* [Add to homescreen](#add-to-homescreen)
	* [Pointer Events](#pointer-events)
	* [Loading Performance](#loading-performance)
	* [App shell](#app-shell)
	* [Render-Blocking Resources](#render-blocking-resources)
	* [Compression](#compression)
	* [Performance metrics](#performance-metrics)
		* [Largest Contentful Paint](#largest-contentful-paint)
		* [Total Blocking Time](#total-blocking-time)
		* [Time to Interactive](#time-to-interactive)
	* [Lazy Loading](#lazy-loading)
		* [Dynamic Import](#dynamic-import)
		* [Offscreen images](#offscreen-images)
	* [Critical Request Chains](#critical-request-chains)
	* [Tree shaking](#tree-shaking)
	* [Codesplitting](#codesplitting)
	* [PRPL Pattern](#prpl-pattern)
	* [Resource Prioritization](#resource-prioritization)
	* [Caching](#caching)
	* [Rendering Performance](#rendering-performance)
	* [Rendering](#rendering)
	* [Event loop](#event-loop)
		* [Microtask](#microtask)
		* [Stack](#stack)
		* [Heap](#heap)
	* [RAIL Model](#rail-model)
		* [requestAnimationFrame](#requestanimationframe)
		* [requestIdleCallback](#requestidlecallback)
	* [Critical Rendering Path](#critical-rendering-path)
	* [The Pixel Pipeline](#the-pixel-pipeline)
		* [Style calculations](#style-calculations)
		* [Transforms](#transforms-1)
		* [Paint areas](#paint-areas)
		* [Layout Trashing](#layout-trashing)
		* [Layers](#layers)
		* [Debounce](#debounce)
	* [CSS Containment](#css-containment)
	* [Web Workers](#web-workers)
	* [Security](#security)
	* [HTTPS](#https)
	* [Browser Sandbox](#browser-sandbox)
	* [OWASP](#owasp)
		* [Cross-Site Scripting](#cross-site-scripting)
		* [Clickjacking](#clickjacking)
	* [Content Security Policy](#content-security-policy)
	* [Audits](#audits-1)
	* [Performance budgets](#performance-budgets)
	* [Lighthouse](#lighthouse)
	* [Chrome DevTools](#chrome-devtools)
* [➤ Build tools](#-build-tools)
	* [Package Managers](#package-managers)
		* [NPM](#npm)
		* [Yarn](#yarn)
	* [Module Bundlers](#module-bundlers)
		* [Rollup](#rollup)
		* [Webpack](#webpack)
		* [Parcel](#parcel)
		* [Snowpack](#snowpack)
	* [Linters and formatters](#linters-and-formatters)
		* [Prettier](#prettier)
		* [ESLint](#eslint)
	* [Task Runners](#task-runners)
		* [NPM Scripts](#npm-scripts)
	* [Transpilers](#transpilers)
		* [Babel](#babel)
		* [Typescript](#typescript)
	* [CSS Pre-processors](#css-pre-processors)
		* [SASS](#sass)
		* [PostCSS](#postcss)
	* [Node.js](#nodejs)
* [➤ Frameworks & Libraries](#-frameworks--libraries)
	* [lit-element](#lit-element)
	* [Vue](#vue)
	* [React](#react)
	* [Angular](#angular)
	* [Svelte](#svelte)
	* [Stencil](#stencil)
* [➤ Testing](#-testing)
	* [Testing Methodologies](#testing-methodologies)
		* [Unit Testing](#unit-testing)
		* [Integration Testing](#integration-testing)
		* [System Testing](#system-testing)
		* [Acceptance Testing](#acceptance-testing)
		* [Smoke Testing](#smoke-testing)
		* [Performance Testing](#performance-testing)
		* [Usability Testing](#usability-testing)
		* [White Box Testing](#white-box-testing)
		* [Black Box Testing](#black-box-testing)
		* [Automated Testing](#automated-testing)
		* [Manual Testing](#manual-testing)
	* [Continuous integration](#continuous-integration)
	* [A/B Testing](#ab-testing)
	* [Test Runners](#test-runners)
		* [Karma](#karma)
		* [Mocha](#mocha)
		* [Jasmine](#jasmine)
		* [Cypress](#cypress)
		* [Ava](#ava)
	* [Best Practices](#best-practices-3)
* [➤ Architecture & paradigms](#-architecture--paradigms)
	* [Paradigms](#paradigms)
	* [Programming Paradigms](#programming-paradigms)
	* [Object Oriented Programming](#object-oriented-programming)
		* [S.O.L.I.D](#solid)
	* [Functional programming](#functional-programming)
		* [Recursion](#recursion)
		* [Higher-Order Functions](#higher-order-functions)
		* [Currying](#currying)
		* [Monads](#monads)
	* [Architecture](#architecture)
	* [Design Patterns](#design-patterns)
		* [Singleton](#singleton)
		* [Observer](#observer)
		* [Prototype](#prototype-1)
		* [Bridge](#bridge)
		* [Proxy](#proxy)
		* [Chain of responsibility](#chain-of-responsibility)
		* [Constructor](#constructor)
	* [CSS Methodologies](#css-methodologies)
		* [BEM](#bem)
		* [SMACSS](#smacss)
		* [OOCSS](#oocss)
* [➤ Team Collaboration](#-team-collaboration)
	* [Version Control](#version-control)
	* [Git](#git)
		* [Github](#github)
		* [Bitbucket](#bitbucket)
	* [Management](#management)
	* [Agile Development](#agile-development)
		* [Scrum](#scrum)
		* [Kanban](#kanban)
	* [Waterfall Development](#waterfall-development)
	* [Test Driven Development](#test-driven-development)
* [➤ Design & UX](#-design--ux)
	* [Color Theory](#color-theory)
		* [Color Wheel](#color-wheel)
	* [Typography](#typography)
		* [Font Size](#font-size)
		* [Line Spacing](#line-spacing)
	* [C.R.A.P](#crap)
		* [Contrast](#contrast)
		* [Repetition](#repetition)
		* [Alignment](#alignment)
		* [Proximity](#proximity)
	* [Consistency](#consistency)
	* [Spacing](#spacing)
	* [Error Handling](#error-handling)
	* [Loading](#loading)
	* [The Golden Ratio](#the-golden-ratio)
	* [Mobile First](#mobile-first)
		* [Hit Targets](#hit-targets)
	* [Design Systems](#design-systems)
		* [Material Design](#material-design)
		* [Fluent Design](#fluent-design)
	* [Accessibility](#accessibility)
	* [Best Practices](#best-practices-4)
* [➤ The Modern Web](#-the-modern-web)
	* [Streams](#streams)
		* [Media Streams](#media-streams)
		* [Media Recorder](#media-recorder)
		* [Web RTC](#web-rtc)
		* [Screen Capture](#screen-capture)
		* [Generators](#generators)
	* [Speech Synthesis](#speech-synthesis)
	* [Web Sockets](#web-sockets)
	* [Geolocation](#geolocation)
	* [Device orientation & motion](#device-orientation--motion)
	* [Fullscreen](#fullscreen)
	* [Variable Fonts](#variable-fonts)
	* [HTTP/2](#http2)
	* [Payment Request API](#payment-request-api)
	* [Web Audio](#web-audio)
	* [Observers](#observers)
		* [Mutation Observer](#mutation-observer)
		* [Intersection Observer](#intersection-observer)
		* [Resize Observer](#resize-observer)
		* [Performance Observer](#performance-observer)
	* [Scrollsnapping](#scrollsnapping)
	* [Web Assembly](#web-assembly)
	* [Beacon](#beacon)
	* [Clipboard](#clipboard)
	* [Share](#share)
	* [Performance API](#performance-api)
	* [Gamepad API](#gamepad-api)
	* [Speech Recognition](#speech-recognition)
	* [Interaction Media Queries](#interaction-media-queries)
	* [Browser Extensions](#browser-extensions)
	* [Pointer Lock API](#pointer-lock-api)
	* [Picture In Picture](#picture-in-picture)
	* [Proxies](#proxies)
	* [Houdini](#houdini)
	* [Project Fugu](#project-fugu)
	* [Web Authentication API](#web-authentication-api)
		* [Credentials Manager API](#credentials-manager-api)
	* [Native File System](#native-file-system)
	* [Shape Detection](#shape-detection)
	* [Web Bluetooth](#web-bluetooth)
	* [Web USB](#web-usb)
	* [Web XR](#web-xr)
	* [Presentation](#presentation)
	* [Network Information API](#network-information-api)
* [➤ Algorithms & Data structures](#-algorithms--data-structures)
	* [Data structures](#data-structures)
	* [Arrays](#arrays)
	* [Queues & Stacks](#queues--stacks)
	* [Trees](#trees)
		* [Binary Indexed Tree](#binary-indexed-tree)
		* [Heap](#heap-1)
		* [Red-black Tree](#red-black-tree)
		* [Trie](#trie)
		* [K-D Tree](#k-d-tree)
	* [Hash Tables](#hash-tables)
	* [Linked Lists](#linked-lists)
	* [Graphs](#graphs)
	* [Analysis](#analysis)
	* [Time complexity](#time-complexity)
		* [Cost model](#cost-model)
		* [Order of Growth](#order-of-growth)
		* [Big O notation](#big-o-notation)
	* [Space Complexity](#space-complexity)
	* [Algorithms](#algorithms)
	* [Sorting](#sorting)
		* [Insertion Sort](#insertion-sort)
		* [Quicksort](#quicksort)
		* [Mergesort](#mergesort)
		* [Heapsort](#heapsort)
	* [Searching](#searching)
		* [Binary Search](#binary-search)
		* [Breadth First Search](#breadth-first-search)
		* [Depth First Search](#depth-first-search)
		* [Dijkstra's Algorithm](#dijkstras-algorithm)
		* [String Search](#string-search)
	* [Hashing](#hashing)
* [➤ Databases & Servers](#-databases--servers)
	* [Databases](#databases)
	* [Relational Databases](#relational-databases)
		* [SQL](#sql)
		* [MySQL](#mysql)
		* [PostgreSQL](#postgresql)
	* [Non-relational Databases](#non-relational-databases)
		* [Redis](#redis)
		* [MongoDB](#mongodb)
	* [Data Modelling](#data-modelling)
		* [ER Diagram](#er-diagram)
		* [Keys](#keys)
	* [Indexing](#indexing)
	* [Data Integrity](#data-integrity)
	* [Normalization](#normalization)
		* [Functional Dependencies](#functional-dependencies)
		* [Normal Forms](#normal-forms)
	* [Transactions](#transactions)
		* [ACID](#acid)
		* [Serializability](#serializability)
		* [Locks](#locks)
			* [Deadlocks](#deadlocks)
		* [Precedence graph](#precedence-graph)
	* [Servers](#servers)
	* [Architectural Models](#architectural-models)
		* [Client-Server](#client-server)
		* [Proxy Server](#proxy-server)
		* [Peer-To-Peer](#peer-to-peer)
	* [Middleware](#middleware)
	* [Request-Reply Protocol](#request-reply-protocol)
		* [UDP](#udp)
		* [TCP](#tcp)
	* [REST API](#rest-api)
		* [CRUD](#crud)
	* [Express](#express)
	* [GraphQL](#graphql)
	* [GNU/Linux](#gnulinux)
	* [Docker](#docker)
	* [SSH](#ssh)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#faq)

## ➤ FAQ

### O que é a trilha da Agilidade?

Trilha da Agilidade é um panorama visual de habilidades úteis para um agilista. É uteil para pessoas que estão começando a aprender, assim como para pessoas que estão na área há muito tempo e precisam aprender coisas novas. Se você estiver ingressando no mundo àgil agora não quero que pense que aqui está uma lista definitiva de coisas que você deve buscar para se desenvolver como Agilista, mas como um ponto de partida para as disciplinas que você poderá se apropriar. As habilidades estão ordenadas em ordem cronológica tomando como base a trilha que consultei junto a comunidade Ágil brasileira. Fique à vontade!


### Como você selecionou as habilidades?
		
As habilidades listadas são fruto de minha experiência com a Agilidade ao longo destes 13 anos. Nas comunidades o debate sempre é intenso sobre o que devemos ter em nossos leque de habilidades como Agilista. Tomei como base todas as informações que rolam nos grupos de Agilistas.Certamente a lista estará incompleta. É aí que você entra! 

### Como posso patrocinar seu trabalho?

I am spending my spare time building Web Skills for free because I want to help people get into web development. My motivation comes from people finding Web Skills useful, so if you like the project feel free to support me in any way you like! For example, you are more than welcome to become a [stargazer](https://github.com/andreasbm/web-skills/stargazers), share Web Skills with your friends and followers or create blog articles linking to Web Skills. If you want to, it will absolutely make my day if you [support me with a cup of coffee](https://www.buymeacoffee.com/AndreasMehlsen)! <3

### Como posso contribuir?
Você é muito bem vindo para contribuir do jeito que quiser. Se você puder, coloque suas ideias em [issues page](https://github.com/reynaldobarrosjr/agile-skills/issues). Assim me ajudará com possíveis erros nos textos, bugs na página ou até mesmo novas features. Qualquer ajuda é bem vinda!

### Como eu deixo registrado o que eu já sei?

Ainda não tá funcionando mas vamos trabalhar nisso.

### É muita coisa Rey! Me ajuda!?

Aí tem um pouco da jornada que todo agilista vai seguir. Fique na paz! O que vai te construir é o caminho. 

### Porque você não incluiu o tema x, y, z?

Esse trabalho é organico e eu vou atualizando a medida que vou recebendo seu feedback, coloque ele aqui >>  [dar feedback](https://github.com/reynaldobarrosjr/agile-skills/issues).


### Como posso entrar em contato com você?

Pode ser no twitter [@reynaldosouzajr](https://twitter.com/reynaldosouzajr) or take a look at [my website](https://andreasbm.github.io) if you want to learn more about what other projects I'm working on.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#fundamentals)

## ➤ Fundamentos

### AGILIDADE

### LEAN

Aprenda o básico da filosofia Lean e trabalhe em prol da eficiência.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com" alt="Logo" /> Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html)

#### SCRUM

Familiarize-se com o que há de mais básico no SCRUM. Vai ser fácil de entender e dificílimo de você praticar. Boa sorte!

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> Tutorialspoint - Basic HTML tags](https://www.tutorialspoint.com/html/html_basic_tags.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elated.com" alt="Logo" /> Elated - First 10 HTML tags](https://www.elated.com/first-10-html-tags/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### KANBAN

Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Web - Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - Forms](https://www.w3schools.com/html/html_forms.asp)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Pessoas que estão colaborando
	

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Reynaldo Barros Jr](#) |  [Andreas Mehlsen](https://twitter.com/andreasmehlsen) |
| 🔥                                               |                                                  |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ Licença
	
Licensed under [MIT](https://github.com/reynaldobarrosjr/agile-skills).
