


//Nu volgt een rijtje mnemotechnische namen voor (delen van) zinnen in de systeem feedback. Taalafhankelijk dus.

var glBeginMet=0;
var glEmptyInput=1;
var glLongerSentence=2;
var glWrongWords=3;
var glOK = 4;
var glOefKlaar = 5;
var glOefMis = 6;
var glJeHebtGetypt=7;
var glMaarNietGoed0=8;
var glAntwoordIngevuld=9;
var glNietVeranderen=10;
var glRubbish=11;
var glUnknownWordNotFound=12;
var glPuntVergeten=13;
var glOefKlaarMaarOver=14;
var glBeginMetHoofdletter=15;
var glFoutePunt=16;
var glMaarNietGoed1=17;
var glProbeerWeer=18;
var glGoedAntwoord=19;
var glTypOfEnter=20;
var glEnter=21;
var glMaarNietGoed2=22;


var line = new Array();
line[nederlands] = new Array();
line[english] = new Array();
line[frans] = new Array();
line[arabisch] = new Array();
line[turks] = new Array();
line[spaans] = new Array();

line[nederlands][glBeginMet] = "Begin met: ";
line[english][glBeginMet] = "Begin with: ";
line[nederlands][glEmptyInput] = "Typ iets!";
line[english][glEmptyInput] = "Type something!";
line[nederlands][glLongerSentence] = "Dat is goed, maar maak nu een langere zin." + "\n";
line[english][glLongerSentence] = "It is correct, but now make a longer sentence." + "\n";
line[nederlands][glWrongWords] = "";/*dynamisch gevuld*/
line[english][glWrongWords] = "";
line[nederlands][glOK] = "Ga verder.";
line[english][glOK] = "Continue.";
line[nederlands][glJeHebtGetypt]= "";/*dynamisch gevuld*/
line[english][glJeHebtGetypt]= "";
line[nederlands][glMaarNietGoed0] = "Maar dat is niet goed.";
line[english][glMaarNietGoed0] = "But that is not correct.";
line[nederlands][glAntwoordIngevuld]= "Er is een correcte reactie ingevuld. Klik op enter en ga door.";
line[english][glAntwoordIngevuld]= "You find a correct response in the response field. Click enter and continue.";
line[nederlands][glOefMis] = "Dialoog mislukt. Klik op start en probeer het opnieuw.";
line[english][glOefMis] = "Dialogue failed. Click on start and try again.";
line[nederlands][glOefKlaar] = "KLAAR!  De oefening is goed gemaakt.";
line[english][glOefKlaar] = "DONE!  Exercise finished successfully.";
line[nederlands][glNietVeranderen] = "Verander het begin van de zin niet.";
line[english][glNietVeranderen] = "Do not change the beginning of the sentence.";
line[nederlands][glRubbish] = "Je hebt een vraagteken (?) op een verkeerde plaats getypt.";
line[english][glRubbish] = "You typed a question mark (?) in a wrong place.";
line[nederlands][glUnknownWordNotFound] = "Gebruik alleen woorden uit de lijst.";
line[english][glUnknownWordNotFound] = "Only use words from the list.";
line[nederlands][glPuntVergeten] = "Typ een punt (.) aan het eind, alsjeblieft.";
line[english][glPuntVergeten] = "Type a full stop at the end, please.";
line[nederlands][glOefKlaarMaarOver] = "Klaar, maar met hulp. Doe de oefening nog eens. Klik op start.";
line[english][glOefKlaarMaarOver] = "Done, but with some help. Do the exercise once more. Click on start.";
line[nederlands][glBeginMetHoofdletter] = "Begin met een hoofdletter.";
line[english][glBeginMetHoofdletter] = "Start with a capital letter.";
line[nederlands][glFoutePunt] = "Er staat een punt op een verkeerde plaats.";
line[english][glFoutePunt] = "There is a full stop in a wrong place.";
line[nederlands][glMaarNietGoed1] = "Maar dat is niet goed.";
line[english][glMaarNietGoed1] = "But that is not correct.";
line[nederlands][glTypOfEnter] = "Typ de reactie van je keuze en klik op enter.\nAls je direct op enter klikt, kiest het systeem een zin.";
line[english][glTypOfEnter] = "Type the reaction you prefer and click enter.\nIf you click enter immediately, the system will select a sentence.";
line[nederlands][glEnter] = "Klik op enter en ga verder.";
line[english][glEnter] = "Click enter and continue.";




line[frans][glBeginMet] = "Commence avec :";
line[arabisch][glBeginMet] = ":ابدأ بـ " + "\n";
line[frans][glEmptyInput] = "Tape quelque chose !";
line[arabisch][glEmptyInput] = "!أكتب شيئا ما";
line[frans][glLongerSentence] = "C'est bien. Mais fais maintenant une phrase plus longue." + "\n";
line[arabisch][glLongerSentence] = "\n" + ".هذا جيد. لكن ضع الآن جملة أطول" + "\n";
line[frans][glWrongWords] = "";
line[arabisch][glWrongWords] = "";
line[frans][glOK] = "Continue.";
line[arabisch][glOK] = ".واصل";
line[frans][glJeHebtGetypt]= "";
line[arabisch][glJeHebtGetypt]= "";
line[frans][glMaarNietGoed0] = "Mais c'est faux.";
line[arabisch][glMaarNietGoed0] = "\n" + ".هذا غير صحيح";
line[frans][glAntwoordIngevuld]= "Il y a une bonne réponse dans la case : réponse. \nCliquer sur enter et continue. ";
line[arabisch][glAntwoordIngevuld]=  "\n" + ".لكي  تواصل  " + "enter"  + " أضغط على زرّ"; 
line[frans][glOefMis] = "Dialogue échoué. Cliquer sur start et essaye à nouveau.";
line[arabisch][glOefMis] =  ". وحاول مرة أخرى " + " start " +    " الحوار فاشل. أنقر على زرّ ";
line[frans][glOefKlaar] = "FINI ! L'exercice est réussi.";
line[arabisch][glOefKlaar] = ".انتهى! التمرين تمّ بنجاح";
line[frans][glNietVeranderen] = "Ne change pas le début de la phrase.";
line[arabisch][glNietVeranderen] = ".لا تغير بداية الجملة";
line[frans][glRubbish] = "Tu as tapé un point d'interrogation à un endroit incorrect.";
line[arabisch][glRubbish] = ".لقد استعملت علامة الاستفهام (?) في غير محلها";
line[frans][glUnknownWordNotFound] = "Emploie seulement des mots de la liste.";
line[arabisch][glUnknownWordNotFound] = ".استعمل فقط الكلمات من خلال اللائحة";
line[frans][glPuntVergeten] = "Tape un point (.) à la fin.";
line[arabisch][glPuntVergeten] = ".أستعمل النقطة(.)  عند نهاية الجملة";
line[frans][glOefKlaarMaarOver] = "Fini, mais avec de l'aide. Recommence l'exercice. Cliquer sur start.";
line[arabisch][glOefKlaarMaarOver] = "start " + " انتهى التمرين، لكنه تم من خلال المساعدة. قم بالتمرين مرة أخرى. اضغط على زرّ ";
line[frans][glBeginMetHoofdletter] = "Commence avec une majuscule.";
line[arabisch][glBeginMetHoofdletter] = "[ابدأ بالحرف الكبير [هذا يخص اللغة اللاتينية فقط";
line[frans][glFoutePunt] = "Il y a un point à un endroit incorrect.";
line[arabisch][glFoutePunt] = ".لقد تم وضع نقطة في غير محلها";
line[frans][glMaarNietGoed1] = "Mais c'est faux.";
line[arabisch][glMaarNietGoed1] = "\n" + ".هذا غير صحيح";
line[frans][glTypOfEnter] = "Tape la phrase de ton choix et clique sur 'enter'.\nSi tu clique directement sur 'enter' le système choisit une phrase. ";

line[frans][glEnter] = "Cliquer sur enter et continue.";
line[arabisch][glEnter] = "enter"  + " أضغط على زرّ"; 

line[arabisch][glTypOfEnter] = "  ا  ذا ضغطت مباشرة علىا ،enter اكتب الجملة التى قمت باختيارها بالكمبيوتر و اضغط على انتر " + "\n" +
 ".سيقوم البرنامج باختيار جملة enter انتر ";


line[turks][glBeginMet] = "Cümlenin başlangıcı: ";
line[spaans][glBeginMet] = "Empieza con: ";
line[turks][glEmptyInput] = "Birseyler tikla!";
line[spaans][glEmptyInput] = "¡Escribe algo!";
line[turks][glLongerSentence] = "Bu dogru, ama simdi uzun bir cümle kur." + "\n";
line[spaans][glLongerSentence] = "Correcto, ahora construye una frase más larga." + "\n";
line[turks][glWrongWords] = "";
line[spaans][glWrongWords] = "";
line[turks][glOK] = "Devam.";
line[spaans][glOK] = "Continuar.";
line[turks][glJeHebtGetypt]= "";
line[spaans][glJeHebtGetypt]= "";
line[turks][glMaarNietGoed0] = "Ama bu doğru değil.";
line[spaans][glMaarNietGoed0] = "Pero no es correcto.";
line[turks][glAntwoordIngevuld]= "Doğru cevap, cevap alanında bulunmaktadır. \nenter tuşunu tıkla ve devam et.";
line[spaans][glAntwoordIngevuld]= "Hay una respuesta correcta en el campo de respuestas. \nHaz clic en enter para continuar.";
line[turks][glOefMis] = "Diyalog başarılı olmadı. Start tuşunu tıklayarak yeniden dene.";
line[spaans][glOefMis] = "No has superado el diálogo. Haz click en start e inténtalo de nuevo.";
line[turks][glOefKlaar] = "BİTTİ! Alıştırmayı iyi yaptın.";
line[spaans][glOefKlaar] = "¡LISTO!  El ejercicio se ha realizado de manera correcta.";
line[turks][glNietVeranderen] = "Cümlenin başını değiştirme.";
line[spaans][glNietVeranderen] = "No cambies el principio de la frase.";
line[turks][glRubbish] = "Soru işaretini yanlış yere tıkladın.";
line[spaans][glRubbish] = "Has escrito un signo de interrogación en el lugar incorrecto.";
line[turks][glUnknownWordNotFound] = "Sadece listede bulunan kelimeleri kullan.";
line[spaans][glUnknownWordNotFound] = "Utiliza solamente palabras de la lista.";
line[turks][glPuntVergeten] = "Cümlenin sonuna nokta (.) tıkla.";
line[spaans][glPuntVergeten] = "Escribe un punto al final de la frase.";
line[turks][glOefKlaarMaarOver] = "Bitti, ama yardım alarak. Alıştırmayı tekrar yap. Start tuşunu tıkla.";
line[spaans][glOefKlaarMaarOver] = "Listo, pero con ayuda. Haz el ejercicio una vez más. Haz click en start.";
line[turks][glBeginMetHoofdletter] = "Büyük harf ile başla.";
line[spaans][glBeginMetHoofdletter] = "Empieza con mayúscula.";
line[turks][glFoutePunt] = "Nokta yanlış yerde duruyor.";
line[spaans][glFoutePunt] = "Hay un punto en el lugar incorrecto.";
line[turks][glMaarNietGoed1] = "Ama bu doğru değil.";
line[spaans][glMaarNietGoed1] = "Pero no es correcto.";
line[turks][glTypOfEnter] = "Seçmiş olduğun cümleyi yaz ve enter düğmesini tıkla.\nEğer direk olarak enter düğmesini tıklarsan, sistem kendisi bir cümle seçecektir."
line[spaans][glTypOfEnter] = "Teclea la frase de tu elección y haz clic en enter.\nSi le das directamente a enter el sistema elije una frase.";
line[turks][glEnter] = "enter tuşunu tıkla ve devam et.";
line[spaans][glEnter] = "Haz clic en enter para continuar.";

line[nederlands][glProbeerWeer] = "Probeer het nog eens.";
line[english][glProbeerWeer] = "Try again.";
line[frans][glProbeerWeer] = "Essaye encore une fois." ;
line[arabisch][glProbeerWeer] = " حاول مرة أخرى  ";
line[turks][glProbeerWeer] = "Tekrar dene." + "\n" + "\n";
line[spaans][glProbeerWeer] = "\nInténtalo otra vez.";

line[nederlands][glGoedAntwoord] = "Een goed antwoord is:" ;
line[english][glGoedAntwoord] =  "A correct answer is:";
line[frans][glGoedAntwoord] = "Une bonne réponse est :" ;
line[arabisch][glGoedAntwoord] =  ":الجواب الصحيح هو"  ; 
line[turks][glGoedAntwoord] = "Doğru bir cevap:";
line[spaans][glGoedAntwoord] = "Una respuesta correcta sería:" ;


//Als de inhoud afhangt van het verloop van de dialoog, moet die in testSentence worden gevuld met fillLines.

function fillLines(glName,someString) {
	if (glName==glWrongWords) {
		line[nederlands][glWrongWords] =  "Het woord '" + someString + "' staat niet in de lijst." + "\n" + "Gebruik alleen woorden uit de lijst." ;
		line[english][glWrongWords] = "The word '" + someString + "' is not in the list." + "\n" + "Only use words from the list.";
		line[frans][glWrongWords] = "Le mot '" + someString + "' n'est pas sur la liste." + "\n" + "Sers toi uniquement des mots de la liste." ;
		line[arabisch][glWrongWords] =   " . غير موجودة باللائحة. استعمل فقط الكلمات الموجودة باللائحة "    + someString +  " الكلمة" ;     		
		line[turks][glWrongWords] = "'" + someString + "' kelimesi listed bulunmuyor. " + "\n" + "Sadece listede bulunan kelimeleri kullan.";
		line[spaans][glWrongWords] = "La palabra '" + someString + "' no consta en la lista." + "\n" +  "Utiliza solamente palabras de la lista." ;		
		
	}
	else if (glName==glJeHebtGetypt) {
		line[nederlands][glJeHebtGetypt]=  "Je hebt " + "'" + someString + "' " + "getypt.";
		line[english][glJeHebtGetypt]= "You typed "+ "'"  + someString + "'. ";
		line[frans][glJeHebtGetypt]= "Tu as frappé " + "'" + someString + "'.";
		line[arabisch][glJeHebtGetypt]=  "." +   someString + " لقد كتبت " ;		
		line[turks][glJeHebtGetypt]= "Sen " + "'" + someString + "' tıkladın. " ;
		line[spaans][glJeHebtGetypt]= "Has escrito "+ "'"  + someString + "'. ";
	};
	return false;
};

var sep2 = new Array();	/*gebruikt in fillWordsList*/	
sep2[nederlands]="of";
sep2[english]="or";
sep2[frans]="ou";
sep2[arabisch]="أو ";
sep2[turks]="veya";
sep2[spaans]="o";

var translScore = new Array();
translScore[nederlands]="Score";
translScore[english]="Score";
translScore[frans]="Score";
translScore[arabisch]="النتيجة";
translScore[turks]="Puan";
translScore[spaans]="Resultado";

