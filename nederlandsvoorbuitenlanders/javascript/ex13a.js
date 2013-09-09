
var introtekst = "<h1>Les 13.  Hoe kom ik daar? Oefening A.</h1><p>Waar is het station?</p>  ";
var introPlaatje = "<img src=\"../pics/13a.jpg\" height=\"170\"/>";

endnode=8;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =1;
nrPaths[5] =2;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] =0;

var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,7,16);
nextNode[6] = new Array(8,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Mevrouw, kunt u me zeggen waar het station is?";
systemUtterance[1] = "Hoe moet ik lopen?";
systemUtterance[2] = "De eerste straat rechts, en dan rechtdoor?";
systemUtterance[3] = "En na die tunnel?";
systemUtterance[4] = "Moet ik daar naar links?";
systemUtterance[5] = "De weg oversteken, en dan?";
systemUtterance[6] = "Eerste links, tweede rechts. Ben ik er dan bijna?";
systemUtterance[7] = "Eerste links en eerste rechts. Ben ik er dan bijna?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[1] = new Array("U ","U ","U ","U ");
firstWords[2] = new Array("Ja, dan door ","Ja, dan door ","Ja, dan door ","Ja, dan door ");
firstWords[3] = new Array("Daarna ","Daarna ","Daarna ","Daarna ");
firstWords[4] = new Array("Nee, u ","Nee, u ","Nee, u ","Nee, u ");
firstWords[5] = new Array("Dan ","Dan de eerste straat links ","Dan de eerste straat links ","Dan de eerste straat links ");
firstWords[6] = new Array("Ja, dan ","Ja, dan ziet u ","Ja, dan ziet u ","Ja, dan ziet u ");
firstWords[7] = new Array("Ja, u ","Ja, u staat dan ","Ja, u staat dan ","Ja, u staat dan ");
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

allowedWordsArray[0][0] = new Array( 'dat', 'geen', 'is', 'moeilijk', 'niet');
allowedWordsArray[0][1] = new Array( 'dat', 'is', 'moeilijk', 'niet');
allowedWordsArray[0][2] = new Array( 'Ja, dat is niet moeilijk.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'de', 'eerste', 'neemt', 'rechts', 'straat', 'tweede','links');
allowedWordsArray[1][1] = new Array( 'de', 'eerste', 'neemt', 'rechts', 'straat');
allowedWordsArray[1][2] = new Array( 'U neemt de eerste straat rechts.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'het', 'onder', 'spoor', 'tunnel');
allowedWordsArray[2][1] = new Array( 'de','het', 'onder', 'spoor', 'tunnel');
allowedWordsArray[2][2] = new Array( 'Ja, dan door de tunnel onder het spoor.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'bij', 'druk', 'drukke', 'een', 'komt', 'u', 'weg');
allowedWordsArray[3][1] = new Array( 'bij', 'drukke', 'een', 'komt', 'u', 'weg');
allowedWordsArray[3][2] = new Array( 'Daarna komt u bij een drukke weg.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'die', 'drukke', 'over', 'steekt', 'weg');
allowedWordsArray[4][1] = new Array( 'die', 'drukke', 'over', 'steekt', 'weg');
allowedWordsArray[4][2] = new Array( 'Nee, u steekt die drukke weg over.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'de', 'eerste', 'en', 'links', 'rechts', 'straat', 'tweede', 'derde');
allowedWordsArray[5][1] = new Array( 'en', 'rechts', 'straat', 'tweede', 'de','eerste');
allowedWordsArray[5][2] = new Array( 'Dan de eerste straat links en daarna de tweede straat rechts.','Dan de eerste straat links en daarna de eerste straat rechts');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'aan', 'de', 'het', 'linkerkant', 'station', 'u', 'ziet','rechterkant');
allowedWordsArray[6][1] = new Array( 'aan', 'de', 'het', 'linkerkant', 'station');
allowedWordsArray[6][2] = new Array( 'Ja, dan ziet u het station aan de linkerkant.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'staat', 'dan', 'tegenover', 'het', 'station', 'aan', 'naast');
allowedWordsArray[7][1] = new Array( 'tegenover', 'het', 'station');
allowedWordsArray[7][2] = new Array( 'Ja, u staat dan tegenover het station');
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
correctPattern[0] = new Array(/^(Ja dat is niet moeilijk )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(U neemt de eerste straat rechts )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ja dan door de tunnel onder het spoor )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Daarna komt u bij een drukke weg )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee u steekt die (drukke )?weg over )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Dan de eerste (straat )?links en (daarna )?de tweede (straat )?rechts )$/,/^(Dan de eerste (straat )?links en (daarna )?de eerste (straat )?rechts )$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ja dan ziet u (het station aan de linkerkant |aan de linkerkant het station ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ja u staat dan tegenover het station )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Ja dan door de tunnel )$/;
correctShortPattern[3] = /^(Daarna komt u bij een weg )$/;
correctShortPattern[4] = /^(Nee u steekt over )$/;
correctShortPattern[5] = /^(Dan de eerste (straat )?links )/;
correctShortPattern[6] = /^(Ja u komt (dan )?op een plein (met een kerk )?)$/;
correctShortPattern[7] = /^(Ja u staat tegenover het station )$/;
correctShortPattern[8] = /^(Ja dan ziet u het station )$/;
correctShortPattern[9] = /^xxx$/;

theLanguage=1;
