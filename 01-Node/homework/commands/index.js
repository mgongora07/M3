const fs = require("fs");
const request = require("request");

module.exports = {
 date: function (args,done){
     done(Date())
    },
 pwd: function(args,done){ 
    done(process.cwd())
},
ls: function(args,done){
    fs.readdir('.', function(err, files) {
        if (err) throw err;
       let lineas=" ";
       files.forEach(function(file){
        lineas=lineas+file+'\n'
    });
    done(lineas)})
},

    echo: function(args,done){
      done(args.join(' '));   
    },

    cat: function(args,done){
        fs.readFile(args[0], function(err, data){
            if(err) throw err;
           done(data)
        });
    },

    head: function(args,done){
        fs.readFile(args[0], 'utf-8', function(err, data){
            if(err) throw err;
            const firstslines=data.split('\n').slice(0,10).join('\n')
           done(firstslines);
        });
    },
        tail: function(args,done){
            fs.readFile(args[0], 'utf-8', function(err, data){
                if(err) throw err;
                const lastslines=data.split('\n').slice(-10).join('\n')
             done(lastslines);
               
            });

        },

     curl: function(args,done){
         request(args[0],function(error,response,body){
            if(error) throw error;
            done(body);
            
         })
     }
}

