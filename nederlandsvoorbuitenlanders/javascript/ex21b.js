
var introtekst = "<h1>Les 21. De kaart van Nederland. Oefening B. </h1><p>Het water.</p> ";
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
systemUtterance[0] = "Nederland is een nat land.";
systemUtterance[1] = "Ik bedoel dat er veel water is in Nederland.";
systemUtterance[2] = "En Nederland is ook een laag land.";
systemUtterance[3] = "Dat lijkt me erg gevaarlijk.";
systemUtterance[4] = "Hoe houden de Nederlanders hun land droog?";
systemUtterance[5] = "En wat gebeurt er als die dijken breken?";
systemUtterance[6] = "Is er wel eens een ramp gebeurd?";
systemUtterance[7] = "En wanneer is de volgende keer?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ja, het ","Ja, het ","Ja, het ","Ja, het ");
firstWords[1] = new Array("Ja, ","Ja, er ","Ja, er ","Ja, er ");
firstWords[2] = new Array("Een ","Een ","Een ","Een ");
firstWords[3] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[4] = new Array("Ze ","Ze ","Ze ","Ze ");
firstWords[5] = new Array("Dan ","Dan kan er ","Dan kan er ","Dan kan er ");
firstWords[6] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[7] = new Array("Dat ","Dat weet niemand, ","Dat weet niemand, ","Dat weet niemand, ");
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
allowedWordsArray[0][0] = new Array( 'dikwijls', 'hier', 'nooit', 'regent', 'vaak');
allowedWordsArray[0][1] = new Array( 'dikwijls', 'hier', 'regent', 'vaak');
allowedWordsArray[0][2] = new Array( 'Ja, het regent hier vaak.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'bijvoorbeeld', 'er', 'is', 'rivier', 'rivieren', 'veel', 'zijn');
allowedWordsArray[1][1] = new Array( 'bijvoorbeeld', 'rivieren', 'veel', 'zijn');
allowedWordsArray[1][2] = new Array( 'Ja er zijn bijvoorbeeld veel rivieren.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'deel', 'groot', 'grote', 'het', 'land', 'ligt', 'onder', 'van', 'zeeniveau');
allowedWordsArray[2][1] = new Array( 'deel', 'groot', 'het', 'land', 'ligt', 'onder', 'van', 'zeeniveau');
allowedWordsArray[2][2] = new Array( 'Een groot deel van het land ligt onder zeeniveau.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'mee', 'op', 'valt', 'wel');
allowedWordsArray[3][1] = new Array( 'mee', 'valt', 'wel');
allowedWordsArray[3][2] = new Array( 'Dat valt wel mee.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'dijken', 'gebouwd', 'hebben', 'heeft', 'hoge', 'hoog');
allowedWordsArray[4][1] = new Array( 'dijken', 'gebouwd', 'hebben', 'hoge');
allowedWordsArray[4][2] = new Array( 'Ze hebben hoge dijken gebouwd.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'een', 'er', 'gebeuren', 'kan', 'ramp');
allowedWordsArray[5][1] = new Array( 'een', 'gebeuren', 'ramp');
allowedWordsArray[5][2] = new Array( 'Dan kan er een ramp gebeuren.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( '1421', '1945', '1953', 'de', 'in', 'keer', 'laatste', 'was');
allowedWordsArray[6][1] = new Array( '1953', 'in', 'keer', 'de', 'laatste', 'was');
allowedWordsArray[6][2] = new Array( 'Ja, de laatste keer was in 1953.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'het', 'maar', 'niemand', 'stijgt', 'weet', 'zeeniveau');
allowedWordsArray[7][1] = new Array( 'het', 'maar', 'stijgt', 'zeeniveau');
allowedWordsArray[7][2] = new Array( 'Dat weet niemand, maar het zeeniveau stijgt.');
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
correctPattern[0] = new Array(/^(Ja (het regent hier (vaak |dikwijls )|het regent (vaak |dikwijls )hier ))$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ja er zijn (bijvoorbeeld veel rivieren |veel rivieren bijvoorbeeld ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Een (groot )?deel (van het land )?ligt onder (het )?zeeniveau )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat valt (wel )?mee )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ze hebben hoge dijken gebouwd )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Dan kan er een ramp gebeuren )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ja de laatste (keer )?(was )?in 1953 |Ja 1953 was de laatste keer )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dat weet niemand maar het zeeniveau stijgt )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ja het regent (vaak |dikwijls ))$/;
correctShortPattern[1] = /^(Ja er zijn veel rivieren )$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^(Ze hebben (hoge )?dijken |Ze hebben dijken gebouwd )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^(Ja in (1953 |1421 |1945 ))$/;
correctShortPattern[7] = /^(Dat weet niemand )$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
