
var introtekst = "<h1>Les 18. Oma�s wil is wet. Oefening A.</h1>	<p>Ik ben Hugo en dit is mijn familie.</p>  ";
var introPlaatje = "<img src=\"../pics/18a.jpg\" width=\"257\"/>";

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
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(10,16,16);
nextNode[10] = new Array(10,10,10);
var systemUtterance = new Array();
systemUtterance[0] = "Hallo Hugo, hoe heet je opa?";
systemUtterance[1] = "Met wie is je opa getrouwd?";
systemUtterance[2] = "Hoeveel kinderen hebben Berthe en Arie?";
systemUtterance[3] = "Hoe heet hun oudste zoon?";
systemUtterance[4] = "Arie dus. En dat is jouw vader. Zijn de kinderen van je grootouders allemaal getrouwd?";
systemUtterance[5] = "Dat is je tante Jet. Je hebt dus @12@12n tante.";
systemUtterance[6] = "Ja ja, dat is je tante Loes. Heb je ook nichten of neven?";
systemUtterance[7] = "En dat is Karel. Het is een kleine familie.";
systemUtterance[8] = "Hoe heet je zusje?";
systemUtterance[9] = "Dat is leuk.";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Mijn ","Mijn ","Mijn ","Mijn ");
firstWords[1] = new Array("Hij ","Hij ","Hij ","Hij ");
firstWords[2] = new Array("Ze ","Ze ","Ze ","Ze ");
firstWords[3] = new Array("Die ","Die ","Die ","Die ");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("Nee, want ","Nee, want de vrouw ","Nee, want de vrouw ","Nee, want de vrouw ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Ja, mijn ","Ja, mijn ","Ja, mijn ","Ja, mijn ");
firstWords[8] = new Array("Die ","Die ","Die ","Die ");
firstWords[9] = new Array("Nou, eigenlijk ","Nou, eigenlijk ","Nou, eigenlijk ","Nou, eigenlijk ");
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
allowedWordsArray[0][0] = new Array( 'Arie', 'Berthe', 'heet', 'opa');
allowedWordsArray[0][1] = new Array( 'Arie', 'heet', 'opa');
allowedWordsArray[0][2] = new Array( 'Mijn opa heet Arie.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Berthe', 'getrouwd', 'is', 'met');
allowedWordsArray[1][1] = new Array( 'Berthe', 'getrouwd', 'is', 'met');
allowedWordsArray[1][2] = new Array( 'Hij is met Berthe getrouwd.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'dochter', 'dochters', 'drie', 'een', 'en', 'hebben', 'twee', 'zonen', 'zoon');
allowedWordsArray[2][1] = new Array( 'dochter', 'een', 'en', 'hebben', 'twee', 'zonen');
allowedWordsArray[2][2] = new Array( 'Ze hebben twee zonen en een dochter.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'als', 'dezelfde', 'heeft', 'hetzelfde', 'hun', 'naam', 'vader', 'zijn');
allowedWordsArray[3][1] = new Array( 'als', 'dezelfde', 'heeft', 'naam', 'vader', 'zijn');
allowedWordsArray[3][2] = new Array( 'Die heeft dezelfde naam als zijn vader.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'dochter', 'getrouwd', 'haar', 'hun', 'is', 'nooit', 'zijn', 'zoon');
allowedWordsArray[4][1] = new Array( 'dochter', 'getrouwd', 'hun', 'is', 'nooit');
allowedWordsArray[4][2] = new Array( 'Nee, hun dochter is nooit getrouwd.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'Steven', 'de', 'een', 'is',  'ook', 'tante', 'van', 'vrouw','oom');
allowedWordsArray[5][1] = new Array( 'Steven',  'een', 'is',  'ook', 'tante', 'van', 'oom');
allowedWordsArray[5][2] = new Array( 'Nee, want de vrouw van oom Steven is ook een tante.','Nee, want de vrouw van Steven is ook een tante.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'alleen', 'een', 'heb', 'neef', 'nicht');
allowedWordsArray[6][1] = new Array( 'alleen', 'een', 'heb', 'neef', 'nicht');
allowedWordsArray[6][2] = new Array( 'Ik heb alleen een neef.', 'Ik heb een neef.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'drie', 'grootouders', 'hebben', 'kleinkinderen', 'maar', 'wel');
allowedWordsArray[7][1] = new Array( 'drie', 'grootouders', 'hebben', 'kleinkinderen', 'maar');
allowedWordsArray[7][2] = new Array( 'Ja, mijn grootouders hebben maar drie kleinkinderen.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'als', 'haar', 'heet', 'hetzelfde', 'mijn', 'oma', 'ons', 'onze', 'zijn');
allowedWordsArray[8][1] = new Array( 'als', 'haar', 'heet', 'hetzelfde', 'mijn', 'oma', 'onze');
allowedWordsArray[8][2] = new Array( 'Die heet hetzelfde als mijn oma.', 'Die heet hetzelfde als haar oma.', 'Die heet hetzelfde als onze oma.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'Berthe',  'een', 'naam', 'stom', 'stomme', 'vind', 'vindt', 'ze');
allowedWordsArray[9][1] = new Array( 'Berthe', 'een', 'naam', 'stomme', 'vindt', 'ze');
allowedWordsArray[9][2] = new Array( 'Nou, eigenlijk vindt ze Berthe een stomme naam.');
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
correctPattern[0] = new Array(/^(Mijn opa heet Arie )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Hij is (met Berthe getrouwd |getrouwd met Berthe ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ze hebben (twee zonen en een dochter |een dochter en twee zonen ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Die heeft dezelfde naam als zijn vader )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee hun dochter is nooit getrouwd )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee want de vrouw van (mijn oom (Steven )|Steven )is ook (een tante (van me )?|mijn tante ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik heb (alleen )?een neef )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ja mijn grootouders hebben maar drie kleinkinderen )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Die heet hetzelfde als (mijn |haar |onze )?oma )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Nou eigenlijk vindt ze Berthe een stomme naam )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(Ja mijn grootouders hebben drie kleinkinderen )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;


theLanguage=1;
