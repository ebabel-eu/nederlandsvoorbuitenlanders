
var introtekst = "<h1>Les 30. Wat moet ik doen als ik ziek ben?  Oefening B.</h1><p>Een gesprek met de huisarts.</p>  ";
var introPlaatje = "";

endnode=9;
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
nrPaths[9] = 0;
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
nextNode[9] = new Array(9,9,9);
var systemUtterance = new Array();
systemUtterance[0] = "Zo meneer Jansen, hoe voelt u zich?";
systemUtterance[1] = "Heeft u ergens pijn?";
systemUtterance[2] = "Slaapt u goed?";
systemUtterance[3] = "Is uw werk misschien te zwaar?";
systemUtterance[4] = "Ook geen problemen met uw vrouw?";
systemUtterance[5] = "Dat denk ik ook. Dus op het werk en thuis heeft u geen grote problemen.";
systemUtterance[6] = "En wat is dat probleem?";
systemUtterance[7] = "Helaas kan ik u geen recept voor geld geven. Maar zal ik een bloedonderzoek laten doen?";
systemUtterance[8] = "U bent daarvoor verzekerd. Hier heeft u het formulier voor het medisch centrum. Over een week kunt u me bellen voor de uitslag.";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Dokter, ","Dokter, ","Dokter, ","Dokter, ");
firstWords[1] = new Array("Geen ","Geen ","Geen ","Geen ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[3] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("Ik  ","Ik heb geloof ik ","Ik heb geloof ik ","Ik heb geloof ik ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Als ","Als ","Als ","Als ");
firstWords[8] = new Array("Ik ","Ik ","Ik ","Ik ");
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
allowedWordsArray[0][0] = new Array( 'goed', 'ik', 'me', 'niet', 'voel', 'zich');
allowedWordsArray[0][1] = new Array( 'goed',  'ik', 'me', 'niet', 'voel');
allowedWordsArray[0][2] = new Array( 'Dokter, ik voel me  niet goed.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'altijd', 'ben', 'heb', 'ik', 'maar', 'moe', 'pijn');
allowedWordsArray[1][1] = new Array( 'altijd', 'ben', 'ik', 'maar', 'moe', 'pijn');
allowedWordsArray[1][2] = new Array( 'Geen pijn, maar ik ben altijd moe.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'de', 'hele', 'ik', 'lig', 'nacht', 'wakker');
allowedWordsArray[2][1] = new Array( 'de', 'hele', 'ik', 'lig', 'nacht', 'wakker');
allowedWordsArray[2][2] = new Array( 'Nee, ik lig de hele nacht wakker.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'mee', 'valt', 'wel');
allowedWordsArray[3][1] = new Array( 'mee', 'valt', 'wel');
allowedWordsArray[3][2] = new Array( 'Dat valt wel mee.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'Nee', 'een', 'heb', 'heel', 'ik', 'lief', 'lieve', 'vrouw');
allowedWordsArray[4][1] = new Array( 'Nee', 'een', 'heb', 'heel', 'ik', 'lieve', 'vrouw');
allowedWordsArray[4][2] = new Array( 'Nee, ik heb een heel lieve vrouw .');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( '@12@12n', 'geloof', 'groot', 'grote', 'heb', 'ik', 'maar', 'probleem');
allowedWordsArray[5][1] = new Array( '@12@12n', 'groot', 'maar', 'probleem');
allowedWordsArray[5][2] = new Array( 'Ik heb geloof ik maar @12@12n groot probleem.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'geld', 'heb', 'te', 'weinig');
allowedWordsArray[6][1] = new Array( 'geld', 'heb', 'te', 'weinig');
allowedWordsArray[6][2] = new Array( 'Ik heb te weinig geld.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'dat', 'de', 'een', 'geen', 'geld',  'kost', 'niet');
allowedWordsArray[7][1] = new Array( 'dat', 'geen', 'geld', 'kost');
allowedWordsArray[7][2] = new Array( 'Als dat geen geld kost.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'bel', 'de', 'een', 'het', 'in', 'over', 'u', 'week');
allowedWordsArray[8][1] = new Array( 'bel', 'een', 'over', 'u', 'week');
allowedWordsArray[8][2] = new Array( 'Ik bel u over een week.');
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
correctPattern[0] = new Array(/^(Dokter ik voel me niet goed )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Geen pijn maar ik ben altijd (maar )?moe )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nee (ik lig de hele nacht |de hele nacht lig ik )wakker )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat valt wel mee )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee ik heb een (heel )?lieve vrouw |Nee een (heel )?lieve vrouw heb ik )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ik heb (geloof ik (maar )?@12@12n (groot )?probleem |(maar )?@12@12n (groot )?probleem geloof ik ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik heb (te weinig geld |geld te weinig ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Als dat geen geld kost |Als dat geld kost niet )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Ik bel (u )?over een week )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Dokter ik voel me goed )$/;
correctShortPattern[1] = /^(Geen pijn (maar ik ben moe )?)$/;
correctShortPattern[2] = /^(Nee ik lig wakker )$/;
correctShortPattern[3] = /^(Dat valt mee )$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^(Ik heb (maar )?@12@12n (groot )?probleem )$/;
correctShortPattern[6] = /^(Ik heb weinig geld )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Ik bel u )$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;
