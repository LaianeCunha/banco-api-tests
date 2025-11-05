# Banco API Tests

Projeto de **automação de testes de API Rest** desenvolvido em **JavaScript**, com o objetivo de validar os endpoints do sistema [Banco API](https://github.com/juliodelimas/banco-api).

---

## 🎯 Objetivo

Este projeto tem como propósito **contribuir a qualidade e estabilidade da API** do sistema Banco, verificando o comportamento dos endpoints, respostas esperadas e possíveis falhas.  
Os testes foram estruturados utilizando o framework **Mocha**, com as bibliotecas **Chai** e **Supertest** para asserções e requisições HTTP.

---

## 🧰 Stack Utilizada

| Categoria | Tecnologia / Biblioteca | Documentação |
|------------|-------------------------|---------------|
| Linguagem | [JavaScript (Node.js)](https://nodejs.org/) | [📘 Node.js Docs](https://nodejs.org/en/docs/) |
| framework de Testes | [Mocha](https://mochajs.org/) | [📘 Mocha Docs](https://mochajs.org/#getting-started) |
| Bibliotecas de Asserções | [Chai](https://www.chaijs.com/) | [📘 Chai Docs](https://www.chaijs.com/api/) |
| Biblioteca de Requisições HTTP | [Supertest](https://github.com/visionmedia/supertest) | [📘 Supertest Docs](https://github.com/visionmedia/supertest#readme) |
| Relatórios de Teste | [Mochawesome](https://github.com/adamgruber/mochawesome) | [📘 Mochawesome Docs](https://github.com/adamgruber/mochawesome#readme) |
| Variáveis de Ambiente | [dotenv](https://github.com/motdotla/dotenv) | [📘 Dotenv Docs](https://github.com/motdotla/dotenv#readme) |

---

## 🗂️ Estrutura de Diretórios

```
banco-api-tests/
├── test/                    # Contém os arquivos de teste organizados por recursos
│   ├── login.test.js
│   └── transferencias.test.js
│
├── mochawesome-report/      # Diretório gerado automaticamente após execução dos testes
│   └── mochawesome.html
│
├── .env             # Arquivo para configuração da variável BASE_URL
├── package.json             # Dependências e scripts
├── README.md                # Documentação do projeto
└── .gitignore               # Arquivos e pastas ignoradas no versionamento
```

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o Repositório

```bash
git clone https://github.com/LaianeCunha/banco-api-tests.git
cd banco-api-tests
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Criar o Arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> 🔹 **BASE_URL**: define a URL base da API que será testada.  
> Altere conforme o ambiente em que a API do [Banco API](https://github.com/juliodelimas/banco-api) estiver sendo executada.

---

##  Execução dos Testes

Para rodar todos os testes:

```bash
npm test
```

Durante a execução, o Mocha rodará os testes e exibirá os resultados no terminal.

---

## 📊 Geração de Relatórios (Mochawesome)

Após a execução dos testes, o Mochawesome gera automaticamente um relatório em HTML no diretório `mochawesome-report`.

Para abrir o relatório, basta acessar:
 Clicar no arquivo ``` mochawesome.html ``` com o botão direito e clicar em Copy Path:

```
C:\Projetos\banco-api-tests\mochawesome-report\mochawesome.html
```

Ou abrir manualmente no navegador o arquivo `mochawesome.html`.

---

##  Scripts Disponíveis

No `package.json` há scripts prontos para facilitar a execução:

| Comando | Descrição |
|----------|------------|
| `npm test` | Executa todos os testes com Mocha |
| `npm run report` | Gera o relatório completo em HTML com Mochawesome |

---

## 🧾 Notas Finais

- Certifique-se de que a **API do Banco** esteja em execução antes de rodar os testes.  
- Para mais detalhes sobre o sistema testado, acesse o repositório [Banco API](https://github.com/juliodelimas/banco-api).
