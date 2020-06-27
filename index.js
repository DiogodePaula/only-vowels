function onlyVowels(Programacao){

    return Programacao.replace(/[B C D F G J K L M N P Q R S T V W X Z]/gi,'');
}

const strVowels = onlyVowels( "Todo dia aprendendo um pouco mais" );

console.log(strVowels); 