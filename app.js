
 const demoQuestions = [
  {
    id: "bio-001",
    topic: "Introducere în anatomie și fiziologie",
    text: "1. Alegeți afirmațiile false dintre cele de mai jos:",
    options: [
      "A. Pentru a înțelege corpul uman este esențială cunoașterea anatomiei, a fiziologiei și a subdiviziunilor acestora",
      "B. „Teoria celulară” reprezintă o subdiviziune a anatomiei macroscopice",
      "C. Anatomia macroscopică studiază structurile corpului vizibile fără ajutorul microscopului",
      "D. Studiul celulelor și al funcțiilor acestora se numeşte artrologie",
      "E. Anatomia dezvoltării se ocupă cu dezvoltarea individului de la stadiul de ou fecundat până la organismul adult"
    ],
    correct: [1, 3],
    explanation: "Conform variantelor introduse, B și D sunt afirmațiile false."
  },
  {
    id: "bio-002",
    topic: "Introducere în anatomie și fiziologie",
    text: "2. Selectați asocierile corecte:",
    options: [
      "A. Citologia - studiul celulelor, inclusiv al funcțiilor acestora.",
      "B. Histologia - studiul dezvoltării individului de la stadiul de ou fecundat până la cel de organism adult",
      "C. Anatomia macroscopică - studiul acelor structuri ale corpului care sunt vizibile fără microscop",
      "D. Fiziologia reproducerii - studiul organelor reproducătoare şi al modalităților de reproducere",
      "E. Neurofiziologie - subdiviziune a anatomiei macroscopice."
    ],
    correct: [0, 2, 3],
    explanation: "A, C, D sunt afirmațiile corecte."
  },
  {
    id: "bio-003",
    topic: "Introducere în anatomie și fiziologie",
    text: "3. Referitor la histologie, sunt false următoarele afirmații:",
    options: [
      "A. Reprezintă studiul structurilor corpului, cu ajutorul unei lupe sau cu ochiul liber.",
      "B. Se ocupă cu studiul perioadei embrionare (primele patru luni de dezvoltare intrauterină).",
      "C. Realizează studiul structurilor corpului cu ajutorul unui microscop.",
      "D. Este o subdiviziune a anatomiei, denumită şi anatomie microscopică.",
      "E. Descrie planurile care traversează corpul uman, oferind puncte de reper pentru organele acestuia."
    ],
    correct: [0, 1, 4],
    explanation: "A, B și E sunt false."
  },
  {
    id: "bio-004",
    topic: "Introducere în anatomie și fiziologie",
    text: "4. Selectați afirmațiile adevărate referitoare la subdiviziuni ale unor știinţe care studiază corpul uman:",
    options: [
      "A. Citologia este una dintre ramurile fiziologiei şi reprezintă studiul celulelor",
      "B. Fiziologia renală este o subdiviziune a histologiei şi studiază sistemul excretor",
      "C. Ramura anatomiei care studiază articulațiile se numeşte artrologie",
      "D. Anatomia reproducerii reprezintă studiul organelor reproducătoare (mai puțin modalităților de reproducere)",
      "E. Neurofiziologia studiază funcţiile sistemului nervos"
    ],
    correct: [2, 4],
    explanation: "C și E sunt afirmațiile adevărate."
  },
  {
    id: "bio-005",
    topic: "Introducere în anatomie și fiziologie",
    text: "5. Selectați asocierile greşite privind componentele majore şi rolul fiziologic al sistemelor de organe:",
    options: [
      "A. Scheletul - oase, tendoane, muşchi striați şi netezi - nu contribuie la protecția corpului, doar la susținerea acestuia",
      "B. Tubul digestiv - cavitate orală, glande salivare, esofag, stomac, intestin, ficat, pancreas - sinteza alimentelor şi absorbția nutrienților insolubili din hrana ingerată",
      "C. Sistemul urinar - rinichi, vezică urinară şi căi urinare asociate - îndepărtează produşii de catabolism din sânge",
      "D. Sistemul tegumentar - piele, păr, unghii - rol metabolic în sinteza vitaminelor din grupul B",
      "E. Sistemul endocrin - hipofiza, glandele suprarenale, tiroida şi glandele paratiroide - coordonează şi integrează chimic activitățile organismului"
    ],
    correct: [0, 1, 3],
    explanation: "Asocierile A, B și D sunt greșite."
  },
  {
    id: "bio-006",
    topic: "Introducere în anatomie și fiziologie",
    text: "6. Alegeți dintre cele de mai jos răspunsurile la care ambele afirmații sunt adevărate:",
    options: [
      "A. Funcția sistemului excretor este obiectul de studiu al fiziologiei renale. Neurofiziologia studiază funcția nervoasă",
      "B. Funcţiile celulei sunt studiate în cadrul histologiei. Sistemul excretor şi funcţiile sale sunt studiate în cadrul fiziologiei renale",
      "C. Fiziologia reproducerii studiază sistemul excretor şi funcțiile acestuia. Histologia mai este denumită şi anatomie microscopică",
      "D. Fiziologia reproducerii studiază organele reproducătoare şi modalităţile de reproducere. Funcţia sistemului nervos este obiectul de studiu al unei ramuri a fiziologiei numită neurofiziologie",
      "E. Funcțiile corpului uman depind de structura sa. Anatomia are ca subdiviziuni anatomia macroscopică, anatomia microscopică, dar nu şi citologia (considerată subdiviziune a fiziologiei)"
    ],
    correct: [0, 3],
    explanation: "A și D conțin ambele afirmații adevărate."
  },
  {
    id: "bio-007",
    topic: "Introducere în anatomie și fiziologie",
    text: "7. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. La cel mai simplu nivel de organizare, organismul este alcătuit din particule electronomicroscopice de materie numite molecule şi macromolecule",
      "B. Atomii se combină între ei, formând molecule (simple - apa, dioxidul de carbon sau complexe - proteinele)",
      "C. Dintre moleculele cu importanță redusă pentru corpul uman fac parte apa, oxigenul, dioxidul de carbon şi glucoza",
      "D. Asocierea mai multor molecule între ele dă naştere următorului nivel de organizare, organul",
      "E. Celula este unitatea fundamentală a organismelor vii şi reprezintă un nivel inferior de organizare celui tisular (țesutul)"
    ],
    correct: [1],
    explanation: "B este afirmația adevărată."
  },
  {
    id: "bio-008",
    topic: "Introducere în anatomie și fiziologie",
    text: "8. Alegeți afirmațiile adevărate dintre cele enumerate mai jos:",
    options: [
      "A. Glucidele, proteinele, lipidele şi apa sunt exemple tipice pentru cel mai simplu nivel de organizare structurală a organismului, în care componentele sunt reprezentate exclusiv de atomi şi de ioni",
      "B. Glucidele, proteinele şi lipidele sunt molecule organice care intră în alcătuirea corpului uman",
      "C. La cel mai complex nivel de organizare, corpul uman este compus din celule",
      "D. Atomii de oxigen, carbon sau azot se regăsesc în corpul uman, în combinații denumite molecule",
      "E. Celula conține structuri interstițiale cum sunt nucleul, mitocondriile, ribozomii, lizozomii"
    ],
    correct: [1, 3],
    explanation: "B și D sunt afirmațiile adevărate."
  },
  {
    id: "bio-009",
    topic: "Introducere în anatomie și fiziologie",
    text: "9. Referitor la celulă, următoarele afirmații sunt false:",
    options: [
      "A. Unitatea fundamentală a organismului uman este celula eucariotă",
      "B. Celula conține lizozomii - particule electronomicroscopice de materie, implicate în sintezele proteice",
      "C. În organism, celulele cu structură similară şi care îndeplinesc aceeaşi funcție formează un ţesut",
      "D. Celulele musculare striate scheletice, cele musculare striate cardiace şi cele musculare netede au compoziție şi structură identice",
      "E. Neuronii, fibrele musculare striate cardiace şi trombocitele sunt exemple de celule care prezintă un singur nucleu, situat periferic"
    ],
    correct: [1, 3, 4],
    explanation: "B, D și E sunt false."
  },
  {
    id: "bio-010",
    topic: "Introducere în anatomie și fiziologie",
    text: "10. Selectați afirmațiile false cu privire la țesuturi:",
    options: [
      "A. Un grup de celule diferite ca structură şi organizare vor avea întotdeauna aceeaşi funcţie şi vor forma un ţesut",
      "B. Tesutul reprezintă un grup de celule cu structură similară, care funcționează împreună și îndeplinesc aceeaşi funcţie",
      "C. Organismul uman include patru tipuri principale de țesuturi: țesutul conjunctiv propriuzis, ţesutul muscular neted, țesutul epitelial şi țesutul nervos",
      "D. Un organ este compus din două sau mai multe tipuri diferite de țesuturi",
      "E. Nivelul de organizare imediat superior țesuturilor este sistemul de organe"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-011",
    topic: "Introducere în anatomie și fiziologie",
    text: "11. Stabiliți care dintre răspunsurile de mai jos conțin prima și a treia afirmație adevărate, iar cea de a doua falsă:",
    options: [
      "A. Tipul de țesut din care face parte sângele este țesutul conjunctiv. Ţesutul osos spongios nu aparţine țesuturilor conjunctive. Celulele care protejează neuronii şi aparţin ţesutului nervos sunt denumite celule gliale",
      "B. Organismul uman cuprinde patru tipuri principale de țesuturi: epitelial, conjunctiv muscular şi nervos. Epidermul din structura pielii este un țesut epitelial. Nivelul de organizare imediat superior celui reprezentat de celulă este țesutul",
      "C. Un organ funcţionează ca un centru anatomic şi fiziologic specializat pentru o anumită activitate. Intestinul subțire este un organ compus dintr-un singur tip de ţesut. În structura stomacului se regăsesc țesut muscular neted, alături de cel epitelial, conjunctiv şi nervos",
      "D. Dermul de la nivelul pielii este o varietate de țesut epitelial. Ţesutul conjunctiv include sângele şi țesutul osos. Tesutul muscular striat scheletic nu reprezintă o varietate de țesut conjunctiv",
      "E. Nivelul de organizare imediat superior țesuturilor este organul. La cel mai simplu nivel, corpul uman este compus din ţesuturi. Celula nervoasă şi cea musculară sunt exemple de celule din organismul uman"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-012",
    topic: "Introducere în anatomie și fiziologie",
    text: "12. Alegeți afirmațiile false dintre cele enumerate mai jos:",
    options: [
      "A. Epidermul (care intră în structura tegumentului) reprezintă un tip de țesut epitelial",
      "B. Sistemele de organe funcționează împreună pentru a forma organismul, cel mai înalt nivel de organizare",
      "C. Celulele aceluiaşi țesut au structură şi organizare similară, dar îndeplinesc funcții diferite",
      "D. Nivelul de organizare imediat superior ţesutului este sistemul de organe, compus din mai multe organe cu funcții complementare",
      "E. Sistemul de organe este compus din mai multe organe identice, cu funcții complementare"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-013",
    topic: "Introducere în anatomie și fiziologie",
    text: "13. Selectați enunțurile care prezintă prima afirmaţie adevărată și cea de-a doua falsă:",
    options: [
      "A. Un organ poate fi alcătuit din două sau mai multe tipuri diferite de țesuturi. Nu se întâlnesc în organism organe cu mai mult de 3 tipuri de ţesuturi în componenţa lor",
      "B. Stomacul este compus din doar două tipuri principale de țesuturi - epitelial şi conjunctiv. În alcătuirea stomacului se întâlnesc tesut conjunctiv, epitelial, muscular neted şi nervos",
      "C. Sistemul de organe este format din mai multe organe cu funcții complementare. Organismul are în alcătuirea sa mai multe sisteme de organe",
      "D. Sistemul muscular include muşchi striați, muşchi netezi şi muşchiul cardiac. Miocardul este o varietate de muşchi neted",
      "E. Sistemul urinar are ca şi componente rinichii, vezica urinară şi căile urinare asociate. Din asocierea mai multor celule între ele ia naştere nivelul molecular de organizare structurală al organismului"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-014",
    topic: "Metabolism și nutriție",
    text: "14. Care dintre următoarele afirmații referitoare la metabolism nu sunt adevărate?",
    options: [
      "A. Metabolismul constă în reacții chimice de sinteză şi de degradare, grupate în căi metabolice, care se desfăşoară exclusiv extracelular",
      "B. O cale metabolică este o secvență de reacții chimice care se desfăşoară în interiorul unei celule",
      "C. Metabolismul cuprinde catabolismul, care necesită de obicei energie pentru sinteza de materie organică",
      "D. Catabolismul reprezintă degradarea moleculelor mari, de obicei cu producere de energie",
      "E. O cale metabolică presupune conlucrarea enzimelor implicate în reacţiile care o compun"
    ],
    correct: [0, 2],
    explanation: ""
  },
  {
    id: "bio-015",
    topic: "Metabolism și nutriție",
    text: "15. Care dintre următoarele afirmații sunt adevărate?",
    options: [
      "A. Catabolismul reprezintă sinteza unor macromolecule (glicogen, colagen) din molecule mici (CO2, H2O, glucoză), cu eliberare de energie",
      "B. Anabolismul reprezintă sinteza unor molecule (glucoza) şi macromolecule (imunoglobuline) şi necesită de obicei energie",
      "C. O cale metabolică poate include reacții de oxido-reducere catalizate enzimatic",
      "D. Substanţele care sunt utilizate în metabolism provin exclusiv din procesul de digestie celulară",
      "E. Componenta metabolismului prin care materia organică este descompusă, de obicei cu eliberare de energie, se numeste catabolism"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-016",
    topic: "Introducere în anatomie și fiziologie",
    text: "16. Selectați afirmațiile adevărate referitoare la mişcare:",
    options: [
      "A. Funcţia de mişcare este asigurată de celulele musculare, prin capacitatea lor de a efectua lucru mecanic şi de a se contracta",
      "B. Mişcarea care apare la nivelul muşchilor scheletici este mişcarea voluntară",
      "C. Mişcarea involuntară este asigurată de schelet, care prin oase şi ligamente oferă locuri de ataşare muşchilor striați scheletici",
      "D. La funcţia de mişcare participă muşchii scheletici, care oferă locuri de ataşare oaselor şi ligamentelor",
      "E. Mişcarea de tip involuntar este descrisă la muşchiului neted şi la muşchiul striat cardiac"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-017",
    topic: "Introducere în anatomie și fiziologie",
    text: "17. Alegeți asocierile corecte cu privire la funcţiile corpului:",
    options: [
      "A. Mişcarea - voluntară sau involuntară - rezultatul contracției fibrelor musculare (striate scheletice, netede, striate cardiace)",
      "B. Conductibilitatea - proprietatea unor celule de a transmite stimuli - caracteristică pentru celule osoase şi musculare",
      "C. Conductibilitatea - proprietatea unor celule de a transmite stimuli - caracteristică pentru celule nervoase şi musculare",
      "D. Reproducerea asexuată - formarea în totalitate a unui nou individ - include spermatozoizii şi ovulele",
      "E. Reproducerea sexuată - producere de spermatozoizi şi ovule - fecundarea unui ovul de către un spermatozoid - diviziunea oului (zigotului) - dezvoltarea unui nou individ"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-018",
    topic: "Introducere în anatomie și fiziologie",
    text: "18. Referitor la funcţia de reproducere a organismului, se pot afirma următoarele:",
    options: [
      "A. Reprezintă capacitatea organismului de a produce în totalitate un nou individ prin diviziunea meiotică a zigotului",
      "B. Tipul de reproducere prin care rezultă un ou fecundat se numeşte reproducere sexuată",
      "C. Reproducerea ca funcție importantă a organismelor vii defineşte capacitatea de a procrea, dar nu şi formarea de noi celule în scopul reparării sau înlocuirii",
      "D. Diviziunea unei singure celule cu formarea a două celule fiice identice se numeşte reproducere asexuată şi are loc prin mitoză",
      "E. Reproducerea asexuată asigură procesele de creştere şi reparaţie"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-019",
    topic: "Introducere în anatomie și fiziologie",
    text: "19. Care dintre următoarele enunțuri privind homeostazia conțin prima afirmație adevărată şi a doua falsă?",
    options: [
      "A. Totalitatea proceselor care contribuie la menținerea parametrilor mediului intern al organismului în limite normale se numeşte homeostazie. Homeostazia nu este compatibilă cu satisfacerea nevoilor nutritive şi energetice ale celulelor organismului",
      "B. Organismul nu se află în homeostazie atunci când nevoile celulelor sale sunt satisfăcute. Toate sistemele de organe sunt implicate în menţinerea homeostaziei",
      "C. Menținerea homeostaziei se realizează prin mecanismele de feed-back, prin care organismul trimite informații înapoi la sistem, pentru a induce un răspuns. Expulzia fetală şi a placentei reprezintă un exemplu de feed-back negativ",
      "D. În menținerea homeostaziei este implicat doar sistemul nervos. În homeostazie, parametrii mediului intern al organismului sunt menținuți în limitele normale, chiar dacă mediul înconjurător se modifică",
      "E. Diferite afecțiuni (boli), căldura excesivă, durerea sau absența oxigenului din sânge determină dezechilibre ale mediului intern al organismului. Valoarea de referinţă a unui mecanism de feed-back este reprezentată de dublul valorii normale a unui factor variabil"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-020",
    topic: "Introducere în anatomie și fiziologie",
    text: "20. Referitor la homeostazie, se poate afirma că:",
    options: [
      "A. La menţinerea ei contribuie toate sistemele de organe",
      "B. În homeostazie, compoziția fluidelor este menținută constantă doar în condiții de stres (hipoxie, febră)",
      "C. Deoarece condițiile interne variază în mod constant, organismul este protejat împotriva extremelor prin sisteme de autoreglare, cunoscute ca mecanisme de feed-back",
      "D. Reprezintă totalitatea proceselor care contribuie la menținerea parametrilor mediului intern al organismului în limite normale, numai dacă mediul înconjurător nu se modifică",
      "E. Prin intermediul mecanismelor de feed-back, în organism sunt transmise informații de la un receptor la centrul de control, unde stimulul este transformat în răspuns, care apoi este transmis unui efector care va produce răspunsul care să mențină homeostazia"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-021",
    topic: "Introducere în anatomie și fiziologie",
    text: "21. Alegeţi asocierile corecte cu privire la mecanismele de feed-back care contribuie la menținerea homeostaziei:",
    options: [
      "A. Feed-back negativ - mecanism de autoreglare prin care, în urma informației primite, scade producția sistemului, acesta revenind la valoarea sa de referință - mecanism care intervine (prin intermediul insulinei) în controlul glicemiei",
      "B. Glicemie scăzută după ingestia de alimente - eliberare de insulină din celulele insulelor Langerhans pancreatice - favorizarea intrării glucozei în celule - scăderea nivelului glicemiei - scăderea eliberării de insulină - menţinerea homeostaziei (feed-back negativ)",
      "C. Valoare de referință - valoarea normală a unui factor variabil (temperatura)",
      "D. Feed-back pozitiv - parte a unui mecanism general de reglare - deviere din ce în ce mai mare de la valoarea de referință - rezultatul este obținerea răspunsului dorit",
      "E. Feed-back pozitiv - mecanism unic de menţinere a homeostaziei - reglare care aduce sistemul la valoarea sa de referință"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-022",
    topic: "Introducere în anatomie și fiziologie",
    text: "22. Stabiliţi afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Atunci când corpul este în poziție anatomică, el se află în poziție verticală (clinostatism), cu membrele superioare pe lângă corp şi palmele orientate anterior",
      "B. Poziția anatomică a corpului implică poziția verticală (ortostatism) cu membrele superioare pe lângă corp şi palmele orientate spre anterior",
      "C. În poziție anatomică, corpul prezintă două fețe, una anterioară (ventrală) şi una posterioară (dorsală)",
      "D. În poziție anatomică, corpul prezintă două feţe, una medială (dreaptă) şi una laterală (stângă)",
      "E. Termenul „dorsal\" este opus termenului „ventral\" şi este utilizat în terminologia anatomică umană cu semnificația de „anterior\""
    ],
    correct: [1, 2],
    explanation: ""
  },
  {
    id: "bio-023",
    topic: "Introducere în anatomie și fiziologie",
    text: "23. Alegeţi succesiunile de afirmații adevărate dintre cele enumerate mai jos:",
    options: [
      "A. În poziție anatomică, palmele sunt orientate spre lateral. Termenul direcţional folosit pentru a descrie partea din față a corpului, de aceeaşi parte cu abdomenul, este „posterior\"",
      "B. Termenul „ipsilateral\" se referă la structuri aflate de aceeaşi parte a corpului. Termenul „superior\" defineşte poziția direcționată spre cap (cranială)",
      "C. În locul termenului „superior\" se utilizează frecvent „cervical” sau „cranial”. Oprirea unei hemoragii implică un mecanism de feed-back negativ, la fel cu expulzia placentei ulterior expulziei fetale",
      "D. Termenul „posterior\" se referă la partea din spate a corpului, acest termen poate fi înlocuit cu „dorsal\". Supradiafragmatic, în mediastin, esofagul este situat posterior față de trahee",
      "E. Termenul „caudal\" - alternativă pentru termenul „inferior\", este utilizat şi în anatomia umană. Segmentele colonului pot fi descrise ca „ipsilaterale\" dacă ne referim la colonul descendent şi colonul sigmoid sau „controlaterale\" dacă ne referim la colonul ascendent şi colonul descendent"
    ],
    correct: [1 ,3, 4],
    explanation: ""
  },
  {
    id: "bio-024",
    topic: "Introducere în anatomie și fiziologie",
    text: "24. Care dintre următoarele afirmații privind termenii direcționali sunt false?",
    options: [
      "A. În nomenclatura anatomică, se consideră că abdomenul (subdiviziunea superioară a cavității abdomino-pelviene) este situat inferior față de torace",
      "B. Termenul „proximal\" se referă la un punct apropiat de locul unde o extremitate se ataşează de trunchi",
      "C. Termenul „ipsilateral“ se referă la structuri aflate de partea opusă a corpului",
      "D. Termenul „controlateral\" se referă la structuri aflate de aceeaşi parte a corpului",
      "E. Termenul „lateral\" se referă la o poziție situată pe linia mediană a corpului"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-025",
    topic: "Introducere în anatomie și fiziologie",
    text: "25. Alegeţi asocierile incorecte cu privire la termenii direcţionali ai corpului:",
    options: [
      "A. Mâna - proximal față de antebraț - proximal față de braț",
      "B. Mâna stângă - picior drept - ipsilateral",
      "C. Mâna dreaptă - picior drept - ipsilateral",
      "D. Braţ stâng - picior drept - controlateral",
      "E. Coapsa - distal față de gambă - distal față de picior"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-026",
    topic: "Introducere în anatomie și fiziologie",
    text: "26. Utilizând termenii direcționali, se poate afirma că:",
    options: [
      "A. Față de gură, nasul şi ochii sunt situați superior",
      "B. Faţă de orbită şi ochi, nasul este situat superior, iar bărbia, inferior",
      "C. Brațul este situat proximal față de antebraț, dar distal în raport cu mâna",
      "D. Cavitatea toracică este situată superior față de cavitatea abdomino-pelviană, de care este separată prin diafragmă",
      "E. Muşchii peretelui toracic sunt superficiali în raport cu organele din cavitatea toracică"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-027",
    topic: "Introducere în anatomie și fiziologie",
    text: "27. Referitor la planurile corpului, se poate afirma că:",
    options: [
      "A. Planul vertical care împarte corpul într-o parte dreaptă și una stângă, se numeşte plan sagital",
      "B. Planul oblic care împarte corpul într-o parte anterioară și una posterioară, este planul frontal",
      "C. Planul orizontal care împarte corpul într-o parte superioară şi una inferioară, se numeşte plan transversal",
      "D. Planurile parasagitale divid întotdeauna corpul în două părți egale",
      "E. Planul mediosagital împarte corpul în două jumătăți (dreaptă şi stângă)"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-028",
    topic: "Introducere în anatomie și fiziologie",
    text: "28. Selectați afirmațiile adevărate referitoare la planurile corpului:",
    options: [
      "A. Pot fi descrise ca suprafete drepte imaginare care traversează corpul",
      "B. Planul mediosagital este un plan vertical care divide corpul în două jumătăți, stângă şi dreaptă",
      "C. Planul frontal are o direcție verticală și divide corpul într-o parte anterioară şi una ventrală",
      "D. Planurile traversează corpul uman şi oferă puncte de reper pentru organele acestuia",
      "E. Planul coronal formează un unghi drept cu planul frontal"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-029",
    topic: "Introducere în anatomie și fiziologie",
    text: "29. Care dintre următoarele afirmații referitoare la cavitatea dorsală (posterioară) a corpului sunt false?",
    options: [
      "A. Reprezintă, alături de cea anterioară, principalele cavități ale corpului",
      "B. Este subîmpărțită în canalul rahidian, care adăposteşte măduva osoasă roşie şi cavitatea craniană, care adăposteşte encefalul",
      "C. Include cavitatea craniană, care adăposteşte encefalul",
      "D. Prezintă două subdiviziuni importante, reprezentate de cavitatea toracică şi de cea pelviană",
      "E. Canalul rahidian, subdiviziune a cavității posterioare a corpului, este delimitat de vertebre (oase neregulate)"
    ],
    correct: [1, 3],
    explanation: ""
  },
  {
    id: "bio-030",
    topic: "Introducere în anatomie și fiziologie",
    text: "30. Care dintre următoarele afirmații privind cavitățile şi regiunile corpului sunt adevărate?",
    options: [
      "A. Inima, esofagul, traheea și bronhiile primare sunt localizate în mediastin, supradiafragmatic",
      "B. Cavitatea abdomino-pelviană este separată de cavitatea toracică prin diafragmă, muşchi respirator, de mari dimensiuni, cu formă de cupolă",
      "C. Cavitatea abdomino-pelviană este mai des întâlnită sub denumirea de „cavitate retroperitoneală\" şi conține organele interne abdominale şi pelviene",
      "D. Stomacul este situat în subdiviziunea abdominală a cavității abdomino-pelviene",
      "E. Regiunea ombilicală se află în centrul abdomenului, iar regiunea epigastrică se localizează inferior de aceasta"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-031",
    topic: "Introducere în anatomie și fiziologie",
    text: "31. Sunt regiuni ale cavitații abdomino-pelviene următoarele:",
    options: [
      "A. Regiunea hipogastrică (hipogastrul), situată imediat superior de regiunea ombilicală",
      "B. Regiunile iliace, în număr de două, stângă şi dreaptă",
      "C. Regiunea ombilicală, situată în centrul abdomenului",
      "D. Regiunea epigastrică, localizată superior de regiunea ombilicală",
      "E. Regiunea mediastinală care include cavitatea pericardică"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-032",
    topic: "Introducere în anatomie și fiziologie",
    text: "32. Alegeţi precizările corecte despre cavități și regiuni ale corpului:",
    options: [
      "A. La nivelul mediastinului sunt situate toate componentele cavității toracicе",
      "B. Plămânii (în număr de doi, drept şi stâng) sunt situați în cavitatea toracică, de-o parte şi alta a inimii",
      "C. Noţiunile de cadrane (superior - drept şi stâng şi inferior - drept şi stâng) sunt curent utilizate în practica clinică",
      "D. Intersectarea a două linii imaginare, una orizontală şi alta verticală, în centrul cavității abdomino-pelviene are ca rezultat delimitarea a patru cadrane",
      "E. Canalul rahidian, delimitat de meninge, este parte componentă a cavității posterioare a trunchiului şi conține lichid interstițial"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-033",
    topic: "Introducere în anatomie și fiziologie",
    text: "33. Stabiliţi afirmațiile adevărate dintre cele enumerate mai jos:",
    options: [
      "A. Regiunea hipogastrică se află superior față de regiunea ombilicală",
      "B. Atât hipocondrul stâng, cât şi hipocondrul drept se află medial de regiunea epigastrică",
      "C. Lateral dreapta față de regiunea ombilicală se află flancul drept",
      "D. Cele două flancuri (stâng şi drept) încadrează regiunea aflată în centrul abdomenului (regiunea ombilicală)",
      "E. Hipogastrul este flancat de cele două regiuni iliace, dreaptă şi stângă"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-034",
    topic: "Introducere în anatomie și fiziologie",
    text: "34. Referitor la membranele cavităților corpului sunt false următoarele afirmaţii:",
    options: [
      "A. Pereții cavității abdominale şi organele abdominale sunt căptuşite de o membrană fină, alcătuită dintr-o singură foiță, numită membrană bazală",
      "B. O membrană seroasă este alcătuită din două foițe, care secretă o cantitate mică de lichid seros, cu rol lubrifiant",
      "C. Foiţele membranelor seroase sunt situate la distanţă mare una de cealaltă, delimitând cavități de dimensiuni considerabile, pline cu lichid seros",
      "D. Foița viscerală a peritoneului acoperă diverse organe ale cavității abdomino-pelviene",
      "E. Foița parietală a membranelor seroase înveleşte organele interne (viscerele) şi aderă de suprafața lor"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-035",
    topic: "Introducere în anatomie și fiziologie",
    text: "35. Următoarele afirmații referitoare la cavitatea abdomino-pelviană sunt adevărate:",
    options: [
      "A. Face parte din cavitatea ventrală a corpului, alături de cavitatea toracică",
      "B. Este întâlnită și sub numele de cavitate peritoneală și conține organele interne abdominale şi pelviene",
      "C. Conţine în cadrul subdiviziunii abdominale ficatul, stomacul, splina şi canalul anal",
      "D. Este separată de cavitatea toracică printr-un muşchi de mari dimensiuni, în formă de cupolă - diafragma",
      "E. Nu conţine în cadrul subdiviziunii pelviană, vezica urinară şi rectul"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-036",
    topic: "Introducere în anatomie și fiziologie",
    text: "36. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. În corpul uman există trei membrane seroase: pleura, pericardul şi peritoneul",
      "B. Fiecare dintre cele trei membrane seroase are câte două foițe parietale şi una viscerală",
      "C. Foiţa parietală a peritoneului căptuşeşte cavitatea abdominală şi pelviană",
      "D. Foița parietală a peritoneului căptuşeşte doar cavitatea abdominală",
      "E. Spaţiul dintre foițele pleurale se numeşte cavitate pleurală, iar cel dintre foițele pericardice - cavitate pericardică"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-037",
    topic: "Introducere în anatomie și fiziologie",
    text: "37. Care dintre următoarele afirmații sunt adevărate?",
    options: [
      "A. La nivelul capului se găsesc mici cavități (cavitatea orală, cavitatea nazală, urechea medie şi orbita)",
      "B. Cavitatea pericardică adăposteşte inima şi este situată într-o regiune a toracelui denumită mediastin",
      "C. Cavitatea pleurală este reprezentată de spațiul dintre foița parietală a membranei seroase şi peretele cavității toracice",
      "D. Fiecare cavitate pleurală este reprezentată de spațiul dintre foița viscerală şi foița parietală a pleurei, membrană seroasă care secretă un lichid cu rol lubrifiant",
      "E. Cavitatea pericardică se află în afara foiței parietale a pericardului"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-038",
    topic: "Introducere în anatomie și fiziologie",
    text: "38. Selectați afirmațiile adevărate referitoare la celulele e:",
    options: [
      "A. Pot prezenta doar un singur nucleu, care conţine 46 de cromozomi circulari",
      "B. Sunt lipsite de nucleu, acesta fiind prezent la celulele eucariote",
      "C. Se divid prin procesul de mitoză, la fel cu celulele eucariote",
      "D. Nu se divid prin procesul de mitoză, spre deosebire de celulele eucariote",
      "E. Bacteriile sunt celule e"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-039",
    topic: "Introducere în anatomie și fiziologie",
    text: "39. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Celulele procariote se divid prin procesul de citokineză, numit şi meioză",
      "B. Celulele eucariote prezintă nucleu şi organite celulare şi se divid prin procesul de mitoză",
      "C. Celulele procariote (spre exemplu bacteriile) sunt lipsite de nucleu",
      "D. Plantele, animalele şi oamenii sunt organisme vii formate din celule procariote",
      "E. Bacteriile aparțin celulelor procariote, iar celulele animale şi cele umane sunt eucariote"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-040",
    topic: "Introducere în anatomie și fiziologie",
    text: "40. Selectaţi afirmațiile false referitoare la celulele eucariote:",
    options: [
      "A. Se divid prin procesul de mitoză, proces prin care ADN-ul nuclear al celulei este distribuit în mod egal celor două celule fiice",
      "B. Prin procesul de diviziune mitotică, ADN-ul nuclear al celulei-mamă este distribuit inegal celor două celule-fiice",
      "C. Citoplasma (numită şi cromatină) şi membrana plasmatică (numită şi membrană acelulară) fac parte dintre componentele lor de bază",
      "D. Intră în componența organismelor plantelor, animalelor şi omului",
      "E. Plantele şi bacteriile sunt alcătuite din celule eucariote, spre deosebire de mamifere, ale căror celule sunt eucromatinice"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-041",
    topic: "Introducere în anatomie și fiziologie",
    text: "41. Selectați asocierile adevărate referitoare la celulele procariote şi eucariote:",
    options: [
      "A. Prezenţa citoplasmatică a mitocondriilor şi a ribozomilor - diviziune exclusiv sexuată - celulele eucariote",
      "B. Incapacitate de a se divide prin mitoză - incapacitate de creştere şi reparare - celulele eucariote",
      "C. Bacterie - lipsa nucleului - celulă procariotă",
      "D. Nucleu delimitat de membrană nucleară - prezența cromatinei/cromozomilor - celulă eucariotă",
      "E. Celulele ţesutului epitelial pavimentos simplu - prezența nucleului cu 46 de cromozomi - celule eucariote"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-042",
    topic: "Introducere în anatomie și fiziologie",
    text: "42. Selectaţi afirmațiile false referitoare la celule:",
    options: [
      "A. Celulele eucariote includ celula vegetală, celula animală, celula umană",
      "B. Spre deosebire de celulele procariote, celulele eucariote nu au nucleu",
      "C. Celulele procariote se divid prin procesul de mitoză",
      "D. Celulele eucariote prezintă nucleu cu cromatină/cromozomi şi se divid prin procesul de mitoză",
      "E. Bacteriile sunt celule eucariote, cu nucleu delimitat de un înveliş nuclear"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-043",
    topic: "Introducere în anatomie și fiziologie",
    text: "43. Selectaţi afirmațiile adevărate referitoare la citoplasmă:",
    options: [
      "A. Se mai numeşte sarcoplasmă la celulele musculare",
      "B. Conţine mai mulţi nucleoli ataşați reticulului endoplasmatic",
      "C. Conține cel mai mare component celular - nucleul - şi o serie de organite",
      "D. La nivelul ei au loc procese metabolice cum sunt ciclul Krebs sau lanțul transportor de electroni",
      "E. Este o substanță cu consistenţa unui gel, fundamentală pentru celulă"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-044",
    topic: "Introducere în anatomie și fiziologie",
    text: "44. Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    options: [
      "A. Este alcătuită din proteine (transmembranare şi periferice), fosfolipide dispuse în dublu strat şi colesterol",
      "B. Proteinele din membrana plasmatică sunt dispuse în două straturi (structură bistratificată)",
      "C. Lipidele din membrana plasmatică sunt dispuse în două straturi (structură bistratificată)",
      "D. Are o structură de mozaic fluid, datorită colesterolului care îi creşte fluiditatea şi pare să plutească printre fosfolipide",
      "E. Are o structură de mozaic fluid datorită proteinelor globulare încorporate în bistratul fosfolipidic şi care par să plutească printre moleculele de lipide"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-045",
    topic: "Introducere în anatomie și fiziologie",
    text: "45. Selectaţi afirmațiile false referitoare la membrana celulară:",
    options: [
      "A. Denumită şi membrana plasmatică, delimitează celulele, separându-le de mediul lor extern",
      "B. Fiind impermeabilă, asigură comunicarea citoplasmei cu mediul extern al celulei",
      "C. Este compusă în principal din molecule lipidice (colesterol şi fosfolipide) şi proteice",
      "D. Nu conţine proteine, acestea fiind prezente exclusiv în nucleul celulei",
      "E. Datorită caracterului hidrofil al proteinelor globulare, are o structură de „sandwich\""
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-046",
    topic: "Introducere în anatomie și fiziologie",
    text: "46. Selectați substanțele care intră în alcătuirea membranei plasmatice:",
    options: [
      "A. Glicogen şi glucoză (aparținând carbohidraţilor)",
      "B. Colesterol (un sterol de origine animală) şi fosfolipide (dispuse în dublu strat)",
      "C. Glicolipide şi glicoproteine (cu rol de receptori pentru diverse molecule, precum hormonii)",
      "D. Enzime cu structură glicoproteică (ATP-aza)",
      "E. Proteine, unele cu rol de enzime, iar altele cu rol de transportori ai moleculelor organice"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-047",
    topic: "Introducere în anatomie și fiziologie",
    text: "47. Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    options: [
      "A. Întreaga grosime a membranei este ocupată de proteinele transmembranare, care proemină pe ambele fețe ale acesteia",
      "B. Conţine glicerofosfolipide, cu un capăt polarizat, hidrofob (cu fosfor) şi unul nepolarizat, hidrofil (fară fosfor)",
      "C. Conţine fosfolipide cu un capăt polarizat, hidrofil (conținând fosfor) şi unul nepolarizat, hidrofob (format din lanțuri de acizi graşi)",
      "D. Conţine proteine periferice, care se extind spre citoplasmă, ocupând întreaga grosime a membranei",
      "E. Prezintă pe fața ei externă glicolipide şi glicoproteine care permit celulelor să se recunoască între ele"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-048",
    topic: "Introducere în anatomie și fiziologie",
    text: "48. Selectați afirmațiile adevărate referitoare la compoziția membranei plasmatice:",
    options: [
      "A. Conţine substanțe lipidice, care includ în molecula lor două regiuni distincte: un capăt hidrofil şi unul hidrofob",
      "B. Conţine lipide cu fosfor (fosfolipide), dar şi compuşi steroidieni, cum este colesterolul",
      "C. Nu conţine structuri proteice, cu excepția unor enzime (ATP-sintetaza)",
      "D. Conţine proteine transmembranare cu funcție de canale pentru transportul unor ioni (canale de Na+ sau de Ca2+)",
      "E. Conține proteine intramembranare care inhibă remodelarea celulară în timpul contracțiilor celulare"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-049",
    topic: "Introducere în anatomie și fiziologie",
    text: "49. Fosfolipidele din membrana plasmatică:",
    options: [
      "A. Au un capăt polarizat, care conține fosfor şi este atras de apă (hidrofil)",
      "B. Au un capăt nepolarizat, hidrofob, care interacţionează cu alte substanțe nepolarizate dar respinge moleculele de apă",
      "C. Sunt dispuse în două straturi, cu capetele hidrofile aflate față în față în porțiunea internă a membranei",
      "D. Datorită proprietăților de hidrosolubilitate, împiedică mărirea suprafeței membranei la fuzionarea acesteia cu veziculele aparatului Golgi",
      "E. Prezintă proprietăți (tensioactive) care permit membranei să îşi mărească suprafața, atunci când veziculele aparatului Golgi fuzionează cu ea"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-050",
    topic: "Introducere în anatomie și fiziologie",
    text: "50. Selectați afirmațiile adevărate referitoare la fosfolipidele din structura membranei plasmatice:",
    options: [
      "A. Capetele polarizate ale moleculelor fosfolipidice din membrana plasmatică intră în contact cu moleculele de apă din mediul intracelular şi din spațiul extracelular",
      "B. Capetele nepolarizate ale moleculelor fosfolipidelor se află față în față înspre exteriorul membranei celulare şi interacţionează cu moleculele de apă din spațiul extracelular",
      "C. Capetele nepolarizate ale moleculelor fosfolipidice din membrana plasmatică intră în contact cu moleculele de apă din mediul intracelular",
      "D. Fosfolipidele membranare sunt responsabile de mărirea suprafeței membranei plasmatice atunci când veziculele aparatului Golgi fuzionează cu ea",
      "E. Caracterul lor hidrofil se datorează prezenţței lanțurilor de carbon din structura alcoolilor graşi"
    ],
    correct: [0, 3],
    explanation: ""
  },
  {
    id: "bio-051",
    topic: "Introducere în anatomie și fiziologie",
    text: "51. Selectați afirmațiile adevărate referitoare la diferitele tipuri de lipide din membrana plasmatică:",
    options: [
      "A. Capetele nepolarizate ale moleculelor de colesterol se află față în față în porțiunea externă a membranei plasmatice",
      "B. Capetele nepolarizate ale moleculelor de fosfolipide se află față în față în porțiunea internă a membranei plasmatice",
      "C. Acele molecule ale stratului lipidic situat spre exterior (spre mediul extracelular) care au ataşate molecule glucidice sunt glicolipide",
      "D. Unele dintre moleculele stratului lipidic situat spre citoplasmă au ataşate molecule de glicogen şi se numesc glicolipide",
      "E. Datorită anumitor proprietăți ale fosfolipidelor, membrana celulară îşi măreşte suprafața când veziculele aparatului Golgi fuzionează cu ea"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-052",
    topic: "Introducere în anatomie și fiziologie",
    text: "52. Care dintre afirmațiile referitoare la structurile din membrana plasmatică nu sunt adevărate?",
    options: [
      "A. Lipidele membranare sunt reprezentate de molecule de colesterol şi fosfolipide",
      "B. Fosfolipidele bipolare se clasifică în transmembranare şi periferice",
      "C. Moleculele de glicerol se pot lega de moleculele de fosfolipide, formând lipoproteine",
      "D. Proteinele-enzime reduc fluiditatea membranei plasmatice",
      "E. Colesterolul este prezent în cantități mari în membrana plasmatică, având un rol stabilizator"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-053",
    topic: "Introducere în anatomie și fiziologie",
    text: "53. Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    options: [
      "A. Reprezintă, alături de citoplasmă, un component de bază al celulei",
      "B. Poate să conțină cantități mari dintr-o substanţă de natură glicoproteică, denumită colesterol",
      "C. Datorită faptului că unul dintre capetele moleculelor fosfolipidice este hidrofil iar celălalt este hidrofob, acestea se organizează în dublu strat cu aspect de „sandwich\"",
      "D. Fosfolipidele par să plutească într-un strat proteic în membrană, conferindu-i acesteia caracterul fluid",
      "E. Conține cantități mari de colesterol, un steroid prezent în grăsimile de origine animală"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-054",
    topic: "Introducere în anatomie și fiziologie",
    text: "54. Selectați afirmațiile adevărate cu privire la structura și proprietățile membranei plasmatice:",
    options: [
      "A. Denumită şi membrană celulară, este alcătuită în principal din proteine şi lipide, mai ales fosfolipide",
      "B. Are o structură de mozaic fluid, în care proteinele globulare încorporate par să plutească printre lipide",
      "C. Capătul hidrofil al moleculelor fosfolipidice permite membranei plasmatice să îşi micşoreze suprafața când fuzionează cu membrana nucleară",
      "D. Glicolipidele şi glicoproteinele de pe versantul extern al membranei plasmatice au rol în recunoaşterea intercelulară",
      "E. Pe suprafața membranei celulare se ataşează proteine periferice, care vor proemina spre citoplasmă"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-055",
    topic: "Introducere în anatomie și fiziologie",
    text: "55. Care dintre următoarele informații referitoare la membrana plasmatică (celulară) nu sunt corecte?",
    options: [
      "A. Este compusă în principal din colesterol (steroid animal) şi nu conține proteine şi fosfolipide",
      "B. Se conformează modelului reprezentat de o structură lipidică bistratificată în care plutesc molecule de proteine globulare",
      "C. Se conformează modelului de mozaic fluid, în care moleculele proteinelor fibrilare plutesc într-o mare de glicolipide stratificate",
      "D. Este impermeabilă pentru orice tip de molecule, indiferent de dimensiunea lor, permițând doar trecerea unor ioni înspre şi dinspre citoplasmă",
      "E. Controlează schimburile de substanțe cu mediul extracelular şi prezintă un model structural denumit mozaic fluid"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-056",
    topic: "Introducere în anatomie și fiziologie",
    text: "56. Selectaţi afirmațiile adevărate referitoare la moleculele de proteine prezente în membrana plasmatică:",
    options: [
      "A. Sunt de două tipuri: transmembranare şi periferice",
      "B. Au un capăt hidrofil şi unul hidrofob, ceea ce conferă membranei structura de „sandwich\"",
      "C. Cele periferice pot acţiona ca şi enzime sau pot interveni în remodelarea celulară în timpul diviziunii celulei",
      "D. Cele de pe fața externă a membranei plasmatice se pot asocia cu molecule de glucide, formând glicoproteine",
      "E. Colinesteraza (proteină periferică membranară) creşte fluiditatea membranei plasmatice"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-057",
    topic: "Introducere în anatomie și fiziologie",
    text: "57. Selectaţi afirmaţiile adevărate referitoare la moleculele de proteine prezente în membrana plasmatică:",
    options: [
      "A. Cele transmembranare pot servi ca transportori ai unor molecule organice, cum este glucoza",
      "B. Cele periferice pot interveni în diferite circumstanțe în remodelarea celulară",
      "C. Cu cât numărul proteinelor transportoare este mai mare, cu atât este mai mică rata de transport prin difuziunea facilitată",
      "D. Cele transmembranare pot servi drept canale pentru transportul ionilor prin membrana plasmatică (canalele cu poartă pentru ionii de sodiu)",
      "E. Un exemplu de proteină periferică îl constituie hemoglobina"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-058",
    topic: "Introducere în anatomie și fiziologie",
    text: "58. Selectați afirmațiile adevărate referitoare la transportul prin membrana plasmatică:",
    options: [
      "A. Difuziunea reprezintă mişcarea moleculelor dintr-o zonă cu o concentrație mare într-una cu concentrație mică (conform gradientului de concentrație)",
      "B. Reprezintă o necesitate pentru celulă, deoarece permite comunicarea citoplasmei cu mediul extern al celulei",
      "C. Una dintre modalitățile prin care substanțele traversează membrana plasmatică reprezintă osmoza care constă în difuziunea ionilor cu sarcină electrică pozitivă",
      "D. Osmoza reprezintă difuziunea moleculelor de apă dintr-o regiune cu o concentrație mică a solvitului, într-una cu o concentrație mare de solvit",
      "E. Un exemplu de osmoză este trecerea oxigenului din alveolele pulmonare în capilare"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-059",
    topic: "Introducere în anatomie și fiziologie",
    text: "59. Care dintre afirmațiile următoare referitoare la osmoză sunt adevărate?",
    options: [
      "A. Este procesul prin care are loc eliberarea neurotransmițătorilor (cum este glicina) din celulele nervoase",
      "B. Reprezintă difuziunca moleculelor de apă printr-o membrană semipermeabilă, dinspre soluția hipotonă spre cea hipertonă",
      "C. Reprezintă difuziunea moleculelor de solvit (NaCl) printr-o membrană impermeabilă pentru apă",
      "D. Are loc dinspre soluția mai diluată (concentrație mai mică de solvit) spre cea mai concentrată (concentrație mai mare de solvit)",
      "E. Realizarea ei necesită energie furnizată de scindarea adenozin-trifosfatului la adenozinmonofosfat"
    ],
    correct: [1, 3],
    explanation: ""
  },
  {
    id: "bio-060",
    topic: "Introducere în anatomie și fiziologie",
    text: "60. Selectați afirmațiile false dintre cele de mai jos:",
    options: [
      "A. Solvitul este o substanță chimică dizolvată într-un lichid numit solvent",
      "B. Solventul este o substanţă chimică dizolvată într-un lichid numit solvit",
      "C. Soluția care are o concentrație mai mare de sare față de cea a citoplasmei se numeşte soluție hipertonă",
      "D. Soluția care are o concentrație mai mare de apă față de cea a citoplasmei se numeşte soluție hipertonă",
      "E. Soluția care are concentrația de clorură de sodiu egală cu cea a citoplasmei este izotonă în raport cu aceasta"
    ],
    correct: [1, 3],
    explanation: ""
  },
  {
    id: "bio-061",
    topic: "Introducere în anatomie și fiziologie",
    text: "61. Selectaţi afirmaţiile adevărate dintre cele de mai jos:",
    options: [
      "A. Celulele plasate în soluții hipertone se divid şi apoi se lizează",
      "B. Celulele plasate în soluții hipotone suferă un proces de liză, (balonizare/umflare şi dezintegrare, asemănător unei explozii) datorită pătrunderii apei în celulă",
      "C. Osmoza nu se produce când celulele sunt plasate în soluție hipotonă, deoarece concentrația solvitului este aceeaşi de ambele părți ale membranei",
      "D. Când celula este plasată într-un mediu hiperton, concentrația mai mare de solvit se află în afara celulei, apa iese din celulă şi aceasta se deshidratează, micşorându-se",
      "E. Osmoza se produce doar atunci când celulele sunt plasate în soluție izotonă"
    ],
    correct: [1, 3],
    explanation: ""
  },
  {
    id: "bio-062",
    topic: "Introducere în anatomie și fiziologie",
    text: "62. Membrana plasmatică este o membrană semipermeabilă care:",
    options: [
      "A. Permite trecerea apei dintr-o regiune cu o concentrație mică a solvitului într-una cu o concentrație mare a acestuia",
      "B. Lasă să treacă doar anumite molecule (spre exemplu, O2, apă, CO2)",
      "C. Conţine proteine denumite histone, care funcţionează ca pompe ionice membranare",
      "D. Reprezintă împreună cu ribozomii sediul sintezei proteinelor transmembranare",
      "E. Nu permite trecerea cu uşurinţă a moleculelor mari înspre sau dinspre celulă"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-063",
    topic: "Introducere în anatomie și fiziologie",
    text: "63. Alegeți afirmațiile adevărate despre osmoză şi consecințele ei asupra eritrocitului plasat în soluții hipo-, izo- şi hipertone:",
    options: [
      "A. Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană semipermeabilă, dintr-o regiune cu o concentrație mai mare a solventului într-una cu concentraţie mai mare a solvitului",
      "B. Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană semipermeabilă, dintr-o regiune cu o concentrație mai mică a solventului într-una cu concentrație mai mare a acestuia",
      "C. Osmoza este similară difuziunii facilitate şi nu are nicio influență asupra eritrocitului, indiferent de mediul în care acesta este plasat",
      "D. Dacă se plasează eritrocite într-o soluție hipotonă, concentrația de sare (solvit) va fi mai mare în interiorul eritrocitelor şi apa va pătrunde în celule, facilitând liza acestora (hemoliza eritrocitară)",
      "E. Dacă se plasează eritrocite în soluție izotonă, osmoza nu se produce, concentrația de sare fiind egală de ambele fețe ale membranei eritrocitare, iar eritrocitul îşi menține integritatea structurală"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-064",
    topic: "Introducere în anatomie și fiziologie",
    text: "64. Selectați afirmațiile adevărate cu privire la transportul transmembranar:",
    options: [
      "A. Trecerea moleculelor/ionilor prin membrana plasmatică, dintr-o regiune cu concentrație mare într-una cu concentrație mică, se numeşte difuziune",
      "B. Moleculele de apă se deplasează prin membrana plasmatică, dintr-o regiune cu o concentrație mică a solvitului în una cu concentrație mare a acestuia, prin procesul de osmoză",
      "C. Difuziunea facilitată este modalitatea de mişcare moleculară prin membrana celulară a anumitor molecule împotriva gradientului de concentrație",
      "D. Când compuşii chimici sunt transportați prin membrana plasmatică dintr-o regiune cu concentrație mică într-una cu concentrație mare, transportul este activ şi implică consum de energie",
      "E. Fagocitoza este forma de exocitoză în care anumite materii solide sunt înglobate în celulă"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-065",
    topic: "Introducere în anatomie și fiziologie",
    text: "65. Care dintre următoarele sunt mecanisme de transport ale unor ioni şi molecule prin membrana celulară?",
    options: [
      "A. Difuziunea (transportul activ) al moleculelor mari proteice înspre şi dinspre celulă",
      "B. Difuziunea oxigenului şi dioxidului de carbon prin membrana eritrocitară",
      "C. Osmoza (difuziunea moleculelor de apă datorită unui gradient osmotic) - exemplu: reabsorbția apei din tubul proximal şi distal al nefronului",
      "D. Transportul activ - exemplu: reabsorbția ionilor de Na+ din tubul proximal al nefronului",
      "E. Cariokineza şi diapedeza leucocitelor, pentru a fagocita microorganisme"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-066",
    topic: "Introducere în anatomie și fiziologie",
    text: "66. Care dintre următoarele nu sunt mecanisme de transport prin membrana celulară?",
    options: [
      "A. Mitoza şi interfaza ciclului celular",
      "B. Difuziunea facilitată, realizată cu ajutorul unor proteine transportoare, prezente în membrană",
      "C. Difuziunea activă a apei în tubii renali",
      "D. Exocitoza unor produşi de secreție celulară (eliberarea neurotransmițătorilor din neuroni)",
      "E. Osmoza - mecanism de transport activ al ionilor de sodiu şi potasiu"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-067",
    topic: "Introducere în anatomie și fiziologie",
    text: "67. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Fagocitoza reprezintă transportul materialului solid prin endocitoză",
      "B. Pinocitoza reprezintă transportul unor picături de lichid prin exocitoză",
      "C. Eliberarea neurotransmițătorilor din veziculele presinaptice ale neuronilor se realizează prin exocitoză",
      "D. Eliberarea unor hormoni din celulele exocrine se face prin exocitoză",
      "E. Traversarea de către oxigen a membranei eritrocitare se realizează prin difuziune"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-068",
    topic: "Introducere în anatomie și fiziologie",
    text: "68. Selectați afirmațiile false cu privire la permeabilitatea membranei celulare:",
    options: [
      "A. Moleculele de oxigen trec din alveolele pulmonare în hematii prin osmoză",
      "B. Dacă se vor introduce hematii într-o soluție hipertonă, acestea vor suferi procesul de hemoliză",
      "C. Membrana plasmatică semipermeabilă permite trecerea cu uşurință a unor molecule de dimensiuni mici",
      "D. Transportul activ se realizează în sensul gradientului de concentrație (de la concentrație mare la concentrație mică)",
      "E. Pentru desfăşurarea transportului activ transmembranar, energia se poate obține prin desfacerea unui compus care conține legături fosfat cu potențial energetic ridicat (adenozintrifosfat)"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-069",
    topic: "Introducere în anatomie și fiziologie",
    text: "69. Selectați afirmațiile adevărate cu privire la transportul prin membrana plasmatică:",
    options: [
      "A. Osmoza se realizează cu ajutorul proteinelor transportoare transmembranare",
      "B. Ingestia bacteriilor de către leucocite se realizează prin endocitoză",
      "C. Ingestia bacteriilor de către leucocite se realizează prin exocitoză",
      "D. Difuziunea facilitată se realizează cu ajutorul proteinelor transportoare transmembranare",
      "E. Transportul activ presupune trecerea moleculelor/ionilor din zone cu concentrație mică în zone cu concentrație mare, cu ajutorul proteinei transportoare şi a energiei furnizate de ATP"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-070",
    topic: "Introducere în anatomie și fiziologie",
    text: "70. Selectați afirmațiile adevărate cu privire la transportul activ prin membrana plasmatică:",
    options: [
      "A. Se realizează împotriva gradientului de concentrație, cu energie furnizată prin desfacerea (hidroliza) adenozin-trifosfatului",
      "B. Rata transportului activ este limitată de numărul proteinelor transportoare",
      "C. Se realizează cu ajutorul proteinelor transmembranare, împotriva gradientului de concentrație",
      "D. Nu necesită energie din desfacerea (hidroliza) adenozin-trifosfatului",
      "E. Una dintre formele de transport activ este difuziunea facilitată"
    ],
    correct: [0, 1, 2],
    explanation: ""
  },
  {
    id: "bio-071",
    topic: "Introducere în anatomie și fiziologie",
    text: "71. În transportul activ, substanțele chimice se deplasează dintr-o zonă cu concentrație scăzută, într-una cu concentrație crescută şi pentru aceasta este nevoie de:",
    options: [
      "A. Funcţionarea genelor care să controleze procesul de transcripție",
      "B. Energie furnizată de adenozin-trifosfat, prin hidroliză (se eliberează 7,3 kcal/mol)",
      "C. Energie furnizată prin hidroliza unei substanțe care conține legături fosfat cu potențial energetic ridicat - adenozin-trifosfat (ATP)",
      "D. Implicarea aparatului Golgi, care să remodeleze proteinele sintetizate în ribozomi",
      "E. Implicarea mitocondriilor, care furnizează ATP prin respirație celulară"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-072",
    topic: "Introducere în anatomie și fiziologie",
    text: "72. Selectați afirmațiile adevărate cu privire la endocitoză:",
    options: [
      "A. Când endocitoza implică transport de material solid prin membrană, procesul se numeşte pinocitoză",
      "B. Când endocitoza implică transport de material solid prin membrană, procesul se numeşte fagocitoză",
      "C. Se desfăşoară în acelaşi sens cu exocitoza",
      "D. Se desfăşoară în sens opus cu exocitoza",
      "E. Leucocitele realizează endocitoză atunci când fagocitează microbii"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-073",
    topic: "Introducere în anatomie și fiziologie",
    text: "73. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. În pinocitoză celula preia în interiorul ei substanțe chimice dizolvate în apă",
      "B. În fagocitoză celula preia în interiorul ei substanțe chimice dizolvate în apă",
      "C. În fagocitoză celula preia în interiorul ei particule solide",
      "D. În pinocitoză celula preia în interiorul ei particule solide",
      "E. Fagocitoza şi pinocitoza sunt forme de endocitoză"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-074",
    topic: "Introducere în anatomie și fiziologie",
    text: "74. Selectați afirmațiile adevărate referitoare la endocitoză şi exocitoză:",
    options: [
      "A. Fagocitoza şi pinocitoza sunt forme de exocitoză",
      "B. În timpul endocitozei, o mică porţiune din membrana plasmatică se pliază şi înglobează particule sau mici volume de lichid din exteriorul celulei (de la suprafața celulară)",
      "C. În timpul endocitozei, o mică porțiune din membrana plasmatică se pliază şi înglobează particule sau mici volume de lichid din interiorul celulei",
      "D. În timpul endocitozei, după ce particula/volumul de lichid au fost înglobate, membrana se închide, delimitând o veziculă care va intra în citoplasmă",
      "E. În endocitoză se formează o veziculă care se desprinde şi migrează în spațiul extracelular"
    ],
    correct: [1, 3],
    explanation: ""
  },
  {
    id: "bio-075",
    topic: "Introducere în anatomie și fiziologie",
    text: "75. Fagocitoza este o formă de endocitoză care:",
    options: [
      "A. Este prezentă la unele elemente figurate - leucocite (globulele albe)",
      "B. Necesită controlul expresiei genice de către celulă",
      "C. Scoate din celule diverse substanţe solide",
      "D. Implică lizozomii, care conţin enzime pentru digestia intracelulară",
      "E. Este funcţia principală a neutrofilelor (denumite şi leucocite polimorfonucleare)"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-076",
    topic: "Introducere în anatomie și fiziologie",
    text: "76. Selectați afirmațiile adevărate cu privire la procesele de endocitoză şi exocitoză:",
    options: [
      "A. În endocitoză se formează o veziculă care se desprinde şi migrează în citoplasmă",
      "B. Leucocitele sunt capabile să realizeze endocitoză când înglobează microbii",
      "C. Leucocitele sunt capabile să realizeze exocitoză când înglobează microbii",
      "D. În timpul exocitozei, substanțele se deplasează din interiorul unei celule spre mediul extracelular",
      "E. În timpul exocitozei, substanțele se deplasează din exteriorul unei celule spre mediul intracelular"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-077",
    topic: "Introducere în anatomie și fiziologie",
    text: "77. Selectați afirmațiile false referitoare la endocitoză şi exocitoză:",
    options: [
      "A. Prin procesul de exocitoză se realizează secreția hormonilor de către celulele glandelor endocrine",
      "B. Prin procesul de endocitoză se realizează secreția hormonilor de către celulele glandelor exocrine",
      "C. În timpul exocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana nucleară, cu care fuzionează",
      "D. În timpul exocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana celulară, cu care fuzionează",
      "E. În timpul endocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana celulară, cu care fuzionează"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-078",
    topic: "Introducere în anatomie și fiziologie",
    text: "78. Selectați afirmațiile adevărate referitoare la endocitoză şi exocitoză:",
    options: [
      "A. În cazul exocitozei, conținutul veziculei citoplasmatice este eliminat în mediul extracelular",
      "B. În cazul exocitozei, conținutul veziculei citoplasmatice este eliminat în mediul intracelular",
      "C. Eliberarea neurotransmițătorilor la nivelul terminațiilor celulelor nervoase presinaptice are loc prin procesul de exocitoză",
      "D. Eliberarea neurotransmițătorilor la nivelul terminaţiilor presinaptice ale celulelor musculare are loc prin procesul de exocitoză",
      "E. Pinocitoza, care presupune înglobarea în celulă de material lichid, este o formă de endocitoză"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-079",
    topic: "Introducere în anatomie și fiziologie",
    text: "79. Selectaţi afirmațiile adevărate referitoare la nucleul celulelor:",
    options: [
      "A. Este înconjurat de o membrană triplă alcătuită din fosfolipide",
      "B. Porii din membrana nucleară permit mediului intern al nucleului să comunice cu citoplasma celulei",
      "C. Nucleul celulelor umane este înconjurat de o membrană numită înveliş nuclear",
      "D. Nucleul celulelor umane este înconjurat de o membrană numită membrană plasmatică",
      "E. Nucleul conține ADN (acid dezoxiribonucleic) şi histone (proteine histonice)"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-080",
    topic: "Introducere în anatomie și fiziologie",
    text: "80. Selectați răspunsurile corecte cu privire la nucleu:",
    options: [
      "A. Nucleul delimitat de membrană este prezent în celulele eucariote",
      "B. În corpul uman există celule lipsite de nucleu, cum sunt hematiile (globulele roşii sau eritrocitele)",
      "C. Masa densă din nucleu care conţine acid ribonucleic (ARN) se numeşte nucleol",
      "D. În nucleul celular, moleculele de acid ribonucleic (ARN) sunt înfăşurate în jurul complexelor de histone pentru a forma cromatina",
      "E. În timpul perioadei în care cromozomii nu se pot distinge unul de altul (în interfază), masa dispersată de ADN şi proteinele asociate lui din nucleul celular se numeşte cromatină"
    ],
    correct: [0, 1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-081",
    topic: "Introducere în anatomie și fiziologie",
    text: "81. Selectaţi afirmațiile adevărate cu privire la nucleu:",
    options: [
      "A. Există aproximativ 30.000 de gene în nucleul fiecărei celule umane",
      "B. Învelişul nuclear constă din două straturi de proteine cu pori prin care mediul intern al nucleului comunică cu citoplasma",
      "C. Nucleolul conține acid ribonucleic (ARN) şi intervine în producerea subunităţilor ribozomale, care vor fi asamblate în citoplasmă sub formă de ribozomi",
      "D. Este înconjurat de o membrană alcătuită din două straturi duble de fosfolipide",
      "E. Spre deosebire de membrana celulară, membrana nucleară nu este prevăzută cu pori"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-082",
    topic: "Introducere în anatomie și fiziologie",
    text: "82. Selectați afirmațiile adevărate referitoare la nucleul celulelor:",
    options: [
      "A. Forma şi dimensiunea nucleului variază de la un tip celular la altul",
      "B. Poziţia nucleului în celulă este centrală la toate tipurile celulare",
      "C. Este înconjurat de o membrană dublă, care poartă numele de înveliş nuclear",
      "D. Include nucleoli care conțin acid ribonucleic (ARN)",
      "E. Nucleolii sunt sediul sintezei lizozomilor"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-083",
    topic: "Introducere în anatomie și fiziologie",
    text: "83. Selectați afirmațiile adevărate referitoare la învelişul nuclear:",
    options: [
      "A. Este o membrană poroasă numită membrană celulară",
      "B. Fiind alcătuit din două straturi duble de fosfolipide, are un conținut în aceste substante dublu faţă de membrană celulară",
      "C. Separă conținutul nuclear de spațiul extracelular",
      "D. Este o membrană poroasă dublă",
      "E. Controlează pasajul substanțelor între nucleu şi citoplasmă"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-084",
    topic: "Introducere în anatomie și fiziologie",
    text: "84. Selectați afirmațiile false referitoare la învelişul nuclear:",
    options: [
      "A. Conţine pori care permit comunicarea nucleului cu mediul extracelular",
      "B. Are un conținut în fosfolipide redus la jumătate față de membrana celulară",
      "C. Are un conținut în fosfolipide dublu față de membrana plasmatică",
      "D. Controlează pasajul substanțelor între celulă şi mediul extracelular",
      "E. Conţine informația genetică pentru sinteza proteică"
    ],
    correct: [0, 1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-085",
    topic: "Introducere în anatomie și fiziologie",
    text: "85. Selectați afirmațiile adevărate referitoare la nucleoli:",
    options: [
      "A. Sunt structuri dense prezente în nucleul celulelor",
      "B. Conţin acid ribonucleic (ARN) şi sunt sediul sintezei subunităților ribozomale",
      "C. Sunt saci membranoşi cu partiție interioară",
      "D. Sunt organite care conţin enzime lizozomale",
      "E. În derularea etapei de mitoză a ciclului celular, dispar în profază şi reapar în telofază"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-086",
    topic: "Introducere în anatomie și fiziologie",
    text: "86. Selectați afirmațiile false referitoare la nucleoli:",
    options: [
      "A. Sunt structuri dense prezente în toate celulele anucleate",
      "B. Conţin acidul nucleic care are în componenţe baza azotată uracil",
      "C. Sunt sediul sintezei subunităţilor lizozomale",
      "D. Sunt corpusculi lipsiți de membrană şi care conţin ARN (acid ribonucleic)",
      "E. Sunt prezenți în eritrocite"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-087",
    topic: "Introducere în anatomie și fiziologie",
    text: "87. Selectați afirmațiile adevărate referitoare la citoplasmă:",
    options: [
      "A. Este sediul unor procese metabolice celulare",
      "B. Conţine citoscheletul constituit din subunități glucidice",
      "C. Conține structuri specializate numite organite (reticul endoplasmatic, corpul/aparatul Golgi etc.)",
      "D. Are o consistență solidă, fundamentală pentru celulă",
      "E. La nivelul organitelor din citoplasmă se desfăşoară diverse funcții celulare"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-088",
    topic: "Introducere în anatomie și fiziologie",
    text: "88. Selectați afirmațiile false referitoare la reticulul endoplasmatic:",
    options: [
      "A. Are rol important în digestia celulară",
      "B. La nivelul lui se desfăşoară o etapă importantă din respirația celulară (fosforilarea oxidativă)",
      "C. Este un organit alcătuit dintr-un ansamblu de membrane care se extind intracitoplasmatic",
      "D. Dacă are ribozomi ataşaţi, poartă numele de reticul endoplasmatic rugos",
      "E. Reticulul endoplasmatic rugos este sediul exclusiv al sintezei şi degradării lipidelor"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-089",
    topic: "Introducere în anatomie și fiziologie",
    text: "89. Selectați afirmațiile adevărate referitoare la reticulul endoplasmatic rugos:",
    options: [
      "A. Este implicat în sinteza proteinelor (realizată prin asamblarea aminoacizilor în ribozomii ataşaţi)",
      "B. Prezintă ataşate structuri numite lizozomi, în care se combină chimic aminoacizii",
      "C. Reprezintă sediul sintezei lipidelor",
      "D. Este un organit alcătuit dintr-un ansamblu de membrane, care se extind intracitoplasmatic şi prezintă ribozomi ataşaţi",
      "E. Are rol în sinteza proteinelor prin respirație celulară"
    ],
    correct: [0, 3],
    explanation: ""
  },
  {
    id: "bio-090",
    topic: "Introducere în anatomie și fiziologie",
    text: "90. Selectați afirmațiile adevărate referitoare la ribozomi:",
    options: [
      "A. Sunt organite citoplasmatice care pot fi ataşate membranelor aparatului Golgi",
      "B. La nivelul lor are loc legarea aminoacizilor în lanțuri peptidice",
      "C. Sunt organite citoplasmatice care pot fi ataşate membranelor reticulului endoplasmatic",
      "D. Sunt structuri submicroscopice, compuse din proteine şi ARN",
      "E. Reprezintă depozitul de ioni de calciu (Ca2+) din celulă"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-091",
    topic: "Introducere în anatomie și fiziologie",
    text: "91. Selectați afirmațiile false referitoare la reticulul endoplasmatic:",
    options: [
      "A. Poate fi de două tipuri: neted şi rugos",
      "B. În reticulul endoplasmatic rugos are loc sinteza proteinelor prin cuplarea acizilor graşi",
      "C. În reticulul endoplasmatic neted are loc sinteza lipidelor şi a membranelor",
      "D. Este un organit alcătuit dintr-un ansamblu de membrane care se extind extracitoplasmatic",
      "E. La nivelul ribozomilor ataşați reticulului endoplasmatic neted are loc sinteza proteinelor prin cuplarea nucleotidelor"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-092",
    topic: "Introducere în anatomie și fiziologie",
    text: "92. Reticulul endoplasmatic se poate descrie ca fiind:",
    options: [
      "A. Organit citoplasmatic cu rol specific în etapa de transcripție din cadrul sintezei proteinelor",
      "B. Structură funcţională aflată în citoplasmă, cu rol în depozitarea Ca2+",
      "C. Ansamblu de membrane care se extind intracitoplasmatic",
      "D. Sediu al respirației celulare, conținând sistemul transportor de electroni",
      "E. De două tipuri, neted (sediu al sintezei de lipide şi de membrane) şi rugos (care are ataşați ribozomi)"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-093",
    topic: "Introducere în anatomie și fiziologie",
    text: "93. Alegeţi dintre enunţurile de mai jos, pe cele care conțin prima afirmație adevărată şi cea de a doua falsă, cu referire la lizozom:",
    options: [
      "A. Conţine enzime cu rol în procesele de digestie ale celulei. Este un organit celular extern care permite deplasarea anumitor celule",
      "B. Reprezintă depozitul de sodiu şi calciu al celulei. Are forma unei vezicule şi conține enzime implicate în procesele de digestie celulară",
      "C. Conţine enzime care degradează particulele nutritive pătrunse în celulă şi pune la dispoziția celulei produşii finali. La nivelul lui are loc sinteza membranelor celulare",
      "D. Este o sursă de săruri (clorura de sodiu, fosfat de calciu). Enzimele sale pot să degradeze particulele nutritive pătrunse în celulă",
      "E. Reprezintă o veziculă care derivă din sacii aparatului Golgi şi conține enzime pentru digestia intracelulară. Se află în celulă ataşat membranelor reticulului endoplasmatic"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-094",
    topic: "Introducere în anatomie și fiziologie",
    text: "94. Despre mitocondrii se poate afirma că:",
    options: [
      "A. Sunt organite în care se sintetizează adenozin-trifosfat (ATP) pentru nevoile energetice ale celulei",
      "B. Constituie o parte componentă a cromozomilor şi cromatinei nucleare",
      "C. Sunt organite care dețin informaţia genetică pentru sinteza tuturor componentelor celulei",
      "D. Se găsesc în număr mare în fibra musculară striată (în vecinătatea filamentelor subţiri de actină şi a celor groase de miozină) şi furnizează ATP-ul necesar contracţiei musculare",
      "E. La nivelul lor se eliberează cea mai mare parte a energiei provenite din degradarea substanţelor de natură glucidică, lipidică sau proteică, utilizându-se oxigenul provenit din aerul inspirat"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-095",
    topic: "Introducere în anatomie și fiziologie",
    text: "95. Alegeți enunțurile care descriu corect structura şi funcția mitocondriei:",
    options: [
      "A. Considerată sac membranos cu partiție interioară, mitocondria reprezintă sediul desfăşurării ciclului acizilor tricarboxilici (CAT)",
      "B. Asigură formarea moleculelor de ATP în cadrul respirației celulare, care se desfăşoară în întregime în anaerobioză",
      "C. Posedă o membrană externă şi una internă între care se delimitează spațiul intermembranar (compartiment mitocondrial extern)",
      "D. Membrana mitocondrială externă este plicaturată sub formă de criste, la nivelul cărora se află enzime importante pentru scindarea ATP",
      "E. Membrana mitocondrială internă este plicaturată sub formă de criste şi delimitează matricea (compartimentul mitocondrial intern)"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-096",
    topic: "Introducere în anatomie și fiziologie",
    text: "96. Selectați afirmațiile adevărate referitoare la aparatul Golgi:",
    options: [
      "A. Structura lui include saci membranoşi turtiți, de obicei curbați la capete",
      "B. Sacii se unesc între ei parțial, formând vezicule asemănătoare unor picături",
      "C. Conţine saci membranoşi cu partiție interioară, denumiți subunități mici şi mari",
      "D. La nivelul lui au loc procese şi împachetarea în vezicule a proteinelor (după ce proteina sintetizată este îndepărtată din ribozomi)",
      "E. Este o structură nonmembranoasă care conține pigmenți denumiți citocromi"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-097",
    topic: "Introducere în anatomie și fiziologie",
    text: "97. Care dintre următoarele structuri sunt componente microscopice specializate ale celulei (organite celulare)?",
    options: [
      "A. Kinetocorul - structură care conține o proteină motorie care asigură deplasarea cromozomilor prin celulă",
      "B. Aparatul Golgi - vezicule asemănătoare unor picături, formate prin unirea parțială a unor saci turtiți, de obicei curbați la capete",
      "C. Lizozomii - sediu unic al enzimelor care realizează sinteza proteinelor",
      "D. Nucleolul - format din mase dense de adenozin-trifosfat (ATP)",
      "E. Mitocondria - în interiorul căreia, în procesul de respirație celulară, oxigenul se combină cu hidrogen (sub formă de protoni) şi electroni (e) ca să formeze apă"
    ],
    correct: [1, 4],
    explanation: ""
  },
  {
    id: "bio-098",
    topic: "Introducere în anatomie și fiziologie",
    text: "98. Selectaţi afirmațiile adevărate referitoare la mitocondrie:",
    options: [
      "A. În interiorul ei, respirația celulară este completă când oxigenul se combină cu hidrogen şi electroni ca să formeze apă",
      "B. La nivelul acestui organit, în matricea mitocondrială, are loc sinteza de glucoză, cu eliberare de energie",
      "C. La nivelul acestui organit, se desfăşoară căi metabolice importante (ciclul Krebs, lanțul transportor de electroni, chemiosmoza)",
      "D. Energia produsă de mitocondrie este stocată sub formă de ADN (acid dezoxiribonucleic)",
      "E. Este un organit celular intern implicat în procesele energetice ale celulei"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-099",
    topic: "Introducere în anatomie și fiziologie",
    text: "99. Selectați afirmațiile false referitoare la mitocondrii:",
    options: [
      "A. Pentru desfăşurarea respirației celulare, mitocondriile utilizează oxigenul provenit din aerul inspirat",
      "B. Energia rezultată din catabolismul diferitelor substraturi la nivel mitocondrial este utilizată pentru formarea de molecule de ATP (adenozin-trifosfat)",
      "C. La nivelul lor, membrana mitocondrială internă delimitează citoplasma celulei de matricea mitocondrială",
      "D. Pentru că mitocondriile pot produce ATP şi în absența oxigenului, celulele supraviețuiesc doar prin procese biochimice anaerobe",
      "E. Spațiul intermembranar al mitocondriei este delimitat între matrice şi membrana mitocondrială internă"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-100",
    topic: "Introducere în anatomie și fiziologie",
    text: "100. Alegeţi afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Sunt elemente ale citoscheletului celular filamentele intermediare, microfilamentele, microtubulii",
      "B. În faza G2 a ciclului celular, se formează filamentele fusului de diviziune din molecule lipidice şi glucidice",
      "C. Microtubulii reprezintă alături de microfilamente şi de microfilamente intermediare o structură de suport a celulei",
      "D. Toate componentele citoscheletului sunt alcătuite din subunităţi lipidice",
      "E. Centriolii în formă de tijă vor facilita distribuția cromozomilor către celulele fiice în timpul reproducerii celulare"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-101",
    topic: "Introducere în anatomie și fiziologie",
    text: "101. Care dintre următoarele afirmații sunt adevărate şi se referă la extensii ale unor celule ale corpului uman?",
    options: [
      "A. Flagelii, prezenți la celulele Leydig, participă la constituirea unui suport pentru citoplasma acestora",
      "B. Cilii, mai lungi şi mai puțin numeroşi decât flagelii, se regăsesc în tractul respirator şi în alveolele pulmonare",
      "C. Cilii se întâlnesc la celulele din căile aeriene superioare şi se ondulează în mod sincron",
      "D. Flagelul este lung şi asemănător unui fir de păr",
      "E. Cilii şi flagelii sunt ataşați corpusculilor bazali de sub membrana celulară"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-102",
    topic: "Introducere în anatomie și fiziologie",
    text: "102. Selectaţi afirmațiile adevărate referitoare la citoscheletul celular:",
    options: [
      "A. Este o rețea interconectată de microtubuli, microfilamente şi filamente intermediare din interiorul citoplasmei",
      "B. Este o rețea interconectată de fibre, fascicule şi molecule izolate aflată în interiorul nucleului",
      "C. Participă la realizarea deplasării particulelor în citoplasmă",
      "D. Serveşte drept structură de suport pentru celulă şi are toate componentele alcătuite din subunități proteice",
      "E. Filamentele intermediare sunt componente ale citoscheletului celular doar la celula procariotă"
    ],
    correct: [0,2,3],
    explanation: ""
  },
  {
    id: "bio-103",
    topic: "Introducere în anatomie și fiziologie",
    text: "103. Selectați răspunsurile incorecte referitoare la citoscheletul celular:",
    options: [
      "A. Microtubulii şi filamentele intermediare nu sunt componente ale citoscheletului celular",
      "B. Microfilamentele fac parte din structurile citoscheletului celular",
      "C. Toate componentele citoscheletului celular sunt alcătuite din subunităţi proteice",
      "D. Toate componentele citoscheletului celular sunt alcătuite din subunități fosfolipidice",
      "E. Are componente asemănătoare firelor de păr, care străbat membrana celulară şi intră în nucleu"
    ],
    correct: [0, 3 ,4],
    explanation: ""
  },
  {
    id: "bio-104",
    topic: "Introducere în anatomie și fiziologie",
    text: "104. Selectați afirmațiile adevărate referitoare la cili şi flageli:",
    options: [
      "A. Flagelul este prezent la spermatozoid şi asigură mişcarea acestuia",
      "B. Cilii sunt structuri mai scurte decât flagelii",
      "C. Flagelul este o prelungire prezentă la unele dintre celulele tractului respirator",
      "D. Cilii sunt prezenți la nivelul celulelor tractului respirator, unde se ondulează în mod sincron",
      "E. Spre deosebire de flagel, cilii sunt imobili şi mult mai lungi decât acesta"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-105",
    topic: "Introducere în anatomie și fiziologie",
    text: "105. Selectați afirmațiile false referitoare la cili şi flageli:",
    options: [
      "A. Cilul este o structură unică, mai lungă decât flagelul",
      "B. Sunt extensii prezente la anumite celule umane",
      "C. Cilii asigură mişcarea spermatozoidului în lichidul spermatic",
      "D. Flagelul asigură mişcarea ovulului în trompa uterină, în vederea fecundaţiei",
      "E. Flagelul, prin mişcări ondulatorii, deplasează stratul de mucus cu particule străine prinse în el, de la suprafața celulelor tractului respirator"
    ],
    correct: [0, 2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-106",
    topic: "Introducere în anatomie și fiziologie",
    text: "106. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. În celulele umane care căptuşesc căile aeriene superioare şi tractul respirator, cilii se ondulează sincron, eliminând mucusul cu particulele străine prinse în el",
      "B. În celulele umane care căptuşesc tractul respirator, cilii se ondulează asincron, eliminând mucusul cu impurități",
      "C. Atunci când este prezent la nivelul unei celule umane, flagelul asigură reproducerea celulei",
      "D. Flagelul, prezent la nivelul spermatozoidului, asigură mişcarea acestei celule",
      "E. Cilii prezenți în epiteliul alveolelor pulmonare determină propulsia mucusului pe suprafeţele celulare"
    ],
    correct: [0, 3],
    explanation: ""
  },
  {
    id: "bio-107",
    topic: "Introducere în anatomie și fiziologie",
    text: "107. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Proteinele care oferă un cadru de sprijin pentru ARN (acid ribonucleic) în cromozomi se numesc histone",
      "B. Când pe reticulul endoplasmatic sunt prezenți ribozomi, reticulul endoplasmatic se numeşte rugos",
      "C. Înainte de a fi transportate spre destinațiile finale, proteinele şi lipidele sunt procesate într-un organit celular numit nucleozom",
      "D. Organitele care eliberează energia celulară din molecule de proveniență alimentară şi în care se produc moleculele de ATP (adenozin-trifosfat) sunt mitocondriile",
      "E. Principalele componente ale citoscheletului sunt filamentele intermediare, microfilamentele şi microtubulii"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-108",
    topic: "Metabolism și nutriție",
    text: "108. Selectați afirmațiile adevărate referitoare la energia celulară:",
    options: [
      "A. Reacţiile chimice însoțite de eliberare de energie se numesc exergonice",
      "B. Reacţiile chimice care necesită energie pentru desfăşurarea lor se numesc endergonice",
      "C. Proteinele care accelerează reacțiile chimice, ele însele rămânând neschimbate, se numesc hormoni",
      "D. Cele trei părți ale unei molecule de adenozin-trifosfat (ATP) sunt uracilul, unitatea fosfat şi riboza",
      "E. Sursa energetică imediată folosită de majoritatea celulelor umane este adenozintrifosfatul (ATP)"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-109",
    topic: "Metabolism și nutriție",
    text: "109. Despre adenozin-trifosfat (ATP) este adevărat că:",
    options: [
      "A. Atunci când elimină gruparea fosfat terminală, se eliberează energie echivalentă cu 7,3 kcal/mol",
      "B. Prin descompunerea lui pentru a furniza energie sunt eliberate riboza şi adenozina",
      "C. Serveşte drept sursă de energie în timpul contracției musculare",
      "D. Conţine o singură grupare fosfat cu nivel energetic ridicat, pe care o eliberează sub acţiunea ATP-azei",
      "E. În fibra musculară trebuie în permanenţă regenerat din ADP şi grupări fosfat, cu aport de energie"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-110",
    topic: "Metabolism și nutriție",
    text: "110. Selectați afirmațiile false dintre cele de mai jos:",
    options: [
      "A. Energia necesară supraviețuirii celulelor corpului uman provine din alimente",
      "B. Orice reacție chimică în care se eliberează energie se numeşte exergonică",
      "C. Orice reacție chimică în care se eliberează energie se numeşte endergonică",
      "D. Reacțiile chimice se desfăşoară în celule fără a implica schimburi energetice",
      "E. Compuşii chimici din celule reacționează între ei automat şi se degradează spontan"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-111",
    topic: "Metabolism și nutriție",
    text: "111. Care dintre următoarele afirmaţii caracterizează enzimele?",
    options: [
      "A. Majoritatea enzimelor au structură glicolipidică",
      "B. Acționează nespecific asupra substratului, transformându-l în produs final de reacție",
      "C. Temperaturile ridicate pot determina denaturarea structurii lor",
      "D. Participă la reacții chimice în cadrul unor căi metabolice",
      "E. Prezintă o porțiune-cheie, zona activă, la nivelul căreia se leagă moleculele de substrat"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-112",
    topic: "Metabolism și nutriție",
    text: "112. Selectați afirmațiile adevărate referitoare la enzime:",
    options: [
      "A. Fiecare enzimă catalizează o singură reacție chimică, scăzând energia de activare necesară desfăşurării acesteia",
      "B. O enzimă poate cataliza una sau mai multe reacții chimice diferite, situație în care se regăseşte modificată structural la finalul reacției sau reacțiilor catalizate",
      "C. Substanţa asupra căreia acţionează o enzimă pentru a se obține reactantul se numeşte produs final",
      "D. Substanţa asupra căreia acţionează o enzimă pentru a se obține produsul final se numeşte substrat",
      "E. Amilaza, catalaza şi peptidaza sunt exemple de proteine care acționează ca enzime asupra unor substraturi"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-113",
    topic: "Metabolism și nutriție",
    text: "113. Selectaţi răspunsurile corecte referitoare la enzime şi la acțiunea acestora:",
    options: [
      "A. Prezintă o porţiune-cheie, zona activă, care interacționează cu substratul, accelerând obținerea produşilor finali",
      "B. Majoritatea enzimelor sunt de natura polizaharidică, exceptând peptidazele, care sunt de natură proteică",
      "C. Temperatura influenţează viteza unei reacții catalizate enzimatic (la temperaturi ridicate, reacţiile enzimatice au loc mult mai rapid)",
      "D. Energia de activare termică a unei reacţii endergonice sau exergonice este produsă de enzime",
      "E. Temperatura influenţează viteza unei reacții catalizate enzimatic dar excesul de căldură poate provoca modificarea structurii proteice a enzimei (denaturarea ei)"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-114",
    topic: "Metabolism și nutriție",
    text: "114. Selectați afirmațiile false referitoare la enzime:",
    options: [
      "A. Sunt catalizatori anorganici, care accelerează reacția enzimatică şi se consumă până la finalul acesteia",
      "B. De obicei, reacțiile catalizate enzimatic se desfăşoară rapid, în câteva milisecunde, iar viteza lor este influențată de factori cum este concentrația substratului",
      "C. De obicei, reacţiile catalizate enzimatic se desfăşoară lent, în câteva ore iar viteza de reacţie nu depinde de concentrația substratului",
      "D. Produşii unei reacții catalizate de o enzimă se numesc produşi finali",
      "E. Concentrația substratului şi aciditatea mediului în care are loc reacția catalizată enzimatic nu influențează viteza de desfăşurare a acesteia"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-115",
    topic: "Metabolism și nutriție",
    text: "115. Care dintre afirmaţiile următoare sunt false?",
    options: [
      "A. Procesele catabolice presupun sinteza unor molecule mari, iar cele anabolice presupun degradarea unor molecule complexe",
      "B. O cale metabolică este o secvență de reacții chimice care are loc într-o celulă",
      "C. Într-o celulă numărul enzimelor este foarte redus, doar câteva reacții chimice de degradare fiind catalizate enzimatic",
      "D. Procesele anabolice presupun sinteza de molecule complexe (proteine, polizaharide, fosfolipide)",
      "E. Procesele anabolice presupun digestia moleculelor mari, complexe (spre exemplu, oxidarea glucozei sau a acizilor graşi)"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-116",
    topic: "Introducere în anatomie și fiziologie",
    text: "116. Care dintre următoarele afirmații sunt false?",
    options: [
      "A. Celulele epiteliale din tractul gastrointestinal nu se divid (spre deosebire de hematii)",
      "B. Catalaza este enzima care degradează peroxidul de hidrogen în apă şi oxigen",
      "C. Cilii şi flagelii sunt extensii ataşate pe fața membranei nucleare orientată spre citoplasmă",
      "D. ADN-ul din structura materialului nuclear este alcătuit din nucleozide (ribozoxă + baze azotate) legate unele de altele prin legături ionice",
      "E. În interiorul mitocondriei, respirația celulară este completă atunci când are loc combinarea oxigenului cu hidrogen şi electroni pentru a forma apa"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-117",
    topic: "Introducere în anatomie și fiziologie",
    text: "117. Selectați afirmațiile adevărate referitoare la materialul nuclear al celulei:",
    options: [
      "A. Este compus în principal din acid dezoxiribonucleic şi dintr-un tip de proteine numite histone",
      "B. Conţine ADN organizat în unități circulare cu denumirea de cromozomi (forma despiralizată) sau de cromatină (forma spiralizată)",
      "C. Conţine ADN organizat fie sub formă de cromozomi, fie sub formă de cromatină",
      "D. Constă din fosfolipide şi ATP, acesta din urmă alcătuit din nucleotide legate unele de altele prin legături covalente",
      "E. Se găseşte sub formă de cromatină despiralizată în faza G₁ a ciclului celular."
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-118",
    topic: "Introducere în anatomie și fiziologie",
    text: "118. Selectați afirmațiile false referitoare la materialul nuclear al celulei:",
    options: [
      "A. Nucleozomul este o structură cu dimensiuni electronomicroscopice, alcătuită din ADN şi complexe histonice",
      "B. Un nucleozom este o structură alcătuită dintr-un lanț dublu spiralat de acid ribonucleic (ARN) înfăşurat în jurul complexelor de histone",
      "C. Un cromozom este alcătuit din milioane de nucleozomi care se înfășoară între ei",
      "D. Structura şi conținutul nucleului sunt implicate direct în reproducerea celulară",
      "E. Nucleozomul este alcătuit dintr-un mare număr de molecule de acid dezoxiribonucleic, în jurul cărora se înfăşoară proteina histonică"
    ],
    correct: [1, 4],
    explanation: ""
  },
  {
    id: "bio-119",
    topic: "Introducere în anatomie și fiziologie",
    text: "119. Despre reproducerea celulară şi ciclul celular este adevărat că:",
    options: [
      "A. În anumite ţesuturi ale corpului uman celulele se divid frecvent (tract gastrointestinal), în altele se divid mai rar",
      "B. Ciclul celular are două etape importante: interfaza (G1-S-G2) şi mitoza (profaza-metafaza-anafază-telofază)",
      "C. Ciclul celular poate fi definit ca repetarea creşterii şi reproducerii celulare",
      "D. Una dintre etapele ciclului celular este interfaza formată din patru faze: profază, metafază, anafază şi telofază",
      "E. Nucleul, prin structura şi conținutul lui, este direct implicat în reproducerea celulară"
    ],
    correct: [0, 1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-120",
    topic: "Introducere în anatomie și fiziologie",
    text: "120. Selectați răspunsurile corecte referitoare la ciclul celular:",
    options: [
      "A. Perioada din cadrul ciclului celular în care ADN-ul nuclear al celulei este distribuit spre cele două celule fiice se numeşte mitoză",
      "B. Etapa interfazei în care celula sintetizează proteine structurale şi enzime este reprezentată de faza G3",
      "C. Faza S, aparținând interfazei, reprezintă perioada în care ADN-ul din nucleu se replică (fiecare cromozom fiind copiat cu acuratețe)",
      "D. În timpul fazei G2 a interfazei, celula se pregăteşte de mitoză, iar proteinele citoplasmatice se organizează într-o serie de filamente numite histone",
      "E. În faza G2 a interfazei celulele cresc, îşi îndeplinesc funcția şi se pregătesc de intrarea în mitoză"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-121",
    topic: "Introducere în anatomie și fiziologie",
    text: "121. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Interfaza este perioada în care se desfăşoară toate activitățile specifice unei celule",
      "B. Cariokineza reprezintă diviziunea efectivă a celulei",
      "C. Creşterea în dimensiuni a celulei se produce în toate cele trei faze distincte ale interfazei",
      "D. Ciclul celular constă în patru faze distincte, care se desfăşoară în ordinea: anafaza, profaza, metafaza şi telofaza",
      "E. După faza S a interfazei, în urma replicării ADN-ului nuclear, celula va avea 46 de cromozomi, fiecare cu câte două cromatide per cromozom"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-122",
    topic: "Introducere în anatomie și fiziologie",
    text: "122. Ciclul celular prezintă ca etape majore interfaza şi mitoza. Care dintre afirmațiile de mai jos caracterizează interfaza?",
    options: [
      "A. Este perioada ciclului celular în care ADN-ul (acidul dezoxiribonucleic) nuclear al celulei este împărțit între cele două celule fiice",
      "B. Este faza în care cromozomii se găsesc sub formă de cromatină despiralizată",
      "C. În cadrul ei se derulează faza S, în care are loc dublarea cantității de ADN (acid dezoxiribonucleic)",
      "D. Este perioada în care se desfăşoară toate activitățile specifice unei celule",
      "E. Se mai numeşte citokineză (formarea a două celule separate)"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-123",
    topic: "Introducere în anatomie și fiziologie",
    text: "123. Selectați afirmațiile false cu privire la ciclul celular:",
    options: [
      "A. Are două perioade majore: interfaza şi mitoza",
      "B. Interfaza are patru faze (care decurg în ordinea telofază, anafază, metafază şi profază), iar mitoza trei faze (care decurg în succesiunea G1, G2 şi S)",
      "C. În faza G2 a mitozei, celula sintetizează proteine structurale, enzime şi creşte în dimensiuni",
      "D. În faza S a interfazei, ADN-ul (acidul dezoxoribonucleic) nuclear se replică, dar nu apare sub formă de cromozomi, ci sub formă de cromatină",
      "E. În faza S, prin procesul de replicare a ADN-ului (acidului dezoxiribonucleic), cele 46 de cromatide citoplasmatice (care formează cromatina nucleară) îşi sintetizează câte două copii identice"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-124",
    topic: "Introducere în anatomie și fiziologie",
    text: "124. Alegeţi asocierile corecte referitoare la ciclul celular şi la fazele (etapele) sale:",
    options: [
      "A. Interfaza - replicarea ADN-ului - desfăşurarea activităților specifice celulei",
      "B. Citokineza - alinierea cromozomilor la nivelul plăcii metafazice – 92 de cromatide",
      "C. Faza G - activități normale ale celulei (secreția de substanțe în celula glandulară, contracția în celula musculară)",
      "D. Ciclul celular - derularea a trei faze distincte - profaza, metafaza şi telofaza - finalizare prin meioză",
      "E. Faza G1 din interfază - sinteză de proteine structurale - creştere dimensională a celulei – cromatină despiralizată"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-125",
    topic: "Introducere în anatomie și fiziologie",
    text: "125. Despre cromatide, cromozomi şi cromatină este adevărat că:",
    options: [
      "A. Se prezintă sub formă de structuri fibrilare sau granulare vizibile cu ochiul liber",
      "B. Conţin informația genetică pentru sinteza proteinelor",
      "C. Se asociază cu moleculele de ATP (adenozin-trifosfat), formând nucleozomi",
      "D. Conțin ADN (acid dezoxiribonucleic) şi proteine asociate acestuia, denumite histone",
      "E. Nu conțin ARN (acid ribonucleic)"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-126",
    topic: "Introducere în anatomie și fiziologie",
    text: "126. Selectați afirmațiile adevărate referitoare la mitoză:",
    options: [
      "A. Este una dintre cele două perioade ale ciclului celular, alături de interfază",
      "B. Este una dintre cele două perioade ale ciclului celular, alături de spiralizarea cromozomilor",
      "C. Este perioada ciclului celular în care ADN-ul (acidul dezoxiribonucleic) nuclear al celulei este împărțit între cele două celule fiice",
      "D. După mitoză urmează faza S, etapă a interfazei",
      "E. Este singura perioadă în care celula sintetizează proteine structurale"
    ],
    correct: [0, 2],
    explanation: ""
  },
  {
    id: "bio-127",
    topic: "Introducere în anatomie și fiziologie",
    text: "127. Selectați informațiile corecte referitoare la mitoză:",
    options: [
      "A. Este un proces continuu care cuprinde mai multe etape succesive (profaza, metafază, anafază şi telofază)",
      "B. Stadiul în care cele 92 de cromatide se aliniază sub forma a 46 de cromozomi de-a lungul plăcii ecuatoriale este metafaza",
      "C. În timpul profazei, structurile microscopice care migrează spre polii opuşi ai celulei se numesc centrozomi",
      "D. Când cromozomii ajung la polii opuşi ai celulei, spiralizându-se pentru a forma cromatina, celula se află în telofază",
      "E. Când cromozomii ajung la polii opuşi ai celulei, despiralizându-se şi dispersându-se pentru a forma cromatina, celula se află în telofază"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-128",
    topic: "Introducere în anatomie și fiziologie",
    text: "128. Selectați asocierile adevărate referitoare la evenimentele derulate în timpul mitozei:",
    options: [
      "A. La începutul profazei - condensarea cromatinei şi formarea de filamente vizibile",
      "B. În timpul interfazei - desfăşurarea funcţiilor specifice ale celulei",
      "C. În timpul fazei G2 - sinteza enzimelor şi a proteinelor structurale",
      "D. În timpul metafazei - alinierea perechilor de cromatide în planul ecuatorial (alinierea centromerilor în placa metafazică)",
      "E. În timpul telofazei - despiralizarea şi dispersarea cromozomilor ajunşi la polii opuşi ai celulei, pentru a forma mase de cromatină"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-129",
    topic: "Introducere în anatomie și fiziologie",
    text: "129. ARN-ul (acidul ribonucleic) este conținut în celulă într-o serie de structuri, cu excepția:",
    options: [
      "A. Ribozomilor, la nivelul cărora are loc sinteza proteinelor",
      "B. Moleculelor care transportă în citoplasmă informația genetică, primită în urma transcripției",
      "C. Filamentelor fusului de diviziune, formate din microtubuli",
      "D. Moleculelor care transportă aminoacizii la ribozomi în timpul sintezei proteice",
      "E. Cromatinei despiralizate din metafaza ciclului celular"
    ],
    correct: [2, 4],
    explanation: ""
  },
  {
    id: "bio-130",
    topic: "Introducere în anatomie și fiziologie",
    text: "130. Selectați afirmațiile adevărate referitoare la faza G1 din interfază:",
    options: [
      "A. Este perioada în care celula sintetizează proteine structurale",
      "B. Este perioada în care celula sintetizează enzime",
      "C. Urmează după faza S a ciclului celular",
      "D. În această etapă, celula creşte în dimensiuni",
      "E. În această etapă are loc replicarea ADN-ului (acidului dezoxiribonucleic) nuclear"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-131",
    topic: "Introducere în anatomie și fiziologie",
    text: "131. Selectați asocierile corecte dintre cele de mai jos referitoare la ciclul celular:",
    options: [
      "A. Faza G1 - urmează mitozei - sinteză de proteine structurale şi enzime - creştere în dimensiuni a celulei",
      "B. Interfază - perioadă a ciclului celular între fazele G1 şi G2 - funcţii celulare inhibate",
      "C. Faza S - sinteză de ADN (acid dezoxiribonucleic) - replicarea ADN-ului",
      "D. Faza G2 - continuă creşterea celulară - continuă desfășurarea funcțiilor celulei",
      "E. Faza S - sinteza ADN-ului - citokineză – sinteza ARN-ului"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-132",
    topic: "Introducere în anatomie și fiziologie",
    text: "132. Selectați afirmațiile adevărate referitoare la faza S a ciclului celular:",
    options: [
      "A. La sfârşitul acestei faze, cantitatea de ADN (acid dezoxiribonucleic) nuclear va fi dublă comparativ cu cea din faza G2",
      "B. La sfârşitul acestei faze, cantitatea de ADN (acid dezoxiribonucleic) nuclear va fi dublă comparativ cu cea din faza G1",
      "C. Se derulează între fazele G1 şi G2",
      "D. Este o etapă a mitozei, ca şi metafaza",
      "E. În această fază, cromozomii nucleari nu sunt vizibili"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-133",
    topic: "Introducere în anatomie și fiziologie",
    text: "133. Despre succesiunea evenimentelor derulate în ciclul celular se poate afirma că:",
    options: [
      "A. Faza G urmează anafazei şi precede faza S",
      "B. Faza G2 urmează fazei S şi precede profaza",
      "C. Interfaza cuprinde în ordine etapele S-G2-G1",
      "D. Profaza târzie urmează după anafază",
      "E. Anafaza precede metafaza şi urmează telofazei"
    ],
    correct: [1],
    explanation: ""
  },
  {
    id: "bio-134",
    topic: "Introducere în anatomie și fiziologie",
    text: "134. Despre faza G1 a ciclului celular nu este adevărat că:",
    options: [
      "A. Acum are loc sinteza de proteine structurale şi de enzime, fără replicarea ADN-ului (acid dezoxiribonucleic)",
      "B. Precede interfaza şi asigură sinteza proteinelor structurale şi enzimelor, ca şi replicarea ADN-ului nuclear",
      "C. Este urmată de fazele S şi apoi G2 ale interfazei",
      "D. Acum au loc activități normale ale celulei iar cromozomii se află sub formă de cromatină despiralizată",
      "E. Este denumită şi citokineză, finalizându-se prin separarea celor două celule fiice"
    ],
    correct: [1, 4],
    explanation: ""
  },
  {
    id: "bio-135",
    topic: "Introducere în anatomie și fiziologie",
    text: "135. Selectați afirmațiile false referitoare la faza G2 a ciclului celular:",
    options: [
      "A. Este perioada în care celula se pregăteşte pentru intrarea în telofază",
      "B. Este perioada în care celula se pregăteşte pentru mitoză",
      "C. Urmează după faza S, la sfârşitul căreia în nucleu există 92 de cromatide (câte două cromatide/cromozom)",
      "D. Are loc înaintea fazei S de replicare a acidului dezoxiribonucleic",
      "E. Cromozomii sunt spiralizați, cu o singură cromatidă, aşezați la nivelul plăcii ecuatoriale"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-136",
    topic: "Introducere în anatomie și fiziologie",
    text: "136. Selectați afirmațiile adevărate referitoare la fusul de diviziune:",
    options: [
      "A. Este alcătuit din microtubuli, structuri de natură proteică",
      "B. Este asamblat (reconstruit) pentru fiecare mitoză şi dezasamblat la sfârşitul mitozei",
      "C. În profază, de filamentele lui se ataşează cromatidele prin intermediul kinetocorului de la nivelul centromerului",
      "D. Este asamblat (reconstruit) pentru fiecare interfază şi dezasamblat la sfârşitul acesteia",
      "E. Filamentele lui sunt alcătuite din microtubuli"
    ],
    correct: [0, 1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-137",
    topic: "Introducere în anatomie și fiziologie",
    text: "137. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. În celulele umane există 64 de cromozomi, fiecare cu câte o cromatidă/cromozom în faza G1 şi cu câte două cromatide/cromozom după faza S",
      "B. În celulele umane există 46 de cromozomi, fiecare cu câte o cromatidă/cromozom în faza G1 şi cu câte două cromatide/cromozom după faza S",
      "C. În interfază, materialul genetic se găseşte sub formă de masă dispersată de ADN (acid dezoxiribonucleic) şi de proteine asociate lui",
      "D. În mitoză, cromozomii se organizează sub formă de mononucleotide",
      "E. În metafază, cromozomii se găsesc sub formă de cromatină dispersată"
    ],
    correct: [1, 2],
    explanation: ""
  },
  {
    id: "bio-138",
    topic: "Introducere în anatomie și fiziologie",
    text: "138. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. În celulele umane există 92 de cromozomi în faza G1",
      "B. Cu puţine excepții (spre exemplu eritrocitele) toate celulele corpului uman se divid",
      "C. O moleculă de ATP (adenozin-trifosfat) este formată din adenină (bază azotată), pentoza riboză şi trei unități fosfat şi serveşte drept sursă de energie imediată pentru toate celulele organismului.",
      "D. În structura fiecărui nucleozom intră milioane de cromozomi",
      "E. În corpul uman, excesul de căldură poate provoca denaturarea structurii enzimelor implicate în reacțiile chimice"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-139",
    topic: "Introducere în anatomie și fiziologie",
    text: "139. Selectați răspunsurile şi asocierile corecte dintre cele de mai jos:",
    options: [
      "A. Ciclul celular - interfaza şi mitoza - repetarea creşterii şi reproducerii celulare",
      "B. Separarea efectivă a celor două celule fiice - citokineza - proces prin care se divide citoplasma, rezultând două celule separate",
      "C. Replicarea ADN (acidul dezoxiribonucleic) are loc în mitoză",
      "D. Interfaza cuprinde fazele G1-S-G2",
      "E. Telofaza - urmează anafazei - despiralizarea cromozomilor ajunşi la polii opuşi ai celulei - formarea unor mase de cromatină - dezasamblarea fusului de diviziune"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-140",
    topic: "Introducere în anatomie și fiziologie",
    text: "140. Selectaţi afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Prin ciclu celular se înţelege reproducerea sexuată a celulei procariote",
      "B. Pierderea controlului asupra mitozei poate să conducă la apariția cancerului",
      "C. În celulele umane (exceptând gameţii) sunt 23 cromozomi, fiecare cu câte o cromatidă",
      "D. În anafază, cromozomii sunt tractați spre polii opuşi ai celulei cu ajutorul filamentelor fusului de diviziune şi adoptă forma literei „V\"",
      "E. Mitoza este una dintre perioadele principale ale ciclului celular şi cuprinde mai multe etape succesive"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-141",
    topic: "Introducere în anatomie și fiziologie",
    text: "141. Selectați asocierile corecte referitoare la fazele ciclului celular:",
    options: [
      "A. Faza S - interfază - replicarea ADN (acid dezoxiribonucleic)",
      "B. Faza G2 - mitoză - celula creşte",
      "C. Faza G1 - sinteză proteică - cromatină despiralizată",
      "D. Faza G1 – sinteză de enzime - cromatină despiralizată",
      "E. Faza S - mitoză - replicarea ARN-ului (acidului ribonucleic)"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-142",
    topic: "Introducere în anatomie și fiziologie",
    text: "142. Alegeți succesiunea corectă a fazelor din derularea ciclului celular:",
    options: [
      "A. S - G1 - mitoză - G2",
      "B. Interfază - profază - metafază - anafază - telofază",
      "C. G1 - S - G2 - mitoză",
      "D. S1 - G - S2 - interfază",
      "E. G1 - S - G2 - profază"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-143",
    topic: "Introducere în anatomie și fiziologie",
    text: "143. Selectați afirmațiile corecte dintre cele de mai jos referitoare la o prezentare succintă a mitozei, aşa cum se desfăşoară în celula umană:",
    options: [
      "A. În metafază numărul cromatidelor se dublează prin procesul de replicare",
      "B. În profază se dezasamblează membrana nucleară şi nucleolii dispar",
      "C. În profaza târzie cromozomii au câte două cromatide surori şi se ataşează de filamentele fusului de diviziune prin intermediul kinetocorului de la nivelul centromerului",
      "D. În metafază are loc alinierea cromozomilor ai polii celulei-mamă",
      "E. În anafază, câte un set de 46 de cromozomi cu o singură cromatidă migrează spre fiecare din cei doi poli ai celulei"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-144",
    topic: "Introducere în anatomie și fiziologie",
    text: "144. Care dintre următoarele afirmaţii sunt false?",
    options: [
      "A. Profaza reprezintă prima etapă a mitozei şi este urmată de metafază",
      "B. Microtubulii radiari, care înconjoară centriolii ajunşi la polii opuşi ai celulei în profază, poartă numele de aster",
      "C. Căile metabolice care utilizează catabolismul asigură sinteza moleculelor mari",
      "D. O enzimă conţine o porţiune cheie denumită substrat şi va acţiona asupra zonei active a produsului final",
      "E. Similară fagocitozei, exocitoza este o modalitate importantă de locomoție a celulelor secretoare"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-145",
    topic: "Introducere în anatomie și fiziologie",
    text: "145. Selectați afirmațiile adevărate referitoare la profază:",
    options: [
      "A. Începe cu despiralizarea cromatinei şi formarea de filamente vizibile",
      "B. În această etapă se produce condensarea cromatinei cu formarea de filamente vizibile",
      "C. În această fază există câte patru copii ale fiecărui filament cromozomial",
      "D. În această etapă există 46 de perechi de cromatide",
      "E. În această etapă, două structuri macroscopice denumite centromeri migrează spre polii celulei"
    ],
    correct: [1,3],
    explanation: ""
  },
  {
    id: "bio-146",
    topic: "Introducere în anatomie și fiziologie",
    text: "146. În celulele umane aflate în profază:",
    options: [
      "A. Cele două cromatide surori sunt unite într-o regiune numită centromer",
      "B. Nucleolii dispar, iar membrana nucleară se dezasamblează",
      "C. Centriolii (structuri de dimensiuni microscopice) migrează spre acelaşi pol al celulei",
      "D. Structurile de dimensiuni microscopice - centriolii - migrează spre polii opuşi ai celulei",
      "E. Centriolii situați la polii opuşi ai celulei sunt înconjurați de microtubuli radiari, denumiţi aster"
    ],
    correct: [0, 1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-147",
    topic: "Introducere în anatomie și fiziologie",
    text: "147. Selectați afirmațiile false referitoare la profază:",
    options: [
      "A. Fusul de diviziune se dezasamblează",
      "B. Învelişul nuclear se dezasamblează",
      "C. Învelişul nuclear nu suferă modificări",
      "D. Cromatidele surori (identice între ele), sunt unite la nivelul centromerului",
      "E. Cromatidele surori (identice între ele), sunt unite la nivelul asterului"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-148",
    topic: "Introducere în anatomie și fiziologie",
    text: "148. Selectați afirmațiile adevărate referitoare la evenimentele din profază:",
    options: [
      "A. Centriolii migrează spre polii celulei",
      "B. Filamentele fusului de diviziune se extind",
      "C. Centriolii migrează spre placa ecuatorială",
      "D. Cromatidele se ataşează de filamentele fusului de diviziune prin intermediul unei structuri de la nivelul centromerului numită kinetocor",
      "E. Cromatidele se ataşează de membrana celulară prin intermediul centromerilor"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-149",
    topic: "Introducere în anatomie și fiziologie",
    text: "149. Selectați modificările care apar la nivel celular în profază:",
    options: [
      "A. Cele două cromatide ale cromozomilor se unesc printr-o formaţiune de natură lipidică numită kinetocor",
      "B. Centriolii poziționați la cei doi poli ai celulei sunt înconjurați de aster, alcătuit din microtubuli dispuşi radiar",
      "C. Cromatina se ataşează de fusul de diviziune, alcătuit din microfilamente intermediare prin intermediul centromerilor",
      "D. Kinetocorii conțin o proteină motorie care contribuie la deplasarea cromozomilor în celulă",
      "E. Membrana dublă a nucleului se dezasamblează şi nucleolii dispar"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-150",
    topic: "Introducere în anatomie și fiziologie",
    text: "150. Selectați afirmațiile adevărate referitoare la metafază:",
    options: [
      "A. Este o etapă a mitozei care se desfăşoară după profază",
      "B. Este o etapă a interfazei după care urmează anafaza",
      "C. Perechile de cromatide sunt aliniate în placa ecuatorială",
      "D. În această etapă se reface învelişul nuclear",
      "E. Placa ecuatorială se mai numeşte şi placă metafazică"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-151",
    topic: "Introducere în anatomie și fiziologie",
    text: "151. Selectați afirmaţiile false referitoare la evenimentele care se desfăşoară în metafază:",
    options: [
      "A. Fusul de diviziune se dezasamblează",
      "B. Cromozomii sunt aşezați în planul ecuatorial, formând placa ecuatorială sau placa metafazică",
      "C. Reapar nucleolii",
      "D. Se reface învelişul nuclear",
      "E. Se dezasamblează membrana celulară"
    ],
    correct: [0, 2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-152",
    topic: "Introducere în anatomie și fiziologie",
    text: "152. Selectaţi afirmațiile adevărate referitoare la anafază:",
    options: [
      "A. Cromozomii sunt tractați spre un singur pol al celulei",
      "B. Cromozomii sunt tractați spre polii opuşi ai celulei",
      "C. Pe măsură ce migrează spre poli, cromozomii iau forma literei „V\"",
      "D. Cromozomii sunt ataşaţi de filamentele fusului de diviziune, în zona centromerului",
      "E. Cromozomii sunt ataşaţi pe placa ecuatorială."
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-153",
    topic: "Introducere în anatomie și fiziologie",
    text: "153. Selectați afirmaţiile false referitoare la anafază:",
    options: [
      "A. Se desfăşoară înaintea metafazei",
      "B. Ca etapă a mitozei este urmată de telofază şi precedată de metafază",
      "C. Cromozomii cu o singură cromatidă se îndepărtează unul de celălalt, fiind ataşați filamentelor fusului de diviziune",
      "D. Pentru că unul dintre telomere rămâne în urmă, cromozomii se deplasează spre polii celulei, luând forma literei „Y\"",
      "E. Pe măsură ce migrează, cromozomii iau forma literei „V\", fiind pe toată lungimea lor ataşați de filamentele fusului de diviziune"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-154",
    topic: "Introducere în anatomie și fiziologie",
    text: "154. Selectați afirmațiile false referitoare la telofază:",
    options: [
      "A. În derularea ei, cromozomii ajung la polii opuşi ai celulei",
      "B. Ca etapă în desfăşurarea mitozei, urmează după anafază",
      "C. Acum se formează fusul de diviziune al următoarei mitoze",
      "D. Cromatina se condensează şi prin dispersare, formează cromozomii care se deplasează spre poli",
      "E. Toți cromozomii ajunşi la acelaşi pol al celulei se spiralizează, se dispersează şi formează mase de cromatină"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-155",
    topic: "Introducere în anatomie și fiziologie",
    text: "155. Selectați asocierile corecte referitoare la evenimentele din telofază:",
    options: [
      "A. Fus de diviziune - formare",
      "B. Fus de diviziune - dezasamblare",
      "C. Înveliş nuclear - refacere",
      "D. Înveliş nuclear - dezasamblare",
      "E. Nucleolii - reapariţie"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-156",
    topic: "Introducere în anatomie și fiziologie",
    text: "156. Selectați enunțurile care conțin câte două afirmații adevărate referitoare la evenimentele din telofază:",
    options: [
      "A. Cromozomii ajung la polii opuşi ai celulei. Se reface învelişul nuclear",
      "B. Se dezasamblează învelişul nuclear. Se formează fusul de diviziune",
      "C. Cromozomii se despiralizează şi se dispersează pentru a forma mase de cromatină. Reapar nucleolii",
      "D. Se dezasamblează fusul de diviziune. Dispar nucleolii",
      "E. Se reface învelişul celular. Se formează cromozomii cu câte două centromere surori"
    ],
    correct: [0, 2],
    explanation: ""
  },
  {
    id: "bio-157",
    topic: "Introducere în anatomie și fiziologie",
    text: "157. Selectați evenimentele care nu se petrec în mitoză:",
    options: [
      "A. Începe condensarea cromatinei în metafază",
      "B. În profază, centriolii migrează spre polii opuşi ai celulei",
      "C. Centromerii se ataşează de filamentele fusului de diviziune prin cromatide (proteine motorii)",
      "D. În metafază, toate perechile de nucleotide se aliniază la polii celulei",
      "E. În anafază, spre fiecare pol al celulei se deplasează câte 46 de cromozomi"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-158",
    topic: "Introducere în anatomie și fiziologie",
    text: "158. Selectați afirmațiile adevărate referitoare la citokineză:",
    options: [
      "A. Are loc în interfază, înaintea profazei",
      "B. Este procesul prin care citoplasma se divide şi se formează două celule separate (celulele fiice)",
      "C. Este procesul de unire a celor două celule fiice, dând naştere unei noi celule unice",
      "D. Este procesul prin care citoplasma celulei care se divide se distribuie între cele două celule fiice",
      "E. Începe prin apariția unui şanţ de clivare la nivelul plăcii ecuatoriale"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-159",
    topic: "Introducere în anatomie și fiziologie",
    text: "159. Selectați asocierile corecte dintre cele de mai jos:",
    options: [
      "A. Şanţ de clivare - şanţ apărut la nivelul kinetocorului",
      "B. Citokineza - separarea celor două celule fiice",
      "C. Mitoza şi citokineza - permit creşterea organismului prin reproducere sexuată",
      "D. Clivaj celular - strangularea citoplasmei de către membrana celulară, prin contracția microfilamentelor, finalizată cu formarea celulelor fiice",
      "E. Mitoza şi citokineza – înlocuirea celulelor îmbătrânite şi deteriorate, prin formare de noi celule"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-160",
    topic: "Introducere în anatomie și fiziologie",
    text: "160. Selectați afirmațiile false referitoare la clivajul celular:",
    options: [
      "A. Este posibil datorită contracției microfilamentelor",
      "B. Este posibil datorită relaxării microfilamentelor",
      "C. Reprezintă unirea celor două celule fiice",
      "D. Reprezintă separarea celor două celule fiice",
      "E. Are loc între metafază şi telofază"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-161",
    topic: "Introducere în anatomie și fiziologie",
    text: "161. Selectați afirmațiile adevărate referitoare la mitoză:",
    options: [
      "A. Permite organismului să crească prin formarea de noi celule",
      "B. Presupune formarea de celule îmbătrânite",
      "C. Permite înlocuirea celulelor îmbătrânite sau deteriorate, cu celule noi",
      "D. Cuprinde mai multe etape succesive şi alături de interfaza participă la alcătuirea ciclului celular",
      "E. Mai poartă numele de diviziune meiotică"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-162",
    topic: "Introducere în anatomie și fiziologie",
    text: "162. Selectați afirmațiile adevărate cu privire la mitoză:",
    options: [
      "A. În profază, membrana nucleară şi nucleolii dispar iar cromatina se condensează",
      "B. În metafază, centriolii se aliniază în planul ecuatorial, formând placa ecuatorială",
      "C. În anafază, cromozomii cu o singură cromatidă se deplasează către cei doi poli",
      "D. În telofază, cromozomii se condensează, devenind vizibili şi se reasamblează nucleolii formaţi din ADN",
      "E. Pierderea controlului asupra mitozei poate avea drept cauză o mutație a ADN-ului (acidului dezoxiribonucleic)"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-163",
    topic: "Introducere în anatomie și fiziologie",
    text: "163. Selectați afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Cromozomii se despiralizează în telofază",
      "B. Profaza timpurie urmează profazei târzii",
      "C. Segmentele funcționale ale cromozomilor sunt denumite gene",
      "D. Există circa 30.000 de gene în nucleii celulelor umane",
      "E. Glicolipidele membranare sunt depozitarii informației genetice în celula procariotă"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-164",
    topic: "Introducere în anatomie și fiziologie",
    text: "164. Selectați afirmaţiile adevărate referitoare la boala canceroasă (cancer):",
    options: [
      "A. Presupune creşterea ritmului de derulare a mitozelor",
      "B. Presupune scăderea ritmului de derulare a mitozelor",
      "C. Este o afecţiune în care celulele canceroase, care nu funcționează normal, se pot răspândi în organism",
      "D. Poate să apară în urma unei mutații suferite de ADN (acidul dezoxiribonucleic)",
      "E. Nu presupune pierderea controlului mitozei, ci doar o răspândire accelerată a unor celule care funcţionează normal în organism"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-165",
    topic: "Introducere în anatomie și fiziologie",
    text: "165. Alegeți afirmațiile adevărate referitoare la cromozomi:",
    options: [
      "A. Baza azotată uracil şi monozaharidul riboză sunt substanțe organice prezente în structura cromozomilor",
      "B. În alcătuirea cromozomilor se regăsesc proteinele denumite histone şi acidul dezoxiribonucleic",
      "C. Vitamina C este absentă din structura cromozomilor",
      "D. Prin supraspiralizare, cromozomii vor forma cromatină condensată",
      "E. Compactarea suplimentară a ADN-ului şi formarea cromozomilor condensați se realizează prin supraspiralizarea nucleozomilor"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-166",
    topic: "Introducere în anatomie și fiziologie",
    text: "166. Selectați afirmațiile adevărate cu privire la gene:",
    options: [
      "A. Sunt segmente funcționale ale cromozomilor",
      "B. Sunt în număr de circa 3x10^4 în nucleii celulelor umane",
      "C. Pe una dintre moleculele ADN ale dublului helix, la locul unde gena va fi exprimată, se leagă enzima ARN-polimerază, declanşând transcripția",
      "D. Genele sunt ţinute sub control în timpul mitozei, cromozomul fiind compactat",
      "E. Conțin secvențe nucleotidice cu uracil şi riboză"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-167",
    topic: "Introducere în anatomie și fiziologie",
    text: "167. Selectați afirmațiile adevărate despre acizii nucleici:",
    options: [
      "A. ADN (acid dezoxiribonucleic) este format din baze azotate, riboză şi acid fosforic",
      "B. ARN (acid ribonucleic) este format din baze azotate, dezoxiriboză, riboză şi acid fosforic",
      "C. Când o catenă din dublul helix al ADN-ului (acidul dezoxiribonucleic) funcționează în transcripție, cealaltă catenă rămâne dormantă",
      "D. Pentru a forma molecule de ARNm, celula îndepărtează secvențele intercalate necodante ale ARN, denumite exoni",
      "E. Pentru a forma moleculele de ARNm final, celula îndepărtează secvențe intercalate necodante de ARN, denumite introni"
    ],
    correct: [2, 4],
    explanation: ""
  },
  {
    id: "bio-168",
    topic: "Introducere în anatomie și fiziologie",
    text: "168. Despre acizii nucleici este adevărat că:",
    options: [
      "A. Succesiunea nucleotidelor (cu bazele azotate) din ADN reprezintă codul genetic şi determină secvența în care sunt legați aminoacizii în proteine",
      "B. ARN-ul transportă instrucțiuni de la ADN-ul nuclear în citoplasmă, unde la nivelul ribozomilor, are loc sinteza proteică",
      "C. Una dintre diferențele structurale între ARN şi ADN constă în prezența ribozei în ARN şi a dezoxiribozei în ADN",
      "D. Una dintre diferențele structurale între ARN şi ADN implică baza azotată uracil, prezentă în nucleotidele ADN-ului şi absentă în nucleotidele ARN-ului",
      "E. Sunt implicați în procesele de transcripție şi translație"
    ],
    correct: [0, 1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-169",
    topic: "Introducere în anatomie și fiziologie",
    text: "169. Despre cromozomi se poate afirma că:",
    options: [
      "A. Reprezintă unitățile liniare în care este organizat ADN-ul în nucleul celulei",
      "B. Conţin segmente funcţionale denumite gene",
      "C. Fiecare cromozom este alcătuit din milioane de unități numite nucleozomi",
      "D. Se formează prin condensarea ARN-ului, înfăşurarea porțiunilor de ARN în jurul complexelor de histone, formando nucleozomii, urmată de supraspiralizarea nucleozomilor",
      "E. Cromozomii condensați rezultă din despiralizarea nucleozomilor"
    ],
    correct: [0, 1, 2],
    explanation: ""
  },
  {
    id: "bio-170",
    topic: "Introducere în anatomie și fiziologie",
    text: "170. Despre proteine este adevărat că:",
    options: [
      "A. Sunt compuşi anorganici, folosiți ca enzime în reacțiile chimice din celule",
      "B. Sunt compuşi organici, utilizați şi ca materiale de structură în celulele corpului",
      "C. Apar în structura microtubulilor şi a microfilamentelor",
      "D. Lipsesc în structura citoscheletului, format din microtubuli, microfilamente şi filamente intermediare",
      "E. Pot fi molecule specializate, care vor fi exportate de către celule pentru a fi utilizate în diverse activități extracelulare"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-171",
    topic: "Introducere în anatomie și fiziologie",
    text: "171. Selectați informațiile corecte referitoare la structura şi rolul acizilor nucleici în sinteza proteică:",
    options: [
      "A. Secvența de aminoacizi dintr-o proteină este determinată de succesiunea nucleotidelor din ADN (nucleotide în componența cărora intră bazele azotate)",
      "B. ADN-ul (acidul dezoxiribonucleic) conține baza azotată timină, în timp ce ARN-ul (acidul ribonucleic) nu conține uracil",
      "C. Structurile citoplasmatice conținând ARN (acid ribonucleic) şi în care sunt legați între ei aminoacizii pentru a forma proteine, se numesc ribozomi",
      "D. Acidul nucleic responsabil de transportul informației de la ADN în citoplasmă este ARNt",
      "E. Moleculele de ARNt (ARN de transfer) se găsesc libere în citoplasmă şi transportă aminoacizii la ribozomi"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-172",
    topic: "Introducere în anatomie și fiziologie",
    text: "172. Selectați afirmațiile adevărate referitoare la etapa de translație din cursul sintezei proteice:",
    options: [
      "A. Este procesul prin care se formează o catenă proteică prin ataşarea în lanț a bazelor azotate complementare până la apariția codonului stop",
      "B. Reprezintă etapa în care se foloseşte secvența de codoni a ARNm pentru a ghida secvența de aminoacizi a proteinelor",
      "C. Este etapa în care molecula de acid dezoxiribonucleic părăseşte nucleul celulei şi ajunge în citoplasmă la ribozomi",
      "D. Este etapa în care molecula de ARNm, ajunsă la ribozomi, îşi expune codonii (triplete, adică seturi de câte 3 nucleotide, care conțin bazele azotate)",
      "E. Este etapa în care codul genetic este „decodificat” într-o secvență de aminoacizi din proteină"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-173",
    topic: "Introducere în anatomie și fiziologie",
    text: "173. Selectați afirmațiile adevărate referitoare la evenimentele din cadrul sintezei proteice:",
    options: [
      "A. ARN-ul de transfer (ARNt) aduce informația conform căreia se realizează legăturile dintre aminoacizii pentru a forma lanțul proteic",
      "B. Prin unirea mai multor sute de mii de aminoacizi în lizozomi rezultă o moleculă organică numită proteină",
      "C. Odată utilizată, molecula de ARNm este degradată şi nucleotidele sale se întorc în nucleu",
      "D. Odată sintetizată, proteina este îndepărtată din ribozomi pentru a putea fi procesată în continuare (ea poate fi modificată în aparatul Golgi)",
      "E. Sinteza moleculelor de ARNm are loc în nucleu, fiind declanşată de ARN-polimerază (care se leagă la una dintre catenele dublului helix al ADN, la locul unde gena va fi exprimată)"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-174",
    topic: "Introducere în anatomie și fiziologie",
    text: "174. Sintetic, transcripția în procesul sintezei proteice este descrisă astfel:",
    options: [
      "A. O catenă de ARNm se formează conform secvenței de baze complementare dintr-o catenă de ADN",
      "B. Prin sinteza ARNm se transcrie informația ADN-ului pe o moleculă ARN",
      "C. Molecula de ARNm transportă mesajul genetic la nucleu pentru sinteza proteică",
      "D. Molecula ARNr este responsabilă de secvenţa de aminoacizi din structura proteinei, ea deținând anticodonul",
      "E. Odată sintetizată, molecula de ARNm transportă mesajul în citoplasmă (la ribozomi) pentru sinteza proteică"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-175",
    topic: "Introducere în anatomie și fiziologie",
    text: "175. Sintetic, translația în procesul sintezei proteice este descrisă astfel:",
    options: [
      "A. O catenă de ARNt conținând codonul soseşte la ribozom, unde întâlneşte molecule de ARNr, care transportă acizii aminați",
      "B. Molecula de ARNm conţine codonul şi soseşte la ribozom, unde întâlneşte molecula de ARNt, care conține anticodonul şi transportă aminoacidul corespunzător",
      "C. La întâlnirea codonului de pe ARNm cu anticodonul de pe ARNt, bazele complementare se împerechează şi are loc cedarea aminoacidului transportat de ARNt",
      "D. Complementaritatea codon - anticodon plasează aminoacizii într-o anumită poziție, apoi aceştia sunt detaşați de lanțul proteic care creşte",
      "E. Complementaritatea codon - anticodon plasează aminoacizii într-o anumită poziție, apoi aceştia sunt ataşați lanțului proteic care creşte"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-176",
    topic: "Introducere în anatomie și fiziologie",
    text: "176. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. ARN-polimeraza se leagă de una dintre catenele dublului helix al ADN, la locul unde gena va fi exprimată, declanşând transcripția",
      "B. Procesul de translație constă în „decodificarea” secvenței de nucleotide a ARNm, într-o secvenţă de aminoacizi din proteină",
      "C. Transcripția are loc în citoplasma celulei",
      "D. Translația se desfășoară în interiorul lizozomilor",
      "E. ADN-ul (acidul dezoxiribonucleic) se găseşte majoritar în nucleu, dar este prezent şi în mitocondrie"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-177",
    topic: "Introducere în anatomie și fiziologie",
    text: "177. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Translația este procesul prin care secvența de aminoacizi din proteină este codificată, rezultând o secvență de nucleotide în ADN (acid dezoxiribonucleic)",
      "B. Reticulul endoplasmatic neted nu prezintă pe suprafața sa ribozomi",
      "C. În citoplasma celulei nu se întâlnesc ribozomi liberi",
      "D. Mitocondria este sediul respirației celulare şi furnizează ATP-ul necesar diferitelor activități celulare",
      "E. În etapa de translație din cadrul sintezei proteice, când codonul moleculei de ARNm îşi întâlneşte anticodonul de pe molecula de ARNt, bazele lor se împerechează în mod complementar, poziționând astfel aminoacidul transportat de ARNt"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-178",
    topic: "Introducere în anatomie și fiziologie",
    text: "178. Alegeți afirmațiile false dintre cele de mai jos:",
    options: [
      "A. Reticulul endoplasmatic neted reprezintă sediul exclusiv al sintezei proteice",
      "B. La finalul translației, moleculele de ADN (acid dezoxiribonucleic) se spiralează la loc pentru a forma din nou helixul triplu caracteristic",
      "C. Translația începe prin ataşarea la ribozom a moleculei de ARNm, care îşi expune bazele în cadrul seturilor de câte trei nucleotide (îşi expune codonii)",
      "D. Translația începe cu ataşarea la centrozom a moleculei de ARNm, care îşi expune bazele în seturi de câte trei (își expune anticodonii complementari)",
      "E. Molecula de ARNt prezintă anticodonul, care se împerechează cu codonul complementar de pe ARNm"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-179",
    topic: "Introducere în anatomie și fiziologie",
    text: "179. Alegeți afirmațiile false dintre cele de mai jos:",
    options: [
      "A. În translație, nucleotidele ARNm se citesc în grupuri de câte două, denumite codoni",
      "B. În procesul de transcripție, molecula de ARNm este copiată de pe o singură catenă din dublul helix al ADN-ului (acidului dezoxiribonucleic)",
      "C. În procesul de transcripție, enzima ADN-polimerază se leagă de una dintre moleculele de ADN ale dublului helix, cealaltă catenă rămânând dormantă",
      "D. ARNt transportă aminoacizii la lizozom, unde va avea loc translaţia informației pentru formarea lanțului peptidic",
      "E. Odată sintetizată, proteina se desprinde de ribozom, urmând a fi procesată în continuare"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-180",
    topic: "Introducere în anatomie și fiziologie",
    text: "180. Care dintre informațiile de mai jos despre sinteza proteică sunt adevărate:",
    options: [
      "A. Translația („decodificarea” codului genetic într-o secvență de aminoacizi) precede transcripția",
      "B. O catenă de ARNm este sintetizată prin transcripție de pe ADN (acidul dezoxiribonucleic), conform principiului complementarității bazelor azotate",
      "C. ARNm prezintă un anticodon care întâlneşte codonul de pe ARNt, permitând împerecherea bazelor azotate complementare",
      "D. Transcripția are loc în nucleul celulei, fiind urmată de deplasarea ARNm în citoplasmă şi de ataşarea lui la ribozomi",
      "E. Transcripția începe odată cu legarea ARN-polimerazei de una dintre catenele dublului helix al ADN-ului (acidul dezoxiribonucleic), cealaltă catenă rămânând dormantă"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-181",
    topic: "Introducere în anatomie și fiziologie",
    text: "181. Alegeţi asocierile corecte referitoare la sinteza proteică:",
    options: [
      "A. Secvenţă în ADN (citozina-timină-adenină) - transcripţie - secvenţă în ARNm (guanină-adenină-uracil)",
      "B. ARN de reglare - copierea codului genetic al ARNm prin transcripție - transferul informației pe ARNt",
      "C. Codon „stop” - codon care codifică un aminoacid - codon care continuă alungirea lanțului proteic",
      "D. ARNt - molecule libere în citoplasma celulelor şi care conțin anticodonul - ataşare de aminoacizi specifici şi transportul lor la ribozomi",
      "E. Introni - secvențe intercalate necodante ale ARNm - îndepărtare când se finalizează structura moleculei de ARNm"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-182",
    topic: "Introducere în anatomie și fiziologie",
    text: "182. Alegeţi afirmațiile adevărate despre sinteza proteinelor:",
    options: [
      "A. Transcripția este procesul prin care codul genetic este copiat de pe ARNm într-o secvență de aminoacizi",
      "B. În transcripție, catena ARNm este sintetizată pe principiul complementarității bazelor neazotate ale ADN",
      "C. Transcripția (o primă etapă în sinteza proteică) este urmată de translație",
      "D. Enzima ARN-polimerază participă la transcripție, legându-se de catena de ADN (matriță) la locul unde gena va fi exprimată",
      "E. Enzima ARN-polimerază se deplasează de-a lungul catenei de ADN (matriță) citind nucleotidele una câte una"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-183",
    topic: "Introducere în anatomie și fiziologie",
    text: "183. Pentru ca sinteza proteică să aibă loc sunt necesare următoarele:",
    options: [
      "A. Enzime (colinesteraza), ADN monocatenar, ARNm",
      "B. Aminoacizi din rezerva care intră în componența majorității proteinelor",
      "C. Rezerva de 200 de aminoacizi, care compun majoritatea proteinelor",
      "D. Enzime, ADN (acid dezoxiribonucleic), ARNm (mesager), ARNt (de transfer)",
      "E. ARNr (ribozomal), ca parte componentă a ribozomilor şi ARNm (mesager), care primeşte codul genetic al ADN-ului şi îl transportă în citoplasmă"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-184",
    topic: "Introducere în anatomie și fiziologie",
    text: "184. Selectați afirmațiile adevărate cu privire la codul genetic şi sinteza de proteine:",
    options: [
      "A. Codonul este o secvență de trei nucleotide (în componenţa cărora intră bazele azotate) care aparține moleculeli de ARNm şi care se va împerechea cu anticodonul (complementar) de pe molecula de ARNt",
      "B. Există trei codoni „stop” care codifică aminoacizi şi anunţă ribozomul să continue alungirea lanțului proteic",
      "C. După ce transcripția a avut loc, molecula de ARNm se modifică pentru a regla activitatea genică, prin îndepărtarea unor secvențe intercalate necodante, numite introni",
      "D. Codul genetic constă în succesiunea bazelor azotate din structura proteinelor",
      "E. Odată utilizate în sinteza proteică, moleculele de ARNm sunt degradate şi nucleotidele care au intrat în componența lor se întorc în nucleu"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-185",
    topic: "Introducere în anatomie și fiziologie",
    text: "185. Molecula de ARN mesager final conține:",
    options: [
      "A. Introni, dar nu exoni (secvențe intercalate care par a nu deţine informație genetică legată de sinteza proteică)",
      "B. Exoni (secvențe codante), dar nu introni (secvențe necodante)",
      "C. Regiuni funcţionale din structura genelor folosite efectiv pentru codificarea proteinelor unei celule",
      "D. Exoni, care deşi formează doar aproximativ 5% din totalul materialului genetic al unei celule umane, reprezintă partea exprimată a genomului uman",
      "E. Regiuni nefuncționale din structura genelor, denumite exoni"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-186",
    topic: "Introducere în anatomie și fiziologie",
    text: "186. Selectați informațiile adevărate cu privire la controlul genetic:",
    options: [
      "A. Celula reglează şi controlează expresia genică (ea nu produce în permanență toate tipurile de proteine, ceea ce ar însemna o funcționare neeconomică)",
      "B. După îndepărtarea intronilor (segmente care nu par a deține nici o informație genetică legată de sinteza proteică), se formează molecula finală de ARNm prin unirea exonilor (regiunile funcţionale din structura genelor)",
      "C. Controlul expresiei genice a fiecărei celule apare la un singur nivel celular (doar în transcripţie)",
      "D. În timpul mitozei, supraspiralizarea şi compactarea cromozomului nu influențează accesul la gene.",
      "E. Expresia genică este controlată şi de către ARN-urile de reglare, ale căror mecanisme de acțiune sunt încă în stadiu de cercetare"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-187",
    topic: "Introducere în anatomie și fiziologie",
    text: "187. Alegeți afirmațiile adevărate despre materialul nuclear al celulei umane:",
    options: [
      "A. Este reprezentat de o moleculă de ADN circular care formează cromozomii în diviziune",
      "B. Conţine ADN (acid dezoxiribonucleic) şi proteine",
      "C. În nucleii celulelor umane există circa 30000 de gene (segmente funcționale ale cromozomilor)",
      "D. O genă reprezintă întreaga informație genetică conținută într-un cromozom",
      "E. ADN-ul şi histonele se organizează în nucleozomi, iar aceştia, prin supraspiralizare, formează cromozomul condensat"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-188",
    topic: "Introducere în anatomie și fiziologie",
    text: "188. Alegeţi, dintre enunțurile de mai jos, pe cele care conțin prima afirmație adevărată şi a doua afirmație falsă:",
    options: [
      "A. Reproducerea celulară nu depinde de structura şi nici de conținutul nucleului celulei. Hematiile adulte (globulele roşii) nu se divid",
      "B. În tractul gastrointestinal celulele se divid frecvent, spre deosebire de alte țesuturi ale corpului. Fiecare nucleozom este alcătuit din milioane de cromozomi",
      "C. Reproducerea asexuată constă în diviziunea unei celule în cele două celule fiice identice. Reproducerea sexuată nu este caracteristică speciei umane",
      "D. Formarea de noi celule pentru creştere, reparare sau înlocuire se realizează prin reproducere asexuată. Înainte de a fi transportate spre destinațiile finale, proteinele sunt procesate în exteriorul celulei",
      "E. După finalizarea translației, proteina poate fi trimisă lizozomilor pentru a servi ca enzimă în digestia celulară. Controlul expresiei genice apare la mai multe niveluri în celulă"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-189",
    topic: "Introducere în anatomie și fiziologie",
    text: "189. Alegeţi asocierile corecte dintre cele de mai jos:",
    options: [
      "A. ATP - adenozin-trifosfat – sursă de energie imediată pentru toate celulele organismului",
      "B. Centrozomi - unități formate din dublu helix de ADN înfăşurat în jurul complexului de histone - se grupează de ordinul miilor în cromozom",
      "C. Cromoproteină - masă dispersată de ADN şi proteine asociate - se formează prin spiralizarea cromozomilor",
      "D. Introni - secvențe necodante - nu dețin informație genetică legată de sinteza proteică - sunt prezenți în toate celulele umane nucleate",
      "E. Exoni - regiunile funcţionale din structura genelor - partea exprimată a genomului uman"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-190",
    topic: "Introducere în anatomie și fiziologie",
    text: "190. Alegeţi asocierile corecte dintre cele de mai jos:",
    options: [
      "A. Cili - expansiuni scurte şi numeroase - celule ale tractului respirator",
      "B. Celulă matură anucleată – leucocit - element figurat al sângelui",
      "C. Celula nervoasă – oligodedrocitul - mai multe prelungiri - generarea impulsului nervos",
      "D. Celulă cu con şi celulă cu bastonaş – neuroni receptori – retină (stratul intern)",
      "E. Mugure gustativ - celule specializate cu microvilozități - fibre nervoase senzoriale ale nervilor VII şi IX"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-191",
    topic: "Introducere în anatomie și fiziologie",
    text: "191. Despre cele sexuale (gameţi) se poate afirma că:",
    options: [
      "A. Ovulele se formează în ovar prin procesul de oogeneză, care începe încă din viața intrauterină",
      "B. Gametul feminin (oocitul primar) este eliberat lunar din foliculul ovarian aflat în curs de dezvoltare",
      "C. Gametul masculin (spermatozoidul) haploid (n) cu 23 de cromozomi ia naştere prin procesul de spermatogeneză",
      "D. Spermatozoidul prezintă mai multe regiuni: cap, gât, piesă intermediară şi coada",
      "E. Cei doi gameți (masculin şi feminin) se pot uni în procesul fecundației, dând naştere zigotului haploid (n) cu 46 de cromozomi în nucleu"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-192",
    topic: "Introducere în anatomie și fiziologie",
    text: "192. Despre membrana celulară (plasmatică) se poate afirma că:",
    options: [
      "A. Nu este permeabilă pentru molecule mici (apă, oxigen)",
      "B. La celula (fibra) musculară poartă denumirea de sarcolemă",
      "C. Permite trecerea prin difuziune a unor molecule mici de solvit",
      "D. Sarcolema poate prezenta un sistem de invaginări (sistemul tubilor transversali sau al tubilor T)",
      "E. În timpul endocitozei, o mică porțiune a membranei celulare se pliază şi înglobează particule din interiorul celulei, pe care le va elimina în exterior"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-193",
    topic: "Metabolism și nutriție",
    text: "193. Despre relația celule - energie sunt adevărate următoarele:",
    options: [
      "A. Fiecare reacție chimică a organismului implică schimb de energie",
      "B. Orice reacţie chimică în care se eliberează energie se numeşte endergonică",
      "C. Energia produsă în timpul reacțiilor exergonice ale catabolismului este stocată în molecule de ATP (adenozin-trifosfat)",
      "D. O cale metabolică este o secvență de transformări fizice desfăşurată exclusiv în exteriorul celulei",
      "E. Pentru a se declanşa o reacție chimică, este nevoie de un aport energetic denumit energie de activare"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-194",
    topic: "Introducere în anatomie și fiziologie",
    text: "194. Referitor la osmoză, este adevărat că:",
    options: [
      "A. Dacă celulele umane sunt introduse într-o soluție hipertonă, concentrația mai mare de solvit se află în interiorul celulelor",
      "B. Apa se deplasează din citoplasma celulei introdusă în soluție hipertonă înspre exteriorul celulei, celula micşorându-se",
      "C. Dacă celulele umane sunt introduse în soluție izotonă, nu are loc osmoza",
      "D. În cazul unei celule umane introduse într-o soluție hipotonă, concentrația mai mică de sare se află în exteriorul celulei",
      "E. Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană impermeabilă, dinspre soluția hipotonă spre soluția hipertonă"
    ],
    correct: [1, 2, 3],
    explanation: ""
  },
  {
    id: "bio-195",
    topic: "Introducere în anatomie și fiziologie",
    text: "195. Alegeți asocierile corecte referitoare la sistemele de organe, componentele lor majore şi funcțiile lor:",
    options: [
      "A. Scheletul - protejează corpul - oferă suport pentru locomoție - conține oasele corpului",
      "B. Sistemul respirator - inimă, vase sanguine, sânge, structuri limfatice - asigură aportul de oxigen",
      "C. Sistemul digestiv - digestia şi absorbția nutrienților insolubili din hrană - include stomacul, pancreasul şi splina",
      "D. Sistemul endocrin - coordonare şi integrare chimică a activităților organismului - hipofiza, tiroida, alte glande endocrine",
      "E. Sistemul nervos - include encefalul, măduva spinării, nervii - coordonează funcțiile organismului"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-196",
    topic: "Introducere în anatomie și fiziologie",
    text: "196. Alegeţi răspunsurile greşite dintre cele de mai jos:",
    options: [
      "A. Tegumentul, ca sistem de organe, include pielea, fără să includă părul, unghiile şi glandele sudoripare",
      "B. Glandele salivare, glandele sudoripare, hipofiza, glandele suprarenale şi tiroida aparțin sistemului endocrin",
      "C. Sistemul reproducător produce celulele sexuale necesare procreării",
      "D. Sistemul imun este în strânsă legătură cu sistemul limfatic şi funcționează prin intermediul celulelor acestuia (limfocite T, limfocite B)",
      "E. Sistemul nervos interacţionează cu agenţi străini şi asigură imunitatea corpului"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-197",
    topic: "Introducere în anatomie și fiziologie",
    text: "197. Alegeţi afirmațiile adevărate despre diferitele funcții ale organismului uman şi ale componentelor sale:",
    options: [
      "A. Organismul uman are aceleaşi funcții cu ale celorlalte viețuitoare şi cu ale structurilor anorganice (lipsite de viață)",
      "B. Funcțiile care diferențiază organismul de tot ceea ce nu prezintă viață permit celulelor sale să îşi desfăşoare activitățile necesare creşterii şi supraviețuirii",
      "C. Metabolismului - funcție importantă a viețuitoarelor - îi este furnizată materia primă de către procese vitale precum digestia, respirația, circulația",
      "D. Digestia, respirația, circulația şi excreția sunt adaptate şi pentru furnizarea de materie primă metabolismului, dar şi pentru îndepărtarea produşilor săi de degradare",
      "E. Mişcarea şi excreția reprezintă funcții ale unor structuri specializate ale organismului"
    ],
    correct: [1, 2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-198",
    topic: "Introducere în anatomie și fiziologie",
    text: "198. Sunt funcții ale diferitelor structuri ale organismului sau ale organismului întreg:",
    options: [
      "A. Mişcarea - rezultat al contracției celulelor musculare",
      "B. Mişcarea - la realizarea căreia participă doar oasele şi cartilajele sistemului scheletic",
      "C. Creşterea în dimensiuni a corpului (mărirea masei sale)",
      "D. Reproducerea sexuată şi asexuată",
      "E. Conductibilitatea - răspunsul organismului la un stimul extern sau intern"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-199",
    topic: "Introducere în anatomie și fiziologie",
    text: "199. Despre diviziunile suplimentare ale cavității abdomino-pelviene, este adevărat că:",
    options: [
      "A. Se descriu două regiuni ombilicale şi două regiuni epigastrice (drepte şi stângi)",
      "B. Se descriu nouă regiuni diferite, care includ regiunea ombilicală, situată central",
      "C. Regiunea hipogastrică este situată imediat superior de regiunea ombilicală",
      "D. Lateral de regiunea epigastrică se află hipocondrul drept şi hipocondrul stâng",
      "E. Lateral de regiunea hipogastrică se află regiunile inghinale (iliace) dreaptă şi stângă"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-200",
    topic: "Introducere în anatomie și fiziologie",
    text: "200. Alegeţi afirmaţiile adevărate dintre cele de mai jos, referitoare la organitele celulei şi la funcțiile lor:",
    options: [
      "A. În mitocondrie, energia rezultată din degradarea moleculelor glucidice, lipidice sau de natură proteică, este folosită pentru a forma molecule de adenozin-trifosfat, care servesc nevoilor energetice ale celulei",
      "B. Dacă un număr mare de celule mor din cauza absenței oxigenului şi a ATP-ului, organismul va continua să funcţioneze normal până la refacerea rezervelor",
      "C. Citoscheletul este format din nucleozomi şi cromatină",
      "D. Centrozomul este poziționat în vecinătatea nucleului, fiind format din doi centrioli în formă de tijă şi intervine în procesul de diviziune celulară (mitoză)",
      "E. Lizozomii sunt saci membranoşi care conţin enzime pentru digestia intracelulară"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-201",
    topic: "Introducere în anatomie și fiziologie",
    text: "201. Următoarele afirmații referitoare la diverse structuri de natură proteică sunt adevărate:",
    options: [
      "A. Intră în alcătuirea citoscheletului, o rețea intracelulară de atomi, protoni şi ioni",
      "B. Intră în alcătuirea citoscheletului, o rețea intracelulară de fibre, filamente şi molecule îmbinate",
      "C. Sinteza lor are loc în citoplasma celulei şi necesită prezenţa acizilor graşi şi a ATP-ului",
      "D. Pentru a putea fi utilizată în catabolismul energetic, proteinele sunt mai întâi scindate în aminoacizi",
      "E. Excesul de căldură poate provoca modificarea structurii proteinelor (denaturarea)"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-202",
    topic: "Introducere în anatomie și fiziologie",
    text: "202. Care dintre următoarele afirmațil referitoare la citoschelet sunt adevărate?",
    options: [
      "A. Este o rețea interconectată de fibre, filamente şi molecule prezente în nucleul celulelor",
      "B. Microtubulii, macrofilamentele şi filamentele intermediare sunt componente ale citoscheletului",
      "C. Datorită alcătuirii sale, serveşte drept structură de suport pentru celulă",
      "D. Toate componentele citoscheletului sunt alcătuite din subunități lipidice",
      "E. Toate elementele componente ale citoscheletului sunt de natură proteică"
    ],
    correct: [2, 4],
    explanation: ""
  },
  {
    id: "bio-203",
    topic: "Introducere în anatomie și fiziologie",
    text: "203. Selectați afirmațiile false referitoare la mitocondrii:",
    options: [
      "A. Sunt organite intracitoplasmatice în care are loc degradarea sărurilor minerale",
      "B. La nivelul lor are loc sinteza moleculelor de ATP (adenozin-trifosfat), care reprezintă o sursă de energie pentru toate celulele organismului",
      "C. La nivelul lor are loc digestia celulară, din acest motiv fiind denumite şi „generatoarele celulei”",
      "D. Pentru producerea de ATP (adenozin-trifosfat), mitocondriile nu au nevoie de prezența oxigenului",
      "E. Sunt sediul glicolizei anaerobe, furnizând astfel o mare cantitate de energie"
    ],
    correct: [0, 2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-204",
    topic: "Introducere în anatomie și fiziologie",
    text: "204. Care dintre următoarele afirmații referitoare la organitele citoplasmatice sunt false?",
    options: [
      "A. La nivelul organitelor citoplasmatice se desfăşoară diverse funcții celulare",
      "B. Ribozomii sunt organite alcătuite din lipide şi ARN",
      "C. Reticulul endoplasmatic neted este alcătuit dintr-un ansamblu de membrane care prezintă ribozomi ataşați pe suprafața lor",
      "D. Reticulul endoplasmatic neted specializat din citoplasma unei fibre musculare se numeşte sarcoplasmic (sarcoplasmatic)",
      "E. Aparatul Golgi este alcătuit dintr-o structură non-membranoasă compusă din doi centrioli în formă de tijă"
    ],
    correct: [1, 2, 4],
    explanation: ""
  },
  {
    id: "bio-205",
    topic: "Introducere în anatomie și fiziologie",
    text: "205. Care dintre afirmaţiile următoare sunt false?",
    options: [
      "A. Sinteza ARN-ului mesager (ARNm) se numeşte transcripție şi se desfăşoară în citoplasmă",
      "B. ARN-ul de transfer (ARNt) primeşte codul genetic al ADN-ului şi îl transportă în citoplasmă",
      "C. În procesul de transcripție informația genetică este transferată din molecula de ADN pe cea de ARN mesager (ARNm)",
      "D. După ce a fost sintetizat prin procesul de translaţie, ARN-ul mesager (ARNm) trece din citoplasmă în nucleu printr-un por nuclear",
      "E. Translaţia începe cu ataşarea moleculei de ARNm la ribozom"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-206",
    topic: "Introducere în anatomie și fiziologie",
    text: "206. Selectați afirmațiile adevărate referitoare la structura ARN şi diferitele tipuri de ARN:",
    options: [
      "A. ARN-ul ribozomal (ARNr) intră în structura ribozomilor, organite la nivelul cărora are loc legarea acizilor graşi între ei pentru formarea proteinelor",
      "B. ARN-ul ribozomal (ARNr) este parte din structura ribozomilor, organite la nivelul cărora are loc legarea aminoacizilor între ei pentru formarea proteinelor",
      "C. ARN-ul este similar ADN-ului, cu excepția localizării lui în celulă",
      "D. Una dintre diferenţele structurale între ARN şi ADN este prezența pentozei riboză în ARN (şi absenţa ei în ADN, unde se regăseşte dezoxiriboza)",
      "E. Moleculele de ARN de transfer (ARNt) transportă aminoacizii la ribozomi în timpul sintezei proteice"
    ],
    correct: [1, 3, 4],
    explanation: ""
  },
  {
    id: "bio-207",
    topic: "Introducere în anatomie și fiziologie",
    text: "207. Selectați afirmațiile adevărate referitoare la procesul de transcripţie:",
    options: [
      "A. Reprezintă o primă etapă a sintezei proteice, etapă în care o catenă de ARNm este sintetizată conform secvenței de baze complementare dintr-o catenă de ADN",
      "B. Se desfăşoară în citoplasmă şi se finalizează cu sinteza ARN-ului mesager (ARNm)",
      "C. Are loc la nivelul ribozomilor şi reprezintă etapa finală a sintezei proteice",
      "D. Implică prezența enzimei ARN-polimerază, care se deplasează de-a lungul catenei de ADN, citind nucleotidele una câte una",
      "E. Alte enzime selectează nucleotidele disponibile cu baze complementare, pe care le dispun astfel încât să formeze o moleculă de ARNm, conform principiul complementarității bazelor azotate"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-208",
    topic: "Introducere în anatomie și fiziologie",
    text: "208. Selectați afirmațiile false cu privire la procesul de transcripție:",
    options: [
      "A. Rezultatul acestui proces este sinteza enzimei ARN-polimerază, care va părăsi nucleul pentru a-şi exercita activitatea în citoplasmă",
      "B. Prin acest proces, secvența AACGTC de pe catena de ADN este copiată (conform complementarității bazelor) rezultând secvența UUGCAG pe catena de ARN nou sintetizat",
      "C. Procesul se încheie când enzima ARN-polimerază se leagă de una dintre catenele dublului helix de ADN (catenă inactivă)",
      "D. În timpul derulării procesului, enzima ARN-polimerază se deplasează de-a lungul catenei de ADN (catena matriță) care va fi transcrisă în ARNm",
      "E. Atunci când se primeşte un semnal de încheiere a transcripției, catena de ADN transcrisă trece în citoplasmă, transportând mesajul genetic"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-209",
    topic: "Introducere în anatomie și fiziologie",
    text: "209. Selectați afirmațiile adevărate referitoare la procesul de transcripție:",
    options: [
      "A. Molecula de ARN mesager (ARNm) rezultată conține secvențe necodante numite exoni şi regiuni funcționale numite introni",
      "B. Moleculele de acid nucleic rezultate conțin o succesiune de aminoacizi",
      "C. Molecula de ARN mesager (ARNm) rezultată conține secvențe necodante, secvențe numite introni (care nu par a deține informație genetică) şi regiuni funcționale numite exoni",
      "D. În acest proces, molecula de ARN mesager (ARNm) este sintetizată conform principiului complementarității bazelor azotate conținute în ADN",
      "E. În cursul acestui proces, molecula de ADN este sintetizată conform secvenței complementare de baze azotate din ARN mesager (ARNm)"
    ],
    correct: [2, 3],
    explanation: ""
  },
  {
    id: "bio-210",
    topic: "Introducere în anatomie și fiziologie",
    text: "210. Despre transcripție şi translație sunt adevărate următoarele asocieri:",
    options: [
      "A. Nucleu - ADN - transcripție - ARNm - ieşire prin porul membranei nucleare",
      "B. Catenă matriță de ADN - secvență de baze azotate TACGT - transcripție - moleculă de ARNm - secvență de baze azotate AUGCA",
      "C. Catenă dormantă de ADN - translaţie - ARNr - introni, exoni",
      "D. Catenă matriță de ADN - copiere conform noncomplementarității bazelor - ARNm, ARNt - transcripție",
      "E. Citoplasmă - ribozomi - expunerea codonilor de pe ARNm - cuplarea codon-anticodon complementar de pe ARNt - poziţionarea aminoacizilor - translație"
    ],
    correct: [0, 1, 4],
    explanation: ""
  },
  {
    id: "bio-211",
    topic: "Introducere în anatomie și fiziologie",
    text: "211. Selectați enunțurile cu două afirmații adevărate:",
    options: [
      "A. ARN-ul mesager (ARNm) este sintetizat în nucleul celulei prin transcripție. ARNm primeşte codul genetic de la ADN",
      "B. ARNt transportă aminoacizii la ribozomi şi deţine anticodonii complementari codonilor de pe ARNm. Molecula de ARNm se sintetizează în cursul procesului de translație",
      "C. ARN-ul de reglare controlează expresia genică şi sinteza proteică. Secvența de codoni a ARNm determină secvența de aminoacizi a proteinelor",
      "D. Nucleotidele catenei de ARNm sintetizate se citesc în grupe de câte trei şi se numesc codoni. Odată sintetizată, proteina este îndepărtată din ribozomi, urmând să fie procesată în continuare",
      "E. Expresia genică şi sinteza proteică nu pot fi reglate şi controlate de către celulă. ARNr de la nivelul lizozomilor conține codonii şi transportă aminoacizii"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-212",
    topic: "Introducere în anatomie și fiziologie",
    text: "212. Selectați informațiile corecte cu privire la acizii nucleici:",
    options: [
      "A. Compoziția chimică a unui acid nucleic (ADN sau ARN) include nucleotide, care conțin baze azotate (A,T,C,G în ADN şi A,U,C,G în ARN)",
      "B. Baza azotată uracil este componentă a moleculei de ARN mesager (ARNm) şi nu se regăseşte în ADN",
      "C. Dezoxiriboza (o structură de natură glucidică) intră în alcătuirea moleculei de ARN mesager (ARNm)",
      "D. ARN-ul, alături de proteine, se regăseşte în nucleol",
      "E. ADN-ul nuclear se replică în faza G2 a ciclului celular"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-213",
    topic: "Introducere în anatomie și fiziologie",
    text: "213. Alegeți afirmațiile adevărate dintre cele de mai jos:",
    options: [
      "A. Bazele azotate adenină şi timină sunt complementare şi intră în compoziția acidului dezoxiribonucleic",
      "B. În molecula de ADN se regăsesc bazele complementare citozină şi adenozină",
      "C. ARNt conține anticodonul ale cărui baze se împerechează cu cele din codonul complementar al moleculei de ARNm",
      "D. Odată sintetizată, proteina este îndepărtată din ribozom pentru a fi procesată în continuare (spre exemplu, modificată în aparatul Golgi)",
      "E. Uracilul, adenina şi citozina se regăsesc doar în structura moleculei de ADN"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-214",
    topic: "Introducere în anatomie și fiziologie",
    text: "214. Selectați afirmațäle adevărate dintre cele de mai jos:",
    options: [
      "A. Structura şi compoziția nucleului sunt direct implicate în reproducerea celulară",
      "B. ADN-ul este format dintr-o succesiune de nucleotide, legate unele de altele prin legături ionice",
      "C. Milioane de nucleozomi alcătuiesc un cromozom",
      "D. Complexele de histone se înfășoară în jurul segmentelor de ADN, formând cromozomii",
      "E. Codul genetic constă în ordinea bazelor azotate din ADN şi determină secvența în care sunt legați aminoacizii în proteină"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-215",
    topic: "Introducere în anatomie și fiziologie",
    text: "215. Despre proteine şi sinteza lor este adevărat că:",
    options: [
      "A. Odată sintetizată şi îndepărtată din ribozomi, proteina poate fi utilizată de către celulă ca şi component structural celular",
      "B. Sinteza proteică începe cu transcripția, în urma căreia rezultă cromozomii şi translația, în urma căreia codul genetic al ARN este decodificat în secvența de nucleotide a ADN",
      "C. În timpul translației, molecula de ARN mesager (ARNm) se sintetizează în nucleu, utilizând secvența de baze azotate din ADN-ul nuclear",
      "D. O proteină poate fi modificată în aparatul Golgi şi depozitată în vezicule secretoare înainte de a fi eliberată de către celulă",
      "E. Sinteza unor proteine structurale şi a unor enzime are loc în interfaza ciclului celular (G1-S-G2)"
    ],
    correct: [0, 3, 4],
    explanation: ""
  },
  {
    id: "bio-216",
    topic: "Introducere în anatomie și fiziologie",
    text: "216. Alegeţi dintre afirmațiile de mai jos pe cele adevărate referitoare la structura şi rolul tipurilor de ARN în sinteza proteică:",
    options: [
      "A. O succesiune de trei nucleotide cu dezoxiriboză din componența moleculei de ARN de transfer (ARNt) poartă numele de codon",
      "B. O succesiune de trei nucleotide (de exemplu, ATC adenină-timină-citozină) din componența moleculei de ARN mesager (ARNm) poartă numele de codon",
      "C. Anticodonul din ARN-ul de transfer (ARNt) conține baze azotate care se împerechează cu bazele azotate complementare ale codonului din ARN-ul mesager (ARNm)",
      "D. În procesul de translație, moleculele de ARNt se ataşează de aminoacizii specifici pe care îi transportă la ribozomi, pentru a întâlni ARNm",
      "E. Procesul de translație, derulat în citoplasmă, se finalizează atunci când în molecula de ARNm este întâlnit un codon stop"
    ],
    correct: [2, 3, 4],
    explanation: ""
  },
  {
    id: "bio-217",
    topic: "Introducere în anatomie și fiziologie",
    text: "217. În translație evenimentele decurg astfel:",
    options: [
      "A. Când codonul moleculei de ARNm îşi întâlneşte anticodonul de pe molecula de ARNt, bazele lor se împerechează",
      "B. Aminoacidul transportat de a doua moleculă de ARNm este poziționat lângă primul aminoacid, iar între ei se stabileşte o legătură peptidică cu ajutorul unei enzime lizozomale",
      "C. După ce primul aminoacid este legat de al doilea aminoacid printr-o legătură peptidică cu ajutorul unei enzime ribozomale, ribozomul se deplasează pe ARNm cu un codon",
      "D. Ribozomul deplasează peptidul/peptida alcătuită din primii doi aminoacizi, pentru a putea ataşa un al treilea aminoacid, adus de o altă moleculă de ARNt",
      "E. După fiecare aminoacid adus la ribozom, acesta se deplasează pe ARNm cu câte doi codoni"
    ],
    correct: [0, 2, 3],
    explanation: ""
  },
  {
    id: "bio-218",
    topic: "Introducere în anatomie și fiziologie",
    text: "218. Care dintre următoarele afirmaţii sunt adevărate?",
    options: [
      "A. În molecula de ARN mesager (ARNm) rezultată imediat după transcripție se găsesc secvențe intercalate de introni şi exoni",
      "B. Intronii se găsesc în toate celulele umane şi reprezintă regiunile funcționale din structura genelor, alcătuind circa 5% din genomul uman",
      "C. Exonii reprezintă structurile funcţionale din structura genelor, fiind folosite efectiv pentru codificarea proteinelor unei celule",
      "D. Molecula de ARN mesager (ARNm) final, care se va ataşa la ribozom, nu conține exoni",
      "E. Posttranscripțional (după ce procesul de transcripție a avut loc), molecula de ARN mesager (ARNm) se modifică pentru a regla activitatea genică, fiind îndepărtate secvențele necodante"
    ],
    correct: [0, 2, 4],
    explanation: ""
  },
  {
    id: "bio-219",
    topic: "Introducere în anatomie și fiziologie",
    text: "219. Care dintre următoarele afirmații referitoare la proteine şi sinteza proteică sunt adevărate?",
    options: [
      "A. Cea mai importantă caracteristică structurală a unei proteine este succesiunea aminoacizilor în lanțul proteic (secvența în care sunt legați aminoacizii)",
      "B. Unele dintre proteinele sintetizate pot fi utilizate de către celule ca şi component structural celular",
      "C. Proteinele din structura microtubulilor şi microfilamentelor citoscheletului sunt exportate după sinteză pentru a fi utilizate extracelular",
      "D. Sinteza unui lanț polipeptidic/proteic se opreşte atunci când pe ARNm apare un codon stop (codon care nu codifică aminoacizi, ci semnifică faptul că proteina este completă)",
      "E. Colagenul este o proteină care se regăseşte doar în structura țesutului conjunctiv lax"
    ],
    correct: [0, 1, 3],
    explanation: ""
  },
  {
    id: "bio-220",
    topic: "Introducere în anatomie și fiziologie",
    text: "220. Care dintre următoarele afirmații sunt adevărate?",
    options: [
      "A. Funcţionând economic, o celulă produce în permanență toate tipurile de proteine",
      "B. Funcţionând economic, o celulă nu produce în permanență toate tipurile de proteine",
      "C. Anumite tipuri de celule produc în permanență toate tipurile de proteine, acestea acţionând ca şi hormoni",
      "D. Anumite tipuri de celule produc doar anumite tipuri de proteine (hormonul insulină este produs de către celulele beta ale insulelor Langerhans din pancreas şi nu de către celulele nervoase)",
      "E. Imediat după transcripție, molecula de ARN mesager (ARNm) suferă modificări care presupun eliminarea intronilor, păstrându-se doar exonii (partea exprimată a genomului uman) care sunt uniți pentru a forma ARNm final"
    ],
    correct: [1, 3, 4],
    explanation: ""
  }
];




const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let questions = [...demoQuestions];
let current = 0;
let picks = {};
let validated = {};
let progress = loadProgress();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("biomed-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("biomed-progress", JSON.stringify(progress));
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);
}

function getCorrect(q) {
  return Array.isArray(q.correct) ? q.correct : [q.correct];
}

function isAnswerCorrect(selected, correct) {
  const a = Array.isArray(selected) ? [...selected].sort((x, y) => x - y) : [selected];
  const b = Array.isArray(correct) ? [...correct].sort((x, y) => x - y) : [correct];

  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function storedAnswerIsCorrect(entry) {
  if (typeof entry.isCorrect === "boolean") return entry.isCorrect;
  return isAnswerCorrect(entry.selected, entry.correct);
}

function switchView(view) {
  $$(".view").forEach(v => v.classList.remove("active"));
  $("#" + view + "View").classList.add("active");

  $$(".nav-item").forEach(b =>
    b.classList.toggle("active", b.dataset.view === view)
  );

  $("#crumb").textContent = ({
    home: "Acasă",
    practice: "Rezolvă grile",
    progress: "Progresul meu"
  })[view];

  if (view === "practice") renderQuestion();
  if (view === "progress") renderProgress();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$("[data-view]").forEach(b =>
  b.addEventListener("click", () => switchView(b.dataset.view))
);

const chapterAliases = {
  "INTRODUCERE ÎN ANATOMIE ȘI FIZIOLOGIE.CELULA ȘI FIZIOLOGIA CELULARĂ":
    ["Introducere în anatomie și fiziologie"],
  "ȚESUTUL NERVOS.ORGANIZAREA SISTEMULUI NERVOS":
    ["SISTEMUL NERVOS"]
};

$("#chapterSelect").addEventListener("change", e => {
  const chapter = e.target.value;

  if (chapter === "ALL") {
    questions = [...demoQuestions];
  } else {
    const acceptedTopics = chapterAliases[chapter] || [chapter];
    questions = demoQuestions.filter(q => acceptedTopics.includes(q.topic));
  }

  current = 0;
  picks = {};
  validated = {};

  $("#nextQuestion").disabled = false;
  $("#nextQuestion").innerHTML = 'Următoarea <span>→</span>';

  renderQuestion();
});

function renderQuestion() {
  if (!questions.length) {
    $("#questionCounter").textContent = "00 / 00";
    $("#questionNumberLabel").textContent = "FĂRĂ GRILE";
    $("#questionTopic").textContent = "BIOLOGIE";
    $("#questionText").textContent =
      "Nu există încă grile pentru acest capitol. Adaugă întrebări în app.js.";
    $("#answers").innerHTML = "";
    $("#questionPills").innerHTML = "";
    $("#feedback").className = "feedback hidden";
    $("#answeredStatus").textContent = "Nicio grilă disponibilă";
    $("#validateAnswer").classList.add("hidden");
    $("#nextQuestion").classList.add("hidden");
    $("#sessionProgress").style.width = "0%";
    return;
  }

  const q = questions[current];
  const checked = Object.prototype.hasOwnProperty.call(validated, q.id);
  const selected = picks[q.id] || [];
  const correct = getCorrect(q);

  $("#questionCounter").textContent =
    `${String(current + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;

  $("#questionNumberLabel").textContent =
    `ÎNTREBAREA ${String(current + 1).padStart(2, "0")}`;

  $("#questionTopic").textContent = q.topic;
  $("#questionText").textContent = q.text;

  const answeredCount = questions.filter(x =>
    Object.prototype.hasOwnProperty.call(validated, x.id)
  ).length;

  $("#sessionProgress").style.width =
    `${answeredCount / questions.length * 100}%`;

  $("#questionPills").innerHTML = questions.map((x, i) => {
    const done = Object.prototype.hasOwnProperty.call(validated, x.id);
    const cls = i === current ? "current" : "";
    const result = done ? (validated[x.id] ? "good" : "bad") : "";

    return `<button class="question-pill ${cls} ${result}"
      data-index="${i}" aria-label="Întrebarea ${i + 1}">
      ${done ? (validated[x.id] ? "✓" : "×") : String(i + 1).padStart(2, "0")}
    </button>`;
  }).join("");

  $$(".question-pill").forEach(b =>
    b.addEventListener("click", () => {
      current = Number(b.dataset.index);
      renderQuestion();
    })
  );

  $("#answers").innerHTML = q.options.map((opt, i) => {
    const isSelected = selected.includes(i);
    let cls = "answer-option" + (isSelected ? " selected" : "");
    let mark = "";

    if (checked && correct.includes(i)) {
      cls += " correct";
      mark = "✓";
    } else if (checked && isSelected) {
      cls += " wrong";
      mark = "×";
    }

    return `<label class="${cls}">
      <input type="checkbox" name="answer" value="${i}"
        ${isSelected ? "checked" : ""}
        ${checked ? "disabled" : ""}>
      <span class="answer-letter">${String.fromCharCode(65 + i)}</span>
      <span class="answer-copy">${escapeHTML(opt)}</span>
      <span class="answer-mark">${mark}</span>
    </label>`;
  }).join("");

  $$("#answers input").forEach(input =>
    input.addEventListener("change", () => {
      const oldSelected = picks[q.id] || [];
      const index = Number(input.value);

      picks[q.id] = input.checked
        ? [...oldSelected, index]
        : oldSelected.filter(i => i !== index);

      renderQuestion();
    })
  );

  const latestSelected = picks[q.id] || [];

  $("#answeredStatus").textContent = checked
    ? "Răspuns validat"
    : latestSelected.length === 0
      ? "Nicio variantă selectată"
      : "Ai selectat: " + latestSelected
          .map(i => String.fromCharCode(65 + i)).join(", ");

  $("#validateAnswer").classList.toggle("hidden", checked);
  $("#nextQuestion").classList.toggle("hidden", !checked);

  $("#prevQuestion").disabled = current === 0;
  $("#prevQuestion").style.opacity = current === 0 ? ".45" : "1";

  const fb = $("#feedback");
  fb.className = "feedback hidden";
  fb.textContent = "";

  if (checked) {
    const good = validated[q.id];
    const letters = correct.map(i => String.fromCharCode(65 + i)).join(", ");

    fb.className = "feedback " + (good ? "good" : "bad");
    fb.innerHTML =
      `<b>${good ? "✓ Corect!" : "× Greșit! Variante corecte: " + letters + "."}</b> ` +
      escapeHTML(q.explanation || "");
  }

  renderStats();
}

$("#validateAnswer").addEventListener("click", () => {
  const q = questions[current];
  if (!q) return;

  const selected = picks[q.id] || [];

  if (selected.length === 0) {
    $("#answeredStatus").textContent =
      "Bifează cel puțin o variantă înainte de validare.";
    return;
  }

  const correct = getCorrect(q);
  const good = isAnswerCorrect(selected, correct);

  validated[q.id] = good;

  progress[q.id] = {
    question: q.text,
    topic: q.topic,
    selected: [...selected],
    correct: [...correct],
    isCorrect: good,
    explanation: q.explanation || "",
    updated: new Date().toISOString()
  };

  saveProgress();
  renderQuestion();
});

$("#prevQuestion").addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

$("#nextQuestion").addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    const next = questions.findIndex(q =>
      !Object.prototype.hasOwnProperty.call(validated, q.id)
    );

    if (next >= 0) {
      current = next;
      renderQuestion();
    } else {
      $("#nextQuestion").innerHTML = "✓ Sesiune completă";
      $("#nextQuestion").disabled = true;
      $("#answeredStatus").textContent =
        "Ai validat toate grilele din acest set!";
    }
  }
});

$("#resetSession").addEventListener("click", () => {
  current = 0;
  picks = {};
  validated = {};
  $("#nextQuestion").disabled = false;
  $("#nextQuestion").innerHTML = 'Următoarea <span>→</span>';
  renderQuestion();
});

function renderStats() {
  const entries = Object.values(progress);
  const correctCount = entries.filter(storedAnswerIsCorrect).length;
  const accuracy = entries.length
    ? Math.round(correctCount / entries.length * 100)
    : null;

  $("#statAnswered").textContent = entries.length;
  $("#statCorrect").textContent = correctCount;
  $("#statAccuracy").textContent = accuracy === null ? "—" : accuracy + "%";
  $("#accuracyText").textContent = accuracy === null
    ? "Începe prima sesiune"
    : `${entries.length} întrebări validate`;
}

function renderProgress() {
  const entries = Object.entries(progress).sort(
    (a, b) => new Date(b[1].updated) - new Date(a[1].updated)
  );

  const correctCount = entries.filter(([, x]) => storedAnswerIsCorrect(x)).length;
  const accuracy = entries.length
    ? Math.round(correctCount / entries.length * 100)
    : null;

  $("#progressAnswered").textContent = entries.length;
  $("#progressCorrect").textContent = correctCount;
  $("#progressAccuracy").textContent = accuracy === null ? "—" : accuracy + "%";

  $("#historyList").innerHTML = entries.length
    ? entries.map(([id, x]) => {
        const good = storedAnswerIsCorrect(x);
        const chosen = Array.isArray(x.selected) ? x.selected : [x.selected];
        const letters = chosen
          .filter(Number.isInteger)
          .map(i => String.fromCharCode(65 + i))
          .join(", ");

        return `<div class="history-item">
          <div class="history-symbol ${good ? "good" : "bad"}">${good ? "✓" : "×"}</div>
          <div>
            <b>${escapeHTML(x.question)}</b>
            <small>${escapeHTML(x.topic)} · Variante alese: ${letters} · ${x.updated ? new Date(x.updated).toLocaleDateString("ro-RO") : ""}</small>
          </div>
          <span class="history-result ${good ? "good" : "bad"}">${good ? "CORECT" : "GREȘIT"}</span>
        </div>`;
      }).join("")
    : '<div class="empty-state">Încă nu ai validat nicio grilă. Începe o sesiune și rezultatele vor apărea aici.</div>';
}

$("#clearProgress").addEventListener("click", () => {
  if (confirm("Sigur vrei să ștergi toate rezultatele salvate în acest browser?")) {
    progress = {};
    saveProgress();
    renderProgress();
    renderStats();
  }
});

$("#themeToggle").addEventListener("click", () =>
  document.body.classList.toggle("dark")
);

renderStats();
renderQuestion();
function prepareQuestionWithOptions(q, shuffleAnswers) {
  let optionsWithIndex = q.options.map((opt, origIndex) => ({ opt, origIndex }));
  
  if (shuffleAnswers) {
    optionsWithIndex.sort(() => Math.random() - 0.5);
  }
  
  let newOptions = optionsWithIndex.map(item => item.opt);
  let originalCorrect = Array.isArray(q.correct) ? q.correct : [q.correct];
  
  let newCorrect = [];
  optionsWithIndex.forEach((item, newIndex) => {
    if (originalCorrect.includes(item.origIndex)) {
      newCorrect.push(newIndex);
    }
  });
  
  return {
    ...q,
    options: newOptions,
    correct: newCorrect
  };
}

function startTestSession() {
  const checkedBoxes = document.querySelectorAll(".chapter-checkbox:checked");
  const selectedTopics = Array.from(checkedBoxes).map(cb => cb.value.toLowerCase());

  if (selectedTopics.length === 0) {
    alert("Selectează cel puțin un capitol pentru a începe testul!");
    return;
  }

  let filtered = demoQuestions.filter(q => {
    const qTopic = q.topic.toLowerCase();
    return selectedTopics.some(topic => qTopic.includes(topic) || topic.includes(qTopic));
  });

  if (filtered.length === 0) {
    filtered = [...demoQuestions];
  }

  // 1. Amestecăm ordinea întrebărilor aleatoriu
  filtered.sort(() => Math.random() - 0.5);

  // 2. Limităm la maximum 200 de grile
  const selectedQuestions = filtered.slice(0, 200);

  // 3. Verificăm bifa de amestecare a răspunsurilor
  const shuffleAnswersToggle = document.getElementById("shuffleAnswersToggle");
  const shuffleAnswers = shuffleAnswersToggle ? shuffleAnswersToggle.checked : true;

  questions = selectedQuestions.map(q => prepareQuestionWithOptions(q, shuffleAnswers));

  current = 0;
  picks = {};
  validated = {};

  // Ascundem bara laterală (modul test)
  const practiceLayout = document.querySelector(".practice-layout");
  if (practiceLayout) {
    practiceLayout.classList.add("test-mode");
  }

  const nextBtn = document.getElementById("nextQuestion");
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.innerHTML = 'Următoarea <span>→</span>';
  }

  renderQuestion();
}

// Evenimente pentru butoane
const applyBtn = document.getElementById("applyChapterFilter");
if (applyBtn) {
  applyBtn.addEventListener("click", startTestSession);
}

const selectAllBtn = document.getElementById("selectAllChapters");
if (selectAllBtn) {
  selectAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".chapter-checkbox").forEach(cb => cb.checked = true);
  });
}

const deselectAllBtn = document.getElementById("deselectAllChapters");
if (deselectAllBtn) {
  deselectAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".chapter-checkbox").forEach(cb => cb.checked = false);
  });
}

// Resetarea sesiunii readuce sidebar-ul la loc
const resetBtn = document.getElementById("resetSession");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    const practiceLayout = document.querySelector(".practice-layout");
    if (practiceLayout) {
      practiceLayout.classList.remove("test-mode");
    }
    current = 0;
    picks = {};
    validated = {};
    const nextBtn = document.getElementById("nextQuestion");
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.innerHTML = 'Următoarea <span>→</span>';
    }
    renderQuestion();
  });
}


renderStats();
renderQuestion();
