import Carousel from 'nuka-carousel';
import { projects } from '../data';
import { styled } from 'styled-components';
const Projects = () => {
	return (
		<P>
			<Carousel adaptiveHeight={true} style={{ textAlign: 'center' }}>
				{projects.map((pro) => {
					return (
						<div>
							<Img key={pro.id} src={pro.src} />
							<Description>{pro.description}</Description>
						</div>
					);
				})}
			</Carousel>
		</P>
	);
};

const Img = styled.img`
	max-width: 30%;

	display: block;
	margin-left: auto;
	margin-right: auto;
`;

const P = styled.div`
	border: 0.05em solid black;
	margin: 1em;
	padding: 1em;
`;
const Description = styled.div`
	margin: 2em;
	text-align: center;
`;
export default Projects;
