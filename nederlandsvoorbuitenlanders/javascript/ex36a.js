
var introtekst = "<h1>Les 36. Stad onder de grond. Oefening A.</h1><p>Het verkeer in Amsterdam.</p>  ";
var introPlaatje = "";

endnode=9;
var nrPaths = new Array();
nrPaths[0] = 1;
nrPaths[1] = 1;
nrPaths[2] = 1;
nrPaths[3] = 1;
nrPaths[4] = 1;
nrPaths[5] = 1;
nrPaths[6] = 1;
nrPaths[7] = 1;
nrPaths[8] = 1;
nrPaths[9] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,0,0,0);
nextNode[1] = new Array(2,0,0,0);
nextNode[2] = new Array(3,0,0,0);
nextNode[3] = new Array(4,0,0,0);
nextNode[4] = new Array(5,0,0,0);
nextNode[5] = new Array(6,0,0,0);
nextNode[6] = new Array(7,0,0,0);
nextNode[7] = new Array(8,0,0,0);
nextNode[8] = new Array(9,0,0,0);
nextNode[9] = new Array(9,0,0,0);
var systemUtterance = new Array();
systemUtterance[0] = "Moet jij vaak in Amsterdam zijn?";
systemUtterance[1] = "En ga je dan met de auto?";
systemUtterance[2] = "Heb je wel eens problemen met het verkeer in Amsterdam?";
systemUtterance[3] = "Geef eens een voorbeeld.";
systemUtterance[4] = "Dat klopt.";
systemUtterance[5] = "Toch weet ik een fantastische oplossing.";
systemUtterance[6] = "We moeten de grachten dempen.";
systemUtterance[7] = "Dempen is droogmaken: je haalt het water uit de grachten en doet er beton in. Dan heb je een prachtige weg.";
systemUtterance[8] = "Dan moet je maar in de file blijven staan.";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Gemiddeld ","Gemiddeld ","Gemiddeld ","Gemiddeld ");
firstWords[1] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[2] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[3] = new Array("Het ","Het ","Het ","Het ");
firstWords[4] = new Array("En ","En ","En ","En ");
firstWords[5] = new Array("Vertel eens ","Vertel eens ","Vertel eens ","Vertel eens ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Maar ","Maar ","Maar ","Maar ");
firstWords[8] = new Array("Dat is ","Dat is ","Dat is ","Dat is ");
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
allowedWordsArray[0][0] = new Array( 'keer', 'per', 'twee', 'week', 'weken');
allowedWordsArray[0][1] = new Array( 'keer', 'per', 'twee', 'week');
allowedWordsArray[0][2] = new Array( 'Gemiddeld twee keer per week.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'de','enige', 'het', 'is', 'mij', 'mogelijkheid', 'voor');
allowedWordsArray[1][1] = new Array( 'de', 'enige', 'is', 'mij', 'mogelijkheid', 'voor');
allowedWordsArray[1][2] = new Array( 'Dat is voor mij de enige mogelijkheid.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'altijd', 'er', 'heb', 'problemen');
allowedWordsArray[2][1] = new Array( 'altijd', 'er', 'heb', 'problemen');
allowedWordsArray[2][2] = new Array( 'Ik heb er altijd problemen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'altijd', 'de', 'grachten', 'op', 'vast', 'verkeer', 'zit');
allowedWordsArray[3][1] = new Array( 'altijd', 'de', 'grachten', 'op', 'vast', 'verkeer', 'zit');
allowedWordsArray[3][2] = new Array( 'Het verkeer op de grachten zit altijd vast.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'bovendien', 'je', 'kun', 'nergens',  'parkeren');
allowedWordsArray[4][1] = new Array( 'bovendien', 'je', 'kun', 'nergens', 'parkeren');
allowedWordsArray[4][2] = new Array( 'En bovendien kun je nergens parkeren.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'het', 'hoe', 'jij', 'oplossen', 'zou');
allowedWordsArray[5][1] = new Array( 'het', 'hoe', 'jij', 'oplossen', 'zou');
allowedWordsArray[5][2] = new Array( 'Vertel eens hoe jij het zou oplossen.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'dempen', 'is', 'niet', 'wat', 'weet');
allowedWordsArray[6][1] = new Array( 'dempen', 'is', 'niet', 'wat', 'weet');
allowedWordsArray[6][2] = new Array( 'Ik weet niet wat dempen is.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'Amsterdam', 'Amsterdamse', 'de', 'grachten', 'ik', 'mooi', 'vind', 'zo');
allowedWordsArray[7][1] = new Array( 'Amsterdamse', 'de', 'grachten', 'ik', 'mooi', 'vind', 'zo');
allowedWordsArray[7][2] = new Array( 'Maar ik vind de Amsterdamse grachten zo mooi.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'betalen', 'dat', 'de', 'die', 'het', 'moeten', 'prijs', 'we');
allowedWordsArray[8][1] = new Array( 'betalen', 'die', 'moeten',  'we');
allowedWordsArray[8][2] = new Array( 'Dat is de prijs die we moeten betalen.');
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
correctPattern[0] = new Array(/^(Gemiddeld twee keer per week )$/);
correctPattern[1] = new Array(/^(Dat is (voor mij de enige mogelijkheid |de enige mogelijkheid voor mij ))$/);
correctPattern[2] = new Array(/^(Ik heb er altijd problemen )$/);
correctPattern[3] = new Array(/^(Het verkeer op de grachten zit altijd vast )$/);
correctPattern[4] = new Array(/^(En bovendien kun je nergens parkeren )$/);
correctPattern[5] = new Array(/^(Vertel eens hoe jij het (zou oplossen |oplossen zou ))$/);
correctPattern[6] = new Array(/^(Ik weet niet wat dempen is )$/);
correctPattern[7] = new Array(/^(Maar ik vind de (Amsterdamse )?grachten (zo )?mooi )$/);
correctPattern[8] = new Array(/^(Dat is de prijs die we (moeten betalen |betalen moeten ))$/);
correctPattern[9] = new Array();
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^(Dat is de enige mogelijkheid )$/;
correctShortPattern[2] = /^(Ik heb altijd problemen )$/;
correctShortPattern[3] = /^(Het verkeer zit altijd vast )$/;
correctShortPattern[4] = /^(En nergens kun je parkeren )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Dat is de prijs )$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;