const request = require ('supertest');

const obterToken = async (ususario, senha) => {
    const respostaLogin = await request (process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
                'username': ususario,
                'senha': senha
              })
    
    return token = respostaLogin.body.token
}

module.exports = {
    obterToken
}