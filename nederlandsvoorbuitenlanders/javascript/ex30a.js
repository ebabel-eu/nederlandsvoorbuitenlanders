

var introtekst = "<h1>Les 30. Wat moet ik doen als ik ziek ben? Oefening A.</h1><p>Vragen over de medische zorg.</p>  ";
var introPlaatje = "";

endnode=11;
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
nrPaths[10] = 1;
nrPaths[11] = 0;
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
nextNode[10] = new Array(11,11,11);
nextNode[10] = new Array(11,11,11);
var systemUtterance = new Array();
systemUtterance[0] = "Ik wil je wat vragen over de medische zorg in Nederland.";
systemUtterance[1] = "Ik weet wat een dokter is, maar wat is een arts?";
systemUtterance[2] = "In mijn straat woont een oogarts. Wat doet die?";
systemUtterance[3] = "Duidelijk. En een oorarts is voor zieke oren. Maar een huisarts, is die voor kapotte huizen?";
systemUtterance[4] = "Stel dat ik pijn in mijn oor heb. Dan ga ik dus naar de oorarts.";
systemUtterance[5] = "Waarom moet ik eerst naar de huisarts?";
systemUtterance[6] = "Kan ik altijd terecht bij de huisarts?";
systemUtterance[7] = "En dan moet ik daarna weer naar de oorarts. Dat vind ik geen handig systeem.";
systemUtterance[8] = "Verkoopt de huisarts zelf medicijnen?";
systemUtterance[9] = "Wat doe ik met dat recept?";
systemUtterance[10] = "En daar krijg ik de medicijnen.";
systemUtterance[11] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("Een arts ","Een arts ","Een arts ","Een arts ");
firstWords[2] = new Array("Een ","Een ","Een ","Een ");
firstWords[3] = new Array("Nee, de ","Nee, de ","Nee, de ","Nee, de ");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("De huisarts ","De huisarts ","De huisarts ","De huisarts ");
firstWords[6] = new Array("Meestal ","Meestal moet ","Meestal moet ","Meestal moet ");
firstWords[7] = new Array("Vaak ","Vaak kan de ","Vaak kan de ","Vaak kan de ");
firstWords[8] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[9] = new Array("Daarmee ","Daarmee ","Daarmee ","Daarmee  ");
firstWords[10] = new Array("Je ","Je ","Je ","Je ");
firstWords[11] = new Array("","","","");
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
allowedWordsArray[11] = new Array();
allowedWordsArray[0][0] = new Array( 'graag', 'help', 'je');
allowedWordsArray[0][1] = new Array( 'graag', 'help', 'je');
allowedWordsArray[0][2] = new Array( 'Ik help je graag.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'als', 'dan', 'dezelfde', 'dokter', 'een', 'hetzelfde', 'is');
allowedWordsArray[1][1] = new Array( 'als', 'dokter', 'een', 'hetzelfde', 'is');
allowedWordsArray[1][2] = new Array( 'Een arts is hetzelfde als een dokter.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'een', 'is', 'ogen', 'oogarts', 'specialist', 'voor');
allowedWordsArray[2][1] = new Array( 'de', 'een', 'is', 'ogen', 'oogarts', 'specialist', 'voor');
allowedWordsArray[2][2] = new Array( 'Een oogarts is een specialist voor de ogen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'de', 'dokter', 'gezin', 'hele','het', 'huisarts', 'is', 'voor');
allowedWordsArray[3][1] = new Array( 'de', 'dokter', 'gezin', 'hele','het', 'huisarts', 'is', 'voor');
allowedWordsArray[3][2] = new Array( 'Nee, de huisarts is de dokter voor het hele gezin.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'de', 'eerst', 'huisarts', 'je', 'moet', 'naar');
allowedWordsArray[4][1] = new Array( 'de', 'eerst', 'huisarts', 'je', 'moet', 'naar');
allowedWordsArray[4][2] = new Array( 'Nee, je moet eerst naar de huisarts.', 'Nee, eerst moet je naar de huisarts.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'Nederlandse', 'basis', 'de', 'het', 'is', 'systeem', 'van');
allowedWordsArray[5][1] = new Array( 'Nederlandse', 'basis', 'de', 'het', 'is', 'systeem', 'van');
allowedWordsArray[5][2] = new Array( 'De huisarts is de basis van het Nederlandse systeem.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'afspraak', 'bellen', 'een', 'je', 'maken', 'moet', 'om', 'te');
allowedWordsArray[6][1] = new Array( 'afspraak', 'bellen', 'een', 'je', 'maken', 'om', 'te');
allowedWordsArray[6][2] = new Array( 'Meestal moet je bellen om een afspraak te maken.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'de', 'geven', 'huisarts', 'je', 'juiste', 'kan', 'medicijnen');
allowedWordsArray[7][1] = new Array( 'de', 'geven', 'huisarts', 'je', 'juiste', 'medicijnen');
allowedWordsArray[7][2] = new Array( 'Vaak kan de huisarts je de juiste medicijnen geven.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'de', 'een', 'huisarts', 'recept', 'schrijft');
allowedWordsArray[8][1] = new Array( 'de', 'een', 'huisarts', 'recept', 'schrijft');
allowedWordsArray[8][2] = new Array( 'Nee, de huisarts schrijft een recept.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'apotheek', 'de',  'ga', 'je',  'naar', 'tot');
allowedWordsArray[9][1] = new Array('apotheek', 'de',  'ga', 'je',  'naar', 'tot' );
allowedWordsArray[9][2] = new Array( 'Daarmee ga je naar de apotheek.');
allowedWordsArray[9][3] = allowedWordsArray[9][2];
allowedWordsArray[10][0] = new Array( "hebt", 'het', 'bent', 'begrepen');
allowedWordsArray[10][1] = new Array( "hebt", 'het',  'begrepen');
allowedWordsArray[10][2] = new Array( "Je hebt het begrepen.");
allowedWordsArray[10][3] = allowedWordsArray[10][2];
allowedWordsArray[11][0] = new Array( "");
allowedWordsArray[11][1] = new Array( "");
allowedWordsArray[11][2] = new Array( "");
allowedWordsArray[11][3] = allowedWordsArray[11][2];
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
allowedWordsList[11] = new Array();
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Ik help (je )?graag )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Een arts is hetzelfde als een dokter )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Een oogarts is (een |de )?specialist voor (de )?ogen )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Nee de huisarts is de dokter voor het (hele )?gezin )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee (je moet eerst |eerst moet je )naar de huisarts )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(De huisarts is (de basis van het Nederlandse systeem |van het Nederlandse systeem de basis ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Meestal moet je bellen om een afspraak te maken )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Vaak kan (de |je )huisarts (je )?de juiste medicijnen geven )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Nee (de |een )huisarts schrijft een recept )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Daarmee ga je naar de apotheek )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^(Je hebt het begrepen )$/,/^xxx$/,/^xxx$/);
correctPattern[11] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ik help je )$/;
correctShortPattern[1] = /^(Een arts is een dokter )$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^(Nee de huisarts is voor het (hele )?gezin )$/;
correctShortPattern[4] = /^(Nee eerst naar de huisarts |Nee je moet naar de huisarts )$/;
correctShortPattern[5] = /^(De huisarts is de basis van het systeem )$/;
correctShortPattern[6] = /^(Meestal moet je (bellen |een afspraak maken ))$/;
correctShortPattern[7] = /^(Vaak kan de huisarts (je )?(de )?medicijnen geven )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;

