
var introtekst = "<h1>Les 4. Leren, leren, leren. Oefening A.</h1><p>Je zit in groep A.<br><br>Het rooster van groep A:<br><br>maandag &nbsp;9-11 lokaal 1<br>woensdag 9-11 lokaal 1<br>vrijdag &nbsp; &nbsp;&nbsp; &nbsp; 9-11 lokaal 2<br></p> ";
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
systemUtterance[0] = "Hoe laat beginnen de lessen van groep A?";
systemUtterance[1] = "Hoe laat zijn de lessen afgelopen?";
systemUtterance[3] = "Zijn er lessen op dinsdag?";
systemUtterance[2] = "Om elf uur @31s avonds?";
systemUtterance[4] = "Hoe lang duurt een les?";
systemUtterance[5] = "Twee uur. Vind je dat lang?";
systemUtterance[6] = "Zijn de lessen elke dag in lokaal 1?";
systemUtterance[7] = "Hoeveel lessen heb je per week?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("De ","De ","De ","De ");
firstWords[1] = new Array("Ze ","Ze ","Ze ","Ze ");
firstWords[3] = new Array("Nee, er ","Nee, er ","Nee, er ","Nee, er ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[4] = new Array("Een ","Een ","Een ","Een ");
firstWords[5] = new Array("Nee, dat ","Nee, dat ","Nee, dat ","Nee, dat ");
firstWords[6] = new Array("Nee, op ","Nee, op ","Nee, op ","Nee, op ");
firstWords[7] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[8] = new Array("","","","");
var allowedWordsArray = new Array();
allowedWordsArray[0] = new Array();
allowedWordsArray[1] = new Array();
allowedWordsArray[3] = new Array();
allowedWordsArray[2] = new Array();
allowedWordsArray[4] = new Array();
allowedWordsArray[5] = new Array();
allowedWordsArray[6] = new Array();
allowedWordsArray[7] = new Array();
allowedWordsArray[8] = new Array();
allowedWordsArray[0][0] = new Array( 'beginnen', 'elf', 'lessen', 'negen', 'om', 'uur', 'op', 'zeven');
allowedWordsArray[0][1] = new Array( 'beginnen', 'lessen', 'negen', 'om', 'uur');
allowedWordsArray[0][2] = new Array( 'De lessen beginnen om negen uur.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'afgelopen', 'elf', 'om', 'tien', 'twaalf', 'uur', 'zijn', 'op');
allowedWordsArray[1][1] = new Array( 'afgelopen', 'elf', 'om', 'uur', 'zijn');
allowedWordsArray[1][2] = new Array( 'Ze zijn om elf uur afgelopen.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[3][0] = new Array(  'dinsdag', 'geen', 'lessen', 'niet', 'op', 'zijn', 'om');
allowedWordsArray[3][1] = new Array( 'dinsdag', 'geen', 'lessen', 'op', 'zijn');
allowedWordsArray[3][2] = new Array( 'Nee, er zijn geen lessen op dinsdag.', 'Nee, er zijn op dinsdag geen lessen.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[2][0] = new Array( '@31s', 'elf', 'middags', 'ochtends', 'om', 'uur');
allowedWordsArray[2][1] = new Array( '@31s', 'elf', 'ochtends', 'om', 'uur');
allowedWordsArray[2][2] = new Array( 'Nee, om elf uur @31s ochtends.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[4][0] = new Array( 'drie', 'duurt', 'een', 'les', 'twee',  'uur');
allowedWordsArray[4][1] = new Array( 'duurt', 'les', 'twee', 'uur');
allowedWordsArray[4][2] = new Array( 'Een les duurt twee uur.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'geen', 'ik', 'lang', 'niet', 'vind');
allowedWordsArray[5][1] = new Array( 'ik', 'lang', 'niet', 'vind');
allowedWordsArray[5][2] = new Array( 'Nee, dat vind ik niet lang.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( '2', 'heb', 'hebben', 'ik', 'in', 'les', 'lokaal', 'vrijdag', 'we');
allowedWordsArray[6][1] = new Array( '2', 'heb', 'hebben', 'ik', 'in', 'les', 'lokaal', 'vrijdag', 'we');
allowedWordsArray[6][2] = new Array( 'Nee, op vrijdag hebben we les in lokaal 2.', 'Nee, op vrijdag heb ik in lokaal 2 les.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'drie', 'heb', 'hebt', 'les', 'maal', 'per', 'twee', 'vier', 'week');
allowedWordsArray[7][1] = new Array( 'drie', 'heb', 'les', 'maal', 'per', 'week');
allowedWordsArray[7][2] = new Array( 'Ik heb drie maal per week les.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( "");
allowedWordsArray[8][1] = new Array( "");
allowedWordsArray[8][2] = new Array( "");
allowedWordsArray[8][3] = allowedWordsArray[8][2];
var allowedWordsList = new Array();
allowedWordsList[0] = new Array();
allowedWordsList[1] = new Array();
allowedWordsList[3] = new Array();
allowedWordsList[2] = new Array();
allowedWordsList[4] = new Array();
allowedWordsList[5] = new Array();
allowedWordsList[6] = new Array();
allowedWordsList[7] = new Array();
allowedWordsList[8] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(De lessen beginnen om negen uur )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ze zijn (om elf uur afgelopen |afgelopen om elf uur ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Nee er zijn (geen lessen op dinsdag |op dinsdag geen lessen ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nee ((om )?elf uur @31s ochtends |@31s ochtends om elf uur ))$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Een les duurt twee uur )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee dat vind ik niet (lang )?)$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Nee op vrijdag (hebben we |heb ik )(les in lokaal 2 |in lokaal 2 les ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ik heb (drie maal per week les |per week drie maal les |drie maal les per week ))$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[2] = /^(Nee @31s ochtends )$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^(Nee op vrijdag in (lokaal )?2 )$/;
correctShortPattern[7] = /^(Ik heb drie maal les )$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
