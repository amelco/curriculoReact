import React, { Component } from 'react';

import HeaderLinks from './HeaderLinks';

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

      <HeaderLinks />

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Olá, eu sou {name}.</h1>
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
