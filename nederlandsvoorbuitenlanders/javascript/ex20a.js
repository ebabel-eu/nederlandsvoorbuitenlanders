
var introtekst = "<h1>Les 20. Een avondje uit. Oefening A.</h1><p>Naar de film.</p>  ";
var introPlaatje = "";

endnode=10;
var nrPaths = new Array();
nrPaths[0] =2;
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
nextNode[0] = new Array(1,8,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(10,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(1,16,16);
nextNode[10] = new Array(10,10,10);
var systemUtterance = new Array();
systemUtterance[0] = "Suzanne, heb je zin om vanavond uit te gaan?";
systemUtterance[1] = "Zullen we gaan eten in dat nieuwe Franse restaurant?";
systemUtterance[2] = "We kunnen ook ergens een pizza gaan eten.";
systemUtterance[3] = "En daarna naar de bioscoop?";
systemUtterance[4] = "Die heb ik nog niet gezien.";
systemUtterance[5] = "Laten we afspreken bij de pizzeria in de Dommelstraat.";
systemUtterance[6] = "Wat doen we na de film?";
systemUtterance[7] = "Goed idee!";
systemUtterance[8] = "Jammer, een andere keer dan maar.";
systemUtterance[9] = "Lia, heb je zin om vanavond uit te gaan?";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("","","","");
firstWords[1] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[2] = new Array("Laten ","Laten ","Laten ","Laten ");
firstWords[3] = new Array("In Path@12 ","In Path@12 ","In Path@12 ","In Path@12 ");
firstWords[4] = new Array("De ","De ","De ","De ");
firstWords[5] = new Array("Prima, ","Prima, ","Prima, ","Prima, ");
firstWords[6] = new Array("Ik ","Ik heb zin om ","Ik heb zin om ","Ik heb zin om ");
firstWords[7] = new Array("Dan ","Dan ","Dan ","Dan ");
firstWords[8] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[9] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
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
allowedWordsArray[0][0] = new Array( 'Ja', 'Nee', 'ik', 'gezellig', 'moet', 'vanavond', 'werken');
allowedWordsArray[0][1] = new Array( 'Ja',  'ik', 'gezellig', 'moet', 'vanavond', 'werken');
allowedWordsArray[0][2] = new Array( 'Ja, gezellig.', 'Nee, ik moet vanavond werken.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'duur', 'er', 'erg', 'uit', 'ziet');
allowedWordsArray[1][1] = new Array( 'duur', 'er', 'erg', 'uit', 'ziet');
allowedWordsArray[1][2] = new Array( 'Dat ziet er erg duur uit.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'dat', 'doen', 'maar', 'maken', 'we');
allowedWordsArray[2][1] = new Array( 'dat', 'doen', 'maar', 'we');
allowedWordsArray[2][2] = new Array( 'Laten we dat maar doen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'Bond', 'James', 'de', 'draait', 'een', 'het', 'nieuwste');
allowedWordsArray[3][1] = new Array( 'Bond', 'James', 'de', 'draait', 'nieuwste');
allowedWordsArray[3][2] = new Array( 'In Path@12 draait de nieuwste James Bond.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'begint', 'film', 'negen', 'om', 'uur');
allowedWordsArray[4][1] = new Array( 'begint', 'film', 'negen', 'om', 'uur');
allowedWordsArray[4][2] = new Array( 'De film begint om negen uur.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'een', 'of', 'om', 'uur', 'zeven');
allowedWordsArray[5][1] = new Array( 'een', 'of', 'om', 'uur', 'zeven');
allowedWordsArray[5][2] = new Array( 'Prima, om een uur of zeven.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'dansen', 'gaan', 'heb', 'om', 'te', 'zin');
allowedWordsArray[6][1] = new Array( 'dansen', 'gaan', 'te');
allowedWordsArray[6][2] = new Array( 'Ik heb zin om te gaan dansen.', 'Ik heb zin om te dansen.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'de', 'de', 'disco', 'film', 'gaan', 'het', 'na', 'naar', 'we');
allowedWordsArray[7][1] = new Array( 'de', 'de', 'disco', 'film', 'gaan', 'na', 'naar', 'we');
allowedWordsArray[7][2] = new Array( 'Dan gaan we na de film naar de disco.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'Ja', 'een', 'andere', 'keer', 'graag');
allowedWordsArray[8][1] = new Array( 'Ja', 'een', 'andere', 'keer', 'graag');
allowedWordsArray[8][2] = new Array( 'Ja, een andere keer graag.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'leuk','dat','lijkt', 'me');
allowedWordsArray[9][1] = new Array( 'leuk','dat','lijkt', 'me');
allowedWordsArray[9][2] = new Array( 'Ja, dat lijkt me leuk.');
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
correctPattern[0] = new Array(/^(Ja gezellig )$/,/^(Nee ik moet ((vanavond )?werken |werken vanavond ))$/,/^xxx$/);
correctPattern[1] = new Array(/^(Dat ziet er (erg )?duur uit )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Laten we dat (maar )?doen )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(In Path@12 draait de nieuwste James Bond )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(De film begint om negen uur )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Prima om een uur of zeven )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik heb zin om te (gaan )?dansen )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dan gaan we na de film naar de disco )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Ja (een andere keer graag |graag een andere keer ))$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Ja dat lijkt me leuk )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ja |Nee )$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^(Prima om zeven uur )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^(Ja leuk )$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;