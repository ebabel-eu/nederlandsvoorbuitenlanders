
var introtekst = "<h1>Les 7. Moet je de teksten uit je hoofd leren? Oefening B.</h1><p>Praten met Nederlanders.</p>  ";
var introPlaatje = "";

endnode=9;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
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
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Hoe leer je Nederlands?";
systemUtterance[1] = "Praat je vaak met Nederlanders?";
systemUtterance[2] = "Vraag je dan of ze het herhalen?";
systemUtterance[3] = "Je moet zeggen: wilt u alstublieft Nederlands spreken.";
systemUtterance[4] = "Begrijp je de Nederlanders niet, omdat ze moeilijke woorden gebruiken?";
systemUtterance[5] = "Bedoel je dat ze niet duidelijk praten?";
systemUtterance[6] = "Welke Nederlanders kun je wel goed verstaan?";
systemUtterance[7] = "Wat zeggen die dan?";
systemUtterance[8] = "Ze zeggen altijd hetzelfde. Dan is het makkelijk.";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("","","","");
firstWords[1] = new Array("Ja, maar ","Ja, maar ","Ja, maar ","Ja, maar ");
firstWords[2] = new Array("Ja, maar dan ","Ja, maar dan ","Ja, maar dan ","Ja, maar dan ");
firstWords[3] = new Array("Dat ","Dat  ","Dat  ","Dat  ");
firstWords[4] = new Array("Dat weet ik niet, want ","Dat weet ik niet, want ","Dat weet ik niet, want ","Dat weet ik niet, want ");
firstWords[5] = new Array("Precies; ","Precies; ","Precies; ","Precies; ");
firstWords[6] = new Array("De ","De ","De ","De ");
firstWords[7] = new Array("Die zeggen altijd: ","Die zeggen altijd: ","Die zeggen altijd: ","Die zeggen altijd: ");
firstWords[8] = new Array("Dat ","Dat ","Dat ","Dat ");
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
allowedWordsArray[0][0] = new Array( 'Bij', 'Delftse', 'Met', 'Van', 'de', 'methode');
allowedWordsArray[0][1] = new Array( 'Delftse', 'Met', 'de', 'methode');
allowedWordsArray[0][2] = new Array( 'Met de Delftse methode.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'goed', 'hem', 'ik', 'kan', 'niet', 'verstaan', 'ze');
allowedWordsArray[1][1] = new Array( 'goed', 'ik', 'kan', 'niet', 'verstaan', 'ze');
allowedWordsArray[1][2] = new Array( 'Ja, maar ik kan ze niet goed verstaan.', 'Ja, maar ik kan ze niet verstaan.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'gaan','ze','Engels','spreken','gaat','spreekt');
allowedWordsArray[2][1] = new Array( 'gaan','ze','Engels','spreken');
allowedWordsArray[2][2] = new Array( 'Ja, maar dan gaan ze Engels spreken.', 'Ja, maar dan spreken ze Engels.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'altijd', 'doe', 'doen', 'doet', 'ik', 'soms', 'vaak');
allowedWordsArray[3][1] = new Array( 'altijd', 'doe', 'ik', 'soms', 'vaak');
allowedWordsArray[3][2] = new Array( 'Dat doe ik vaak.', 'Dat doe ik soms.', 'Dat doe ik.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'ik', 'niet', 'versta', 'verstaan', 'verstaat', 'ze');
allowedWordsArray[4][1] = new Array( 'ik', 'niet', 'versta', 'ze');
allowedWordsArray[4][2] = new Array( 'Dat weet ik niet, want ik versta ze niet.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'duidelijk', 'niet', 'praat', 'praten', 'ze');
allowedWordsArray[5][1] = new Array( 'duidelijk', 'niet', 'praten', 'ze');
allowedWordsArray[5][2] = new Array( 'Precies; ze praten niet duidelijk.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'de', 'het', 'in', 'van','meisje', 'meisjes', 'supermarkt');
allowedWordsArray[6][1] = new Array( 'de', 'in', 'van','meisjes', 'supermarkt');
allowedWordsArray[6][2] = new Array( 'De meisjes in de supermarkt.','De meisjes van de supermarkt.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'en', 'prettig', 'prettige', 'tot', 'weekend', 'ziens');
allowedWordsArray[7][1] = new Array( 'en', 'prettig', 'tot', 'weekend', 'ziens');
allowedWordsArray[7][2] = new Array( 'Die zeggen altijd: prettig weekend en tot ziens.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'bedoel', 'ik');
allowedWordsArray[8][1] = new Array( 'bedoel', 'ik');
allowedWordsArray[8][2] = new Array( 'Dat bedoel ik.');
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
correctPattern[0] = new Array(/^(Met de Delftse methode )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ja maar ik kan ze niet (goed )?verstaan )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ja maar dan (spreken ze Engels |gaan ze Engels spreken ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat doe ik (soms |vaak |altijd )?)$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Dat weet ik niet want ik versta ze niet )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Precies ze praten niet duidelijk )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(De meisjes in de supermarkt )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Die zeggen (altijd )?(prettig weekend (en )?tot ziens |tot ziens (en )?prettig weekend ))$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Dat bedoel ik )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^(Precies niet duidelijk )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(Die zeggen altijd (prettig weekend |tot ziens ))$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;




