import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
    <>
      <h1 className='home'>
      <div className="nave">
      <div className="mb-2">

      </div>
        <nav>
        <p><br /></p>
        <Link to="/Daaz"><Button variant="primary" size="lg" width="80%">
          Filmes de A a Z
        </Button></Link>
        
        <p><br /></p>
        
        <Link to="/Porcategoria"><Button variant="primary" size="lg" width="80%">
        Filmes Por categoria
        </Button></Link>
        <p><br /></p>

        <Link to="/Series"><Button variant="primary" size="lg" width="80%">
        Séries
        </Button></Link>
        <p><br /></p>
   
        <Link to="/Playlistyou"><Button variant="primary" size="lg" width="80%">
        Playlist de filmes do youtube
        </Button></Link>
        <p><br /></p>
       
        <Link to="/TVs"><Button variant="primary" size="lg" width="80%">
        TVs
        </Button></Link>
        <p><br /></p>

        <Link to="/Radios"><Button variant="primary" size="lg" width="80%">
        Radios
        </Button></Link>
        <p><br /></p>

        <Link to="/Radios"><Button variant="primary" size="lg" width="80%">
        Radios
        </Button></Link>
        <p><br /></p>

          
  
        </nav>
        <Container fluid="md">
      <Row>
        <Col>O site JPP APP é uma plataforma para assistir filmes e séries online, nesta página, funcionamos como base nas últimas tecnologias lançadas nesta geração voltada ao uso de inteligência artificial & robots & API de dados, ou seja, não hospedamos vídeos em nossos servidores, apenas, de forma automática, indexamos os arquivos que são capturados pela web, nos tornando completamente legais & dentro da lei. O uso desta plataforma é de total responsabilidade do usuário. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre o conteúdo, entre em contato conosco para obter a devida ajuda.</Col>
      </Row>
    </Container>
    <Container fluid="md">
      <Row>
        <Col>Ajude a manter nosso site</Col>
        <Col>Pix: jairppereira21@gmail.com</Col>
      </Row>
    </Container>
       

        <p><br /></p></div>
</h1>

    </>
        
        
         
  );
}
