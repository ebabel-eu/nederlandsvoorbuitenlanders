
var introtekst = "<h1>Les 6. Boodschappen doen. Oefening A.</h1><p>De supermarkt.</p>  ";
var introPlaatje = "";

endnode=8;
var nrPaths = new Array();
nrPaths[0] =1;
nrPaths[1] =1;
nrPaths[2] =1;
nrPaths[3] =2;
nrPaths[4] =1;
nrPaths[5] =1;
nrPaths[6] =1;
nrPaths[7] =1;
nrPaths[8] = 0;
var nextNode = new Array();
nextNode[0] = new Array(1,16,16);
nextNode[1] = new Array(2,16,16);
nextNode[2] = new Array(3,16,16);
nextNode[3] = new Array(4,5,16);
nextNode[4] = new Array(6,16,16);
nextNode[5] = new Array(6,16,16);
nextNode[6] = new Array(7,16,16);
nextNode[7] = new Array(8,16,16);
nextNode[8] = new Array(8,8,8);
var systemUtterance = new Array();
systemUtterance[0] = "Het is zaterdag. Wat doe je vandaag?";
systemUtterance[1] = "Waar doe je boodschappen?";
systemUtterance[2] = "Heb je veel nodig?";
systemUtterance[3] = "Wat koop je altijd in de supermarkt?";
systemUtterance[4] = "Koop je @12@12n pak koffie?";
systemUtterance[5] = "Koop je @12@12n pak melk?";
systemUtterance[6] = "Koop je ook groente in de supermarkt?";
systemUtterance[7] = "Waarom koop je groente op de markt?";
systemUtterance[8] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[2] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[3] = new Array("Daar ","Daar ","Daar ","Daar ");
firstWords[4] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[5] = new Array("Nee, ","Nee, ","Nee, ","Nee, ");
firstWords[6] = new Array("Nee, groente ","Nee, groente ","Nee, groente ","Nee, groente ");
firstWords[7] = new Array("Omdat de ","Omdat de ","Omdat de ","Omdat de ");
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
allowedWordsArray[0][0] = new Array( 'boodschappen', 'doen', 'maken', 'moet', 'vandaag');
allowedWordsArray[0][1] = new Array( 'boodschappen', 'doen', 'moet', 'vandaag');
allowedWordsArray[0][2] = new Array( 'Ik moet vandaag boodschappen doen.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'boodschappen', 'de', 'doe', 'het', 'in', 'naar', 'op', 'supermarkt');
allowedWordsArray[1][1] = new Array( 'boodschappen', 'de', 'doe', 'in', 'supermarkt');
allowedWordsArray[1][2] = new Array( 'Ik doe boodschappen in de supermarkt.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'heb', 'ik', 'nodig', 'veel');
allowedWordsArray[2][1] = new Array( 'heb', 'ik', 'nodig', 'veel');
allowedWordsArray[2][2] = new Array( 'Ja, ik heb veel nodig.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'altijd','ik', 'koffie', 'koop', 'koopt', 'melk');
allowedWordsArray[3][1] = new Array( 'altijd','ik', 'koffie', 'koop', 'koopt', 'melk');
allowedWordsArray[3][2] = new Array( 'Daar koop ik altijd koffie.', 'Daar koop ik altijd melk.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'ik', 'koffie', 'koop', 'pakken', 'twee');
allowedWordsArray[4][1] = new Array( 'ik', 'koffie', 'koop', 'pakken', 'twee');
allowedWordsArray[4][2] = new Array( 'Nee ik koop twee pakken koffie.', 'Nee ik koop twee pakken.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'drie', 'ik', 'koop', 'melk', 'pakken');
allowedWordsArray[5][1] = new Array( 'drie', 'ik', 'koop', 'melk', 'pakken');
allowedWordsArray[5][2] = new Array( 'Nee ik koop drie pakken melk.', 'Nee ik koop drie pakken.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'de', 'het', 'ik', 'in', 'koop', 'markt', 'op');
allowedWordsArray[6][1] = new Array( 'de', 'ik', 'koop', 'markt', 'op');
allowedWordsArray[6][2] = new Array( 'Nee, groente koop ik op de markt.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'groente', 'daar', 'goedkoop', 'is', 'zijn', 'een');
allowedWordsArray[7][1] = new Array( 'groente', 'daar', 'goedkoop', 'is');
allowedWordsArray[7][2] = new Array( 'Omdat de groente daar goedkoop is.');
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
correctPattern[0] = new Array(/^(Ik moet (((vandaag )?boodschappen doen )|boodschappen doen vandaag ))$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik doe (boodschappen in de supermarkt |in de supermarkt boodschappen ))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ja ik heb veel nodig )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Daar koop ik (altijd )?koffie )$/,/^(Daar koop ik (altijd )?melk )$/,/^xxx$/);
correctPattern[4] = new Array(/^(Nee ik koop twee pakken (koffie )?)$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Nee ik koop drie pakken (melk )?)$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Nee groente koop ik op de markt )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Omdat de groente daar goedkoop is )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^(Ja veel )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^(Nee twee (pakken )?)$/;
correctShortPattern[5] = /^(Nee drie (pakken )?)$/;
correctShortPattern[6] = /^(Nee op de markt )$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
theLanguage=1;
