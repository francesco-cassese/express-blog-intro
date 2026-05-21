# Express Blog Intro 🚀

Il punto di partenza per la creazione di un blog personale basato su Node.js ed Express. Questo progetto nasce come esercizio didattico per muovere i primi passi nella creazione di server web, gestione delle rotte, configurazione degli asset statici e formattazione dei dati in formato JSON.

---

## 🛠️ Tecnologie Utilizzate

* **Node.js:** Ambiente di runtime JavaScript lato server.
* **Express.js:** Framework minimalista e flessibile per gestire rotte e risorse HTTP.
* **Postman:** Strumento utilizzato per il testing delle API e delle risposte del server.

---

## 📐 Struttura e Funzionalità

L'applicazione configura un server HTTP locale e implementa le seguenti caratteristiche:

* **Rotta Principale (`/`):** Risponde con un testo semplice: *"Server del mio blog"*.
* **Rotta Bacheca (`/bacheca`):** Restituisce un oggetto JSON contenente la lista dei 5 post completi (importati dal file dei dati). Ogni post è strutturato con:
    * `titolo` (Stringa)
    * `contenuto` (Stringa)
    * `immagine` (Stringa contenente il percorso del file statico)
    * `tags` (Array di stringhe)
* **Asset Statici:** Configurazione del middleware per servire i file statici direttamente dalla cartella pubblica.

---

## 📂 Struttura del Progetto

```text
EXPRESS-BLOG-INTRO/
├── node_modules/           # Dipendenze del progetto installate via pnpm
├── public/                 # Cartella per gli asset statici (accessibili direttamente)
│   ├── javascript_base.jpg
│   ├── meditazione_mindfulness...
│   ├── pizza_casa.jpg
│   ├── trekking_dolomiti.jpg
│   └── viaggio_zaino.jpg
├── .env                    # Variabili di ambiente locali (es. PORT)
├── .env.example            # File di esempio per la configurazione dell'ambiente
├── .gitignore              # Esclusione di file sensibili e node_modules da Git
├── bachecaPost.js          # Array contenente i dati dei 5 post del blog
├── main.js                 # Entry point dell'applicazione (Configurazione Express e rotte)
├── package.json            # Manifest del progetto, script e dipendenze
└── pnpm-lock.yaml          # File di lock per il tracciamento rigoroso delle dipendenze
```
## 🏃‍♂️ Come Avviare il Progetto in Locale

### 1. Clona la repository

```
git clone https://github.com/francesco-cassese/express-blog-intro.git
cd express-blog-intro
```

### 2. Configura le variabili di ambiente

Crea un file `.env` nella root del progetto.

Contenuto esempio:
```
SERVER_PORT=3000
```
---

### 3. Installa le dipendenze

Questo progetto utilizza pnpm:

```
pnpm install
```

---

### 4. Avvia il server

```
node main.js
```



## 🧪 Testing con Postman

Per verificare il funzionamento:

- Avvia il server in locale
- Usa Postman con richieste GET

### Endpoint (porta 3000)

- Home  
  http://localhost:3000/  
  → "Server del mio blog"

- Bacheca  
  http://localhost:3000/bacheca  
  → JSON con i post

- Risorsa statica  
  http://localhost:3000/javascript_base.jpg  
  → immagine servita correttamente (senza /public)