# Webmail & n8n Automation

## 📌 Description
Ce projet combine **développement web** et **automatisation avec n8n**.  
Objectifs :
- Consulter les e-mails reçus dans la journée
- Générer un résumé automatique avec IA
- Répondre aux e-mails via interface web (manuel ou auto)

## 📂 Structure
```plaintext
webmail-n8n-automation/
│
├── webapp/              # Interface web (frontend)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── n8n-workflow/        # Workflows n8n exportés
│   └── workflow.json
│
├── docs/                # Documentation et rapport Markdown
│   └── REPORT.md
│
└── README.md
```

## 🚀 Démarrage
- Lancer n8n en local : `docker run -it --rm -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n`
- Développer le frontend dans `webapp/`
- Exporter les workflows n8n dans `n8n-workflow/`

## 👥 Collaborateurs
- lilgar77
- Holo795
