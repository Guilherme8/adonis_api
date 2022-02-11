const User = use('App/Models/User');

class UserController {
    async store({request, response}){
        try{
            // Solicita os campos p/ cadastro do cliente
            const data = request.only(['username', 'email', 'password']);

            // Cria user com os campos informados
            const user = await User.create(data);

            return response.status(200).send(user);
        } catch (error) {
            return response.status(500).send({error: error.message});
        }
    }
}

module.exports = UserController
