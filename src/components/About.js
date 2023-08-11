import styled from 'styled-components';
import { linkIcons } from '../data';
const About = () => {
	return (
		<AboutC>
			<Image src='./images/Pictures/ProfilePic.jpg' alt='Profile' />
			<Name>Anastas Yordanov Ivanov</Name>
			<Description>Hi, this is a text about me</Description>
			<Buttons>
				{linkIcons.map((icon) => {
					return (
						<LinkBtn key={icon.id}>
							<a href={icon.link} target='_blank'>
								<LinkImg src={icon.logo} alt={icon.id} />
							</a>
						</LinkBtn>
					);
				})}
			</Buttons>
		</AboutC>
	);
};
export default About;
const Image = styled.img`
	max-width: 30%;
	padding: 2em;
	border: 0.05em solid black;
`;
const Description = styled.div``;
const AboutC = styled.div``;
const Name = styled.div``;
const Buttons = styled.ul``;
const LinkBtn = styled.li``;
const LinkImg = styled.img``;
