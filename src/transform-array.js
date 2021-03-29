module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let array =  [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '--discard-next'){
      i++;
      };
    }else if(arr[i] == '--discard-prev'){

    }else if(arr[i] == '--double-next'){

    }else if(arr[i] == '--double-prev'){

    }else{

    }
};
