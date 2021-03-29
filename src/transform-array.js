module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let array =  [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '--discard-next'){
      i++;
    }else if(arr[i] == '--discard-prev'){
      if (!(arr[i-2] === '--discard-next' && i !== 0)){
        array.pop();
      }
    }else if(arr[i] == '--double-next'){

    }else if(arr[i] == '--double-prev'){

    }else{

    }

    }
  return array;
}
