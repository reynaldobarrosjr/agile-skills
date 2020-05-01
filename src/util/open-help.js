import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}

				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}

				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}

				p {
					margin: 0 0 var(--spacing-m);
				}

				a {
					color: var(--link);
				}

				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}

				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}

			</style>

			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>

			<h2>Trilha da Agilidade FAQ</h2>

		 	<h3>O que é a trilha da Agilidade?</h3>

			<p>Trilha da Agilidade é um panorama visual de habilidades úteis para um agilista. É útil para você que está iniciando na jornada ágil, assim como para você que está nesta jornada há muito tempo e precisa aprender coisas novas. Se você estiver chegando na agilidade agora não quero que pense que aqui está uma lista definitiva de coisas que você deve buscar para se desenvolver como Agilista, mas como um ponto de partida para as disciplinas que você poderá se apropriar. As habilidades estão ordenadas em ordem cronológica tomando como base a trilha que consultei junto a comunidade Ágil Mundial. Fique à vontade!
			</p>

			<h3> Como você escolheu as habilidades? </h3>
			<p>As habilidades listadas são fruto de minha experiência com a Agilidade ao longo destes 13 anos. Nas comunidades o debate sempre é intenso sobre o que devemos ter em nossos leque de habilidades como Agilista. Tomei como base todas as informações que rolam nos grupos de Agilistas.Certamente a lista estará incompleta. É aí que você entra!
		</p>
			<h3>Como posso patrocinar seu trabalho?</h3>

		<p>	Eu dedico parte do meu tempo a ajudar a comunidade ágil de forma gratuita, porque eu quero que os valores e princípios da agilidade se espalhem pelo mundo. Minha motivação parte da ajuda sem preço que isso tem tanto para mim como para você. Como costumo brincar, agradecimento não paga o café, mas você pode contribuir com um cafezinho que ficarei imensamente agradecido. É singelo, mas acredite, faz toda diferença para mim porque vem em formato de carinho.
			<3</p>

			<h3>Como posso contribuir?</h3>
		<p>	Você é muito bem vindo para contribuir do jeito que quiser. Se você puder, coloque suas ideias <a href="https://github.com/reynaldobarrosjr/agile-skills/issues">aqui</a>. Assim me ajudará com possíveis erros nos textos, bugs na página ou até mesmo novas features. Qualquer ajuda é bem vinda!
			Se preferir me ajudar a organizar as informações visualmente você pode fazê-lo diretamente no Mural.
</p>
			<p>Como eu deixo registrado o que eu já sei?</p>

		<p>	Ainda não tá funcionando mas vamos trabalhar nisso.
	</p>
			<h3>É muita coisa Rey! Me ajuda!?</h3>

			<p>Aí tem um pouco da jornada que todo agilista vai seguir. Fique na paz! O que vai te construir é o caminho.
	</p>
			<h3>Porque você não incluiu o tema x, y, z?</h3>

			<p>Esse trabalho é organico e eu vou atualizando a medida que vou recebendo seu feedback, coloque ele aqui >>  [dar feedback](https://github.com/reynaldobarrosjr/agile-skills/issues).
</p>

			<h3>Como posso me livrar da rolagem horizontal?</h3>
			<p>Muitas pessoas não gostam da rolagem horizontal. Eu curto neste contexto porque o cara que construiu esse visual tinha a intenção de que ele fosse único.
			Mas, se você quer se livrar da rolagem, use o botão no canto superior direito do site. Se você quiser compartilhar com alguém o modelo compacto, você terá de usar <code>?compac</code> ao final da URL.


			<h3>Como posso entrar em contato com você?</h3>
			<p>A melhor forma é me dando um alô no <a target="_blank" href="https://www.linkedin.com/in/reynaldojr/" rel="noopener" aria-label="Abrir LinkedIn">LinkedIn</a> ou dê uma olhada em  <a target="_blank" href="https://www.reynadldobarrosjr.com" rel="noopener" aria-label="Abrir site pessoal">meu site</a> se você quiser ver outras coisas que estou fazendo.</p>

			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}
