var evilscan = require('evilscan');

var options = {
    target:'192.168.0.0',
    port:'443',
    status:'TROU', // Timeout, Refused, Open, Unreachable
    banner:true
};

var scanner = new evilscan(options);

scanner.on('result',function(data) {
    // fired when item is matching options
    console.log(data);
});

scanner.on('error',function(err) {
    throw new Error(data.toString());
});

scanner.on('done',function() {
    // finished !
});

scanner.run();