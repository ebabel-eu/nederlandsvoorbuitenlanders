
var introtekst = "<h1>Les 15.  Een druk weekend. Oefening B.</h1><p>Zondag.</p>  ";
var introPlaatje = "";

endnode=10;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] =1;
nrPaths[9] =1;
nrPaths[10] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(8,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(10,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(5,16,16);
nextNode[10] = new Array(10,10,10);
var systemUtterance = new Array();
systemUtterance[0] = "Wat heb je zondag gedaan?";
systemUtterance[1] = "Tot hoe laat slaap je uit?";
systemUtterance[2] = "En dan een lekker ontbijt?";
systemUtterance[3] = "Heb je deze zondag nog iets bijzonders gedaan?";
systemUtterance[4] = "In deze tijd van het jaar is het koud op het strand.";
systemUtterance[5] = "Ben je @31s avonds de stad in gegaan?";
systemUtterance[6] = "Doe je dat altijd op zondag?";
systemUtterance[7] = "Dan begin je de week met een opgeruimde kamer.";
systemUtterance[8] = "Ben je alleen naar het strand gegaan?";
systemUtterance[9] = "Heb je Nederlands met hem gesproken?";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Op ","Op ","Op ","Op ");
firstWords[1] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[2] = new Array("Altijd ","Altijd met ","Altijd met ","Altijd met ");
firstWords[3] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[4] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[5] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[6] = new Array("Ja, op ","Ja, op ","Ja, op ","Ja, op ");
firstWords[7] = new Array("","","","");
firstWords[8] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[9] = new Array("Ja, en hij ","Ja, en hij ","Ja, en hij ","Ja, en hij ");
firstWords[10] = new Array("","","","");
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
allowedWordsArray[0][0] = new Array( 'altijd', 'ik', 'slaap', 'uit', 'uitslaap', 'zondag');
allowedWordsArray[0][1] = new Array( 'altijd', 'ik', 'slaap', 'uit', 'zondag');
allowedWordsArray[0][2] = new Array( 'Op zondag slaap ik altijd uit.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'meestal', 'om', 'op', 'pas', 'sta', 'tien', 'uur');
allowedWordsArray[1][1] = new Array( 'meestal', 'om', 'op', 'pas', 'sta', 'tien', 'uur');
allowedWordsArray[1][2] = new Array( 'Ik sta meestal pas om tien uur op.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'een', 'ei', 'gekookt', 'gekookte', 'het', 'met');
allowedWordsArray[2][1] = new Array( 'een', 'ei', 'gekookt');
allowedWordsArray[2][2] = new Array( 'Altijd met een gekookt ei.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'ben', 'de', 'geweest', 'heb', 'het', 'naar', 'strand');
allowedWordsArray[3][1] = new Array( 'ben', 'geweest', 'het', 'naar', 'strand');
allowedWordsArray[3][2] = new Array( 'Ik ben naar het strand geweest.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'mee', 'met', 'valt', 'viel', 'wel');
allowedWordsArray[4][1] = new Array( 'mee', 'valt', 'viel', 'wel');
allowedWordsArray[4][2] = new Array( 'Dat valt wel mee.', 'Dat viel mee.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'ben', 'heb', 'ik', 'kamer', 'mijn', 'opgeruimd', 'opruimen');
allowedWordsArray[5][1] = new Array( 'heb', 'ik', 'kamer', 'mijn', 'opgeruimd');
allowedWordsArray[5][2] = new Array( 'Nee, ik heb mijn kamer opgeruimd.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'altijd', 'ik', 'kamer', 'mijn', 'op', 'ruim', 'zondagavond');
allowedWordsArray[6][1] = new Array( 'altijd', 'ik', 'kamer', 'mijn', 'op', 'ruim', 'zondagavond');
allowedWordsArray[6][2] = new Array( 'Ja, op zondagavond ruim ik altijd mijn kamer op.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'Bijzonder', 'Nergens', 'Precies');
allowedWordsArray[7][1] = new Array( 'Bijzonder', 'Nergens', 'Precies');
allowedWordsArray[7][2] = new Array( 'Precies.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'Nederlands', 'Nederlandse', 'collega', 'de', 'een', 'het', 'met', 'samen');
allowedWordsArray[8][1] = new Array( 'Nederlandse', 'collega', 'een', 'met', 'samen');
allowedWordsArray[8][2] = new Array( 'Nee, samen met een Nederlandse collega.', 'Nee, met een Nederlandse collega.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'Nederlands', 'dat', 'goed',  'ik', 'sprak', 'zei');
allowedWordsArray[9][1] = new Array( 'Nederlands', 'dat', 'goed',  'ik', 'sprak', 'zei');
allowedWordsArray[9][2] = new Array( 'Ja, en hij zei dat ik goed Nederlands sprak.');
allowedWordsArray[9][3] = allowedWordsArray[9][2];
allowedWordsArray[10][0] = new Array( "");
allowedWordsArray[10][1] = new Array( "");
allowedWordsArray[10][2] = new Array( "");
allowedWordsArray[10][3] = allowedWordsArray[10][2];
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
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Op zondag slaap ik (altijd )?uit )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik sta meestal ((pas )?om tien uur op |om tien uur pas op |(pas )?op om tien uur ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Altijd met een gekookt ei )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Ik ben naar het strand geweest )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Dat (valt |viel )(wel )?mee )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee ik heb mijn kamer opgeruimd )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ja op zondagavond ruim ik ((altijd )?mijn kamer |mijn kamer altijd )op )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Precies )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Nee (samen )?met een Nederlandse collega )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Ja en hij zei dat ik goed Nederlands sprak )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Op zondag slaap ik (altijd )?)$/;
correctShortPattern[1] = /^(Ik sta ((pas )?om tien uur op |om tien uur pas op |(pas )?op om tien uur ))$/;
correctShortPattern[2] = /^(Altijd met een ei )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^(Nee ik heb opgeruimd )$/;
correctShortPattern[6] = /^(Ja op zondagavond ruim ik (altijd )?op )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Nee (samen )?met een collega )$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;
