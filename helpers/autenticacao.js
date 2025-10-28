const request = require ('supertest');
const postLogin = require ('../fixtures/postLogin.json')

const obterToken = async (ususario, senha) => {
    const bodyLogin = {...postLogin }
    
    const respostaLogin = await request (process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(postLogin)
    
    return token = respostaLogin.body.token
}

module.exports = {
    obterToken
}