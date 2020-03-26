const restful = require('node-restful');

const schema = new restful.mongoose.Schema({
    data : { type: Date, required: true},
    nome : { type: String, required: true},
    email: { type: String, required: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    assunto: { type: String, required : true}
});

module.exports = restful.model('contatos', schema);