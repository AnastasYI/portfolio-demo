import { styled } from 'styled-components';
import { logos } from '../data';
import { useState } from 'react';
import useIsMobile from './UseMobile';
const Logos = () => {
	const isMobile = useIsMobile();
	const defaultState = {
		HTML: false,
		JS: false,
		CSS: false,
		React: false,
	};
	const [toggling, setToggling] = useState(defaultState);
	const handleToggle = (e) => {
		setToggling({ ...defaultState, [e.target.id]: true });
	};

	return (
		<AptitudesLogos>
			{logos.map((logo) => {
				{
					return toggling[logo.id] ? (
						<MappedReturnToggled key={logo.id}>
							<ImgToggled
								onClick={handleToggle}
								id={logo.id}
								src={logo.logoSrc}
								alt={logo.id}
							/>
							<Description>{logo.description}</Description>
						</MappedReturnToggled>
					) : (
						<MappedReturn key={logo.id}>
							<Img
								onClick={handleToggle}
								id={logo.id}
								src={logo.logoSrc}
								alt={logo.id}
							/>
						</MappedReturn>
					);
				}
			})}
		</AptitudesLogos>
	);
};
export default Logos;
const AptitudesLogos = styled.div`
	border: 0.05em solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1em;
`;

const Img = styled.img`
	max-width: 7em;
	filter: grayscale(85%);

	&:hover {
		filter: grayscale(0%);
	}
`;
const MappedReturn = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1em;
	align-items: center;
	@media screen and (max-width: 720px) {
		flex-direction: column;
	}
`;
const MappedReturnToggled = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1em;
	background-color: #7f8084;
	align-items: center;
	color: #f3f3f3;
	@media screen and (max-width: 720px) {
		flex-direction: column;
	}
`;

const ImgToggled = styled.img`
	max-width: 7em;
`;
const Description = styled.div`
	margin-left: 2em;
`;
