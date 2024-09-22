import { getData } from './lib/data';
import Navbar from './components/Navbar';
import { FaReact, FaMobileAlt, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Importa le icone
import Link from 'next/link';
import{ urlFor }from './lib/sanityImage';
import Head from 'next/head';
import ContactForm from './components/ContactForm';

export default async function Home() {
  const data = await getData();

  return (
    <div className="h-full min-h-screen bg-gray-50">
      
      <Navbar data={data} />
      <header
        className="shadow-2xl w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative gap-6"
        style={{ backgroundImage: `url(${urlFor(data.backimage6.asset)})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10">
          <h1 className="text-6xl font-bold text-white">Benvenuto su <span className='text-red-600'> AZWS</span>  Web Studio</h1>
          <p className="text-2xl text-white mt-4">Realizzo siti web e app mobile su misura per te.</p>
          
          <div className='flex flex-row items-center justify-center mt-6'>
          <div className='relative left-6 bg-cover bg-center w-56 h-48' style={{ backgroundImage: `url(${urlFor(data.backimage2.asset)})` }}></div>
          <a
            href="#contact"
            className="shadow-xl bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition"
          >
            Contattami
          </a>
          </div>
          
        </div>
      </header>
      
      <main className="container mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Chi Sono</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
  Sono <span className="font-bold">Antonio Zuccon Ghiotto</span>, un <span className="font-bold">web developer</span> e <span className="font-bold">web designer</span> con sede a <span className="font-bold">Vicenza</span>, appassionato di tecnologie moderne e con un forte orientamento verso l'<span className="font-bold">innovazione digitale</span>. Specializzato nella creazione di <span className="font-bold">siti web</span> e <span className="font-bold">applicazioni mobile</span>, utilizzo framework all'avanguardia come <span className="font-bold">React</span>, <span className="font-bold">Next.js</span> ed <span className="font-bold">Expo</span> per garantire soluzioni performanti, scalabili e intuitive. <br /><br />
  Il mio approccio non si ferma al frontend: nel <span className="font-bold">backend</span>, sfrutto la potenza di <span className="font-bold">Node.js</span> e integro database robusti come <span className="font-bold">MongoDB</span>, o gestisco i contenuti attraverso CMS flessibili come <span className="font-bold">Sanity</span>. <br /><br />
  Grazie alla mia esperienza in una vasta gamma di progetti, sono in grado di adattarmi alle esigenze specifiche dei miei clienti, fornendo soluzioni su misura che rispecchiano le loro aspettative. La mia priorità è creare <span className="font-bold">prodotti digitali</span> che combinino <span className="font-bold">design</span> accattivante, <span className="font-bold">funzionalità</span> impeccabili e una <span className="font-bold">user experience</span> ottimale, il tutto mantenendo una forte attenzione ai dettagli e alla qualità del <span className="font-bold">codice</span>. <br /><br />
  Sia che tu abbia bisogno di un <span className="font-bold">sito web aziendale</span>, di un'<span className="font-bold">applicazione mobile</span>, o di una <span className="font-bold">consulenza tecnica</span>, il mio obiettivo è sempre quello di offrire risultati che facciano la differenza, contribuendo al successo dei tuoi progetti.
</p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Cosa Posso Fare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <FaReact className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Siti Web Responsive</h3>
              <p className="text-gray-700">Creo siti web user-friendly utilizzando React e Next.js per garantire prestazioni ottimali su ogni dispositivo.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <FaMobileAlt className="text-6xl text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">App Mobile</h3>
              <p className="text-gray-700">Sviluppo applicazioni mobile cross-platform utilizzando Expo, garantendo un'ottima esperienza utente.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <FaNodeJs className="text-6xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Backend Scalabile</h3>
              <p className="text-gray-700">Implemento soluzioni backend con Node.js, progettando API scalabili per applicazioni moderne.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <FaDatabase className="text-6xl text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Gestione Database</h3>
              <p className="text-gray-700">Integrazione e gestione di database NoSQL come MongoDB e Sanity CMS per soluzioni dinamiche.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <FaReact className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Consulenza Tecnica</h3>
              <p className="text-gray-700">Offro consulenze su progetti tecnici, aiutando le aziende a scegliere la tecnologia giusta per il loro successo.</p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <Link href="/projects">
            <div className="text-2xl font-bold text-red-600 hover:underline">
              Guarda i miei progetti
            </div>
          </Link>
        </section>

        <ContactForm data={data} />
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-700">
          &copy; {new Date().getFullYear()} Sede legale: Via N. Sauro, 34 - 36100 Vicenza - P.IVA: 04545880249 - email: webstudio.azws@gmail.com - tel: +393493238483
        </div>
      </footer>
    </div>
  );
}
