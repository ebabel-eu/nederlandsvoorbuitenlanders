
var introtekst = "<h1>Les 17. Met dokter Jansen: wat is er aan de hand? Oefening B. </h1><p>Je dochtertje is nog steeds ziek.<br>Je belt weer met de dokter.</p>  ";
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
systemUtterance[0] = "Met dokter Jansen. Zeg het eens.";
systemUtterance[1] = "Waar heeft ze nu pijn?";
systemUtterance[2] = "En de koorts? Heeft de paracetamol geholpen?";
systemUtterance[3] = "Hoe hoog is de koorts?";
systemUtterance[4] = "Wanneer heeft u de temperatuur opgenomen?";
systemUtterance[5] = "Hoe weet u dan dat het veertig graden is?";
systemUtterance[6] = "Tja. Eet ze wel?";
systemUtterance[7] = "Dat is ernstig. Ik kom vanmiddag bij u langs.";
systemUtterance[8] = "Geeft u haar ondertussen veel te drinken. Tot vanmiddag.";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Mijn dochtertje ","Mijn dochtertje ","Mijn dochtertje ","Mijn dochtertje ");
firstWords[1] = new Array("Haar ","Haar ","Haar ","Haar ");
firstWords[2] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[3] = new Array("","","","");
firstWords[4] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[5] = new Array("","","","");
firstWords[6] = new Array("Ze ","Ze ","Ze ","Ze ");
firstWords[7] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[8] = new Array("Tot ","Tot ","Tot ","Tot ");
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
allowedWordsArray[0][0] = new Array( 'goed', 'niet', 'nog', 'steeds', 'voelt', 'zich');
allowedWordsArray[0][1] = new Array( 'goed', 'niet', 'nog', 'steeds', 'voelt', 'zich');
allowedWordsArray[0][2] = new Array( 'Mijn dochtertje voelt zich nog steeds niet goed.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'de', 'doet', 'een', 'hele', 'heel','lichaam', 'pijn');
allowedWordsArray[1][1] = new Array( 'doet', 'hele', 'lichaam', 'pijn');
allowedWordsArray[1][2] = new Array( 'Haar hele lichaam doet pijn.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'dat', 'geholpen', 'heeft', 'niets');
allowedWordsArray[2][1] = new Array( 'dat', 'geholpen', 'heeft', 'niets');
allowedWordsArray[2][2] = new Array( 'Nee dat heeft niets geholpen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'Behoorlijk', 'Minstens', 'Ruim', 'graad', 'graden', 'veertig', 'vijftig');
allowedWordsArray[3][1] = new Array( 'Minstens', 'Ruim', 'graden', 'veertig');
allowedWordsArray[3][2] = new Array( 'Ruim veertig graden.', 'Minstens veertig graden.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'de', 'heb', 'niet', 'opgenomen', 'temperatuur');
allowedWordsArray[4][1] = new Array( 'de', 'heb', 'niet', 'opgenomen', 'temperatuur');
allowedWordsArray[4][2] = new Array( 'Ik heb de temperatuur niet opgenomen.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'Haar', 'Mijn', 'Zijn', 'gezicht', 'helemaal', 'is', 'rood');
allowedWordsArray[5][1] = new Array( 'Haar', 'gezicht', 'helemaal', 'is', 'rood');
allowedWordsArray[5][2] = new Array( 'Haar gezicht is helemaal rood.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'al', 'dagen', 'gegeten', 'heeft', 'niet', 'twee');
allowedWordsArray[6][1] = new Array( 'al', 'dagen', 'gegeten', 'heeft', 'niet', 'twee');
allowedWordsArray[6][2] = new Array( 'Ze heeft al twee dagen niet gegeten.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'ernstig', 'fijn', 'is');
allowedWordsArray[7][1] = new Array( 'fijn', 'is');
allowedWordsArray[7][2] = new Array( 'Dat is fijn.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'de', 'middag', 'straks');
allowedWordsArray[8][1] = new Array( 'straks');
allowedWordsArray[8][2] = new Array( 'Tot straks.');
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
correctPattern[0] = new Array(/^(Mijn dochtertje voelt zich nog (steeds )?niet goed )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Haar hele lichaam doet pijn )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Nee dat heeft niets geholpen )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^((Ruim |Minstens )veertig graden )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Ik heb de temperatuur niet opgenomen )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Haar gezicht is helemaal rood )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ze heeft (al )?(twee )?dagen niet gegeten )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Dat is fijn )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Tot straks )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Mijn dochtertje voelt zich niet goed )$/;
correctShortPattern[1] = /^(Haar lichaam doet pijn )$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^(Haar gezicht is rood )$/;
correctShortPattern[6] = /^(Ze heeft niet gegeten )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;

