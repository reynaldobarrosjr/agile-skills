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
		<p>	Você é muito bem vindo para contribuir do jeito que quiser. Se você puder, coloque suas ideias em [issues page](https://github.com/reynaldobarrosjr/agile-skills/issues). Assim me ajudará com possíveis erros nos textos, bugs na página ou até mesmo novas features. Qualquer ajuda é bem vinda!
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

			<h3>How can I get rid of the horizontal scrolling?</h3>
			<p>Many people do not like horizontal scrolling; Personally I really like in this context and wanted to build something truly unique :-) If you want to get rid of the horizontal scrolling, you can toggle back and forth between the wide and compact layout by using the switch at the top of the page. The compact mode is default for mobile users. If you want to share a link for the compact mode you can add <code>?compact</code> to the end of the URL. If you like the wide layout the most you can use the mouse to drag yourself around on the page or press <code>Alt + /</code> to jump to other sections.</p>

			<h3>What does the "experimental" banner mean?</h3>
			<p>When a skill is described as experimental, it means that the technology is immature and currently in the process of being added to the Web platform (or considered for addition). Think carefully before you start using experimental technology in any kind of production project. The definition used in Web Skills is based on the excellent definition used on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental" rel="noopener">MDN</a>. You are very welcome to open an issue on <a target="_blank" href="https://github.com/andreasbm/web-skills/issues" rel="noopener" aria-label="Open get involved">Github</a> if you see a skill you believe should be marked as "experimental" or have the banner removed.</p>

			<h3>How can I get in contact with you?</h3>
			<p>Reach out to me on Twitter at <a target="_blank" href="https://twitter.com/AndreasMehlsen" rel="noopener" aria-label="Open Twitter">@AndreasMehlsen</a> or take a look at <a target="_blank" href="https://andreasbm.github.io" rel="noopener" aria-label="Open personal website">my website</a> if you want to learn more about what other projects I'm working on.</p>

			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}
