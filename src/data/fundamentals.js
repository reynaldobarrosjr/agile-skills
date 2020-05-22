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
									["Os 3 papéis do SCRUM e sua importância", "https://agilemomentum.wordpress.com/2014/04/30/quem-e-voce-os-3-papeis-do-scrum-e-sua-importancia/"],

								],
							},
							skills: [
								{
									name:"Scrum Master",
									description:{
										text:"Conheça o papel responsável por buscar o melhor time SCRUM",
										links:[
											["O que faz um SCRUM MASTER?","https://www.voitto.com.br/blog/artigo/scrum-master"],
										],
									},
								},
								{
									name:"Product Owner",
									description:{
										text:"Conheça o papel responsável por buscar o melhor produto",
										links:[
											["Quero ser Product Owner, por onde começar?","https://medium.com/mulheres-de-produto/quero-ser-product-owner-por-onde-começar-8e2263609073"],
										],
									},
								},
								{
									name:"Time Dev",
									description:{
										text:"Conheça os responsáveis por sempre querer fazer mais com menos - (muito cuidado nessa hora)",
										links:[
											["O que faz o time de desenvolvimento do scrum?","#"],
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
									["Quais são os eventos SCRUM?", "#"],


								],
							},
							skills:[
								{
									name:"Planejamento da Sprint",
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
										text:"Sprint - a hora da mão na massa no SCRUM",
										links:[
											["O que é a Sprint?","#"]
										]
									}

								},
								{
									name:"Daily Scrum",
									description:{
										text:"Saiba tudo sobre um dos principais eventos do SCRUM",
										links:[
											["O que é o daily scrum?","#"]
										]
									}

								},
								{
									name:"Retrospectiva da sprint",
									description:{
										text:"Saiba tudo sobre o momento de melhoria contínua do time",
										links:[
											["O que é a Retrospectiva da Sprint?","#"]
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
										text:"Saiba mais sobre o Incremento",
										links:[
											["Definição de pronto e incremento","https://escritoriodeprojetos.com.br/definicao-de-pronto-e-incremento"]

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
					name: "Toyotismo",
					description: {
						text: "Saiba mais sobre a forma de trabalho que fez a TOYOTA um exemplo mundial de eficiência.",
						links: [
							["O que é o TOYOTISMO?", "https://www.stoodi.com.br/blog/2018/02/14/toyotismo-o-que-e-origem-como-funciona/"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					},
					skills:[
						{
							name:"kanban",
							description:{
								text:"Conheça o artefato de transparência kanban (cartão visual)",
								links:[
									["O que é o cartão kanban","https://kanbanize.com/pt/recursos-kanban/primeiros-passos/o-que-e-cartao-kanban"],
								]
							},
						}
					]
				}
			]
		},

	]
}
