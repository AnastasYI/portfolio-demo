import { styled } from 'styled-components';
import { logos } from '../data';
const Logos = () => {
	return (
		<span>
			{logos.map((logo) => {
				return (
					<Imgbtn key={logo.id}>
						<Img src={logo.logoSrc} alt={logo.id} />
					</Imgbtn>
				);
			})}
		</span>
	);
};
export default Logos;
const Imgbtn = styled.button``;
const Img = styled.img`
	max-width: 100px;
	filter: grayscale(85%);
	margin: 20px;
	box-sizing: border-box;
	&:hover {
		filter: grayscale(0%);
	}
`;
const Aptitudes = styled.div``;
