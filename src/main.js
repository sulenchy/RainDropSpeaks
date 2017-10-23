'use strict'
//exports the rainDropSpeak function
module.exports={
    
    rainDropSpeak: (value) => {
        if(typeof(value) != 'number'){
            return 'undefined';
        }else if(value < 0){
            return 'undefined';
        }else{
            var result =[];
            var answer=[];
            for (let i=1; i < value; i++){
              var count = 0
              for (let j=1; j<=i; j++){
                if(i%j == 0){
                  count++;
                }
              }
              if (count == 2){
                result.push(i) ;
              }
            }
            for(var i=0; i<result.length; i++){
              if(value%result[i] == 0){
                answer.push(result[i]);
              }
              
            }
            var res = "";
            for (var i=0; i< answer.length; i++ ){
              if(answer[i]== 3){
                res=res+"Pling";
              }else if(answer[i]== 5){
                res=res+"Plang";
              }else if(answer[i]== 7){
                res=res+"Plong";
              }
            }
            if(res == ""){
              return value;
            }else{
              return res;
            }
        }
        
    }
}
