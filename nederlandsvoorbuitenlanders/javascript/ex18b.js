
var introtekst = "<h1>Les 18. Oma�s wil is wet. Oefening B.</h1><p>De familie van Ilona.</p> ";
var introPlaatje = "";

endnode=9;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =2;
nrPaths[7] =1;
nrPaths[8] =1;
nrPaths[9] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,8,16);
nextNode[7] = new Array(9,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Ilona, hoe lang ben je al in Nederland?";
systemUtterance[1] = "Mis je je familie?";
systemUtterance[2] = "Mis je je ouders dan niet?";
systemUtterance[3] = "Hoe komt dat?";
systemUtterance[4] = "Leeft je opa nog?";
systemUtterance[5] = "Was je opa een aardige man?";
systemUtterance[6] = "Heb je broers of zussen?";
systemUtterance[7] = "Is je broer getrouwd?";
systemUtterance[8] = "Is je zus getrouwd?";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ben ","Ik ben ","Ik ben ");
firstWords[1] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[2] = new Array("Natuurlijk, maar ","Natuurlijk, maar ","Natuurlijk, maar ","Natuurlijk, maar ");
firstWords[3] = new Array("Mijn ouders ","Mijn ouders zijn ","Mijn ouders zijn ","Mijn ouders zijn ");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Nee, ","Nee, hij ","Nee, hij ","Nee, hij ");
firstWords[8] = new Array("Nee, ","Nee, ze ","Nee, ze ","Nee, ze ");
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
allowedWordsArray[0][0] = new Array( 'Nederland', 'ben', 'gekomen', 'heb',  'jaar', 'het', 'naar', 'vorig');
allowedWordsArray[0][1] = new Array( 'Nederland', 'gekomen',  'jaar',  'naar', 'vorig');
allowedWordsArray[0][2] = new Array( 'Ik ben vorig jaar naar Nederland gekomen.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'ik', 'mijn', 'mis', 'oma', 'vooral');
allowedWordsArray[1][1] = new Array( 'ik', 'mijn', 'mis', 'oma', 'vooral');
allowedWordsArray[1][2] = new Array( 'Ja, ik mis vooral mijn oma.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'het', 'hou', 'ik', 'meest', 'mijn', 'oma', 'van');
allowedWordsArray[2][1] = new Array( 'het', 'hou', 'ik', 'meest', 'mijn', 'oma', 'van');
allowedWordsArray[2][2] = new Array( 'Natuurlijk, maar ik hou het meest van mijn oma.', 'Natuurlijk, maar van mijn oma hou ik het meest.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'altijd', 'en', 'gescheiden', 'mij', 'mijn', 'oma', 'op', 'paste', 'zijn');
allowedWordsArray[3][1] = new Array( 'altijd', 'en', 'gescheiden', 'mij', 'mijn', 'oma', 'op', 'paste');
allowedWordsArray[3][2] = new Array( 'Mijn ouders zijn gescheiden en mijn oma paste altijd op mij.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'die', 'gestorven', 'is', 'vroeg');
allowedWordsArray[4][1] = new Array( 'die', 'gestorven', 'is', 'vroeg');
allowedWordsArray[4][2] = new Array( 'Nee, die is vroeg gestorven.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'ben', 'gekend', 'heb', 'hem', 'niet');
allowedWordsArray[5][1] = new Array( 'gekend', 'heb', 'hem', 'niet');
allowedWordsArray[5][2] = new Array( 'Ik heb hem niet gekend.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'broer', 'een', 'heb', 'zus');
allowedWordsArray[6][1] = new Array( 'broer', 'een', 'heb', 'zus');
allowedWordsArray[6][2] = new Array( 'Ik heb een zus.', 'Ik heb een broer.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'bij', 'hij', 'mijn', 'moeder', 'nog', 'woont');
allowedWordsArray[7][1] = new Array( 'bij', 'mijn', 'moeder', 'nog', 'woont');
allowedWordsArray[7][2] = new Array( 'Nee, hij woont nog bij mijn moeder.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'bij', 'mijn', 'moeder', 'naar', 'nog', 'van', 'woont', 'ze');
allowedWordsArray[8][1] = new Array( 'bij', 'mijn', 'moeder', 'nog', 'woont');
allowedWordsArray[8][2] = new Array( 'Nee, ze woont nog bij mijn moeder.');
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
correctPattern[0] = new Array(/^(Ik ben vorig jaar naar Nederland gekomen )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ja ik mis (vooral mijn oma |mijn oma vooral ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Natuurlijk maar (ik hou (het meest van mijn oma |van mijn oma het meest )|van mijn oma hou ik het meest ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Mijn ouders zijn gescheiden (en )?(mijn )?oma paste (altijd )?op (mij )?)$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee die is (vroeg )?gestorven )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ik heb hem niet gekend )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik heb een broer )$/,/^(Ik heb een zus )$/,/^xxx$/);
correctPattern[7] = new Array(/^(Nee hij woont (nog )?bij mijn moeder )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Nee ze woont (nog )?bij mijn moeder )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ik ben vorig jaar gekomen )$/;
correctShortPattern[1] = /^(Ja vooral mijn oma |Ja ik mis mijn oma )$/;
correctShortPattern[2] = /^(Natuurlijk maar (mijn oma het meest |het meest mijn oma |ik hou van mijn oma ))$/;
correctShortPattern[3] = /^(Mijn ouders zijn gescheiden )$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;

