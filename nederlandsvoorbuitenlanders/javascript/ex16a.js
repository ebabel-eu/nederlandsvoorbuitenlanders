
var introtekst = "<h1>Les 16. Pasje kwijt. Oefening A.</h1>	<p>Je bent je pinpas verloren.</p>  ";
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
nextNode[4] = new Array(5,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(9,16,16);
nextNode[9] = new Array(10,16,16);
nextNode[10] = new Array(10,10,10);
var systemUtterance = new Array();
systemUtterance[0] = "Wat zoek je?";
systemUtterance[1] = "Heb je goed gekeken?";
systemUtterance[2] = "Wanneer ben je hem verloren?";
systemUtterance[3] = "O, dan kun je wel contant betalen.";
systemUtterance[4] = "Waarom bel je de bank?";
systemUtterance[5] = "Waarom moet dat zo snel?";
systemUtterance[6] = "Heb je je mobieltje bij je?";
systemUtterance[7] = "Zoek even goed in je tas.";
systemUtterance[8] = "Weet je het telefoonnummer van de bank?";
systemUtterance[9] = "Hier is het nummer. Het staat ook op mijn pinpas.";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[2] = new Array("Ik heb net ","Ik heb net ","Ik heb net ","Ik heb net ");
firstWords[3] = new Array("Maar ","Maar ","Maar ","Maar ");
firstWords[4] = new Array("Ik ","Ik moet melden ","Ik moet melden ","Ik moet melden ");
firstWords[5] = new Array("Anders ","Anders kan iemand ","Anders kan iemand ","Anders kan iemand ");
firstWords[6] = new Array("Ik geloof ","Ik geloof dat ik ","Ik geloof dat ik ","Ik geloof dat ik ");
firstWords[7] = new Array("O ja, ","O ja, het zit ","O ja, het zit ","O ja, het zit ");
firstWords[8] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[9] = new Array("Dankjewel, ","Dankjewel, ","Dankjewel, ","Dankjewel, ");
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
allowedWordsArray[0][0] = new Array( 'kan', 'mijn', 'nergens', 'pinpas', 'vinden');
allowedWordsArray[0][1] = new Array( 'kan', 'mijn', 'nergens', 'pinpas', 'vinden');
allowedWordsArray[0][2] = new Array( 'Ik kan mijn pinpas nergens vinden.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'ben', 'echt', 'hem', 'ik', 'kwijt');
allowedWordsArray[1][1] = new Array( 'ben', 'echt', 'hem', 'ik', 'kwijt');
allowedWordsArray[1][2] = new Array( 'Ja, ik ben hem echt kwijt.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'ben', 'de', 'gehaald', 'geld', 'muur', 'nog', 'uit');
allowedWordsArray[2][1] = new Array( 'de', 'gehaald', 'geld', 'muur', 'nog', 'uit');
allowedWordsArray[2][2] = new Array( 'Ik heb net nog geld uit de muur gehaald.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'bank', 'bellen', 'de', 'eerst', 'ga', 'gaan', 'het', 'ik');
allowedWordsArray[3][1] = new Array( 'bank', 'bellen', 'de', 'eerst', 'ga', 'ik');
allowedWordsArray[3][2] = new Array( 'Maar eerst ga ik de bank bellen.', 'Maar ik ga eerst de bank bellen.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'ben', 'dat', 'ik', 'kwijt', 'melden', 'mijn', 'moet', 'pasje');
allowedWordsArray[4][1] = new Array( 'ben', 'dat', 'ik', 'kwijt', 'mijn', 'pasje');
allowedWordsArray[4][2] = new Array( 'Ik moet melden dat ik mijn pasje kwijt ben.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'geld', 'iemand', 'kan', 'mijn', 'opnemen', 'rekening', 'van');
allowedWordsArray[5][1] = new Array( 'geld', 'mijn', 'opnemen', 'rekening', 'van');
allowedWordsArray[5][2] = new Array( 'Anders kan iemand geld opnemen van mijn rekening.', 'Anders kan iemand geld van mijn rekening opnemen.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'ben', 'dat', 'ik', 'kwijt', 'mijn', 'mobieltje', 'ook');
allowedWordsArray[6][1] = new Array( 'ben', 'kwijt', 'mijn', 'mobieltje', 'ook');
allowedWordsArray[6][2] = new Array( 'Ik geloof dat ik mijn mobieltje ook kwijt ben.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'het', 'in', 'mijn', 'tas', 'toch', 'zit');
allowedWordsArray[7][1] = new Array( 'in', 'mijn', 'tas', 'toch');
allowedWordsArray[7][2] = new Array( 'O ja het zit toch in mijn tas.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'dat', 'in', 'mijn', 'op', 'pinpas', 'staat', 'zit');
allowedWordsArray[8][1] = new Array( 'dat', 'mijn', 'op', 'pinpas', 'staat');
allowedWordsArray[8][2] = new Array( 'Nee, dat staat op mijn pinpas.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'bellen', 'ga', 'ik', 'nu');
allowedWordsArray[9][1] = new Array( 'bellen', 'ga', 'ik', 'nu');
allowedWordsArray[9][2] = new Array( 'Dankjewel, ik ga nu bellen.');
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
correctPattern[0] = new Array(/^(Ik kan (mijn pinpas nergens |nergens mijn pinpas )vinden )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ja ik ben hem echt kwijt )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ik heb net (nog )?geld uit de muur gehaald )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Maar (eerst ga ik |ik ga eerst )de bank bellen )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ik moet melden dat ik mijn pasje kwijt ben )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Anders kan iemand (geld opnemen van mijn rekening |geld van mijn rekening opnemen ))$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik geloof dat ik (mijn mobieltje (ook )?|ook mijn mobieltje )kwijt ben )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(O ja het zit toch in mijn tas )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Nee dat staat op mijn pinpas )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Dankjewel (ik ga nu |nu ga ik )bellen )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^(Ja ik ben hem kwijt )$/;
correctShortPattern[2] = /^(Ik heb geld uit de muur gehaald )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^(O ja het zit in mijn tas )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^(Dankjewel ik ga bellen )$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;
