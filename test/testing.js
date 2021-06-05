let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let apiRouter = require('../apiRouter').router
let config = require('../config/config')
let token;

///////////// Assertions style  ///////////////////
chai.should();
chai.use(chaiHttp);

describe('Task API', () =>{

    /**
     * Test the POST Route (login)
     */
         describe('POST /api/v1/user/login', () =>{    
            it('should logged user', (done) =>{
                chai.request('http://localhost:3000')
                .post('/api/v1/user/login')
                .send({email: 'sequelize3@yopmail.com', password: '@roose509' })
                .end((err, response) =>{
                    console.log("token: " +response.body.token);
                    token = response.body.token
                    response.text.should.be.eq(response.text);
                    response.should.have.status(200);
                    done();
                })
            })

            it('It should NOT logged user', (done) =>{
                chai.request('http://localhost:3000')
                .post('/api/v1/user/login')
                .end((err, response) =>{
                    if(err){
                    response.should.have.status(400);
                    response.text.should.be.eq('missing parameters');
                    }
 
                    done();
                })
            })
        })


     /**
     * Test the POST Route (register) method
     */
/*                  describe('POST /api/v1/user/register', () =>{    
                    it('should SIGN UP user', (done) =>{
                        chai.request('http://localhost:3000')
                        .post('/api/v1/user/register')
                        .send({
                            gender: "madame",
                            nom: "testMocha",
                            prenom: "test_mocha",
                            email: 'test_mocha@domain.com',
                            password: '@password1',
                            password_confirm: '@password1',
                            address: "madame",
                            zipCode: "madame",
                            city: "madame",
                            optin: "madame"
                         })
                        .end((err, response) =>{
                            response.text.should.be.eq(response.text);
                            console.log("::::::::::::::::::")
                            response.should.have.status(201);    
                            expect('/api/v1/user/register').to.throw(Error);                        
                            response.text.should.be.eq("un mail de confirmation vous a été envoyé afin de valider votre compte à l'adresse : " + email);
                            done();
                        })
                    })
        
                    it('It should NOT SIGN UP user', (done) =>{
                        chai.request('http://localhost:3000')
                        .post('/api/v1/user/register')
                        .end((err, response) =>{
                            if(err){
                            expect('/api/v1/user/register').to.throw(Error);
                            response.should.have.status(400);
                            response.text.should.be.eq(response.text);
                            }
         
                            done();
                        })
                    })
                }) */
    

    /**
     * Test the Get Route
     */
/*     describe('GET /api/v1/admin/users', () =>{
        it('should GET all users', (done) =>{
            console.log(token)

            chai.request('http://localhost:3000')
            .get('/api/v1/admin/users')
            .set('Authorization', 'Bearer ' + token)
            .end((err, response) =>{
                console.log(response.body)
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
        })

        it('It should NOT GET all users', (done) =>{
            chai.request('http://localhost:3000')
            .get('/api/v1/admin/users')
            .end((err, response) =>{
                if(err) {
                response.should.have.status(400);
                response.text.should.be.eq('You are not an admin!');
                }

                done();
            })
        })
    }) */



    /**
     * Test the Get (by id) Route
     */



    /**
     * Test the DELETE Rout
     */


    /**
     * Test the PUT Rout
     */



})
