
var introtekst = "<h1>Les 32. Opinie en debat. Oefening B.</h1><p>Opa's opinie.</p>  ";
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
systemUtterance[0] = "Opa, kun je me misschien helpen?";
systemUtterance[1] = "Ik moet op school een presentatie houden over hoe Nederland sinds de Tweede Wereldoorlog veranderd is.";
systemUtterance[2] = "Wat is er dan allemaal veranderd?";
systemUtterance[3] = "Dat weet iedereen.";
systemUtterance[4] = "Maar opa, zijn de mensen ook veranderd?";
systemUtterance[5] = "Brutaler? Wat bedoel je precies?";
systemUtterance[6] = "Maar dat is toch iets positiefs in een vrij land.";
systemUtterance[7] = "Moet dat het onderwerp worden van mijn presentatie?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Vertel ","Vertel ","Vertel ","Vertel ");
firstWords[1] = new Array("Dat is geen ","Dat is geen ","Dat is geen ","Dat is geen ");
firstWords[2] = new Array("Nou, vroeger ","Nou, vroeger ","Nou, vroeger ","Nou, vroeger ");
firstWords[3] = new Array("En ","En ","En ","En ");
firstWords[4] = new Array("Zeker, ","Zeker, ","Zeker, ","Zeker, ");
firstWords[5] = new Array("De ","De ","De ","De ");
firstWords[6] = new Array("In ","In een vrij land ","In een vrij land ","In een vrij land ");
firstWords[7] = new Array("Ja, noem het maar: er ","Ja, noem het maar: er ","Ja, noem het maar: er ","Ja, noem het maar: er ");
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
allowedWordsArray[0][0] = new Array( 'maar', 'waarmee', 'waarop', 'waarover');
allowedWordsArray[0][1] = new Array( 'maar', 'waarmee');
allowedWordsArray[0][2] = new Array( 'Vertel maar waarmee.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array(  'moeilijk', 'moeilijke', 'onderwerp');
allowedWordsArray[1][1] = new Array(  'moeilijk', 'moeilijke', 'onderwerp');
allowedWordsArray[1][2] = new Array( 'Dat is geen moeilijk onderwerp.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array(  'er', 'geen', 'internet', 'of', 'televisie', 'was');
allowedWordsArray[2][1] = new Array(  'er', 'geen', 'internet', 'of', 'televisie', 'was');
allowedWordsArray[2][2] = new Array( 'Nou, vroeger was er  geen televisie of internet.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'er', 'files', 'geen', 'niet', 'nog', 'waren');
allowedWordsArray[3][1] = new Array( 'er', 'files', 'geen', 'nog', 'waren');
allowedWordsArray[3][2] = new Array( 'En er waren nog geen files.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'brutaler', 'de', 'geworden', 'hebben', 'mensen', 'zijn');
allowedWordsArray[4][1] = new Array( 'brutaler', 'de', 'geworden', 'mensen', 'zijn');
allowedWordsArray[4][2] = new Array( 'Zeker, de mensen zijn brutaler geworden.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'denken', 'mensen', 'meteen', 'wat', 'ze', 'zeggen');
allowedWordsArray[5][1] = new Array( 'denken', 'mensen', 'meteen', 'wat', 'ze', 'zeggen');
allowedWordsArray[5][2] = new Array( 'De mensen zeggen meteen wat ze denken.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'anderen', 'een', 'houden', 'je', 'land', 'met', 'moet', 'ook', 'rekening', 'vrij');
allowedWordsArray[6][1] = new Array( 'anderen', 'houden', 'je', 'met', 'moet', 'ook', 'rekening');
allowedWordsArray[6][2] = new Array( 'In een vrij land moet je ook rekening houden met anderen.', 'In een vrij land moet je ook met anderen rekening houden.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'aan', 'de',  'grenzen', 'het', 'in', 'meningsuiting',  'vrije', 'zijn');
allowedWordsArray[7][1] = new Array( 'aan', 'de',  'grenzen', 'meningsuiting', 'vrije', 'zijn');
allowedWordsArray[7][2] = new Array( 'Ja, noem het maar: er zijn grenzen aan de vrije meningsuiting.');
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
correctPattern[0] = new Array(/^(Vertel maar waarmee )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Dat is geen moeilijk onderwerp )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nou vroeger was er geen (televisie of internet |internet of televisie ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(En er waren nog geen files )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Zeker de mensen zijn brutaler geworden )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(De mensen zeggen meteen wat ze denken )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(In een vrij land moet je (ook )?(rekening houden met anderen |met anderen rekening houden |rekening met anderen houden ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ja noem het maar er zijn grenzen aan de vrije meningsuiting )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Vertel (maar |waarmee ))$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Nou vroeger was er geen (televisie |internet ))$/;
correctShortPattern[3] = /^(En er waren geen files )$/;
correctShortPattern[4] = /^(Zeker de mensen zijn brutaler )$/;
correctShortPattern[5] = /^(De mensen zeggen wat ze denken )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(Ja noem het maar er zijn grenzen )$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
