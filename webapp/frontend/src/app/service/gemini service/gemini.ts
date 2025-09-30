import {Injectable} from '@angular/core';
import {GoogleGenerativeAI} from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class Gemini {
  private genAI: GoogleGenerativeAI;

  constructor() {
    // ⚠️ ATTENTION : la clé est exposée si tu mets en dur !
    this.genAI = new GoogleGenerativeAI("AIzaSyC8AYHcWe5svrMgAbxuS6B0ytJm_DrAGKU");
  }

 async generateContentReply(subject: string, body: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
Rédige le contenu pour une réponse adaptée et renvoi moi une seule proposition. juste le contenu
Voici le mail reçu :


Sujet : ${subject}
Contenu : ${body}


    `;
   const result = await model.generateContent(prompt);
   // console.log(result.response.text())
   return result.response.text();
  }
  async generateSubjectReply(subject: string, body: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({model: "gemini-2.5-flash"});

    const prompt = `
Rédige un objet pour une réponse adaptée et renvoie-moi UNE SEULE proposition.
Juste l'objet (pas de texte supplémentaire).
Voici le mail reçu :

Sujet : ${subject}
Contenu : ${body}
  `;

    const result = await model.generateContent(prompt);

    // 🔥 Extraire uniquement le texte
    return result.response.text();
  }
}
