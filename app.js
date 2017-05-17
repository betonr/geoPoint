var express     = require('express'),
    bodyParser  = require('body-parser'),
    Search      = require('./models/searchPoint')
    app         = express();


app.use(bodyParser());
var port = process.env.PORT || 4000;

//ROTAS
var router = express.Router();

router.get('/', function(req, res){
    res.send({point: null});
});

router.get('/:geometry/:nf/:nl/:num', function(req, res){
    var point = Search.getPoint(req.params.geometry, parseInt(req.params.nf), parseInt(req.params.nl), parseInt(req.params.num));
    res.send(point);
});

//pagina de não encontrada


app.use('/api', router);

//subindo o servidor na porta 3000
app.listen(port, function(){
    console.log('Servidor rodando na porta: '+port);
});

