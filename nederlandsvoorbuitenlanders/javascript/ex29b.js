
var introtekst = "<h1>Les 29. Vragenlijst Vrije tijd. Oefening B.</h1><p>Muziek en film.</p>  ";
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
systemUtterance[0] = "Ga je vaak uit?";
systemUtterance[1] = "Waar hangt dat van af?";
systemUtterance[2] = "Hou je van muziek?";
systemUtterance[3] = "Luister je vaak naar muziek op de radio of via het internet?";
systemUtterance[4] = "Maak je zelf muziek?";
systemUtterance[5] = "Maar iedereen kan zingen.";
systemUtterance[6] = "Ga je wel eens naar de bioscoop?";
systemUtterance[7] = "Wat voor films?";
systemUtterance[8] = "Is er een bioscoop bij je in de buurt?";
systemUtterance[9] = "Ga je in je eentje naar de bioscoop?";
systemUtterance[10] = "";
var firstWords = new Array();
firstWords[0] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[1] = new Array("Het ","Het hangt ","Het hangt ","Het hangt ");
firstWords[2] = new Array("Daarvoor ","Daarvoor ","Daarvoor ","Daarvoor ");
firstWords[3] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[4] = new Array("Helaas ","Helaas ","Helaas ","Helaas ");
firstWords[5] = new Array("Zingen ","Zingen doe ","Zingen doe ","Zingen doe ");
firstWords[6] = new Array("Ja, bij ","Ja, bij ","Ja, bij ","Ja, bij ");
firstWords[7] = new Array("Zowel ","Zowel ","Zowel ","Zowel ");
firstWords[8] = new Array("Ja, ","Ja, ","Ja, ","Ja, ");
firstWords[9] = new Array("Nee, in ","Nee, in ","Nee, in ","Nee, in ");
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
allowedWordsArray[0][0] = new Array( 'af', 'er', 'eraan', 'ervan', 'hangt');
allowedWordsArray[0][1] = new Array( 'af', 'ervan', 'hangt');
allowedWordsArray[0][2] = new Array( 'Dat hangt ervan af.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'af', 'ervan', 'hangt', 'heb', 'ik', 'of', 'tijd');
allowedWordsArray[1][1] = new Array( 'af', 'ervan', 'heb', 'ik', 'of', 'tijd');
allowedWordsArray[1][2] = new Array( 'Het hangt ervan af of ik tijd heb.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'belangstelling', 'heb', 'ik', 'veel');
allowedWordsArray[2][1] = new Array( 'belangstelling', 'heb', 'ik', 'veel');
allowedWordsArray[2][2] = new Array( 'Daarvoor heb ik veel belangstelling.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'concert', 'echt', 'echte', 'een', 'ga', 'liever', 'naar');
allowedWordsArray[3][1] = new Array( 'concert', 'echt', 'een', 'ga', 'liever', 'naar');
allowedWordsArray[3][2] = new Array( 'Ik ga liever naar een echt concert.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'ben', 'dat', 'geleerd', 'heb', 'ik', 'nooit');
allowedWordsArray[4][1] = new Array( 'dat', 'geleerd', 'heb', 'ik', 'nooit');
allowedWordsArray[4][2] = new Array( 'Helaas heb ik dat nooit geleerd.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'alleen', 'badkamer', 'de', 'doe', 'ik', 'in');
allowedWordsArray[5][1] = new Array( 'alleen', 'badkamer', 'de', 'ik', 'in');
allowedWordsArray[5][2] = new Array( 'Zingen doe ik alleen in de badkamer.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'Amerikaanse', 'Franse', 'Italiaanse', 'Spaanse',  'films', 'naar', 'voorkeur');
allowedWordsArray[6][1] = new Array( 'Amerikaanse', 'Franse', 'Italiaanse', 'Spaanse', 'films', 'naar', 'voorkeur');
allowedWordsArray[6][2] = new Array( 'Ja, bij voorkeur naar Amerikaanse films.', 'Ja, bij voorkeur naar Franse films.', 'Ja, bij voorkeur naar Spaanse films.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'als', 'en', 'films', 'serieuze', 'spannende');
allowedWordsArray[7][1] = new Array( 'als', 'films', 'serieuze', 'spannende');
allowedWordsArray[7][2] = new Array( 'Zowel spannende als serieuze films.', 'Zowel spannende films als serieuze films.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'er', 'ernaar', 'ernaartoe', 'ik', 'kan', 'wandelen');
allowedWordsArray[8][1] = new Array( 'ernaartoe', 'ik', 'kan', 'wandelen');
allowedWordsArray[8][2] = new Array( 'Ja, ik kan ernaartoe wandelen.');
allowedWordsArray[8][3] = allowedWordsArray[8][2];
allowedWordsArray[9][0] = new Array( 'eentje', 'gezellig', 'het', 'ik', 'in', 'm@31n', 'niet', 'vind');
allowedWordsArray[9][1] = new Array( 'eentje', 'gezellig', 'het', 'ik', 'in', 'm@31n', 'niet', 'vind');
allowedWordsArray[9][2] = new Array( 'Nee, in m@31n eentje vind ik het niet gezellig.');
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
correctPattern[0] = new Array(/^(Dat hangt ervan af )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Het hangt ervan af of ik tijd heb )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Daarvoor heb ik (veel )?belangstelling )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Ik ga liever naar een (echt )?concert )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Helaas heb ik dat nooit geleerd )$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Zingen doe ik (alleen )?in de badkamer )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ja bij voorkeur naar (Amerikaanse |Franse |Spaanse |Italiaanse )films )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Zowel (spannende films als serieuze |spannende als serieuze |serieuze films als spannende |serieuze als spannende )(films )?)$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Ja ik kan ernaartoe wandelen )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^(Nee in m@31n eentje vind ik het niet gezellig )$/,/^xxx$/,/^xxx$/);
correctPattern[10] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^xxx$/;
correctShortPattern[1] = /^xxx$/;
correctShortPattern[2] = /^xxx$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^xxx$/;
correctShortPattern[5] = /^xxx$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
correctShortPattern[10] = /^xxx$/;
theLanguage=1;
