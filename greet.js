function greet(name){
    if(name == null){
        return "Hello, my friend.";
    }else if(!Array.isArray(name) && (name == name.toUpperCase()) ){
        return "HELLO "+name+"!";

    }else if(Array.isArray(name)&&name.length==2){
        var a = "Hello, "
        for( i=0;i<name.length;i++){
            a+= name[i];
            if(!i==name.length-1){
                a+=" and "
            }else if (i==name.length-1){
                a+="."
            }
        }
        return a;
    }else if(Array.isArray(name)&&name.length>2){
        var a = "Hello, "
        
        var b = name.map(myFunction);
    
    
        for( i=0;i<name.length;i++){
            
            a+= name[i];
            
            if(i==(name.length-2)){
                a+=", and "
            }else if (i==name.length-1){
                a+="."
            }else{
                a+=", "
            }
        }
        return a + b;

    }else{
    return "Hello, "+name+".";
}
}
function myFunction(value) {
   
    
    return value.toUpperCase();
  }
module.exports = greet