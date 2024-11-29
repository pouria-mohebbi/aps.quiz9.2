
let names = [
    "Vajihe",
    "Alireza",
    "AmirMostafa",
    "AmirMehdi",
    "Alie",
    "Sarah",
    "MohammadHosein",
    "Fatemeh",
    "Mahjan",
  ];
  
  const findLongNameThatStartsWithA = (arr) => {
    return arr.find(name => name.startsWith('A') && name.length > 7);
  };
  

  let longNameThatStartsWithA = findLongNameThatStartsWithA(names);
  
  console.log(longNameThatStartsWithA); 
  