
var introtekst = "<h1>Les 8. Eet smakelijk. Oefening B.</h1><p>In de kantine.</p>  ";
var introPlaatje = "";

endnode=9;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =1;
nrPaths[4] =2;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] =1;
nrPaths[9] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,16,16);
nextNode[4] = new Array(5,6,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Tijd voor de lunch. Ik ga naar de kantine. Jij ook?";
systemUtterance[1] = "Wat wil je eten?";
systemUtterance[2] = "En daarna? Een broodje gezond?";
systemUtterance[3] = "Wat wil je op je boterham?";
systemUtterance[4] = "Ben je nu klaar?";
systemUtterance[5] = "Wil je de vla proberen?";
systemUtterance[6] = "Wat drink je bij de lunch?";
systemUtterance[7] = "Waar gaan we zitten?";
systemUtterance[8] = "Smakelijk eten!";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[1] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[3] = new Array("Een ","Een ","Een ","Een ");
firstWords[4] = new Array("","","","");
firstWords[5] = new Array("Ja, dat ","Ja, dat ","Ja, dat ","Ja, dat ");
firstWords[6] = new Array("Alleen ","Alleen ","Alleen ","Alleen ");
firstWords[7] = new Array("","","","");
firstWords[8] = new Array("","","","");
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
allowedWordsArray[0][0] = new Array( 'ben', 'bent', 'heb', 'hebt', 'honger', 'ik');
allowedWordsArray[0][1] = new Array( 'heb', 'honger', 'ik');
allowedWordsArray[0][2] = new Array( 'Ja, ik heb honger.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'begin', 'met', 'op', 'soep', 'van');
allowedWordsArray[1][1] = new Array( 'begin', 'met', 'soep');
allowedWordsArray[1][2] = new Array( 'Ik begin met soep.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'boterham', 'een', 'het', 'ik', 'neem', 'neemt');
allowedWordsArray[2][1] = new Array( 'boterham', 'een', 'ik', 'neem');
allowedWordsArray[2][2] = new Array( 'Nee, ik neem een boterham.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'ei', 'gebakken', 'heel', 'is', 'lekker', 'vind', 'wel');
allowedWordsArray[3][1] = new Array( 'ei', 'gebakken', 'heel', 'is', 'lekker', 'wel');
allowedWordsArray[3][2] = new Array( 'Een gebakken ei is wel heel lekker.', 'Een gebakken ei is lekker.', 'Een ei is wel lekker.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'Ja', 'Nee', 'dat', 'genoeg', 'is', 'niet', 'nog', 'wel');
allowedWordsArray[4][1] = new Array( 'Ja', 'Nee', 'dat', 'genoeg', 'is', 'niet', 'nog', 'wel');
allowedWordsArray[4][2] = new Array( 'Nee, dat is nog niet genoeg.','Ja, dat is wel genoeg.' );
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'er', 'goed', 'goede', 'in', 'op', 'uit', 'ziet');
allowedWordsArray[5][1] = new Array( 'er', 'goed', 'uit', 'ziet');
allowedWordsArray[5][2] = new Array( 'Ja, dat ziet er goed uit.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'een', 'koffie', 'kop', 'pak', 'thee', 'van');
allowedWordsArray[6][1] = new Array( 'een', 'koffie', 'kop', 'thee');
allowedWordsArray[6][2] = new Array( 'Alleen een kop koffie.', 'Alleen een kop thee.', 'Alleen koffie.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'Dat', 'Die', 'Het', 'is', 'tafel', 'vrij');
allowedWordsArray[7][1] = new Array( 'Die', 'is', 'tafel', 'vrij');
allowedWordsArray[7][2] = new Array( 'Die tafel is vrij.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'Eet', 'Eten', 'Smakelijk', 'eten', 'smakelijk');
allowedWordsArray[8][1] = new Array( 'Eet', 'Smakelijk', 'eten', 'smakelijk');
allowedWordsArray[8][2] = new Array( 'Eet smakelijk.', 'Smakelijk eten.');
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
correctPattern[0] = new Array(/^(Ja ik heb honger )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik begin met soep )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nee ik neem een boterham )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Een (gebakken )?ei is (wel )?(heel )?lekker )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee dat is (nog )?niet genoeg )$/,/^(Ja dat is (wel )?genoeg )$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ja dat ziet er goed uit )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Alleen (een (kop )?)?(koffie |thee ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Die tafel is vrij )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Eet smakelijk |Smakelijk eten )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Nee een boterham )$/;
correctShortPattern[3] = /^(Een (gebakken )?ei )$/;
correctShortPattern[4] = /^(Ja |Nee )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;


