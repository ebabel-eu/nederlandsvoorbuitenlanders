
var introtekst = "<h1>Les 38. Twaalf provincies. Oefening B.</h1><p>Drie niveaus van bestuur.</p> ";
var introPlaatje = "";

endnode=8;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(8,8,8);
var systemUtterance = new Array();
systemUtterance[0] = "Het bestuur van Nederland heeft drie niveaus. Wat is het hoogste niveau van bestuur?";
systemUtterance[1] = "Het middelste niveau is de provincie. En wat is het laagste niveau van bestuur?";
systemUtterance[2] = "In de grote steden is er nog een niveau van bestuur.";
systemUtterance[3] = "Spreken alle Nederlanders dezelfde taal?";
systemUtterance[4] = "Ja, dat is zo, maar de Friezen spreken gelukkig ook Nederlands. Kun je horen dat er in Nederland grote verschillen in uitspraak zijn?";
systemUtterance[5] = "In het zuiden van Nederland spreken ze de g anders uit dan in het westen. Dat heet de zachte g.";
systemUtterance[6] = "Begrijp je wat Amsterdammers bedoelen met fiese foete? ";
systemUtterance[7] = "Precies. Veel Amsterdammers spreken de v als een f uit en de z als een s.";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[1] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[2] = new Array("De ","De grote ","De grote ","De grote ");
firstWords[3] = new Array("De ","De Friezen ","De Friezen ","De Friezen ");
firstWords[4] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[5] = new Array("Ik krijg keelpijn van  de g ","Ik krijg keelpijn van de g zoals ","Ik krijg keelpijn van de g zoals ","Ik krijg keelpijn van de g zoals ");
firstWords[6] = new Array("Ik ","Ik vermoed ","Ik vermoed ","Ik vermoed ");
firstWords[7] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[8] = new Array("","","","");
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
allowedWordsArray[0][0] = new Array( 'centraal', 'centrale', 'de', 'het', 'is', 'overheid');
allowedWordsArray[0][1] = new Array( 'centrale', 'de', 'is', 'overheid');
allowedWordsArray[0][2] = new Array( 'Dat is de centrale overheid.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'de', 'gemeente', 'gemeentes', 'is', 'zijn');
allowedWordsArray[1][1] = new Array( 'de', 'gemeente', 'gemeentes', 'is', 'zijn');
allowedWordsArray[1][2] = new Array( 'Dat is de gemeente.', 'Dat zijn de gemeentes.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'grote', 'in', 'op', 'stadsdelen', 'steden', 'uit', 'verdeeld', 'zijn');
allowedWordsArray[2][1] = new Array( 'in', 'stadsdelen', 'steden', 'verdeeld', 'zijn');
allowedWordsArray[2][2] = new Array( 'De grote steden zijn verdeeld in stadsdelen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'Friezen', 'een', 'eigen', 'hebben', 'schijnen', 'taal', 'te');
allowedWordsArray[3][1] = new Array( 'een', 'eigen', 'hebben', 'schijnen', 'taal', 'te');
allowedWordsArray[3][2] = new Array( 'De Friezen schijnen een eigen taal te hebben.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'dat', 'gehoord', 'goed', 'horen', 'kan', 'niet', 'nog');
allowedWordsArray[4][1] = new Array( 'dat', 'goed', 'horen', 'kan', 'niet', 'nog');
allowedWordsArray[4][2] = new Array( 'Ik kan dat nog niet goed horen.', 'Ik kan dat goed horen.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array(  'die', 'het', 'in', 'uitspreken', 'westen', 'ze', 'zoals');
allowedWordsArray[5][1] = new Array( 'die', 'het', 'in', 'uitspreken', 'westen', 'ze');
allowedWordsArray[5][2] = new Array( 'Ik krijg keelpijn van de g zoals ze die in het westen uitspreken.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'bedoelen', 'dat', 'vermoed', 'vieze', 'voeten', 'ze');
allowedWordsArray[6][1] = new Array( 'bedoelen', 'dat', 'vieze', 'voeten', 'ze');
allowedWordsArray[6][2] = new Array( 'Ik vermoed dat ze vieze voeten bedoelen.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'dat', 'grappig', 'lelijk', 'vind');
allowedWordsArray[7][1] = new Array( 'dat', 'grappig', 'lelijk', 'vind');
allowedWordsArray[7][2] = new Array( 'Ik vind dat grappig.', 'Ik vind dat lelijk.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( "");
allowedWordsArray[8][1] = new Array( "");
allowedWordsArray[8][2] = new Array( "");
allowedWordsArray[8][3] = allowedWordsArray[8][2];
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
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Dat is de centrale overheid )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Dat (is de gemeente |zijn de gemeentes ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(De grote steden zijn (verdeeld in stadsdelen |in stadsdelen verdeeld ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(De Friezen schijnen een eigen taal te hebben )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ik kan dat ((nog )?niet )?goed horen )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ik krijg keelpijn van de g zoals ze die (in het westen uitspreken |uitspreken in het westen ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik vermoed dat ze vieze voeten bedoelen )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ik vind dat (grappig |lelijk ))$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^(De Friezen hebben een eigen taal )$/;
correctShortPattern[4] = /^(Ik kan dat ((nog )?niet )?horen )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^(Ik vermoed vieze voeten )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
