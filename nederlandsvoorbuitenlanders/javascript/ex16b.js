
var introtekst = "<h1>Les 16. Pasje kwijt. Oefening B.</h1><p>Een probleem in de supermarkt.</p>  ";
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
systemUtterance[0] = "Zo mevrouw, dat is dan zestien euro tien.";
systemUtterance[1] = "Dat kan. Hier is de pinautomaat.";
systemUtterance[2] = "Misschien zit hij in uw tasje.";
systemUtterance[3] = "Heeft u geen nieuwe pas aangevraagd?";
systemUtterance[4] = "U kunt ook contant betalen.";
systemUtterance[5] = "Misschien kunt u met uw mobieltje betalen.";
systemUtterance[6] = "Dan hebben we een probleem.";
systemUtterance[7] = "U kunt uw boodschappen hier laten en later terugkomen om te betalen.";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[2] = new Array("Ah, ik was vergeten ","Ah, ik was vergeten dat ","Ah, ik was vergeten dat ","Ah, ik was vergeten dat ");
firstWords[3] = new Array("Ja, maar ","Ja, maar ","Ja, maar ","Ja, maar ");
firstWords[4] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[5] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[6] = new Array("","","","");
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
allowedWordsArray[0][0] = new Array( 'graag', 'liever', 'pinnen', 'wil');
allowedWordsArray[0][1] = new Array( 'graag', 'pinnen', 'wil');
allowedWordsArray[0][2] = new Array( 'Ik wil graag pinnen.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'een', 'kan', 'kun', 'mijn', 'niet', 'pinpas', 'vinden');
allowedWordsArray[1][1] = new Array( 'kan', 'mijn', 'niet', 'pinpas', 'vinden');
allowedWordsArray[1][2] = new Array( 'Ik kan mijn pinpas niet vinden.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'dat', 'ik', 'kwijt', 'mijn', 'pinpas', 'was');
allowedWordsArray[2][1] = new Array( 'ik', 'kwijt', 'mijn', 'pinpas', 'was');
allowedWordsArray[2][2] = new Array( 'Ah, ik was vergeten dat ik mijn pinpas kwijt was.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'dat', 'duurt', 'minstens', 'vijf', 'dagen','dag');
allowedWordsArray[3][1] = new Array( 'dat', 'duurt', 'minstens', 'vijf', 'dagen');
allowedWordsArray[3][2] = new Array( 'Ja, maar dat duurt minstens vijf dagen.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'bij', 'geen', 'geld', 'heb', 'me', 'niet', 'ook');
allowedWordsArray[4][1] = new Array( 'bij', 'geen', 'geld', 'heb', 'me', 'ook');
allowedWordsArray[4][2] = new Array( 'Ik heb ook geen geld bij me.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'dat', 'die', 'hoe', 'moet', 'niet', 'wat', 'weet');
allowedWordsArray[5][1] = new Array( 'dat', 'hoe', 'moet', 'niet', 'weet');
allowedWordsArray[5][2] = new Array( 'Ik weet niet hoe dat moet.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'Hoe', 'Wat', 'Wie', 'de', 'een', 'toestand');
allowedWordsArray[6][1] = new Array( 'Wat', 'een', 'toestand');
allowedWordsArray[6][2] = new Array( 'Wat een toestand.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'dan', 'doen', 'ik', 'maar', 'maken', 'zal');
allowedWordsArray[7][1] = new Array( 'dan', 'doen', 'ik', 'maar', 'zal');
allowedWordsArray[7][2] = new Array( 'Dat zal ik dan maar doen.', 'Dat zal ik doen.');
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
correctPattern[0] = new Array(/^(Ik wil graag pinnen )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik kan mijn pinpas niet vinden )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ah ik was vergeten dat ik mijn pinpas kwijt was )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Ja maar dat duurt (minstens )?vijf dagen )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ik heb (ook )?geen geld bij me )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ik weet niet hoe dat moet )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Wat een toestand )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dat zal ik (dan maar |maar )?doen )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ik wil pinnen )$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^(Ik heb (ook )?geen geld )$/;
correctShortPattern[5] = /^(Ik weet niet hoe )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
