
var introtekst = "<h1>Les 43. Moet je de teksten uit je hoofd leren? Oefening B.</h1><p>Nog een beetje grammatica.</p>  ";
var introPlaatje = "";

endnode=10;
var nrPaths = new Array();
nrPaths[0] = 1;
nrPaths[1] = 1;
nrPaths[2] = 1;
nrPaths[3] = 1;
nrPaths[4] = 1;
nrPaths[5] = 1;
nrPaths[6] = 1;
nrPaths[7] = 1;
nrPaths[8] = 1;
nrPaths[9] = 1;
nrPaths[10] = 0;

var nextNode = new Array();
nextNode[0] = new Array(1,0,0,0);
nextNode[1] = new Array(2,0,0,0);
nextNode[2] = new Array(3,0,0,0);
nextNode[3] = new Array(4,0,0,0);
nextNode[4] = new Array(5,0,0,0);
nextNode[5] = new Array(6,0,0,0);
nextNode[6] = new Array(7,0,0,0);
nextNode[7] = new Array(8,0,0,0);
nextNode[8] = new Array(9,0,0,0);
nextNode[9] = new Array(10,0,0,0);
nextNode[10] = new Array(10,0,0,0);

var systemUtterance = new Array();
systemUtterance[0] = "Heb je nog vragen over de grammatica?";
systemUtterance[1] = "Probeer om een paar van zulke moeilijke zinnen te maken. \nDus wat heb ik je gevraagd?";
systemUtterance[2] = "Heb ik je al overtuigd dat je moeilijke zinnen kan maken?";
systemUtterance[3] = "Komen je vrienden vandaag bij je eten?";
systemUtterance[4] = "Dus ze komen niet eten?";
systemUtterance[5] = "Wat ben je aan het doen?";
systemUtterance[6] = "Heb je de hele dag woordjes zitten leren?";
systemUtterance[7] = "Het tekstboek van de Delftse Methode?";
systemUtterance[8] = "Waarom ben je Nederlands gaan leren?";
systemUtterance[9] = "Dat was een zin met vijf werkwoorden! \nDit was de laatste oefening. Ik wens je veel succes met de Nederlandse taal.";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Zinnen met ","Zinnen met ","Zinnen met ","Zinnen met ");
firstWords[1] = new Array("Je ","Je hebt me ","Je hebt me ","Je hebt me ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[3] = new Array("Ze ","Ze ","Ze ","Ze ");
firstWords[4] = new Array("Ik zei dat ","Ik zei dat ","Ik zei dat ","Ik zei dat ");
firstWords[5] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[6] = new Array("Nee, eerst ","Nee, eerst ","Nee, eerst ","Nee, eerst ");
firstWords[8] = new Array("Ik ben ","Ik ben Nederlands gaan leren ","Ik ben Nederlands gaan leren ","Ik ben Nederlands gaan leren ");
firstWords[7] = new Array("Nee, dat ","Nee, dat ","Nee, dat ","Nee, dat ");
firstWords[9] = new Array("Dank ","Dank ","Dank ","Dank ");
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
allowedWordsArray[0][0] = new Array( '@12@12n', 'dan', 'ik', 'lastig', 'meer', 'vind', 'werkwoord');
allowedWordsArray[0][1] = new Array( '@12@12n', 'dan', 'ik', 'lastig', 'meer', 'vind', 'werkwoord');
allowedWordsArray[0][2] = new Array( 'Zinnen met meer dan @12@12n werkwoord vind ik lastig.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'een', 'gevraagd', 'hebt', 'maken', 'me', 'moeilijke', 'om', 'paar', 'te', 'zinnen');
allowedWordsArray[1][1] = new Array( 'een', 'gevraagd', 'maken', 'moeilijke', 'om', 'paar', 'te', 'zinnen');
allowedWordsArray[1][2] = new Array( 'Je hebt me gevraagd om een paar moeilijke zinnen te maken.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'gekund', 'hebt', 'je', 'kunnen', 'me', 'niet', 'nog', 'overtuigen');
allowedWordsArray[2][1] = new Array( 'hebt', 'je', 'kunnen', 'me', 'niet', 'nog', 'overtuigen');
allowedWordsArray[2][2] = new Array( 'Nee, je hebt me nog niet kunnen overtuigen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'al', 'bij', 'eten', 'gekomen', 'gisteren', 'hebben', 'komen', 'me', 'zijn');
allowedWordsArray[3][1] = new Array( 'al', 'bij', 'eten', 'gisteren', 'komen', 'me', 'zijn');
allowedWordsArray[3][2] = new Array( 'Ze zijn gisteren al bij me komen eten.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'eten', 'gekomen', 'gisteren', 'hebben', 'komen', 'ze', 'zijn');
allowedWordsArray[4][1] = new Array( 'eten', 'gisteren', 'komen', 'ze', 'zijn');
allowedWordsArray[4][2] = new Array( 'Ik zei dat ze gisteren zijn komen eten.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'aan', 'ben', 'leren', 'te', 'woordjes', 'zit');
allowedWordsArray[5][1] = new Array( 'leren', 'te', 'woordjes', 'zit');
allowedWordsArray[5][2] = new Array( 'Ik zit woordjes te leren.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'boek', 'een', 'heb', 'ik', 'lezen', 'zitten');
allowedWordsArray[6][1] = new Array( 'boek', 'een', 'heb', 'ik', 'lezen', 'zitten');
allowedWordsArray[6][2] = new Array( 'Nee, eerst heb ik een boek zitten lezen.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'boek', 'hoofd', 'ik', 'ken', 'mijn', 'uit');
allowedWordsArray[7][1] = new Array( 'boek', 'hoofd', 'ik', 'ken', 'mijn', 'uit');
allowedWordsArray[7][2] = new Array( 'Nee, dat boek ken ik uit mijn hoofd.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[9][0] = new Array( 'je', 'wel');
allowedWordsArray[9][1] = new Array( 'je', 'wel');
allowedWordsArray[9][2] = new Array( 'Dank je wel.');
allowedWordsArray[9][3] = allowedWordsArray[9][2];
allowedWordsArray[8][0] = new Array( 'Nederlands', 'gaan', 'leren', 'om', 'te', 'kunnen', 'spreken');
allowedWordsArray[8][1] = new Array( 'om', 'te', 'kunnen', 'spreken', 'Nederlands');
allowedWordsArray[8][2] = new Array( 'Ik ben Nederlands gaan leren om Nederlands te kunnen spreken.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[10][0] = new Array( '');
allowedWordsArray[10][1] = new Array( '');
allowedWordsArray[10][2] = new Array( '');
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
correctPattern[0] = new Array(/^(Zinnen met meer dan @12@12n werkwoord vind ik lastig )$/);
correctPattern[1] = new Array(/^(Je hebt (me )?gevraagd (om )?(een paar )?moeilijke zinnen te maken )$/);
correctPattern[2] = new Array(/^(Nee je hebt me (nog )?niet kunnen overtuigen )$/);
correctPattern[3] = new Array(/^(Ze zijn gisteren (al )?(bij me )?komen eten )$/);
correctPattern[4] = new Array(/^(Ik zei dat ze gisteren zijn komen eten )$/);
correctPattern[5] = new Array(/^(Ik zit woordjes te leren )$/);
correctPattern[6] = new Array(/^(Nee eerst heb ik een boek zitten lezen )$/);
correctPattern[7] = new Array(/^(Nee dat (boek )?ken ik uit mijn hoofd )$/);
correctPattern[8] = new Array(/^(Ik ben Nederlands gaan leren om Nederlands te kunnen spreken )$/);
correctPattern[9] = new Array(/^(Dank je (wel )?)$/);
correctPattern[10] = new Array();

var correctShortPattern = new Array();
correctShortPattern[0] = /^(Zinnen met @12@12n werkwoord vind ik lastig )$/;
correctShortPattern[1] = /^(Je hebt (me )?gevraagd (om )?zinnen te maken )$/;
correctShortPattern[2] = /^(Nee niet )$/;
correctShortPattern[3] = /^(Ze zijn gisteren (al )?(bij me )?gekomen )$/;
correctShortPattern[4] = /^(Ik zei dat ze gisteren (zijn gekomen |gekomen zijn ))$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Ik ben Nederlands gaan leren om ((Nederlands )?te kunnen spreken |Nederlands te spreken ))$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;

