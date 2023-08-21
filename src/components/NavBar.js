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
								<NavLink
									to={item.link}
									style={({ isActive }) =>
										isActive
											? { backgroundColor: '#7f8084', color: 'red' }
											: { backgroundColor: '#f3f3f3', color: `white` }
									}
								>
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
	width: 100%;
	min-height: 2em;

	display: flex;
	overflow: hidden;

	top: 0;
`;
const Section = styled.div`
	width: 100%;
	height: 100%;
	padding: 1em;
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
	border: solid 0.05em #889293;
	border-right: 0;
	text-align: center;
`;
