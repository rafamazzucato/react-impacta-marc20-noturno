const restful = require('node-restful');

const schema = new restful.mongoose.Schema({
    data : {type: Date, required: true},
    descricao: {type: String, required: true},
    responsavel: {type: String, required:true},
    telefone:{type: String, required:true}
})

module.exports = restful.model('compromissos', schema);