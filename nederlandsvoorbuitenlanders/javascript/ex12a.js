
var introtekst = "<h1>Les 12. Anders nog iets, mevrouw? Oefening A.</h1><p>Fruit kopen op de markt.</p>  ";
var introPlaatje = "";

endnode=9;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =2;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] =1;
nrPaths[9] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,3,16);
nextNode[2] = new Array(4,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Wie is er aan de beurt?";
systemUtterance[1] = "Zegt u @31t maar.";
systemUtterance[2] = "Twee pond, dat is precies @12@12n kilo. Anders nog iets?";
systemUtterance[3] = "Drie pond, dat is precies anderhalve kilo. Anders nog iets?";
systemUtterance[4] = "Ja, die zijn heel lekker. Ze kosten twee euro per kilo.";
systemUtterance[5] = "Voor drie euro geef ik u twee kilo appels.";
systemUtterance[6] = "Dat is dan samen vier euro vijftig.";
systemUtterance[7] = "Kijkt u eens. Bananen, appels en vijftig cent. Gaat het zo mee?";
systemUtterance[8] = "Dat kan. Alstublieft, alles in een tasje.";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("","","","");
firstWords[2] = new Array("Die ","Die groene appels ","Die groene appels ","Die groene appels ");
firstWords[3] = new Array("Die ","Die groene appels ","Die groene appels ","Die groene appels ");
firstWords[4] = new Array("Doet ","Doet ","Doet ","Doet ");
firstWords[5] = new Array("Geeft ","Geeft ","Geeft ","Geeft ");
firstWords[6] = new Array("Alstublieft, ","Alstublieft, ","Alstublieft, ","Alstublieft, ");
firstWords[7] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[8] = new Array("","","","");
firstWords[9] = new Array("","","","");
var allowedWordsArray = new Array();
allowedWordsArray[0] = new Array();
allowedWordsArray[1] = new Array();
allowedWordsArray[2] = new Array();
allowedWordsArray[3] = new Array();
allowedWordsArray[4] = new Array();
allowedWordsArray[5] = new Array();
allowedWordsArray[6] = new Array();
allowedWordsArray[7] = new Array();
allowedWordsArray[8] = new Array();
allowedWordsArray[9] = new Array();
allowedWordsArray[0][0] = new Array( 'aan', 'ben', 'beurt', 'de', 'er', 'is');
allowedWordsArray[0][1] = new Array( 'aan', 'ben', 'beurt', 'de');
allowedWordsArray[0][2] = new Array( 'Ik ben aan de beurt.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Drie', 'Twee', 'alstublieft', 'banaan', 'bananen', 'pond', 'ponden');
allowedWordsArray[1][1] = new Array( 'Drie', 'Twee', 'alstublieft', 'bananen', 'pond');
allowedWordsArray[1][2] = new Array( 'Twee pond bananen alstublieft.', 'Drie pond bananen alstublieft.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'appels', 'er', 'groene', 'lekker', 'uit', 'zien');
allowedWordsArray[2][1] = new Array( 'er', 'lekker', 'uit', 'zien');
allowedWordsArray[2][2] = new Array( 'Die groene appels zien er lekker uit.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'appels', 'er', 'groene', 'lekker', 'uit', 'zien');
allowedWordsArray[3][1] = new Array( 'er', 'lekker', 'uit', 'zien');
allowedWordsArray[3][2] = new Array( 'Die groene appels zien er lekker uit.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'de', 'een', 'het', 'kilo', 'maar', 'u');
allowedWordsArray[4][1] = new Array( 'een', 'kilo', 'maar', 'u');
allowedWordsArray[4][2] = new Array( 'Doet u maar een kilo.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'dan', 'kilo', 'maar', 'twee', 'u');
allowedWordsArray[5][1] = new Array( 'dan', 'kilo', 'maar', 'twee', 'u');
allowedWordsArray[5][2] = new Array( 'Geeft u dan maar twee kilo.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'euro', 'vijf');
allowedWordsArray[6][1] = new Array( 'euro', 'vijf');
allowedWordsArray[6][2] = new Array( 'Alstublieft, vijf euro.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'een', 'graag', 'tasje', 'wil');
allowedWordsArray[7][1] = new Array( 'een', 'graag', 'tasje', 'wil');
allowedWordsArray[7][2] = new Array( 'Ik wil graag een tasje.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'Alstublieft', 'Dank', 'Graag', 'u');
allowedWordsArray[8][1] = new Array( 'Alstublieft', 'Dank', 'Graag', 'u');
allowedWordsArray[8][2] = new Array( 'Dank u.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( "");
allowedWordsArray[9][1] = new Array( "");
allowedWordsArray[9][2] = new Array( "");
allowedWordsArray[9][3] = allowedWordsArray[9][2];
var allowedWordsList = new Array();
allowedWordsList[0] = new Array();
allowedWordsList[1] = new Array();
allowedWordsList[2] = new Array();
allowedWordsList[3] = new Array();
allowedWordsList[4] = new Array();
allowedWordsList[5] = new Array();
allowedWordsList[6] = new Array();
allowedWordsList[7] = new Array();
allowedWordsList[8] = new Array();
allowedWordsList[9] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Ik ben aan de beurt )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Twee pond bananen (alstublieft )?)$/,/^(Drie pond bananen (alstublieft )?)$/,/^xxx$/);
correctPattern[2] = new Array(/^(Die (groene )?appels zien er lekker uit )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Die (groene )?appels zien er lekker uit )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Doet u maar een kilo )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Geeft u (dan |maar |dan maar )twee kilo )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Alstublieft vijf euro )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ik wil graag een tasje )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Dank u )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^((Twee |Drie )bananen (alstublieft )?)$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(Ik wil een tasje )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;

