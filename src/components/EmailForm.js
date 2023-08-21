import { useRef } from 'react';
import { styled } from 'styled-components';

const EmailForm = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		e.target.reset();
	};
	return (
		<StyledContactForm>
			<Form ref={form} onSubmit={sendEmail}>
				<label>Email</label>
				<Email type='email' name='user_email' />
				<label>Message</label>
				<TextArea name='message' />
				<Send type='submit' value='Send' />
			</Form>
		</StyledContactForm>
	);
};
export default EmailForm;
const StyledContactForm = styled.div`
	border: 0.05em solid black;
	width: 95%;
	margin: auto;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0.5em;
`;
const Send = styled.input`
	margin: 0.5em;
	border: none;
	background-color: none;
	color: grey;
`;
const TextArea = styled.textarea`
	border: none;
	resize: none;
	min-width: 75%;
	min-height: 7em;
`;
const Email = styled.input`
	border: none;
	min-width: 60%;
`;
