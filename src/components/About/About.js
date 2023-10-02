import React, { useState } from 'react';
import X from '../../Assets/x.png';
import progs from './Listas/progs';
import * as S from './AboutS';

export default function About() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	return (
		<S.Section>
			<S.Circle />
			<S.Div>
				<S.Div1>
					<S.H2>Coding!</S.H2>
					<S.Proramslng>
						<ul>
							{progs.map((progs, index) => (
								<S.Li
									onClick={() => {
										setModalData(progs);
										setModalIsOpen(true);
										console.log(modalData);
									}}>
									<img src={progs.logo} />
									<p>{progs.nome}</p>
								</S.Li>
							))}
						</ul>
					</S.Proramslng>
				</S.Div1>
			</S.Div>
			<S.Div2>
				<S.BgCut />
				<h2>EM BREVE</h2>
			</S.Div2>

			<S.Modal
				isOpen={modalIsOpen}
				style={S.MStyle}
				shouldReturnFocusAfterClose={false}
				onRequestClose={() => setModalIsOpen(false)}
				closeTimeoutMS={100}>
				<S.Button onClick={() => setModalIsOpen(false)}>
					<img src={X} />
				</S.Button>
				{modalIsOpen && (
					<section>
						<S.Icon src={modalData.logo} />
						<S.Nome>{modalData.nome}</S.Nome>
						<S.Desc>{modalData.descrição}</S.Desc>
					</section>
				)}
			</S.Modal>
		</S.Section>
	);
}
