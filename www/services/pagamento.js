App.factory('PagamentoService', function($http, URL_API, $httpParamSerializerJQLike, $filter){
    var factory = {};
        factory.postData = {
            acompanhantes: {},
            event_id: '',
            pagamento: 'creditCard',
            price: 1.00,
            qty: 0,
            token: localStorage.getItem('token')
        };
        factory.paymentReturn = {}

    factory.setPaymentReturn = function(data)
    {
        factory.paymentReturn = data;
    }
    factory.setDados = function(data)
    {
        factory.postData = data;
    }

    factory.getDados = function()
    {
        return factory.postData;
    }

    factory.getDirectSession = function() 
    {
        return $http({
            method: 'POST',
            url: URL_API+'pagamento/getDirectSession',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
    factory.pagamento= function(dados) 
    {
        return $http({
            method: 'POST',
            data: $httpParamSerializerJQLike(dados),
            //url: URL_API+'pagamento/pagseguro',
            url: URL_API+'pagamento/pagar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    factory.getEndereco = function(cep)
    {
         return $http({
            method: 'POST',
            data: 'cep='+cep,
            url: URL_API+'cep',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
    return factory;
});
