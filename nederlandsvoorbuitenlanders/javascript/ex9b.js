
var introtekst = "<h1>Les 9. De brug was open! Oefening B.</h1>	<p>De trein of de auto?</p>  ";
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
systemUtterance[0] = "Goedemorgen Lisa. Waarom ben je te laat?";
systemUtterance[1] = "Gisteren was je ook te laat.";
systemUtterance[2] = "Er is altijd een file bij Rotterdam. Waarom kom je niet met de trein?";
systemUtterance[3] = "Hoe lang moet je lopen van je huis naar het station?";
systemUtterance[4] = "Dat is niet lang. En je kan ook fietsen naar het station.";
systemUtterance[5] = "In de trein kun je een boek lezen.";
systemUtterance[6] = "In de trein kun je praten met andere mensen.";
systemUtterance[7] = "Maar als je veel praat, leer je sneller Nederlands.";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Mijn ","Mijn ","Mijn ","Mijn ");
firstWords[1] = new Array("Gisteren ","Gisteren was er ","Gisteren was er ","Gisteren was er ");
firstWords[2] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[3] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[4] = new Array("Maar ","Maar ","Maar ","Maar ");
firstWords[5] = new Array("In ","In ","In ","In ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Nederlands ","Nederlands ","Nederlands ","Nederlands ");
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
allowedWordsArray[0][0] = new Array( 'auto', 'is', 'kapot');
allowedWordsArray[0][1] = new Array( 'auto', 'is', 'kapot');
allowedWordsArray[0][2] = new Array( 'Mijn auto is kapot.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Rotterdam', 'bij', 'de', 'een', 'er', 'file', 'het', 'is', 'lange', 'was');
allowedWordsArray[1][1] = new Array( 'Rotterdam', 'bij', 'een', 'file', 'lange');
allowedWordsArray[1][2] = new Array( 'Gisteren was er een lange file bij Rotterdam.', 'Gisteren was er bij Rotterdam een file.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'het', 'naar', 'station', 'van', 'ver', 'woon');
allowedWordsArray[2][1] = new Array( 'het', 'station', 'van', 'ver', 'woon');
allowedWordsArray[2][2] = new Array( 'Ik woon ver van het station.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'de', 'duren', 'duurt', 'een', 'het', 'kwartier', 'minstens');
allowedWordsArray[3][1] = new Array( 'duurt', 'een', 'kwartier', 'minstens');
allowedWordsArray[3][2] = new Array( 'Dat duurt minstens een kwartier.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'de', 'een', 'fiets', 'geen', 'heb', 'het', 'ik', 'niet');
allowedWordsArray[4][1] = new Array( 'fiets', 'geen', 'heb', 'ik');
allowedWordsArray[4][2] = new Array( 'Maar ik heb geen fiets.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'auto', 'de', 'het', 'ik', 'kan', 'kun', 'luisteren', 'naar', 'radio');
allowedWordsArray[5][1] = new Array( 'auto', 'de', 'ik', 'kan', 'luisteren', 'naar', 'radio');
allowedWordsArray[5][2] = new Array( 'In de auto kan ik naar de radio luisteren.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'andere', 'liever', 'mensen', 'met', 'niet', 'praat');
allowedWordsArray[6][1] = new Array( 'andere', 'liever', 'mensen', 'met', 'niet', 'praat');
allowedWordsArray[6][2] = new Array( 'Ik praat liever niet met andere mensen.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'bij', 'ik', 'in', 'leer', 'liever', 'naar', 'op', 'school');
allowedWordsArray[7][1] = new Array( 'ik', 'leer', 'liever', 'op', 'school');
allowedWordsArray[7][2] = new Array( 'Nederlands leer ik liever op school.');
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
correctPattern[0] = new Array(/^(Mijn auto is kapot )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Gisteren was er ((een (lange )?file bij Rotterdam )|(bij Rotterdam een (lange )?file )))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ik woon ver van het station )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat duurt (minstens )?een kwartier )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Maar ik heb geen fiets )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(In de auto kan ik (naar de radio luisteren |luisteren naar de radio ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik praat (liever )?niet met andere mensen )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Nederlands leer ik (liever )?op school )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^(Gisteren was er een (lange )?file )$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^(Ik praat liever niet (met mensen )?|Ik praat niet met mensen )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;