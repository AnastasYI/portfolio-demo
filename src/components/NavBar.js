import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { navData } from '../data';
const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					{navData.map((item) => {
						return (
							<BigSection key={item.id}>
								<NavLink to={item.link}>
									<Section>
										<Circle>º</Circle>
										{item.id}
									</Section>
								</NavLink>
							</BigSection>
						);
					})}
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
const Nav = styled.nav``;
const NavMenu = styled.div`
	background: #f3f3f3;
	width: 100%;
	height: 90px;
	display: flex;
	overflow: hidden;
	position: fixed;
	bottom: 0;
`;
const Section = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px;
	&:hover {
		background-color: #7f8084;
	}
`;
const Circle = styled.span`
	color: #889293;
`;
const BigSection = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	border: solid 1px #889293;
	border-right: 0px;
	text-align: center;
`;
