import styled from 'styled-components';
import { linkIcons } from '../data';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import EmailForm from './EmailForm';
const About = () => {
	const [copied, setCopied] = useState(false);
	return (
		<AboutC>
			<Hero>
				<Name>Anastas Yordanov Ivanov</Name>
				<Image src='./images/Pictures/ProfilePic.jpg' alt='Profile' />
				<Description>
					Newcommer into the coding world, adept cyclist and professional cat
					sitter.
				</Description>
				<Buttons>
					{linkIcons.map((icon) => {
						return (
							<LinkBtn key={icon.id}>
								<Anchor href={icon.link} target='_blank'>
									<LinkImg src={icon.logo} alt={icon.id} />
								</Anchor>
							</LinkBtn>
						);
					})}
				</Buttons>
				<MailDiv>
					<CopyToClipboard
						text='anastas.yordanov@gmail.com'
						onCopy={() => setCopied(true)}
					>
						<MailIcon>
							<LinkImg src='./images/logos/Gmail.png' alt='Gmail'></LinkImg>
						</MailIcon>
					</CopyToClipboard>
					{copied ? <Alert>My email is on your clipboard</Alert> : null}
				</MailDiv>
			</Hero>

			<EmailForm />
		</AboutC>
	);
};
export default About;
const AboutC = styled.div`
	padding: 1em;
	text-align: center;
`;
const Image = styled.img`
	max-width: 30%;
`;
const Description = styled.div`
	border-bottom: 0.05em solid black;
	margin: 2% 10%;
`;
const Name = styled.div`
	border: 0.05em solid black;

	margin: 2% 10%;
`;
const Buttons = styled.ul`
	display: flex;
	justify-content: space-around;
	margin: 2% 40%;
`;
const LinkBtn = styled.li`
	max-height: 3em;
`;
const MailIcon = styled.div`
	border: none;
	padding: none;
	background: none;
	cursor: pointer;
	max-width: 3em;
	display: block;
	margin-left: auto;
	margin-right: auto;
`;
const LinkImg = styled.img`
	max-width: 3em;
`;
const MailDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Anchor = styled.a``;

const Hero = styled.div`
	padding: 2em;
	border: 0.05em solid black;
	margin: 2%;
`;
const Alert = styled.div`
	color: red;
	filter: grayscale(40%);
`;
