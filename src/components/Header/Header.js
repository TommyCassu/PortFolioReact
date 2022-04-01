import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', color:"white", fontSize: "24px" }}>
           <span>Portfol<a style={{ color:"green", font:"bold"}}>io</a></span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Compétences</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Stage</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#about">
          <NavLink>Certifications</NavLink>
        </Link>
      </li> 
        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/TommyCassu">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tommy-cassu-312211225/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
