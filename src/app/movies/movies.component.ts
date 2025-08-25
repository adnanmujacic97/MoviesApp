import { Component } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})



export class MoviesComponent {
  movies: Movie[] = [
    new Movie(
      'Inception',
      'Dom Koub je vješt lopov koji specijalizovan za krađu tajni iz dubokog podsvijesti tijekom stanja sna. Kada mu se nudi šansa da izbriše svoju kriminalnu prošlost izvršivši "inceptaciju" — postupak usadnje ideje umjesto krađe — on skuplja tim stručnjaka kako bi izveo nemoguće. Dok prolaze kroz slojeve snova unutar snova, stvarnost počinje mutiti se. Krisofer Nolnov vizuelno zapanjujući i intelektualno napet triler kombinuje sjajne vizije, emocionalnu dubinu i kompleksnu priču o moći i opasnostima ljudskog uma.',
      'https://via.placeholder.com/200x300?text=Inception',
      19.99
    ),
    new Movie(
      'Interstellar',
      'U budućnosti u kojoj Zemlja postaje neživljiva zbog ekološkog kolapsa, bivši pilot NASA-e Kuper angažovan je za očajničku misiju da pronađe novu naseljivu planetu. Putujući kroz crvotočinu pored Saturna, on i njegova posada istražuju udaljene galaksije, susrećući crne rupe, vremensku dilataciju i misteriozne sile. Dok godine prolaze u svemiru, Kuper mora izbalansirati svoju dužnost prema čovječanstvu s obećanjem koje je dao svojoj kćeri, Murf. Vizuelno zapanjujuća i emocionalno moćna epopeja istražuje ljubav, žrtvu i borbu za opstanak ljudske vrste kroz svemir i vrijeme.',
      'https://via.placeholder.com/200x300?text=Interstellar',
      24.99
    ),
    new Movie(
      'The Dark Knight',
      'Dvije godine nakon što je Batman započeo svoj rat protiv kriminala, ravnoteža moći u Gotamskom gradu poremećena je dolaskom novog kriminalnog umjetnika: Džoker. Kao haotična sila anarhije, Džoker gura Batmana, inspektora Gordona i Hervija Denta do njihovih moralnih granica. Dok grad tone u haos, Batman mora suočiti cijenu biti heroj i tanku granicu između pravde i osvete. Ikonstična predstava Heja Ledgerja podiže ovu napetu krimi dramu u legendarnu priču o redu, haosu i duši grada.',
      'https://via.placeholder.com/200x300?text=Dark+Knight',
      17.50
    ),
    new Movie(
      'Parasite',
      'Porodica Kim, nezaposlena i živeći u stisku podstanara, vidi priliku kada sin počinje podučavati kćer bogate porodice Park. Jedna laž vodi do druge, i uskoro čitava porodica Kim radi za porodicu Park — bez znanja poslodavaca da su u srodstvu. Dok se njihova prevara produbljuje, skrivena tajna ispod vile Parkova prijeti da sve rasprsne. Bong Džun-hov film koji prelazi granice žanra kombinuje tamni humor, napetost i društvenu kritiku u zapanjujućoj priči o klasama, pohlepi i opstanku.',
      'https://via.placeholder.com/200x300?text=Parasite',
      15.99
    ),
    new Movie(
      'Pulp Fiction',
      'Kventin Tarantinov prelomni film povezuje više međusobno povezanih priča iz kriminalnog podzemlja Los Anđelesa. Od hitmena Vinsenta Vegu i Džulsa Vinfilda koji raspravljaju o masazama stopala, do boksera Butcha Kulidža koji pobjegne od smrtonosne prevari, radnja skače kroz vrijeme sa oštrim dijalogom, iznenadnim nasiljem i neočekivanim humorom. Sa nezaboravnim scenama, ikoničnim nastupima i killer soundtrackom, Pulp Fiction je preobrazio nezavisni film i ostaje kulturni međusobni kamen za svoj smion stil i inovativnu priču.',
      'https://via.placeholder.com/200x300?text=Pulp+Fiction',
      14.99
    ),
    new Movie(
      'The Shawshank Redemption',
      'Optužen za ubistvo svoje žene, bankar Endi Dufresne osuđen je na dva doživotna zatvora u zatvoru Šošenk. Unutar zidova, stvara duboko prijateljstvo s drugim zatvorenikom, Redom, i tiho se opire duševno uništavajućem okruženju kroz nadu, strpljenje i tihe činove otpora. Tokom decenija, Endijeva inteligencija i otpornost nadahnuju one oko njega — dok u tajnosti planira bijeg koji izgleda nemoguće. Zasnovan na noveli Stivena Kinga, ova moćna priča o prijateljstvu, izdržljivosti i iskupljenju smatra se jednim od najvećih filmova svih vremena.',
      'https://via.placeholder.com/200x300?text=Shawshank',
      12.99
    ),
    new Movie(
      'The Godfather',
      'Starješina organizovanog kriminalnog carstva, Vito Korelione, prenosi kontrolu svog carstva svom nevoljnom sinu Mikelu. Dok dolazi do nasilja među rivalnim porodicama, Mikel je sve dublje uvučen u svijet izdaje, moći i krvoprolića. Epopeja Fransisa Forda Kopolje kombinuje porodičnu dramu s brutalnom realnošću, istražujući vjernost, tradiciju i korumpirajuću prirodu moći. Sa nezaboravnim nastupima Marlona Branda i Al Pacina, Očuh je važan trenutak u historiji kina.',
      'https://via.placeholder.com/200x300?text=Godfather',
      18.99
    ),
    new Movie(
      'Forrest Gump',
      'Forrest Gamp, čovjek sa niskim IQ-om ali srcem od zlata, nalazi se na mnogim ključnim trenucima američke historije — od rata u Vijetnamu do uspona kompanije Apple. Dok priča svoju životnu priču sa klupe na stanici za autobus, sjeća se djetinjstva u Alabami, svoje ljubavi prema Dženi i svog prelaska preko cijele zemlje. Tom Henksov ikonični nastup u ovoj emotivno bogatoj filmu kombinuje humor, tragikomediju i inspiraciju u vječnoj priči o sudbini, ljubavi i neočekivitim posljedicama jednog života.',
      'https://via.placeholder.com/200x300?text=Forrest+Gump',
      13.99
    ),
    new Movie(
      'The Matrix',
      'Tomas Anderson, programer po danu i haker po noći, otkriva da je stvarnost kakvu poznaje simulirana stvarnost stvorena od strane inteligentnih mašina. Regrutovan od strane pobunjenika vođenih Morfeusom i Triniti, uči istinu i počinje obuku da postane "Onaj" koji može osloboditi čovječanstvo. Sa prelomnim vizuelnim efektima, filozofskom dubinom i revolucionarnim akcijskim scenama, Matrix je preobrazio SF kino i ostavio trajan uticaj na popularnu kulturu i digitalnu identitet.',
      'https://via.placeholder.com/200x300?text=Matrix',
      16.99
    ),
    new Movie(
      'Gladiator',
      'Maksimus Dekimus Meridijus, odan rimski general, izdajom korumpiranog cara Komoda, koji mu ubija porodicu i prodaje ga u ropstvo. Kao gladijator, Maksimus se uzdiže kroz rangove Koloseuma, pokretan osvetom i nadom da obnovi čast Rima. Ridli Skotov epik kombinuje intenzivnu akciju, emocionalnu dubinu i historijsku veličanstvenost u priči o hrabrosti, pravdi i trajnom ljudskom duhu.',
      'https://via.placeholder.com/200x300?text=Gladiator',
      17.99
    ),
    new Movie(
      'Titanic',
      '1912. godine, na nesretnom brodu RMS Titanic, mladi umjetnik Džek Dovens osvaja kartu za putovanje u partiji pokera i ukrcava se na "nepotopivi" brod. Tamo upoznaje Rozu, mladu ženu iz visokog društva zarobljenu u neželjenom zaručništvu. Njihova strastvena ljubav cvjeta preko klasnih linija — ali testira se kada brod udari u greben. Džejms Kameronov epik romansa kombinuje historijsku dramu, zapanjujuće vizije i emocionalnu snagu, čineći ga jednim od najomiljenijih filmova svih vremena.',
      'https://via.placeholder.com/200x300?text=Titanic',
      19.99
    ),
    new Movie(
      'Jurassic Park',
      'Milijarder Džon Hemond poziva naučnike na udaljeni otok gdje je stvorio tematski park ispunjen kloniranim dinosaurima. Na početku, čudi prevladava — ali kada sistemi za sigurnost otkazuju, dinosauri pobjegnu, pretvarajući park u noćnu moru. Stiven Spilbergov prelomni spoj naučne fantastike, napetosti i divljenja istražuje opasnosti nekontrolisane ambicije i etiku genetskog inženjeringa. Značajan u vizuelnim efektima i pričanju, Jurasički park ostaje uzbudljiva avantura za sve uzraste.',
      'https://via.placeholder.com/200x300?text=Jurassic+Park',
      15.49
    ),
    new Movie(
      'The Lion King',
      'Mladi lav princa Simba osuđen je da vlada Zemljama ponosa, ali nakon tragične izdaje svog strica Skara, bježi u izgnanstvo. Pod vodstvom boje boje prijatelja — Timona, Pumbeea i Rafikija — Simba mora suočiti prošlost i ponovo zauzeti pravo mjesto kao kralj. Sa nezaboravnom muzikom, sjajnom animacijom i vječnim temama odgovornosti, gubitka i odrastanja, Kralj lavova je klasičan Disney film koji rezonira kroz generacije.',
      'https://via.placeholder.com/200x300?text=Lion+King',
      14.99
    ),
    new Movie(
      'Avatar',
      'U sredini 22. stoljeća, paraplegični mornar Džejk Sali poslan je na vanzemaljski svijet Pandoru, gdje ljudi rudaruju vrijedan mineral dok se sukobljavaju s domorodačkim Na’vijima. Kroz avatar tijelo, Džejk se integrira s Na’vijima, zaljubljuje se u ratnicu Nejtriju i na kraju bira da brani njihov način života. Džejms Kameronov vizuelno revolucionarni film kombinuje ekološke teme, epiku akcije i duhovnu dubinu u filmskom iskustvu koje je potisnulo granice 3D filma.',
      'https://via.placeholder.com/200x300?text=Avatar',
      22.99
    ),
    new Movie(
      'The Lord of the Rings: The Fellowship of the Ring',
      'U mitološkom svijetu prijeti povratak Tamnog gospodara Saurona, mladi hobit Frodo Bagins nasljeđuje moćan prsten koji može porobiti Srednju zemlju. Zaputi se na opasno putovanje s družinom pratitelja — vilenjaka, patuljaka, ljudi i čarobnjaka — kako bi uništio Prsten u vatrama brda Doma. Piter Džeksonova adaptacija Dž.R.R. Tolkienove epopeje kombinuje veliku avanturu, duboku mitologiju i emotivnu priču u vječnom fantastičnom filmu.',
      'https://via.placeholder.com/200x300?text=Fellowship',
      20.99
    ),
    new Movie(
      'Spirited Away',
      'Desetogodišnja Čihiro zalutava u misteriozni svijet duhova dok se seli u novi grad. Njeni roditelji pretvoreni su u svinje, a ona mora raditi u kupaonicu za duhove kako bi preživjela i pronašla način da ih oslobodi. Majstorski rad studija Džibli pun je čudnih bića, emocionalne dubine i tema identiteta, hrabrosti i odrastanja. Univerzalno hvaljen, Otmučeni je osvojio Oskara za najbolji animirani film i ostaje vrhunac animirane priče.',
      'https://via.placeholder.com/200x300?text=Spirited+Away',
      16.49
    ),
    new Movie(
      'The Silence of the Lambs',
      'FBI pripravnica Klarič Starling traži pomoć zatvorenog kanibala i psihijatra dr. Hanibala Lektera kako bi uhvatila drugog serijskog ubice, "Bafalo Bila". Dok istražuje um ubice, mora istovremeno navigirati kroz Lekterov smrtonosni intelekt i psihološke igre. Džonatan Demov napet, atmosferični triler rijetki je film koji osvaja svih pet glavnih Oskara, kombinujući horor, krimi i duboku karaktersku studiju u zapanjujućoj priči.',
      'https://via.placeholder.com/200x300?text=Silence+Lambs',
      15.99
    ),
    new Movie(
      'Eternal Sunshine of the Spotless Mind',
      'Nakon bolne rastave, Džoel otkriva da je njegova bivša djevojka Klimentina izbrisala sve uspomene na njihov odnos koristeći radikalnu proceduru. U odgovor, on podvrgava istom postupku — ali dok mu uspomene blijede, pokušava sakriti nju u kutovima svog uma. Čarli Kaufmanov surrealan, emotivno bogat film istražuje ljubav, gubitak i bol zaboravljanja, kombinujući naučnu fantastiku s poetskom romansom u jedinstvenom filmskom iskustvu.',
      'https://via.placeholder.com/200x300?text=Eternal+Sunshine',
      14.49
    ),
    new Movie(
      'Mad Max: Fury Road',
      'U post-apokaliptičnom pustinjskom svijetu, Maks Rokatanski zarobljen je od strane tiranskog Immortan Džoija. Spaja se s Furiosom, koja pokušava pobjeći s pet žena Džoija da pronađe legendarne bezbjedno utočište. Ono što slijedi je neumoljiva, visoko-oktanska potjera kroz pustinju, ispunjena stuntsima, vizuelnim inovacijama i feminističkim temama. Džordž Millerov akcijski majstor djelo slavi praktične efekte, učinkovitost priče i čistu intenzivnost.',
      'https://via.placeholder.com/200x300?text=Mad+Max',
      18.49
    ),
    new Movie(
      'La La Land',
      'Ambiciozna glumica Mia i jazz-muzičar Sebastijan upoznaju se i zaljubljuju u Los Anđelesu, gradu snova i slomljenih nada. Dok ih karijere vuku u različitim pravcima, moraju odabrati između ljubavi i ambicije. Demejn Čazelov živahnopljavi mjuzikl počastuje klasični Hollywood dok donosi modernu, gorču priču o strasti, žrtvi i onome što je moglo biti.',
      'https://via.placeholder.com/200x300?text=La+La+Land',
      17.99
    ),
    new Movie(
      'Get Out',
      'Kris, mladi crnac, posjećuje imanje bijele djevojke za vikend. Na početku, porodica izgleda previše prijateljski — ali njihovo ponašanje postaje sve više uznemirujuće. Džordan Piblov redateljski debi kombinuje horor, satire i društvenu kritiku u zapanjujućoj istrazi rasizma i identiteta. Kritički i komercijalni uspjeh, Get Out je preobrazio žanr horora i osvojio Oskara za najbolji originalni scenario.',
      'https://via.placeholder.com/200x300?text=Get+Out',
      16.99
    ),
    new Movie(
      'Dune',
      'U dalekoj budućnosti, mladi Pol Atrejdes rođen je u plemićkoj porodici kojoj je poverena vladavina opasnog pustinjskog planeta Arakis, jedinog izvora najvrednije supstance u svemiru: začina. Kako politička izdaja vodi u rat, Pol mora preživjeti u pustinji, domorodački narod Freman i vizije moguće budućnosti. Denis Villeneov adaptacija Frank Herbetove novele vizuelno je zapanjujuća, epika SF žanra o moći, sudbini i opstanku.',
      'https://via.placeholder.com/200x300?text=Dune',
      21.99
    )
  ];
}