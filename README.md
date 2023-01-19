# Car Shop API

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Car Shop API Commerce foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end utilizando Programação Orientada a Objetos e banco dados MongoDB. 


## Objetivo

A aplicação desenvolvida é uma API de gerênciamento para uma concecionária de veículos, onde é possível cadastar, atualizar, remover ou visualizar um veículo do banco de dados.

## Tecnologias e Ferramentas

<div>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="Swagger" />
      <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
    <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="Mocha" />
    <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" alt="Chai" />
</div>

<br>

Na elaboração deste projeto utilizou-se as seguintes ferramentas:
  
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- Arquitetura Model-Service-Controller

### Testes

- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)
- [Chai](https://www.chaijs.com/)

### Alinhamento de código

- [ESlint](https://eslint.org/)

### Documentação

- [Swagger](https://swagger.io/)

## ⚙️ Execução

  ⚠️ Para executar o projeto é necessário ter o [Docker](https://docs.docker.com/desktop/install/linux-install/) instalado em sua máquina.

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:larissaperinoto/car-shop-api.git

Navegue até a raíz do projeto.

    cd car-shop-api/

Execute o comando para instalar as dependencias do projetos.

    npm install
    
Na raíz do projeto, suba os containers do **car_shop** e **car_shop_db** com o comando abaixo

    docker-compose up -d

Inicie o servidor com o comando abaixo

    npm run dev
  
Rode os testes da aplicação usando o seguinte comando

    npm run test:mocha

---

Desenvolvido por [Larissa Perinoto](http://www.linkedin.com/in/larissaperinoto), © 2023.
