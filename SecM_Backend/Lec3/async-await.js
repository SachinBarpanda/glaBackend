async function ourAsync(){
    await new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("App Opened");
            resolve();
        },2000);
    })

    await new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Create post");
        },2000);
    })
}

ourAsync();