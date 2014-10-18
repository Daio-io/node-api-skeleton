// creating a cluster to allow scaling

var cluster = require('cluster');

function startWorker(){
 
    var worker = cluster.fork();
    console.log('CLUSTER: worker %d started', worker.id);
    
}

if (cluster.isMaster){
 
    require('os').cpus().forEach(function(){
       startWorker(); 
        
    });
    
    // log any worker that disconnets
    // if the worker exits the exit event should spawn a new worker to replace it
    cluster.on('disconnect', function(worker){
       console.log('CLUSTER: worker %d disconnected from the cluster.', worker.id); 
        
    });
    cluster.on('exit', function(worker, code, signal){
       console.log('CLUSTER: worker %d died with exit code %d (%s)', worker.id, code, signal);
        startWorker();
    });
} else {
 // start app on worker index.js
    require('./index.js');
    
}