
var introtekst = "<h1>Les 14. De papieren. Oefening B.</h1><p>Je was op vakantie in Egypte. <br> Daar heb je een meisje leren kennen.<br>Je bent verliefd op haar.<br>Je belt je vriend Frits op.</p>  ";
var introPlaatje = "";

endnode=10;
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
nrPaths[9] =1;
nrPaths[10] = 0;
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
nextNode[9] = new Array(10,16,16);
nextNode[10] = new Array(10,10,10);
var systemUtterance = new Array();
systemUtterance[0] = "Hallo, met Frits.";
systemUtterance[1] = "Vertel eens.";
systemUtterance[2] = "Op wie?";
systemUtterance[3] = "Een Egyptische! Is ze mooi?";
systemUtterance[4] = "Verliefd op wie?";
systemUtterance[5] = "Woont ze in Nederland?";
systemUtterance[6] = "Wil ze naar Nederland komen?";
systemUtterance[7] = "Dan moet ze eerst een inburgeringstoets doen.";
systemUtterance[8] = "Dat moet. Ze moet wat leren over ons land.";
systemUtterance[9] = "Nee, ze moet het leren voor ze naar Nederland komt.";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Frits, ik ","Frits, ik heb ","Frits, ik heb ","Frits, ik heb ");
firstWords[1] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[2] = new Array("Op ","Op ","Op ","Op ");
firstWords[3] = new Array("Mooi ","Mooi ","Mooi ","Mooi ");
firstWords[4] = new Array("Op ","Op ","Op ","Op ");
firstWords[5] = new Array("Nee, ik ","Nee, ik heb haar ","Nee, ik heb haar ","Nee, ik heb haar ");
firstWords[6] = new Array("Ja, want ","Ja, want ","Ja, want ","Ja, want ");
firstWords[7] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[8] = new Array("Dat ","Dat leert ze wel ","Dat leert ze wel ","Dat leert ze wel ");
firstWords[9] = new Array("Wat ","Wat ","Wat ","Wat ");
firstWords[10] = new Array("","","","");
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
allowedWordsArray[10] = new Array();
allowedWordsArray[0][0] = new Array( 'heb', 'heel', 'iets', 'leuk', 'leuks', 'te', 'vertellen');
allowedWordsArray[0][1] = new Array( 'heel', 'iets', 'leuks', 'te', 'vertellen');
allowedWordsArray[0][2] = new Array( 'Frits, ik heb iets heel leuks te vertellen.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'ben', 'bent', 'verliefd');
allowedWordsArray[1][1] = new Array( 'ben', 'verliefd');
allowedWordsArray[1][2] = new Array( 'Ik ben verliefd.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'Egypte', 'de', 'een', 'het', 'meisje', 'uit', 'van');
allowedWordsArray[2][1] = new Array( 'Egypte', 'een', 'meisje', 'uit');
allowedWordsArray[2][2] = new Array( 'Op een meisje uit Egypte.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'en', 'verliefd');
allowedWordsArray[3][1] = new Array( 'en', 'verliefd');
allowedWordsArray[3][2] = new Array( 'Mooi en verliefd.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'mij', 'natuurlijk', 'me', 'ik');
allowedWordsArray[4][1] = new Array( 'mij', 'natuurlijk');
allowedWordsArray[4][2] = new Array( 'Op mij natuurlijk.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'Egypte', 'in', 'heb', 'haar', 'uit', 'kennen', 'leren');
allowedWordsArray[5][1] = new Array( 'Egypte', 'in', 'leren', 'kennen');
allowedWordsArray[5][2] = new Array( 'Nee, ik heb haar in Egypte leren kennen.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'snel', 'trouwen', 'we', 'willen');
allowedWordsArray[6][1] = new Array( 'snel', 'trouwen', 'we', 'willen');
allowedWordsArray[6][2] = new Array( 'Ja, want we willen snel trouwen.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'heb', 'ik', 'niet', 'nodig', 'vind');
allowedWordsArray[7][1] = new Array( 'ik', 'niet', 'nodig', 'vind');
allowedWordsArray[7][2] = new Array( 'Dat vind ik niet nodig.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'als', 'hier', 'is', 'leert', 'wel', 'ze');
allowedWordsArray[8][1] = new Array( 'als', 'hier', 'is', 'ze');
allowedWordsArray[8][2] = new Array( 'Dat leert ze wel als ze hier is.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'raar', 'raars', 'rare');
allowedWordsArray[9][1] = new Array( 'raar', 'raars');
allowedWordsArray[9][2] = new Array( 'Wat raar.');
allowedWordsArray[9][3] = allowedWordsArray[9][2];
allowedWordsArray[10][0] = new Array( "");
allowedWordsArray[10][1] = new Array( "");
allowedWordsArray[10][2] = new Array( "");
allowedWordsArray[10][3] = allowedWordsArray[10][2];
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
allowedWordsList[10] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Frits ik heb iets (heel )?leuks te vertellen )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik ben verliefd )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Op een meisje uit Egypte )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Mooi en verliefd )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Op mij natuurlijk )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee ik heb haar (in Egypte leren kennen |leren kennen in Egypte ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ja want we willen (snel )?trouwen )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dat vind ik niet nodig )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Dat leert ze (wel )?als ze hier is )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Wat raar )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Frits ik heb iets (heel )?leuks )$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Op een meisje )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^(Op mij )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;

