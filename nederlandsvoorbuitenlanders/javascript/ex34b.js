
var introtekst = "<h1>Les 34.  De Nederlandse bevolking. Oefening B.</h1><p>Godsdienst.</p>  ";
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
systemUtterance[0] = "In Nederland is de protestantse kerk de offici@14le kerk.";
systemUtterance[1] = "Wat is dan nu de offici@14le godsdienst?";
systemUtterance[2] = "Mijn ouders zijn ook gescheiden. Maar wat betekent het bij kerk en staat?";
systemUtterance[3] = "Wat is de snelst groeiende godsdienst in Nederland?";
systemUtterance[4] = "Hoe komt dat?";
systemUtterance[5] = "Wat is jouw godsdienst eigenlijk?";
systemUtterance[6] = "Ga je iedere zondag naar de kerk?";
systemUtterance[7] = "Dan ben je geen goede katholiek.";
systemUtterance[8] = "Geloof je dan helemaal niets meer?";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Nee hoor, dat ","Nee hoor, dat was vroeger zo, ","Nee hoor, dat was vroeger zo, ","Nee hoor, dat was vroeger zo, ");
firstWords[1] = new Array("Die is ","Die is er niet want  ","Die is er niet want  ","Die is er niet want  ");
firstWords[2] = new Array("Het ","Het betekent dat ","Het betekent dat ","Het betekent dat ");
firstWords[3] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[4] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[5] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[6] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[7] = new Array("Daar ","Daar ","Daar ","Daar ");
firstWords[8] = new Array("Ach, ik ","Ach, ik ","Ach, ik ","Ach, ik ");
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
allowedWordsArray[0][0] = new Array( 'maar', 'meer', 'niet', 'nu', 'vroeger', 'was', 'zo');
allowedWordsArray[0][1] = new Array( 'maar', 'meer', 'niet', 'nu');
allowedWordsArray[0][2] = new Array( 'Nee hoor, dat was vroeger zo, maar nu niet meer.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'en', 'er', 'gescheiden', 'kerk', 'niet', 'staat', 'want', 'zijn');
allowedWordsArray[1][1] = new Array( 'en', 'gescheiden', 'kerk', 'staat', 'zijn');
allowedWordsArray[1][2] = new Array( 'Die is er niet want kerk en staat zijn gescheiden.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'alle', 'betekent', 'dat', 'gelijke', 'godsdiensten', 'hebben', 'rechten');
allowedWordsArray[2][1] = new Array( 'alle', 'gelijke', 'godsdiensten', 'hebben', 'rechten');
allowedWordsArray[2][2] = new Array( 'Het betekent dat alle godsdiensten gelijke rechten hebben.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'de', 'is', 'islam');
allowedWordsArray[3][1] = new Array( 'de', 'is', 'islam');
allowedWordsArray[3][2] = new Array( 'Dat is de islam.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'Marokko', 'Turkije', 'de', 'door', 'en', 'immigratie', 'komt', 'uit');
allowedWordsArray[4][1] = new Array( 'Marokko', 'Turkije', 'de', 'door', 'en', 'immigratie', 'komt', 'uit');
allowedWordsArray[4][2] = new Array( 'Dat komt door de immigratie uit Marokko en Turkije.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'ben', 'heb', 'katholiek', 'opgevoed', 'opvoeding');
allowedWordsArray[5][1] = new Array( 'ben', 'katholiek', 'opgevoed');
allowedWordsArray[5][2] = new Array( 'Ik ben katholiek opgevoed.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'alleen', 'ga', 'kerstmis', 'met', 'nog', 'op');
allowedWordsArray[6][1] = new Array( 'alleen', 'ga', 'kerstmis', 'met', 'nog');
allowedWordsArray[6][2] = new Array( 'Ik ga alleen nog met kerstmis.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'gelijk', 'heb', 'in', 'je');
allowedWordsArray[7][1] = new Array( 'gelijk', 'heb', 'in', 'je');
allowedWordsArray[7][2] = new Array( 'Daar heb je gelijk in.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'dat', 'er', 'geloof', 'iets', 'zijn', 'moet','wel');
allowedWordsArray[8][1] = new Array( 'dat', 'er', 'geloof', 'iets', 'zijn', 'moet','wel');
allowedWordsArray[8][2] = new Array( 'Ach, ik geloof wel dat er iets moet zijn.','Ach, ik geloof dat er wel iets moet zijn.');
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
correctPattern[0] = new Array(/^(Nee hoor dat was (zo |vroeger |vroeger zo )?((maar )?nu niet (meer )?|(maar )?niet nu ))$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Die is er niet want (kerk en staat |staat en kerk )zijn gescheiden )$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Het betekent dat alle godsdiensten gelijke rechten hebben )$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Dat is de islam )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Dat komt door (de )?immigratie uit (Marokko en Turkije |Turkije en Marokko ))$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Ik ben katholiek opgevoed )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Ik ga (alleen )?((nog )?met kerstmis |met kerstmis nog ))$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Daar heb je gelijk in )$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Ach ik geloof ((wel )?dat er iets |dat er wel iets )(moet zijn |zijn moet ))$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Nee hoor dat was (zo |vroeger |vroeger zo )?)$/;
correctShortPattern[1] = /^(Die is er niet )$/;
correctShortPattern[2] = /^(Het betekent dat godsdiensten gelijke rechten hebben )$/;
correctShortPattern[3] = /^xxx$/;
correctShortPattern[4] = /^(Dat komt door (de )?immigratie (uit Turkije |uit Marokko )?)$/;
correctShortPattern[5] = /^(Ik ben katholiek )$/;
correctShortPattern[6] = /^xxx$/;
correctShortPattern[7] = /^xxx$/;
correctShortPattern[8] = /^(Ach ik geloof wel iets )$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;

