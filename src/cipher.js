window.cipher = {

  encode: (codigo2,escrito) => {
      let msjcipher = "";
   
    for (let i = 0; i < escrito.length; i++) {

        let cipher = escrito.charCodeAt(i);
        let formula = (cipher - 65 + codigo2) % 26 + 65;
        
        let cipher2 = String.fromCharCode(formula);
        msjcipher += cipher2;
       
    }
    return msjcipher;
  },
  decode: (codigo2,escrito2) => {

    let msj2cipher = "";

    for (let i = 0; i < escrito2.length; i++) {

        let descipher = escrito2.charCodeAt(i);
        let formula2 = (descipher + 65 - codigo2) % 26 + 65;
        let descipher2 = String.fromCharCode(formula2);
        msj2cipher += descipher2;     
    }
    return msj2cipher;
  }
};
