
var introtekst = "<h1>Les  22.  Het huishouden: iemand moet het doen! Oefening B.</h1><p>Een modern huishouden.</p>  ";
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
nrPaths[9] = 1;
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
systemUtterance[0] = "Dag, mag ik je iets vragen?";
systemUtterance[1] = "Het duurt maar een paar minuten.";
systemUtterance[2] = "Ben je getrouwd?";
systemUtterance[3] = "Doet je vriend veel in het huishouden?";
systemUtterance[4] = "Wat doet hij bijvoorbeeld?";
systemUtterance[5] = "Stofzuigt hij ook?";
systemUtterance[6] = "En wat doe jij?";
systemUtterance[7] = "Dat is niet veel.";
systemUtterance[8] = "Heeft je vriend geen baan?";
systemUtterance[9] = "Heeft je vriend plezier in het huishouden?";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik heb ","Ik heb weinig tijd, ","Ik heb weinig tijd, ","Ik heb weinig tijd, ");
firstWords[1] = new Array("Ok@12, ","Ok@12, ","Ok@12, ","Ok@12, ");
firstWords[2] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[3] = new Array("O ja, ","O ja, ","O ja, ","O ja, ");
firstWords[4] = new Array("Hij ","Hij ","Hij ","Hij ");
firstWords[5] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[6] = new Array("Haha, ","Haha, ","Haha, ","Haha, ");
firstWords[7] = new Array("Maar ","Maar ","Maar ","Maar ");
firstWords[8] = new Array("Nee, hij ","Nee, hij ","Nee, hij ","Nee, hij ");
firstWords[9] = new Array("Sorry, ","Sorry, ","Sorry, ","Sorry, ");
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
allowedWordsArray[0][0] = new Array( 'ik', 'mijn', 'moet', 'naar', 'tijd', 'want', 'weinig', 'werk');
allowedWordsArray[0][1] = new Array( 'ik', 'mijn', 'moet', 'naar', 'want', 'werk');
allowedWordsArray[0][2] = new Array( 'Ik heb weinig tijd, want ik moet naar mijn werk.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'ga', 'gang', 'je', 'uw');
allowedWordsArray[1][1] = new Array( 'ga', 'gang', 'je');
allowedWordsArray[1][2] = new Array( 'Ok@12, ga je gang.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'bij', 'de', 'met', 'mijn', 'samen', 'vriend', 'woon');
allowedWordsArray[2][1] = new Array( 'met', 'mijn', 'samen', 'vriend', 'woon');
allowedWordsArray[2][2] = new Array( 'Ik woon samen met mijn vriend.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'alles', 'bijna', 'die', 'doet', 'hij');
allowedWordsArray[3][1] = new Array( 'alles', 'bijna', 'die', 'doet', 'hij');
allowedWordsArray[3][2] = new Array( 'O ja, die doet bijna alles.', 'O ja, hij doet bijna alles.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'afwas', 'de', 'doet', 'en', 'het', 'hij', 'kookt');
allowedWordsArray[4][1] = new Array( 'afwas', 'de', 'doet', 'en', 'hij', 'kookt');
allowedWordsArray[4][2] = new Array( 'Hij kookt en hij doet de afwas.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'hele', 'het', 'hij', 'huis', 'maakt', 'schoon', 'schoonmaakt');
allowedWordsArray[5][1] = new Array( 'hele', 'het', 'hij', 'huis', 'maakt', 'schoon');
allowedWordsArray[5][2] = new Array( 'Ja, hij maakt het hele huis schoon.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'de', 'doe', 'geef', 'ik', 'maak', 'planten', 'water');
allowedWordsArray[6][1] = new Array( 'de', 'geef', 'ik', 'planten', 'water');
allowedWordsArray[6][2] = new Array( 'Haha, ik geef de planten water.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'de', 'geld', 'het', 'ik', 'verdien');
allowedWordsArray[7][1] = new Array( 'geld', 'het', 'ik', 'verdien');
allowedWordsArray[7][2] = new Array( 'Maar ik verdien het geld.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'aan', 'dit', 'geen', 'heeft', 'moment', 'op', 'werk');
allowedWordsArray[8][1] = new Array( 'dit', 'geen', 'heeft', 'moment', 'op', 'werk');
allowedWordsArray[8][2] = new Array( 'Nee, hij heeft op dit moment geen werk.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'ik', 'moet','nu','echt','naar','mijn','werk');
allowedWordsArray[9][1] = new Array( 'ik', 'moet','nu','echt','naar','mijn','werk');
allowedWordsArray[9][2] = new Array( 'Ik moet nu echt naar mijn werk.');
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
var correctPattern = new Array();
correctPattern[0] = new Array(/^(Ik heb weinig tijd (want )?ik moet naar mijn werk )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ok@12 ga je gang )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ik woon (samen met mijn vriend |met mijn vriend samen ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(O ja (hij |die )doet bijna alles )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Hij kookt en (hij )?doet de afwas |Hij doet de afwas en (hij )?kookt )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ja hij maakt het (hele )?huis schoon )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Haha ik geef de planten water )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Maar ik verdien het geld )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Nee hij heeft (op dit moment geen werk |geen werk op dit moment ))$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Sorry ik moet (nu )?(echt )?naar mijn werk )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ik heb weinig tijd )$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^(O ja bijna alles |O ja die doet alles )$/;
correctShortPattern[4] = /^(Hij kookt |Hij doet de afwas )$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Nee hij heeft geen werk )$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;
