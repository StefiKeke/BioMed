BIOMED — Admitere Biologie
==========================

CE PRIMEȘTI
- Interfață responsive în HTML + CSS + JavaScript.
- Ecran Acasă, Rezolvă grile și Progresul meu.
- Feedback după validare: ✓ verde pentru răspunsul corect și × roșu pentru răspunsul greșit.
- Explicație pentru fiecare grilă demonstrativă.
- Statistici și istoric salvate în browser prin localStorage.
- schema.sql cu o structură SQL de pornire pentru un backend real.

CUM PORNEȘTI
1. Dezarhivează folderul.
2. Deschide index.html în Chrome, Edge sau Firefox.
3. Intră la „Rezolvă grile” și selectează o variantă.
4. Apasă „Validează răspunsul”. Vei vedea imediat feedbackul.
Nu este necesară instalarea unui server pentru demonstrația locală.

DESPRE SQL
Browserul nu se conectează direct și în siguranță la o bază de date SQL.
De aceea, schema.sql este inclusă ca structură pentru o etapă ulterioară de backend
(de exemplu PHP + SQLite/MySQL, Node.js + SQLite/PostgreSQL etc.). Versiunea curentă
salvează progresul local, pe dispozitivul și browserul în care o folosești.

CUM ADAUGI GRILE
Fișierul app.js conține const demoQuestions = [...]. Adaugă obiecte în același format:
{
  id: "bio-006",
  topic: "ANATOMIE",
  text: "Enunțul întrebării...",
  options: ["Varianta A", "Varianta B", "Varianta C", "Varianta D"],
  correct: 2,
  explanation: "Explicația răspunsului corect."
}
Atenție: correct este indexul variantei corecte, începând de la 0:
0 = A, 1 = B, 2 = C, 3 = D.

IMPORTANT
Setul inclus este doar demonstrativ și conține cinci întrebări originale de exemplu.
Nu conține toate grilele oficiale de admitere de la Timișoara. Dacă îmi trimiți
documentele/fișierele cu grilele pe care ai dreptul să le folosești, te pot ajuta
să le organizezi și să le transformi într-o bancă de întrebări importabilă.
