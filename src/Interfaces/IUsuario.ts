export interface IUsuario {
    pessoa: {
        id: Number,
        nome: String
    }

    email: String,
    idUsuario: Number,
    papeis: [
        {
            id: Number,
            nome: String,
            prioridade: Number
        }
    ]
}