export interface IUsuario {
    pessoa: {
        id: Number,
        nome: String
    }

    email: String,
    id: Number,
    papeis: [
        {
            id: Number,
            nome: String,
            prioridade: Number
        }
    ]
}