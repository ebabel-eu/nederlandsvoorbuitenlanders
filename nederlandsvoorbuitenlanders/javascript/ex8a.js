
var introtekst = "	<h1>Les 8. Eet smakelijk. Oefening A.</h1>	<p>Ontbijt en lunch</p>  ";
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
systemUtterance[0] = "Wat eet je bij het ontbijt?";
systemUtterance[1] = "Dat is niet gezond.";
systemUtterance[2] = "Waarom ontbijt je dan niet?";
systemUtterance[3] = "Maar waarom sta je niet vroeger op?";
systemUtterance[4] = "En in het weekend; ontbijt je dan wel?";
systemUtterance[5] = "Wat eet je bij de lunch?";
systemUtterance[6] = "Met aardappelen?";
systemUtterance[7] = "Eet je nooit aardappelen?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("","Dat ","Dat ","Dat ");
firstWords[2] = new Array("Omdat ","Omdat ","Omdat ","Omdat ");
firstWords[3] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[4] = new Array("Nee, dan ","Nee, dan ","Nee, dan ","Nee, dan ");
firstWords[5] = new Array("Tussen ","Tussen ","Tussen ","Tussen ");
firstWords[6] = new Array("","","","");
firstWords[7] = new Array("Ik ","Ik ","Ik ","Ik ");
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
allowedWordsArray[0][0] = new Array( 'geen', 'niet', 'nooit', 'ontbijt');
allowedWordsArray[0][1] = new Array( 'niet', 'nooit', 'ontbijt');
allowedWordsArray[0][2] = new Array( 'Ik ontbijt niet.', 'Ik ontbijt nooit.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Dat', 'Het', 'ik', 'weet', 'wel');
allowedWordsArray[1][1] = new Array( 'ik', 'weet', 'wel');
allowedWordsArray[1][2] = new Array( 'Dat weet ik wel.', 'Dat weet ik.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( '@31s', 'geen', 'heb', 'ik', 'morgens', 'niet', 'tijd');
allowedWordsArray[2][1] = new Array( '@31s', 'geen', 'heb', 'ik', 'morgens', 'tijd');
allowedWordsArray[2][2] = new Array( 'Omdat ik @31s morgens geen tijd heb.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'geen', 'ik', 'niet', 'prettig', 'prettige', 'vind');
allowedWordsArray[3][1] = new Array( 'ik', 'niet', 'prettig', 'vind');
allowedWordsArray[3][2] = new Array( 'Dat vind ik niet prettig.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'ik', 'laat',  'op', 'sta', 'te');
allowedWordsArray[4][1] = new Array( 'ik', 'laat',  'op', 'sta', 'te');
allowedWordsArray[4][2] = new Array( 'Nee, dan sta ik te laat op.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'de', 'een', 'eet', 'het', 'ik', 'maaltijd', 'middag', 'warm', 'warme');
allowedWordsArray[5][1] = new Array( 'de', 'een', 'eet', 'ik', 'maaltijd', 'middag', 'warm', 'warme');
allowedWordsArray[5][2] = new Array( 'Tussen de middag eet ik een warme maaltijd.', 'Tussen de middag eet ik warm.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'Altijd', 'Duidelijk', 'Meestal', 'met', 'of', 'rijst', 'spaghetti');
allowedWordsArray[6][1] = new Array( 'Altijd', 'Meestal', 'met', 'of', 'rijst', 'spaghetti');
allowedWordsArray[6][2] = new Array( 'Meestal met rijst of spaghetti.', 'Altijd met rijst.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'frites', 'lekker', 'lekkere', 'leuk', 'vind', 'wel');
allowedWordsArray[7][1] = new Array( 'frites', 'lekker', 'vind', 'wel');
allowedWordsArray[7][2] = new Array( 'Ik vind frites wel lekker .');
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
correctPattern[0] = new Array(/^(Ik ontbijt (niet |nooit ))$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Dat weet ik (wel )?)$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Omdat ik ((@31s morgens geen tijd heb )|(geen tijd heb @31s morgens )))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat vind ik niet prettig )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee dan sta ik (te )?laat op )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Tussen de middag eet ik (een warme maaltijd |warm ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^((Altijd |Meestal )met (rijst of spaghetti |spaghetti of rijst |rijst |spaghetti ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ik vind frites (wel )?lekker )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Omdat ik geen tijd heb )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;


