
var introtekst = "<h1>Les 34. De Nederlandse bevolking. Oefening A.</h1><p>De bevolkingsdichtheid.</p> ";
var introPlaatje = "";

endnode=11;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =2;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] =1;
nrPaths[9] =1;
nrPaths[10] =1;
nrPaths[11] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,5,16);
nextNode[4] = new Array(6,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(10,16,16);
nextNode[10] = new Array(11,16,16);
nextNode[11] = new Array(11,11,11);
var systemUtterance = new Array();
systemUtterance[0] = "Wat betekent het woord @31bevolkingsdichtheid@31?";
systemUtterance[1] = "Ja, maar wat is de dichtheid van de bevolking?";
systemUtterance[2] = "Heeft Nederland een hoge bevolkingsdichtheid?";
systemUtterance[3] = "In welke provincie is de bevolkingsdichtheid het hoogst?";
systemUtterance[4] = "Zuid-Holland, dat klopt. Is de Nederlandse bevolking in de laatste honderd jaar sterk gegroeid?";
systemUtterance[5] = "Nee, het is Zuid-Holland. Is de Nederlandse bevolking in de laatste honderd jaar sterk gegroeid?";
systemUtterance[6] = "Wat zijn de oorzaken van die stijging?";
systemUtterance[7] = "Wat is de eerste oorzaak?";
systemUtterance[8] = "Wat is de tweede oorzaak?";
systemUtterance[9] = "En de derde oorzaak?";
systemUtterance[10] = "Vertrekken er ook mensen naar het buitenland?";
systemUtterance[11] = "";
var firstWords = new Array();
firstWords[0] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[1] = new Array("Het ","Het ","Het ","Het ");
firstWords[2] = new Array("Ja, er ","Ja, er ","Ja, er ","Ja, er ");
firstWords[3] = new Array("In ","In ","In ","In ");
firstWords[4] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[5] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[6] = new Array("Er ","Er ","Er ","Er ");
firstWords[7] = new Array("Het ","Het ","Het ","Het ");
firstWords[8] = new Array("De ","De ","De ","De ");
firstWords[9] = new Array("Tot ","Tot ","Tot ","Tot ");
firstWords[10] = new Array("Ja, maar ","Ja, maar minder ","Ja, maar minder ","Ja, maar minder ");
firstWords[11] = new Array("","","","");
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
allowedWordsArray[11] = new Array();
allowedWordsArray[0][0] = new Array( 'bevolking', 'de', 'dichtheid', 'het', 'is', 'van');
allowedWordsArray[0][1] = new Array( 'bevolking', 'de', 'dichtheid', 'is', 'van');
allowedWordsArray[0][2] = new Array( 'Dat is de dichtheid van de bevolking.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'aantal', 'kilo', 'kilometer', 'mensen', 'meter', 'per', 'vierkante');
allowedWordsArray[1][1] = new Array( 'aantal', 'kilometer', 'mensen', 'per', 'vierkante');
allowedWordsArray[1][2] = new Array( 'Het aantal mensen per vierkante kilometer.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( '450', 'een', 'gemiddeld', 'kilometer', 'mensen', 'op', 'vierkante', 'wonen');
allowedWordsArray[2][1] = new Array( '450', 'een', 'gemiddeld', 'kilometer', 'mensen', 'op', 'vierkante', 'wonen');
allowedWordsArray[2][2] = new Array( 'Ja, er wonen gemiddeld 450 mensen op een vierkante kilometer.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'Limburg', 'Noord-Holland', 'Zuid-Holland', 'geloof', 'ik');
allowedWordsArray[3][1] = new Array( 'Limburg', 'Noord-Holland', 'Zuid-Holland', 'geloof', 'ik');
allowedWordsArray[3][2] = new Array( 'In Zuid-Holland geloof ik.', 'In Noord-Holland geloof ik.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'aantal', 'enorm', 'gestegen', 'heeft', 'het', 'is', 'mensen', 'stijgt');
allowedWordsArray[4][1] = new Array( 'aantal', 'enorm', 'gestegen', 'het', 'is', 'mensen');
allowedWordsArray[4][2] = new Array( 'Ja, het aantal mensen is enorm gestegen.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'aantal', 'enorm', 'gestegen', 'heeft', 'het', 'is', 'mensen', 'stijgt');
allowedWordsArray[5][1] = new Array( 'aantal', 'enorm', 'gestegen', 'het', 'is', 'mensen');
allowedWordsArray[5][2] = new Array( 'Ja, het aantal mensen is enorm gestegen.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'drie', 'er', 'zijn');
allowedWordsArray[6][1] = new Array( 'drie', 'er', 'zijn');
allowedWordsArray[6][2] = new Array( 'Er zijn er drie.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'flink', 'geboortecijfer', 'heeft', 'is', 'na', 'omhooggegaan', '1945');
allowedWordsArray[7][1] = new Array(  'flink', 'geboortecijfer', 'is', 'na', 'omhooggegaan', '1945');
allowedWordsArray[7][2] = new Array( 'Het geboortecijfer is na 1945 flink omhooggegaan.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'langer', 'leven', 'mensen', 'worden');
allowedWordsArray[8][1] = new Array( 'langer', 'leven', 'mensen');
allowedWordsArray[8][2] = new Array( 'De mensen leven langer.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( '2000', 'aantal', 'de', 'gestegen', 'het', 'immigranten', 'is', 'jaar', 'zijn');
allowedWordsArray[9][1] = new Array( '2000', 'aantal', 'gestegen', 'het', 'immigranten', 'is', 'jaar');
allowedWordsArray[9][2] = new Array( 'Tot het jaar 2000 is het aantal immigranten gestegen.');
allowedWordsArray[9][3] = allowedWordsArray[9][2];
allowedWordsArray[10][0] = new Array(  'dan', 'er', 'binnenkomen', 'minder');
allowedWordsArray[10][1] = new Array( 'dan', 'er',  'binnenkomen');
allowedWordsArray[10][2] = new Array( 'Ja, maar minder dan er binnenkomen.');
allowedWordsArray[10][3] = allowedWordsArray[10][2];
allowedWordsArray[11][0] = new Array( "");
allowedWordsArray[11][1] = new Array( "");
allowedWordsArray[11][2] = new Array( "");
allowedWordsArray[11][3] = allowedWordsArray[11][2];
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
allowedWordsList[11] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Dat is de dichtheid van de bevolking )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Het aantal mensen per vierkante kilometer )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ja er wonen ((gemiddeld )?450 mensen op een vierkante kilometer |op een vierkante kilometer (gemiddeld )?450 mensen ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(In Zuid-Holland geloof ik )$/,/^(In (Noord-Holland |Zeeland |Limburg )geloof ik )$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ja het aantal mensen is enorm gestegen )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ja het aantal mensen is enorm gestegen )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Er zijn er drie )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Het geboortecijfer is (na 1945 (flink )?omhooggegaan |(flink )?omhooggegaan na 1945 ))$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(De mensen leven langer )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Tot (het jaar )?2000 is het aantal immigranten gestegen )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^(Ja maar minder dan er binnenkomen )$/,/^xxx$/,/^xxx$/);
correctPattern[11] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^(In (Zuid-Holland |Noord-Holland |Zeeland |Limburg ))$/;
correctShortPattern[4] = /^(Ja enorm |Ja het aantal mensen is gestegen )$/;
correctShortPattern[5] = /^(Ja enorm |Ja het aantal mensen is gestegen )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(Het geboortecijfer is (flink )?omhooggegaan )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
correctShortPattern[11] = /^xxx$/;
theLanguage=1;
