
var introtekst = "<h1>Les 3. Overal spreekt men Nederlands. Oefening B.</h1><p>Het Groene Boek.</p>  ";
var introPlaatje = "";

endnode=7;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =2;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,5,16);
nextNode[4] = new Array(6,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(7,7,7);
var systemUtterance = new Array();
systemUtterance[0] = "Hoe leer je Nederlands?";
systemUtterance[1] = "Hoe heet het boek?";
systemUtterance[2] = "Waarom heet het 'Het Groene Boek'?";
systemUtterance[3] = "Is Nederlands een moeilijke taal?";
systemUtterance[4] = "Spreekt je docent snel?";
systemUtterance[5] = "Nederlands is makkelijk! Alle talen zijn makkelijk. Spreekt je docent snel?";
systemUtterance[6] = "Praten de Nederlanders duidelijk?";
systemUtterance[7] = "";
var firstWords = new Array();
firstWords[0] = new Array("Met een ","Met een ","Met een ","Met een ");
firstWords[1] = new Array("","","","");
firstWords[2] = new Array("Omdat ","Omdat ","Omdat ","Omdat ");
firstWords[3] = new Array("","","","");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[6] = new Array("","","","");
firstWords[7] = new Array("","","","");
var allowedWordsArray = new Array();
allowedWordsArray[0] = new Array();
allowedWordsArray[1] = new Array();
allowedWordsArray[2] = new Array();
allowedWordsArray[3] = new Array();
allowedWordsArray[4] = new Array();
allowedWordsArray[5] = new Array();
allowedWordsArray[6] = new Array();
allowedWordsArray[7] = new Array();
allowedWordsArray[0][0] = new Array( 'boek', 'cd@31s', 'een', 'en');
allowedWordsArray[0][1] = new Array( 'boek', 'cd@31s', 'en');
allowedWordsArray[0][2] = new Array( 'Met een boek.', 'Met een boek en cd@31s.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Boek', 'Een', 'Groene', 'Het');
allowedWordsArray[1][1] = new Array( 'Boek', 'Groene', 'Het');
allowedWordsArray[1][2] = new Array( 'Het Groene Boek.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'groen', 'het', 'is', 'kleur');
allowedWordsArray[2][1] = new Array( 'de', 'groen', 'het', 'is', 'kleur');
allowedWordsArray[2][2] = new Array( 'Omdat het groen is.', 'Omdat de kleur groen is.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'Ja', 'Nederlands', 'Nee', 'ik', 'makkelijk', 'moeilijk', 'niet', 'vind');
allowedWordsArray[3][1] = new Array( 'Ja', 'Nederlands', 'Nee', 'ik', 'makkelijk', 'moeilijk', 'niet', 'vind');
allowedWordsArray[3][2] = new Array( 'Nee, ik vind Nederlands niet moeilijk.', 'Nee, ik vind Nederlands makkelijk.', 'Ja, ik vind Nederlands moeilijk.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'hij', 'langzaam', 'spreek', 'spreekt', 'spreken', 'zij');
allowedWordsArray[4][1] = new Array( 'hij', 'langzaam', 'spreekt', 'zij');
allowedWordsArray[4][2] = new Array( 'Nee, hij spreekt langzaam.', 'Nee, zij spreekt langzaam.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'hij', 'langzaam', 'spreek', 'spreekt', 'spreken', 'zij');
allowedWordsArray[5][1] = new Array( 'hij', 'langzaam', 'spreekt', 'zij');
allowedWordsArray[5][2] = new Array( 'Nee, hij spreekt langzaam.', 'Nee, zij spreekt langzaam.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'Ja', 'Nederlanders', 'Nee', 'de', 'duidelijk', 'niet', 'praten');
allowedWordsArray[6][1] = new Array( 'Ja', 'Nederlanders', 'Nee', 'de', 'duidelijk', 'niet', 'praten');
allowedWordsArray[6][2] = new Array( 'Nee, de Nederlanders praten niet duidelijk.', 'Ja, de Nederlanders praten duidelijk.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( "");
allowedWordsArray[7][1] = new Array( "");
allowedWordsArray[7][2] = new Array( "");
allowedWordsArray[7][3] = allowedWordsArray[7][2];
var allowedWordsList = new Array();
allowedWordsList[0] = new Array();
allowedWordsList[1] = new Array();
allowedWordsList[2] = new Array();
allowedWordsList[3] = new Array();
allowedWordsList[4] = new Array();
allowedWordsList[5] = new Array();
allowedWordsList[6] = new Array();
allowedWordsList[7] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Met (een boek |een boek en cd@31s |cd@31s en een boek ))$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Het Groene Boek )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Omdat (het groen is |de kleur groen is |groen de kleur is ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Nee (ik vind Nederlands |Nederlands vind ik )(makkelijk |niet moeilijk ))$/,/^(Ja (ik vind Nederlands |Nederlands vind ik )(moeilijk |niet makkelijk ))$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee (hij |zij )spreekt langzaam )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee (hij |zij )spreekt langzaam )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(((Ja (de )?)?Nederlanders praten duidelijk )|((Nee (de )?)?Nederlanders praten niet duidelijk ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^(Nee makkelijk |Nee niet moeilijk |Ja moeilijk |Ja niet makkelijk |Ja |Nee )$/;
correctShortPattern[4] = /^(Nee langzaam )$/;
correctShortPattern[5] = /^(Nee langzaam )$/;
correctShortPattern[6] = /^(Ja (duidelijk )?|Nee (niet duidelijk )?)$/;
correctShortPattern[7] = /^xxx$/;
theLanguage=1;


