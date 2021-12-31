const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let sloks = [
    {
        "slok": "When there is an increase in the mode of ignorance, O son of Kuru, darkness, inertia, madness and illusion are manifested.",
    },
    {
        "slok": "Anyone who gives up prescribed duties as troublesome or out of fear of bodily discomfort is said to have renounced in the mode of passion. Such action never leads to the elevation of renunciation.",
    },
    {
        "slok": "This individual soul is unbreakable and insoluble, and can be neither burned nor dried. He is everlasting, present everywhere, unchangeable, immovable and eternally the same.",
    },
    {
        "slok": "I am the Supersoul, O Arjuna, seated in the hearts of all living entities. I am the beginning, the middle and the end of all beings.",
    },
    {
        "slok": "If I did not perform prescribed duties, all these worlds would be put to ruination. I would be the cause of creating unwanted population, and I would thereby destroy the peace of all living beings.",
    },
    {
        "slok": "Everywhere are His hands and legs, His eyes, heads and faces, and He has ears everywhere. In this way the Supersoul exists, pervading everything.",
    },
    {
        "slok": "I am the father of this universe, the mother, the support and the grandsire. I am the object of knowledge, the purifier and the syllable oḿ. I am also the Ṛg, the Sāma and the Yajur Vedas.",
    },
    {
        "slok": "Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to Me.",
    },
    {
        "slok": "O Pārtha, happy are the kṣatriyas to whom such fighting opportunities come unsought, opening for them the doors of the heavenly planets.",
    },
    {
        "slok": "Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion.",
    }
    
];

app.get('/', (req, res) => {
    res.json(sloks);
});

app.get('/slok', (req, res) => {
    let slok = Math.floor(Math.random() * sloks.length);
    res.json(sloks[slok]);
});



app.listen(port, () => console.log(`Sloks app listening on port ${port}!`));