
var introtekst = "<h1>Les 26. Naar school. Oefening B.</h1><p>Kinderen in Nederland en Belgi�.</p>  ";
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
nrPaths[8] =0;

var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Wat is het grootste verschil tussen Nederland en Belgi@14?";
systemUtterance[1] = "Geef eens een voorbeeld.";
systemUtterance[2] = "Dat lijkt me een voordeel.";
systemUtterance[3] = "Maar Nederlandse kinderen hebben het wel naar hun zin op school.";
systemUtterance[4] = "Misschien leren ze wel meer op een Belgische school.";
systemUtterance[5] = "Hoe weet je dat zo zeker?";
systemUtterance[6] = "Wat is er verder nog beter in Belgi@14?";
systemUtterance[7] = "Daar ben ik het mee eens. Maar dat wordt nu in Nederland ook beter.";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[1] = new Array("Op ","Op school ","Op school ","Op school ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[3] = new Array("Belgische ","Belgische ","Belgische ","Belgische ");
firstWords[4] = new Array("Ja, ze ","Ja, ze ","Ja, ze ","Ja, ze ");
firstWords[5] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[6] = new Array("De ","De ","De ","De ");
firstWords[7] = new Array("Dat ","Dat ","Dat ","Dat ");
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

allowedWordsArray[0][0] = new Array( 'de', 'het', 'is', 'kinderen', 'opvoeding', 'van');
allowedWordsArray[0][1] = new Array( 'de', 'het', 'is', 'kinderen', 'opvoeding', 'van');
allowedWordsArray[0][2] = new Array( 'Dat is de opvoeding van de kinderen.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Nederlandse', 'de', 'kinderen', 'school', 'veel', 'vrijer', 'zijn');
allowedWordsArray[1][1] = new Array( 'Nederlandse', 'de', 'kinderen', 'veel', 'vrijer', 'zijn');
allowedWordsArray[1][2] = new Array( 'Op school zijn de Nederlandse kinderen veel vrijer.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'brutaal', 'daardoor', 'want', 'worden', 'ze');
allowedWordsArray[2][1] = new Array( 'brutaal', 'daardoor', 'want', 'worden', 'ze');
allowedWordsArray[2][2] = new Array( 'Nee, want daardoor worden ze brutaal.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'er', 'hebben', 'het', 'hun', 'kinderen', 'naar', 'ook', 'zin');
allowedWordsArray[3][1] = new Array( 'er', 'hebben', 'het', 'hun', 'kinderen', 'naar', 'ook', 'zin');
allowedWordsArray[3][2] = new Array( 'Belgische kinderen hebben het er ook naar hun zin.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'beter', 'en', 'leren', 'reken', 'rekenen', 'taal');
allowedWordsArray[4][1] = new Array( 'beter', 'en', 'leren', 'rekenen', 'taal');
allowedWordsArray[4][2] = new Array( 'Ja, ze leren beter rekenen en taal.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'allerlei', 'blijkt', 'officieel','onderzoek', 'uit');
allowedWordsArray[5][1] = new Array( 'allerlei', 'blijkt', 'officieel','onderzoek', 'uit');
allowedWordsArray[5][2] = new Array( 'Dat blijkt uit allerlei officieel onderzoek.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'beter', 'er', 'geregeld', 'is', 'kinderopvang');
allowedWordsArray[6][1] = new Array( 'beter', 'er', 'geregeld', 'is', 'kinderopvang');
allowedWordsArray[6][2] = new Array( 'De kinderopvang is er beter geregeld.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'al', 'ik', 'moet', 'nog', 'weer', 'zien');
allowedWordsArray[7][1] = new Array( 'ik', 'moet', 'nog', 'zien');
allowedWordsArray[7][2] = new Array( 'Dat moet ik nog zien.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( '');
allowedWordsArray[8][1] = new Array( '');
allowedWordsArray[8][2] = new Array( '');
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
correctPattern[0] = new Array(/^(Dat is de opvoeding van (de )?kinderen )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Op school zijn (de )?Nederlandse kinderen (veel )?vrijer )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nee (want )?(daardoor worden ze |ze worden daardoor )brutaal )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Belgische kinderen hebben het (er )?ook naar hun zin )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ja ze leren beter (rekenen en taal |taal en rekenen ))$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Dat blijkt uit (allerlei )?(officieel )?onderzoek )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(De kinderopvang is er beter geregeld )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dat moet ik nog zien )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Dat is de opvoeding )$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Nee (want )?ze worden brutaal )$/;
correctShortPattern[3] = /^(Belgische kinderen ook )$/;
correctShortPattern[4] = /^(Ja ze leren beter (rekenen |taal ))$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^(De kinderopvang is (beter (geregeld )?|er beter ))$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;

theLanguage=1;