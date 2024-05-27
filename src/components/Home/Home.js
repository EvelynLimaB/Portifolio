import React from 'react';
import Pic from '../../Assets/pfpc.png';
import Eve from '../../Assets/evelyn.png';
import Git from '../../Assets/mediaIcons/github.png';
import Ln from '../../Assets/mediaIcons/linkedin.png';
import Zap from '../../Assets/mediaIcons/whatsapp.png';
import arrow from '../../Assets/arrow-down.gif';
import * as S from './HomeS';

export default function Home() {
	return (
		<S.Section>
			<S.Opndiv>
				{/* foto com apresentação */}
				<S.Picdiv>
					<S.Pfpic src={Pic} />
					<S.Intro>
						<img src={Eve} />
					</S.Intro>
				</S.Picdiv>
				<S.Arrow src={arrow} />
			</S.Opndiv>
			<S.Infodiv>
				<S.About>
					<p>
						Olá, meu nome é Evelyn e sou uma mulher trans apaixonada por
						tecnologia e desenvolvimento web. Meus principais interesses são a
						criação de interfaces com React e outras ferramentas front-end, além
						de estudar conceitos de ilustração e design gráfico para aprimorar
						minha habilidade como artista. Adoro obras como jogos e animações, e
						estou sempre buscando aprender mais sobre as últimas tendências e
						melhores práticas na área de desenvolvimento web e design.
					</p>
				</S.About>
				<S.Icondiv>
					{/* icones */}
					<S.Li>
						<a target="_blank" href="https://github.com/EvelynLimaB">
							<img src={Git} />
							<p>https://github.com/EvelynLimaB</p>
						</a>
					</S.Li>
					<S.Li>
						<a
							target="_blank"
							href="https://api.whatsapp.com/send?phone=5521977260938">
							<img src={Zap} />
							<p>+55 (21) 97726-0938</p>
						</a>
					</S.Li>
					<S.Li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/evelyn-lima-barreto/">
							<img src={Ln} />
							<p>Evelyn Lima Barreto</p>
						</a>
					</S.Li>
				</S.Icondiv>
			</S.Infodiv>
		</S.Section>
	);
}
