# 🔐 Projet Authentification JWT avec Angular & Node.js (TypeScript)

Ce projet est une application d'authentification complète avec **Angular (frontend)** et **Node.js avec Express + TypeScript (backend)**, utilisant **JWT (JSON Web Token)** pour la sécurisation des sessions.

---

## 🗂️ Structure du projet

```
login_jwt/
├── api/                 # Backend Express + TypeScript
│   ├── server.ts
│   ├── nodemon.json
│   ├── package.json
│   └── ...
├── frontend/            # Application Angular (à créer ou déjà existante)
│   └── ...
```

---

## ✅ Fonctionnalités prévues

- Authentification par email & mot de passe
- Génération de token JWT
- Validation du token sur les routes protégées
- Interaction sécurisée entre Angular et Express
- Architecture MVC (routes, contrôleurs, services)

---

## ⚙️ Étapes réalisées

### 🔧 1. Initialisation du backend

```bash
npm init -y
```

### 🔧 2. Installation des dépendances backend

```bash
npm install express mongoose
npm install -D typescript ts-node nodemon @types/node @types/express
```

### 📁 3. Fichiers de configuration créés

#### `package.json`

```json
"scripts": {
  "dev": "nodemon"
}
```

#### `nodemon.json`

```json
{
  "watch": ["server.ts"],
  "ext": "ts",
  "exec": "ts-node server.ts"
}
```

#### `server.ts`

```ts
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('✅ API TypeScript OK');
});

app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
```

---

## ▶️ Démarrer le backend

```bash
cd api
npm run dev
```

Résultat attendu :

```
[nodemon] starting `ts-node server.ts`
🚀 Serveur démarré sur http://localhost:3000
```

---

## 📦 Stack technique

- **Backend** : Node.js + Express + TypeScript
- **BDD** : MongoDB via Mongoose
- **Outils dev** : nodemon, ts-node
- **Frontend** : Angular (prochainement connecté)
- **Authentification** : JWT (à intégrer)

---

## 🚧 À venir

- Connexion à MongoDB via Mongoose
- Ajout du système de connexion avec `bcrypt` + JWT
- Création de routes sécurisées
- Connexion au frontend Angular
- Intégration complète d’un modèle utilisateur

---
