import styled from 'styled-components';
import { linkIcons } from '../data';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
const About = () => {
	const [copied, setCopied] = useState(false);
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
			<MailDiv>
				<h1>Contact me</h1>
				<CopyToClipboard
					text='anastas.yordanov@gmail.com'
					onCopy={() => setCopied(true)}
				>
					<MailIcon>
						<LinkImg src='./images/logos/Gmail.png' alt='Gmail'></LinkImg>
					</MailIcon>
				</CopyToClipboard>
				{copied ? <div>My email is on your clipboard!</div> : null}
			</MailDiv>
		</AboutC>
	);
};
export default About;
const AboutC = styled.div`
	padding: 1em;
`;
const Image = styled.img`
	max-width: 30%;
	padding: 2em;
	border: 0.05em solid black;
`;
const Description = styled.div`
	border: 0.05em solid black;
`;
const Name = styled.div`
	border: 0.05em solid black;
`;
const Buttons = styled.ul`
	display: flex;
	justify-content: space-around;
	border: 0.05em solid black;
	padding: 0.5em;
`;
const LinkBtn = styled.li`
	border: 0.05em solid black;
`;
const MailIcon = styled.button`
	border: none;
	padding: none;
	background: none;
	cursor: pointer;
`;
const LinkImg = styled.img`
	max-width: 3em;
`;
const MailDiv = styled.div``;
