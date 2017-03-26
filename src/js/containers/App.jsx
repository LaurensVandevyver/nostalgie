import React, {Component} from 'react';

import Slider from '../components/Slider';

class App extends Component {

  // de kanalen in de state zetten omdat die alsmaar veranderen
  // dit is het enige dat in de state moet
  state = {
    value: 0
  }

  handleChangeYear = value => {
    this.setState({value: value});
  }

  render() {

    const {value} = this.state;

    // inline style via style object
    const style = {
      backgroundImage: `url(../assets/img/caroussel${value}.jpg)`
    };

    return (

      // inline style adhv style=... instellen
      // onChangeChannel wordt meegegeven als prop met als value de func die hierboven staat -> STATE SETTEN
      // deze functie wordt dus elke keer uitgevoerd als handleChangeChannel in het slider component uitgevoerd wordt


        <section>

          <header>
            <div className='druip1'></div>
            <div className='druip2'></div>
            <section className='header-wrapper'>
              <cite className='introcite'>“Nico, van fotomodel in wit broekpak <br /> tot verslaafde zwerfster”</cite>
              <div className='nico-headerimage'></div>
            </section>
            <div className='druip3'></div>
          </header>

          <main>

            <section className='content'>

              <article className='articlestyle margin intro'>
                <strong>Christa Päffgen</strong>, beter bekend onder haar artiestennaam <strong>Nico</strong>, was een <strong>Duits fotomodel, actrice en zangeres.</strong> Nico was één van de fascinerendste en meest mysterieuze vrouwen van de multimedia revolutie uit de zestiger jaren en lang daarna, tot nu toe.
                  <br /><br />
                  Ze werd geboren in <strong>1938</strong>, in het door de nazis geregeerde <strong>Duitsland</strong>. In 1960 werd ze een van de bekende <strong>Warhol</strong> superstars en zong ze vocals voor het debut album van <strong>the Velvet Undeground</strong> en haar werk als solo artieste. Ze acteerde ook in enkele films zoals Federico Fellini’s <strong>La Dolce Vita</strong> (1960) en Andy Warhol’s <strong>Chelsea Girls</strong> (1966).
              </article>

            </section>

              <div className='nico-image-1'></div>

            <section className='content'>

              <div className='modelsection'>

              <article className='articlestyle margin model'>
                De anekdotes van de tante waarbij ze inwoonde tijdens de oorlog en die de jonge Christa beschrijft als een prinses die er altijd uitzag om door een ringetje te halen, worden in de docu gecontrasteerd met beelden van de laatste levensjaren van Nico. <span className='quote'>De blonde engel veranderde in een junk met zwartgeverfde haren en een rot gebit.</span> De kracht van Ofteringers film ligt precies in het contrast tussen de sterk uiteenlopende percepties van mensen uit de omgeving van de zangeres. Ze beschrijven haar stuk voor stuk als een <strong>vat vol tegenstellingen</strong>:
              </article>

              <cite className='modelcite'>
                &quot;Van fotomodel in wit broekpak tot verslaafde
                zwerfster, van verlegen meisje tot succubus met doodsverachting, van een warme en erotische vrouw tot een kille ijskoningin.&quot;
              </cite>

              <article className='articlestyle margin model'>
                Een andere, eerder cynische autoriteit is James Young, de biograaf die als student in de band zat die Nico begeleidde en die stuitende herinneringen ophaalt aan het touren met <strong>‘the queen of the bad girls’</strong>. <span className='quote'>Young schetst haar als een gewelddadige figuur die in de tourbus heroïne in haar rectum verstopte voor de douane, als een ‘failure’. </span>Ofteringer is duidelijk een fan, terwijl Young als biograaf veeleer uit lijkt op demythologisering. Dergelijke tegengestelde mechanismen treden wel vaker tegelijkertijd in werking zodra de nalatenschap van een iconische figuur in kaart moet worden gebracht.
              </article>

              <article className='articlestyle margin model'>
                <span className='quote'>Nico werd ontdekt als model op haar zestiende, toen ze nog verkoopster was in een lingeriezaak. </span>De fotograaf die haar in <strong>1954</strong> vanuit de schaduw onder het licht bracht, was Herbert Tobias. Hij bedacht de <strong>artiestennaam Nico</strong>, naar zijn voormalige geliefde, de <strong>filmregisseur Nikos Papatakis</strong>. De naam bleek een programma te bevatten, de voorbode van een tweeslachtigheid die het imago van Nico zou gaan domineren. Haar rijzige gestalte gehuld in pantalon en <span className='quote'>haar zware, lage stem maakten indruk, zowel binnen de modewereld als in de artistieke omgeving waarin ze omstreeks 1965 belandde. </span> In beide werelden stond het <strong>androgyne</strong> immers voor <strong>chique, enigmatisch en deviant</strong>. Denk maar aan het succes van supermodel Twiggy en de alter ego’s van David Bowie, die hun succes (net iets later dan Nico) precies mede te danken hadden aan hun geconstrueerde genderbender-esthetiek.
              </article>

            </div>

            </section>

            <section className='gallery'>
              <div className='react-mount1' style={style}>
                <Slider value={parseInt(value)} onChangeYear={this.handleChangeYear} />
              </div>
            </section>

            <section className='content'>

              <article className='articlestyle margin model2'>
                Nico’s imago lag helemaal in de lijn van het onconventionele uiterlijk waar filmsterren als Marlene Dietrich en Louise Brooks al veel eerder mee koketteerden. Bijzonder was echter dat ze op het <strong>toneel</strong> verscheen tijdens de <strong>jaren 1950</strong>, toen van sterren iets geheel anders werd verwacht en de androgyne look heel even nog niet (opnieuw) omarmd werd door het publiek. Toen ze acteerlessen volgde aan de befaamde <strong>Actors Studio van Lee Strasberg</strong>, deelde ze de schoolbanken met onder meer Marilyn Monroe, en werd ze geconfronteerd met de verwachtingen van een publiek dat opgegroeid was met het fenomeen van de blonde bombshell à la Jean Harlow.
              </article>

              <article className='articlestyle margin model2 left'>
                De heel wat stuggere Nico slaagde er echter in na enkele reclamespotjes en verwaarloosbare figurantenrollen gecast te worden door de grote Italiaanse regisseur Federico Fellini. Haar passage onder haar eigen naam in <strong>La dolce vita</strong> (1960) heeft weinig om het lijf, maar toch ging haar ijle presentie naast de voluptueuze Anita Ekberg en de legendarische Marcello Mastroianni niet onopgemerkt voorbij. Dichter bij het grote filmpubliek zou Nico nooit komen.
              </article>

            </section>

            <div className='black-velvet-header'></div>

            <section className='content'>
              <article className='underground minus'>
                <h2>The Velvet Underground</h2>
                <p className='articlestyle'>
                  Het was de Amerikaanse pop artist <strong>Andy Warhol</strong> die voor de actrice een andere rol in gedachten had: <span className='quote'>die van levend kunstwerk, wandelend totaalconcept, dysfunctionele godin oftewel de superstar.</span> In boutades sprak Warhol zijn gevoel van verveling voor de kunstwereld uit en zijn verlangen om een rockband op te richten. Nico werd in eerste instantie neergepoot met een tamboerijn, <span className='quote'>als decoratief element naast de gedrogeerde Lou Reed en het wonderkind uit Wales, John Cale.</span> Nico voelde zich mateloos aangetrokken door de factory waar Warhol bizarre persoonlijkheden, fotomodellen met een habit, en drag queens met sterallures verzamelde om te schitteren in zijn anti-cinema met lange takes en soms slaapverwekkende anekdotiek.
                </p>
              </article>

              <cite className='undergroundcite'>
                Levend kunstwerk, wandelend totaalconcept,
                dysfunctionele godin oftewel de superstar.
              </cite>

              <article className='undergroundsection'>
                <div className='react-mount2'>

                </div>
                  <p className='articlestyle tekstblok'>
                    Hij choqueerde het publiek met eindeloze close-ups van vrijende, etende of slapende mensen en lichtte een tipje van de sluier van het leven in het <strong>Chelsea Hotel</strong>, een destijds gemarginaliseerd opvangtehuis voor rocksterren, omgeven door mythes en criminaliteit. Toen zong ze vocale voor <strong>The Velvet Underground</strong>. The Velvet Underground was een <strong>experimentele rockgroep</strong> uit <strong>New York</strong> die actief was <strong>van 1964 tot 1973</strong>. Hoewel de groep destijds geen noemenswaardig commercieel succes boekte, geldt The Velvet Underground tegenwoordig als een van de meest vooruitstrevende en invloedrijkste rockgroepen aller tijden. Het album waar ze voor zong was het debetalbum: <span className='pink'><strong>The Velvet Underground & Nico</strong></span>.
                  </p>
              </article>
            </section>

            <div className='nico-image-2'></div>

            <section className='content'>
              <article className='undergroundsection'>
                <div className='react-mount2'>

                </div>
                <p className='articlestyle undergroundstyle'>Nico werd er tot haar grote genoegen geëxploiteerd, maar ontdekte er ook haar eigen creatieve vermogen. In samenwerking met John Cale die het potentieel van haar unieke stem bijschaafde, kwam het standbeeld tot leven en begon ze te werken aan haar eerste solo-album: Chelsea girl. Ze nam liedjes op samen met Cale and Reed en ook met een of andere 16 jarige Jackson Browne die haar ook gezelschap hield tijdens shows. Voor een lange tijd werd niets van haar gehoord, ze spendeerde het grootste deel van haar tijd in Parijs. In het begin van 1974 tekende ze haar contract bij Island. Ze kwam tevoorschijn in een speciaal concert in Londen in het Rainbow Theatre, samen met Kevin Ayers, Cale en Brian Enso. dit resulteerde in een album genoemd naar de datum van het gebeuren: June 1st, 1974. Het jaar hierna had ze vaak discussies in de studie waardoor haar platenlabel haar uiteindelijk in 1975 liet gaan.
                </p>
              </article>

            </section>

            <section className='voorna'>
              <div className='voor voorna-image'></div>
              <div className='na voorna-image'></div>
            </section>

            <section className='black'>
              <article className='articlestyle2 margin darksize'>
                <p className='articlestyle2'>
                  De jaren daarop werd Nico meer aangezogen door het Europese kunstcircuit. Ze ruilde haar Amerikaanse tonge-in-cheek sfeer in voor Europese ernst en diepgang, dit aan de zijde van Franse cineast Philippe Garrel. Hij gaf haar een plaats in hermetische filmgedichten. Hoewel ze eerst vooral muziekaal meewerkte aan The Falconer uit zijn film Le Lit de la Vierge stortte ze zich terug op acteren voor La Cicatrice Intérieure. De soundtrack van de film bevatte heel wat tracks van haar derde album: Desertshore. Dit moet wel het hoogtepunt geweest zijn van haar solo carrière.
                </p>
              </article>

              <article className='solocontainer margin'>
                <div className='react-mount2'>

                </div>
                <cite className='solocite'>
                  Ze had haar entree gemaakt in een donker milieu waar de donkere kant van de menselijke natuur geen pose was maar een filosofische expressie kreeg.
                </cite>
              </article>

              <article className='articlestyle2 margin darksize'>
                <p className='articlestyle2'>
                  Terwijl ze zich op volgende albums stortte zowel op muzikaal vlak als op vlak van stem zwol de mythe rond haar figuur aan. Dit kwam vooral door haar relaties met muzikanten en kunstenaars, haar heroïneverslaving, haar imposante uiterlijk en onvoorspelbaarheid op het podium.
                  <br />
                  Ze maakte amper contact met het publiek tijdens live shows en ze leek af te dalen in een psychotische diepte. Op de eerste rijen van haar concerten bevonden zich de fans die opgemaakt waren net als haar in de hoop de looks van de zangeres te kunnen imiteren. Haar laatste album, Camera Obscura, weerspiegeld de veelzijdigheid van haar imago: tribale percussie werd gecombineerd met eighties synth-arrangementen.
                </p>
              </article>

              <div className='spuit'></div>
            </section>

            <section className='black'>

              <article className='video'>

              </article>

              <article className='articlestyle2 margin darksize'>
                <p className='articlestyle2'>
                  De jaren hierna leefde Nico als een zwerver, ze ging van land naar land en spendeerde de laatste jaren van haar leven in Manchester (Engeland). Op 18 juli 1988, op vakantie op Ibiza samen met haar zoon Ari had ze een hartaanval tijdens haar fietstocht waar ze viel en haar hoofd hard stootte. Ze werd bewusteloos gevonden door een taxi bestuurder die haar naar het ziekenhuis bracht. Volgens de eerste diagnose was ze te lang bloot gesteld aan de warmte. Na de röntgenfoto’s kwam uiteindelijk aan het licht dat ze gestorven is door een hevige hersenbloeding.
                </p> <br /><br />
                <cite className='endcite'>
                  &quot;In the late morning of July 17, 1988, my mother told me she needed to go downtown to buy marijuana. She sat down in front of the mirror and wrapped a black scarf around her head. My mother stared at the mirror and took great care to wrap the scarf appropriately. Down the hill on her bike: &quot;I&apos;ll be back soon.&quot; She left in the early afternoon on the hottest day of the year.&quot;
                  <br /><br /><br />
                  <span className='ari'>– Ari Boulogne</span>
                </cite>
              </article>


            </section>

          </main>

          <footer>

          </footer>

        </section>

    );

  }

}

// elke keer bij elk component exporten
export default App;
