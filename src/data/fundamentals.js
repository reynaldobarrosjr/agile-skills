export const fundamentalsCollection = {
	name: "FUNDAMENTOS",
	areas: [
		{
			name: "FILOSOFIAS",
			skills: [
				{
					name: "Lean",
					description: {
						text: "Aprenda o basico de LEAN e se familiarize com os conceitos da filosofia.",
						links: [
							["O que é LEAN?", "https://www.lean.org.br/o-que-e-lean.aspx"],
							["Guia da metodologia Lean","https://gaea.com.br/guia-completo-para-entender-a-metodologia-lean-de-uma-vez-por-todas/"],
							["Os 5 princípios do Lean Manufaturing", "https://www.youtube.com/watch?v=izqiwdriepw"],
						]
				}

				},
				{
					name: "Agile",
					description: {
						text: "Aprenda a proposta da filosofia Ágil.",
						links: [
							["Tudo sobre Agile", "https://medium.com/aela/tudo-sobre-agile-a-filosofia-que-far%C3%A1-voc%C3%AA-muito-mais-eficiente-ac1a5721fe20"],

						]
				},
					skills: [
						{
							name: "Manifesto Ágil",
							description: {
								text: "Conheça o manifesto Ágil",
								links: [
									["Manifesto ágil para desenvolvimento de software", "https://agilemanifesto.org/iso/ptbr/manifesto.html"],
								]
							},
						},
					]
				}
			]
		},
		{
			name: "SCRUM",
			skills: [

				{
					name: "Scrum Guide",
					description: {
						text: "Leia o SCRUM GUIDE.",
						links: [
							["Guia Scrum em Português - última versão (2017)", "https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-Portuguese-Brazilian.pdf"],

						]
					},
					skills: [
						{
							name: "Papéis",
							description: {
								text: "Aprenda sobre os diferentes papéis em um time scrum.",
								links: [
									["Quais são os papéis no SCRUM", "#"],

								],
							},
							skills: [
								{
									name:"x1",
									description:{
										text:"teste",
										links:[
											["teste","#"],
										],
									},
								},
								{
									name:"Product Owner",
									description:{
										text:"teste",
										links:[
											["teste","#"],
										],
									},
								},
								{
									name:"Desenvolvedores",
									description:{
										text:"teste",
										links:[
											["teste","#"],
										],
									},
								}
							]
						},
						{
							name: "Eventos",
							description: {
								text: "Aprenda sobre os diferentes eventos do framework SCRUM.",
								links: [
									["MDN - Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"],


								],
							},
							skills:[
								{
									name:"Sprint Planning ",
									description:{
										text:"Saiba tudo sobre a Sprint Planning",
										links:[
											["O que é o Sprint Planning?","#"]
										]
									}

								},
								{
									name:"Sprint",
									description:{
										text:"Saiba tudo sobre a Sprint Planning",
										links:[
											["O que é o Sprint Planning?","#"]
										]
									}

								},
								{
									name:"Daily Scrum",
									description:{
										text:"Saiba tudo sobre a Sprint Planning",
										links:[
											["O que é o Sprint Planning?","#"]
										]
									}

								},
								{
									name:"Sprint retrospective",
									description:{
										text:"Saiba tudo sobre a Sprint Planning",
										links:[
											["O que é o Sprint Planning?","#"]
										]
									}

								},
								{
									name:"Revisão da Sprint",
									description:{
										text:"Saiba tudo sobre a Sprint Planning",
										links:[
											["O que é o Sprint Planning?","#"]
										]
									}

								}



							]
						},
            {
							name: "Artefatos",
							description: {
								text: "Aprenda sobre os artefatos do framework SCRUM.",
								links: [
									["Backlog do produto", "#"],
									["Sprint Backlog", "#"],
									["Incremento", "#"],

								]
							},
							skills:[
								{
									name:"Product backlog",
									description: {
										text:"Saiba tudo sobre o backlog do produto",
										links:[
											["Como montar o sprint backlog","#"]

										]

									}

								},
								{
									name:"Sprint backlog",
									description: {
										text:"Saiba tudo sobre o Sprint Backlog",
										links:[
											["Como montar o sprint backlog","#"]

										]

									}

								},
								{
									name:"Incremento",
									description: {
										text:"Saiba tudo sobre o Incremento",
										links:[
											["Como montar o sprint backlog","#"]

										]

									}

								}

							]
						}
					]
				}
				,
			]
		},
		{
			name: "Kanban",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of Javascript and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - Javascript First Steps", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
							["MDN - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"],
							["MDN - Javascript Building Blocks", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					},
					skills: [
						{
							name: "Spread",
							description: {
								text: "Learn how the spread syntax can help you when working with arrays.",
								links: [
									["MDN - Spread syntax", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"],
									["Freecodecamp - An introduction to Spread syntax", "https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/"],
									["Object rest and spread properties", "https://v8.dev/features/object-rest-spread"],
								]
							},
						},
						{
							name: "Destructuring",
							description: {
								text: "Learn how destructuring can help you when working with objects.",
								links: [
									["MDN - Destructuring assignment", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"],
									["MDN - ES6 In Depth: Destructuring", "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"],
									["javascript.info - Destructuring assignment", "https://javascript.info/destructuring-assignment"],
								]
							},
						}
					]
				},
				{
					name: "DOM",
					description: {
						text: "Learn how the HTML is represented as objects that comprise the structure and content of a document.",
						links: [
							["MDN - DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"],
							["Freecodecamp - What's the DOM", "https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/"],
							["Introduction to the DOM", "https://learn.co/lessons/introduction-to-the-dom"],
							["htmldom.dev", "https://htmldom.dev/"],
						]
					},
					skills: [
						{
							name: "DOM Manipulation",
							description: {
								text: "Learn how to query HTML elements through Javascript and manipulate them.",
								links: [
									["MDN - Locating DOM elements using selectors", "https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"],
									["Supercharged - querySelector", "https://www.youtube.com/watch?v=s0vg_H9hBuU"],
								]
							}
						},
					]
				},
				{
					name: "Events",
					description: {
						text: "Learn how to dispatch and listen for events.",
						links: [
							["MDN - Introduction to events", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"],
							["MDN - Creating and triggering events", "https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events"],
							["Event Bubbling and Event Capturing in JavaScript", "https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e"],
							["Freecodecamp - A simplified explanation of event propagation", "https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/"],
							["JavaScript Events Explained", "https://flaviocopes.com/javascript-events/"],
							["MDN - addEventListener()", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"],
							["MDN - removeEventListener(", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"],
							["Event order", "https://www.quirksmode.org/js/events_order.html"],
						]
					}
				},
				{
					name: "Objects",
					description: {
						text: "Learn how to create and use objects.",
						links: [
							["MDN - Introducing JavaScript objects", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"],
							["MDN - Working with objects", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"],
							["javascript.info - Objects", "https://javascript.info/object"],
							["MDN - this", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"],
							["W3Schools - The JavaScript this Keyword", "https://www.w3schools.com/js/js_this.asp"],
							["MDN - bind()", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"],
							["MDN - new operator", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"],
							["MDN - new.target", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target"],
							["Data Structures: Objects and Arrays", "https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays"],
						]
					},
					skills: [
						{
							name: "Prototype",
							description: {
								text: "Learn how to extend objects and functions through its prototype.",
								links: [
									["The prototype chain", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"],
									["Prototypes in JavaScript", "https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b"],
									["dev.to - JavaScript Visualized: Prototypal Inheritance", "https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co"],
								]
							},
							skills: [
								{
									name: "Classes",
									description: {
										text: "Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.",
										links: [
											["MDN - Classes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"],
											["Medium - ES6 Classes", "https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a"],
											["MDN - Inheritance", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"],
											["MDN - Object Oriented Programming", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"],
											["MDN - super", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"],
										]
									}
								}
							]
						}
					]
				},
				{
					name: "Regex",
					description: {
						text: "Learn how to use regex to extract information from strings.",
						links: [
							["MDN - Regular Expressions", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"],
							["javascript.info - Regular expressions", "https://javascript.info/regular-expressions"],
							["MDN - RegExp", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"],
						]
					}
				},
				{
					name: "Template Literals",
					description: {
						text: "Learn how template literals and tagged templates and help you manipulate strings.",
						links: [
							["MDN - Template literals", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"],
							["MDN - ES6 In Depth: Template strings", "https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/"],
							["Google Devs - Getting Literal With ES6 Template Strings", "https://developers.google.com/web/updates/2015/01/ES6-Template-Strings"],
						]
					}
				},
				{
					name: "Promises",
					description: {
						text: "Learn how to use promises and what asynchronous code means.",
						links: [
							["Google Devs - JavaScript Promises: an Introduction", "https://developers.google.com/web/fundamentals/primers/promises"],
							["MDN - Promise", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"],
							["Master the JavaScript Interview: What is a Promise?", "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261"],
						]
					},
					skills: [
						{
							name: "Callbacks",
							description: {
								text: "Learn how to use callbacks and why they are not always a good idea.",
								links: [
									["MDN - Callback function", "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"],
									["JavaScript: What the heck is a Callback?", "https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced"],
									["javascript.info - Callbacks", "https://javascript.info/callbacks"],
								]
							}
						},
						{
							name: "Async/await",
							description: {
								text: "Learn how to use the async and await keywords to make it easier to write asynchronous code.",
								links: [
									["MDN - async function", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"],
									["Google Devs - Async functions", "https://developers.google.com/web/fundamentals/primers/async-functions"],
									["javascript.info - Async/await", "https://javascript.info/async-await"],
								]
							}
						},
						{
							name: "Fetch",
							description: {
								text: "Learn how to use the fetch API to fetch data.",
								links: [
									["Google Devs - Introduction to fetch", "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"],
									["Google Devs - Networking", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/networking"],
									["Freecodecamp - Fetch practical guide", "https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/"],
									["MDN - CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"],
									["Alligator - Fetch API", "https://alligator.io/js/fetch-api/"],
									["Supercharged - Fetch", "https://www.youtube.com/watch?v=GiI77ya60yk"],
									["Codelabs - Fetch ", "https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0"]
								]
							}
						},
					]
				},
				{
					name: "Web Animations",
					description: {
						text: "Learn how to use web animations to animate elements in the DOM.",
						links: [
							["Google Devs - Animations", "https://developers.google.com/web/fundamentals/design-and-ux/animations"],
							["MDN - Using The Web Animations API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"],
							["CSS Tricks - CSS Animations vs Web Animations API", "https://css-tricks.com/css-animations-vs-web-animations-api/"],
						]
					}
				},
				{
					name: "Modules",
					description: {
						text: "Learn how to modularize your code into ES6 modules using the export and import keywords.",
						links: [
							["MDN - Export", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"],
							["MDN - Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"],
							["V8 - Modules", "https://v8.dev/features/modules"],
							["Freecodecamp - A Practical guide to ES6 modules", "https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/"],
						]
					}
				},
				{
					name: "Intl",
					description: {
						text: "Learn how to localize your website using the Intl API.",
						links: [
							["MDN - Intl", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"],
							["MDN - Date Time Format", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"],
							["New Intl APIs in JavaScript", "https://blog.bitsrc.io/new-intl-apis-in-javascript-c50dc89d2cf3"],
						]
					}
				},
				{
					name: "Canvas",
					description: {
						text: "Learn how to paint graphics onto a canvas.",
						links: [
							["MDN - Canvas tutorial", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial"],
							["MDN - Canvas API", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"],
							["CSS Tricks - Manipulating Pixels Using Canvas", "https://css-tricks.com/manipulating-pixels-using-canvas/"],
						]
					}
				},
				{
					name: "Documentation",
					description: {
						text: "Learn how to create good documentation and why it is important.",
						links: [
							["Getting Started with JSDoc", "https://jsdoc.app/about-getting-started.html"],
							["A beginner’s guide to writing documentation", "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/"],
							["Write Good Documentation", "https://hackernoon.com/write-good-documentation-6caffb9082b4"],
							["The power of jsDoc", "https://dev.to/gmartigny/the-power-of-jsdoc-272d"],
							["Document your Javascript code with JSDoc", "https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf"],
						]
					},
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing Javascript.",
						links: [
							["MDN - JavaScript guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript"],
							["Airbnb - JavaScript Style Guide", "https://github.com/airbnb/javascript"],
							["Principles of Writing Consistent, Idiomatic JavaScript", "https://github.com/rwaldron/idiomatic.js/"],
							["5 JavaScript Style Guides", "https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa"],
							["JavaScript Style Guide and Coding Conventions", "https://www.w3schools.com/js/js_conventions.asp"],
						]
					}
				}
			]
		},

	]
}
