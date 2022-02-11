'use strict'

class SessionController {

    // Authenticator
    async store({ request, auth }){
        try{
            const { email, password } = request.all();

            const token = await auth.attempt(email, password);

            return response.status(200).send(token);

        } catch (error) {
            return response.status(500).send({error: error.message});
        }
    }
}

module.exports = SessionController
