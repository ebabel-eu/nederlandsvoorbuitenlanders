
var introtekst = "<h1>Les 39. Hoi met mij. Oefening A.</h1>	<p>In de trein.</p>  ";
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
systemUtterance[0] = "Hoi, waar ben je nu?";
systemUtterance[1] = "Wat? Je woont nog steeds in Rotterdam hoor.";
systemUtterance[2] = "Hoe kan je dat nou vergeten?";
systemUtterance[3] = "Hoe laat verwacht je nu thuis te zijn?";
systemUtterance[4] = "We zouden naar het theater gaan.";
systemUtterance[5] = "Maar dan hebben we geen tijd om te eten.";
systemUtterance[6] = "Ik had al dure kaartjes gekocht.";
systemUtterance[7] = "En hoe eten we dan?";
systemUtterance[8] = "En ik?";
systemUtterance[9] = "";
var firstWords = new Array();
firstWords[0] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[1] = new Array("Ik ben vergeten ","Ik ben vergeten ","Ik ben vergeten ","Ik ben vergeten ");
firstWords[2] = new Array("Ik ","Ik was ","Ik was ","Ik was ");
firstWords[3] = new Array("Tegen ","Tegen ","Tegen ","Tegen ");
firstWords[4] = new Array("Dat ","Dat ","Dat ","Dat ");
firstWords[5] = new Array("Tja, dan ","Tja, dan ","Tja, dan ","Tja, dan ");
firstWords[6] = new Array("Weet je wat, ik ","Weet je wat, ik ","Weet je wat, ik ","Weet je wat, ik ");
firstWords[7] = new Array("Ik ","Ik ","Ik ","Ik ");
firstWords[8] = new Array("Jij ","Jij ","Jij ","Jij ");
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
allowedWordsArray[0][0] = new Array( 'Den', 'Haag', 'de', 'in', 'naar', 'op', 'trein', 'zit');
allowedWordsArray[0][1] = new Array( 'Den', 'Haag', 'de', 'in', 'naar', 'trein', 'zit');
allowedWordsArray[0][2] = new Array( 'Ik zit in de trein naar Den Haag.');
allowedWordsArray[0][3] = allowedWordsArray[0][2];
allowedWordsArray[1][0] = new Array( 'Utrecht',  'in', 'om', 'over', 'stappen', 'te');
allowedWordsArray[1][1] = new Array( 'Utrecht', 'in', 'om', 'over', 'stappen', 'te');
allowedWordsArray[1][2] = new Array( 'Ik ben vergeten om in Utrecht over te stappen.');
allowedWordsArray[1][3] = allowedWordsArray[1][2];
allowedWordsArray[2][0] = new Array( 'aan', 'bellen', 'gezellig', 'het', 'met', 'mijn', 'moeder', 'was');
allowedWordsArray[2][1] = new Array( 'aan', 'bellen', 'gezellig', 'het', 'met', 'mijn', 'moeder');
allowedWordsArray[2][2] = new Array( 'Ik was gezellig aan het bellen met mijn moeder.', 'Ik was gezellig met mijn moeder aan het bellen.');
allowedWordsArray[2][3] = allowedWordsArray[2][2];
allowedWordsArray[3][0] = new Array( 'acht', 'achten', 'denk', 'half', 'ik');
allowedWordsArray[3][1] = new Array( 'acht', 'achten', 'denk', 'half', 'ik');
allowedWordsArray[3][2] = new Array( 'Tegen half acht denk ik.', 'Tegen achten denk ik.');
allowedWordsArray[3][3] = allowedWordsArray[3][2];
allowedWordsArray[4][0] = new Array( 'lukt', 'mij', 'nog', 'volgens', 'wel');
allowedWordsArray[4][1] = new Array( 'lukt', 'mij', 'nog', 'volgens', 'wel');
allowedWordsArray[4][2] = new Array( 'Dat lukt volgens mij nog wel.', 'Dat lukt nog wel volgens mij.');
allowedWordsArray[4][3] = allowedWordsArray[4][2];
allowedWordsArray[5][0] = new Array( 'gaan', 'het', 'naar', 'niet', 'theater', 'we');
allowedWordsArray[5][1] = new Array( 'gaan', 'het', 'naar', 'niet', 'theater', 'we');
allowedWordsArray[5][2] = new Array( 'Tja dan gaan we niet naar het theater.');
allowedWordsArray[5][3] = allowedWordsArray[5][2];
allowedWordsArray[6][0] = new Array( 'direct', 'het', 'het', 'loop', 'naar', 'station', 'theater', 'van');
allowedWordsArray[6][1] = new Array( 'direct', 'het', 'het', 'loop', 'naar', 'station', 'theater', 'van');
allowedWordsArray[6][2] = new Array( 'Weet je wat, ik loop direct van het station naar het theater.');
allowedWordsArray[6][3] = allowedWordsArray[6][2];
allowedWordsArray[7][0] = new Array( 'Den', 'Haag', 'broodje', 'een', 'het', 'koop', 'op', 'station', 'van');
allowedWordsArray[7][1] = new Array( 'Den', 'Haag', 'broodje', 'een', 'het', 'koop', 'op', 'station', 'van');
allowedWordsArray[7][2] = new Array( 'Ik koop een broodje op het station van Den Haag.', 'Ik koop op het station van Den Haag een broodje.');
allowedWordsArray[7][3] = allowedWordsArray[7][2];
allowedWordsArray[8][0] = new Array( 'aan', 'jezelf', 'maar', 'met', 'moet', 'voor', 'zorgen');
allowedWordsArray[8][1] = new Array( 'jezelf', 'maar', 'moet', 'voor', 'zorgen');
allowedWordsArray[8][2] = new Array( 'Jij moet maar voor jezelf zorgen.');
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
correctPattern[0] = new Array(/^(Ik zit in de trein naar Den Haag )$/,/^xxx$/,/^xxx$/);
correctPattern[1] = new Array(/^(Ik ben (vergeten (om )?(in Utrecht over te stappen |over te stappen in Utrecht )))$/,/^xxx$/,/^xxx$/);
correctPattern[2] = new Array(/^(Ik was (gezellig )?(aan het bellen met mijn moeder |met mijn moeder aan het bellen ))$/,/^xxx$/,/^xxx$/);
correctPattern[3] = new Array(/^(Tegen (half acht |achten )denk ik )$/,/^xxx$/,/^xxx$/);
correctPattern[4] = new Array(/^(Dat lukt (volgens mij (nog )?wel |(nog )?wel volgens mij ))$/,/^xxx$/,/^xxx$/);
correctPattern[5] = new Array(/^(Tja dan gaan we niet naar het theater )$/,/^xxx$/,/^xxx$/);
correctPattern[6] = new Array(/^(Weet je wat ik loop (direct van het station |van het station direct )naar het theater )$/,/^xxx$/,/^xxx$/);
correctPattern[7] = new Array(/^(Ik koop ((een broodje op (het station van Den Haag |(het )?station Den Haag ))|(((op het station van Den Haag )|(op (het )?station Den Haag ))een broodje )))$/,/^xxx$/,/^xxx$/);
correctPattern[8] = new Array(/^(Jij moet (maar )?voor jezelf zorgen )$/,/^xxx$/,/^xxx$/);
correctPattern[9] = new Array(/^xxx$/,/^xxx$/,/^xxx$/);
var correctShortPattern = new Array();
correctShortPattern[0] = /^(Ik zit in de trein )$/;
correctShortPattern[1] = /^(Ik ben vergeten (om )?over te stappen )$/;
correctShortPattern[2] = /^(Ik was (gezellig )?aan het bellen )$/;
correctShortPattern[3] = /^(Tegen (half acht |achten ))$/;
correctShortPattern[4] = /^(Dat lukt (nog )?wel )$/;
correctShortPattern[5] = /^(Tja dan gaan we niet )$/;
correctShortPattern[6] = /^(Weet je wat ik loop direct naar het theater )$/;
correctShortPattern[7] = /^(Ik koop een broodje )$/;
correctShortPattern[8] = /^xxx$/;
correctShortPattern[9] = /^xxx$/;
theLanguage=1;

