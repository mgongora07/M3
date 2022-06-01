const commands=require("./commands/index.js")


const done = function(output){
    process.stdout.write(output);
    process.stdout.write("\nIngresa un comando > ");   
}

// Output un prompt
   process.stdout.write('Ingresa un comando > ');
   // El evento stdin 'data' se dispara cuando el user escribe una línea
   process.stdin.on('data', function (data) {
     var args = data.toString().trim().split(' '); // remueve la nueva línea
     var cmd=args.shift();
     //process.stdout.write('You typed: ' + cmd);
    if(commands[cmd]){commands[cmd](args,done)
    }else{
    process.stdout.write(`comando ${cmd} no encontrado`);
    }
    //process.stdout.write(' Ingresa un comando > ');
   });
  
    
 