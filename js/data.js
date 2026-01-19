const subjectsData = [
    {
        id: "intro",
        title: "Informații Curs & Planificare",
        icon: "information-circle-outline",
        content: `
            <h2>Modulul 3 (M III): Mașini unelte convenționale</h2>
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; border-left: 4px solid var(--accent-color);">
                <p><strong>Unitatea de învăţământ:</strong> Liceul Tehnologic "Aurel Vlaicu" Galați</p>
                <p><strong>Profilul:</strong> Tehnic / <strong>Domeniul:</strong> Mecanică</p>
                <p><strong>Clasa:</strong> a XII-a Bs</p>
                <p><strong>Nr. ore/an:</strong> 165 (T: 66, LT: 33, IP: 66)</p>
                <p><strong>Profesor:</strong> BORȘ NICUȚA</p>
                <p><strong>Maistru Instr.:</strong> Popescu R. Romulus</p>
            </div>
            
            <h3>Rezultate ale Învățării (URÎ 12)</h3>
            <p>ASIGURAREA PRELUCRĂRILOR MECANICE PE MAȘINI UNELTE CONVENȚIONALE</p>
            <ul>
                <li>Coordonarea lucrărilor de prelucrare prin așchiere.</li>
                <li>Utilizarea documentației tehnice specifice.</li>
                <li>Respectarea normelor de SSM și protecția mediului.</li>
            </ul>
        `
    },
    {
        id: "unit1_basics",
        title: "1. Tehnologia Prelucrărilor (S1-S5)",
        icon: "hammer-outline",
        content: `
            <h2>Bazele Prelucrării prin Așchiere</h2>
            <p><strong>Săptămânile S1 - S5</strong></p>
            
            <div class="content-card">
                <h4>Tehnologia și Definiții (S1-S2)</h4>
                <p>Prelucrarea prin așchiere este procedeul de modelare a pieselor prin îndepărtarea surplusului de material sub formă de așchii, folosind scule așchietoare pe mașini-unelte.</p>
                <ul>
                    <li><strong>Mișcarea principală:</strong> Asigură viteza de așchiere (ex: rotația piesei la strunjire).</li>
                    <li><strong>Mișcarea de avans:</strong> Asigură continuitatea procesului (ex: deplasarea cuțitului).</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>Schema de Așchiere & Materiale (S3-S5)</h4>
                <p>Fiecare procedeu (strunjire, frezare, găurire) are o schemă cinematică specifică ce definește poziția sculei față de piesă și direcțiile de mișcare.</p>
                <p><strong>Materiale prelucrate:</strong> Oțeluri, fonte, aliaje neferoase (Al, Cu), materiale plastice.</p>
            </div>
        `
    },
    {
        id: "unit1_machines",
        title: "2. Tipuri de Mașini Unelte (S6-S9)",
        icon: "settings-outline",
        content: `
            <h2>Mașini Unelte Convenționale Specifice</h2>
            <p><strong>Săptămânile S6 - S9</strong></p>
            
            <div class="grid-2-cols" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Strunguri (S6)</h4>
                    <p>Utilizate pentru piese de revoluție. Piesa execută mișcarea de rotație, iar scula mișcarea de translație.</p>
                    <img src="images/lathe.png" alt="Strung Universal" style="width:100%; border-radius:8px; margin-top:10px;">
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Mașini de Frezat (S7)</h4>
                    <p>Scula (freza) se rotește, iar piesa execută mișcarea de avans. Pentru suprafețe plane, profilate, roți dințate.</p>
                    <img src="images/milling.png" alt="Mașină de Frezat" style="width:100%; border-radius:8px; margin-top:10px;">
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Mașini de Rectificat</h4>
                    <p>Pentru finisarea suprafețelor cu precizie ridicată, folosind discuri abrazive.</p>
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Rabotat & Mortezat</h4>
                    <p>Prelucrarea prin așchiere cu mișcare rectilinie alternativă (pentru canale, suprafețe plane lungi).</p>
                </div>
            </div>
        `
    },
    {
        id: "unit1_components",
        title: "3. Componente & Acționare (S10-S15)",
        icon: "hardware-chip-outline",
        content: `
            <h2>Structura Mașinilor Unelte</h2>
            <p><strong>Săptămânile S10 - S15</strong></p>

            <div class="content-card">
                <h4>Piese Portante și Ghidaje (S10-S11)</h4>
                <ul>
                    <li><strong>Batiuri:</strong> Structura de rezistență, de obicei din fontă pentru amortizarea vibrațiilor.</li>
                    <li><strong>Ghidaje:</strong> Asigură precizia mișcării subansamblelor mobile (săniilor, meselor). Pot fi de alunecare sau de rostogolire.</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>Lanțuri Cinematice & Acționare (S12-S13)</h4>
                <p>Lanțul cinematic transmite mișcarea de la motor la arborele principal sau la mecanismul de avans. Simbolurile cinematice sunt standardizate.</p>
                <p><strong>Sisteme de acționare:</strong></p>
                <ul>
                    <li>Electrice (Motoare asincrone, pas cu pas).</li>
                    <li>Hidraulice (cilindri, motoare hidraulice pentru forțe mari).</li>
                    <li>Pneumatice (pentru prinderi rapide).</li>
                </ul>
            </div>
            
            <div class="content-card">
                <h4>Sisteme de Comandă (S15)</h4>
                <ul>
                    <li>Manuală (prin manete și roți de manevră).</li>
                    <li>Automată (cama, opritori).</li>
                    <li>Numerică (la mașinile CNC, deși modulul se axează pe cele convenționale, principiul comenzii este relevant).</li>
                </ul>
            </div>
        `
    },
    {
        id: "unit2_docs",
        title: "4. Documentația Tehnică (S16-S18)",
        icon: "document-text-outline",
        content: `
            <h2>Documentația Tehnică de Execuție</h2>
            <p><strong>Săptămânile S16 - S18</strong></p>
            
            <ul>
                <li><strong>Cartea mașinii:</strong> Manualul tehnic care conține instrucțiuni de instalare, utilizare, ungere și reparații.</li>
                <li><strong>Scheme de prelucrare:</strong> Desene simplificate care arată poziția piesei, a sculei și mișcările.</li>
                <li><strong>Fișa tehnologică:</strong> Documentul care descrie succesiunea operațiilor, sculele necesare și regimurile de lucru.</li>
                <li><strong>Desenul de execuție:</strong> Desenul piesei finite cu toate cotele și toleranțele.</li>
            </ul>
        `
    },
    {
        id: "unit3_regime",
        title: "5. Regimul de Așchiere (S19-S24)",
        icon: "speedometer-outline",
        content: `
            <h2>Elementele Regimului de Așchiere</h2>
            <p><strong>Săptămânile S19 - S24</strong></p>
            
            <table style="width:100%; border-collapse: collapse; margin-top:1rem; color:#fff; border: 1px solid var(--border-color);">
                <thead style="background:var(--primary-dark);">
                    <tr>
                        <th style="padding:10px; border:1px solid #555;">Parametru</th>
                        <th style="padding:10px; border:1px solid #555;">Simbol</th>
                        <th style="padding:10px; border:1px solid #555;">Descriere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px; border:1px solid #444;">Viteză de așchiere</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">v [m/min]</td>
                        <td style="padding:8px; border:1px solid #444;">Viteza relativă dintre sculă și piesă.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #444;">Avans</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">s [mm/rot]</td>
                        <td style="padding:8px; border:1px solid #444;">Deplasarea sculei la o rotație a piesei.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #444;">Adâncime</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">t [mm]</td>
                        <td style="padding:8px; border:1px solid #444;">Grosimea stratului de material îndepărtat.</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="content-card">
                <h4>Fenomene fizice & Uzura</h4>
                <p>Așchierea este însoțită de degajare de căldură. Uzura sculei depinde de regimul ales. Durabilitatea sculei este timpul de funcționare între două reascuțiri.</p>
            </div>
        `
    },
    {
        id: "unit4_tools",
        title: "6. Scule și Dispozitive (S25-S27)",
        icon: "construct-outline",
        content: `
            <h2>Scule, Dispozitive și Verificatoare (SDV)</h2>
            <p><strong>Săptămânile S25 - S27</strong></p>
            
            <div class="grid-2-cols" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Scule Așchietoare</h4>
                    <p>Cuțite de strung, freze, burghie, alezoare, broșe, discuri abrazive. Materiale: Oțel Rapid (Rp), Carburi metalice.</p>
                    <img src="images/tools.png" alt="Scule Așchietoare" style="width:100%; border-radius:8px; margin-top:10px;">
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">Dispozitive</h4>
                    <p>Universale (pentru strunjire), Menghine (frezare), Divizoare, Dispozitive de orientare și fixare specifice.</p>
                </div>
            </div>
        `
    },
    {
        id: "unit5_control",
        title: "7. Controlul Calității (S28-S29)",
        icon: "search-outline",
        content: `
            <h2>Controlul Pieselor Prelucrate</h2>
            <p><strong>Săptămânile S28 - S29</strong></p>
            <p>Verificarea conformității pieselor cu desenul de execuție.</p>
            
            <ul>
                <li><strong>Măsurare dimensională:</strong> Șubler, Micrometru, Comparator.</li>
                <li><strong>Controlul formei:</strong> Abateri de la circularitate, planeitate.</li>
                <li><strong>Controlul rugozității:</strong> Rugozimetru sau comparare cu etaloane.</li>
            </ul>
        `
    },
    {
        id: "unit6_ssm",
        title: "8. Norme SSM & Mediu (S30-S37)",
        icon: "shield-checkmark-outline",
        content: `
            <h2>Sănătatea și Securitatea Muncii (SSM)</h2>
            <p><strong>Săptămânile S30 - S37</strong></p>
            
            <div class="content-card" style="border-left: 4px solid var(--success-color);">
                <h4>Reguli Esențiale:</h4>
                <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
                    <div style="flex:1;">
                        <ul>
                            <li>Utilizarea echipamentului de protecție (salopetă, ochelari de protecție, încălțăminte cu bombeu).</li>
                            <li>Interzicerea îndepărtării așchiilor cu mâna liberă.</li>
                            <li>Verificarea stării tehnice a mașinii înainte de pornire.</li>
                            <li>Utilizarea ecranelor de protecție.</li>
                        </ul>
                    </div>
                    <div style="flex:0 0 200px;">
                        <img src="images/ppe.png" alt="Echipament Protectie" style="width:100%; border-radius:8px;">
                    </div>
                </div>
            </div>

            <div class="content-card">
                <h4>Protecția Mediului</h4>
                <p>Colectarea selectivă a deșeurilor (șpan metalic, uleiuri uzate, emulsii de răcire). Reciclarea materialelor.</p>
            </div>
        `
    },
    {
        id: "video_gallery",
        title: "Video Demonstrații",
        icon: "videocam-outline",
        content: `
            <h2>Galerie Video Educațională</h2>
            <p>Demonstrații practice ale operațiilor de prelucrare.</p>

            <div class="grid-2-cols" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:2rem;">
                
                <div class="video-card" style="background:var(--bg-card); border-radius:12px; overflow:hidden;">
                    <a href="https://www.youtube.com/watch?v=Za0YGOLf4Wk" target="_blank" style="display:block; position:relative; text-decoration:none;">
                        <img src="https://img.youtube.com/vi/Za0YGOLf4Wk/hqdefault.jpg" alt="Strunjirea" style="width:100%; display:block; opacity:0.8; transition:opacity 0.2s;">
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.7); padding:15px; border-radius:50%;">
                            <ion-icon name="play" style="color:white; font-size:32px;"></ion-icon>
                        </div>
                    </a>
                    <div style="padding:1rem;">
                        <h4 style="margin:0; color:var(--text-light);">Introducere în Strunjire</h4>
                        <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">Bazele utilizării unui strung manual - MakeHaven. (Click pentru vizionare)</p>
                    </div>
                </div>

                <div class="video-card" style="background:var(--bg-card); border-radius:12px; overflow:hidden;">
                   <a href="https://www.youtube.com/watch?v=Cwm-L9n-loE" target="_blank" style="display:block; position:relative; text-decoration:none;">
                        <img src="https://img.youtube.com/vi/Cwm-L9n-loE/hqdefault.jpg" alt="Frezarea" style="width:100%; display:block; opacity:0.8; transition:opacity 0.2s;">
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.7); padding:15px; border-radius:50%;">
                            <ion-icon name="play" style="color:white; font-size:32px;"></ion-icon>
                        </div>
                    </a>
                    <div style="padding:1rem;">
                        <h4 style="margin:0; color:var(--text-light);">Frezarea Verticală</h4>
                        <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">Tutorial de bază frezare verticală - Blondihacks. (Click pentru vizionare)</p>
                    </div>
                </div>

                <div class="video-card" style="background:var(--bg-card); border-radius:12px; overflow:hidden;">
                    <a href="https://www.youtube.com/watch?v=rcaJOM6tBQA" target="_blank" style="display:block; position:relative; text-decoration:none;">
                        <img src="https://img.youtube.com/vi/rcaJOM6tBQA/hqdefault.jpg" alt="SSM" style="width:100%; display:block; opacity:0.8; transition:opacity 0.2s;">
                         <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.7); padding:15px; border-radius:50%;">
                            <ion-icon name="play" style="color:white; font-size:32px;"></ion-icon>
                        </div>
                    </a>
                    <div style="padding:1rem;">
                        <h4 style="margin:0; color:var(--text-light);">Reguli de Siguranță (SSM)</h4>
                        <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">Siguranța în atelierul mecanic - Partea 1. (Click pentru vizionare)</p>
                    </div>
                </div>

            </div>
        `
    }
];
