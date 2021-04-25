import { React } from 'react';
import { HashLink } from 'react-router-hash-link';

const HeaderLinks = () => {
  return (
    <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar navegação</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Esconder navegação</a>

         <ul id="nav" className="nav">
            <li className="current"><HashLink smooth to="./#home">Home</HashLink></li>
            <li><HashLink smooth to="./#about">Sobre</HashLink></li>
            <li><HashLink smooth to="./#resume">Curriculo</HashLink></li>
            <li><HashLink smooth to="./#portfolio">Trabalhos</HashLink></li>
            {/* <li><HashLink smooth to="./#testimonials">Depoimentos</HashLink></li> */}
            <li><HashLink smooth to="./#contact">Contato</HashLink></li>
            <li><HashLink to="./BlogPage">Blog</HashLink></li>
         </ul>

      </nav>
  )
}

export default HeaderLinks;
