import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar navegação</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Esconder navegação</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Currículo</a></li>
            <li><a className="smoothscroll" href="#portfolio">Trabalhos</a></li>
            {/* <li><a className="smoothscroll" href="#sideprojects">Side Projetcs</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Depoimentos</a></li>
            <li><a className="smoothscroll" href="#contact">Contato</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Eu sou {name}.</h1>
            <h3 className="blur"><div>Moro em {city}, trabalho com <span>{occupation}</span> e estou disponível ao mercado. {description}.</div></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;