document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const subjectList = document.getElementById('subject-list');
    const contentDisplay = document.getElementById('content-display');
    const currentSectionTitle = document.getElementById('current-section-title');
    const menuToggle = document.getElementById('menu-toggle');
    const searchInput = document.getElementById('search-input');
    const sidebar = document.querySelector('.sidebar');

    // Quiz Elements
    const openQuizBtn = document.getElementById('open-quiz-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const scoreDisplay = document.getElementById('score-display');
    const questionTracker = document.getElementById('question-tracker');

    // --- State ---
    let currentQuizIndex = 0;
    let score = 0;

    // --- Initialization ---
    renderSidebar(subjectsData);

    // --- Search Logic ---
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = subjectsData.filter(s =>
            s.title.toLowerCase().includes(term) ||
            s.content.toLowerCase().includes(term)
        );
        renderSidebar(filtered);
    });

    // Load first subject by default (optional)
    // loadSubject(subjectsData[0].id);

    // --- Navigation Logic ---
    function renderSidebar(data) {
        subjectList.innerHTML = '';

        // 0. Handle empty results
        if (data.length === 0) {
            subjectList.innerHTML = '<div style="padding:1rem; color:var(--text-muted); text-align:center;">Niciun rezultat.</div>';
            return;
        }

        // 1. Regular Subjects
        data.forEach(subject => {
            const item = document.createElement('div');
            item.className = 'nav-item';
            item.innerHTML = `<ion-icon name="${subject.icon}"></ion-icon> ${subject.title}`;
            item.onclick = () => {
                loadSubject(subject.id);
                // Close mobile sidebar if open
                sidebar.classList.remove('open');
                // Update active state
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            };
            subjectList.appendChild(item);
        });

        // 2. Resources Section (Tests)
        const divider = document.createElement('div');
        divider.innerHTML = '<hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">';
        subjectList.appendChild(divider);

        const resourcesTitle = document.createElement('div');
        resourcesTitle.style.padding = '0 15px';
        resourcesTitle.style.fontSize = '0.75rem';
        resourcesTitle.style.textTransform = 'uppercase';
        resourcesTitle.style.letterSpacing = '1px';
        resourcesTitle.style.color = '#94a3b8';
        resourcesTitle.style.marginBottom = '5px';
        resourcesTitle.innerText = 'Resurse Doc';
        subjectList.appendChild(resourcesTitle);

        const testItem = document.createElement('div');
        testItem.className = 'nav-item';
        testItem.innerHTML = `<ion-icon name="print-outline"></ion-icon> Teste Printabile`;
        testItem.onclick = () => {
            loadTestsView();
            sidebar.classList.remove('open');
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            testItem.classList.add('active');
        };
        subjectList.appendChild(testItem);

        // 3. Calculator Link
        const calcItem = document.createElement('div');
        calcItem.className = 'nav-item';
        calcItem.innerHTML = `<ion-icon name="calculator-outline"></ion-icon> Calculator Așchiere`;
        calcItem.onclick = () => {
            loadCalculatorView();
            sidebar.classList.remove('open');
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            calcItem.classList.add('active');
        };
        subjectList.appendChild(calcItem);
    }

    function loadTestsView() {
        contentDisplay.style.opacity = '0';
        setTimeout(() => {
            currentSectionTitle.innerText = "Teste Printabile (PDF/Print)";

            let html = `
                <h2>Resurse pentru Evaluare</h2>
                <p>Selectați un test pentru a-l descărca și imprima pentru clasă.</p>
                <div class="grid-2-cols" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin-top:2rem;">
            `;

            if (typeof printableTests !== 'undefined') {
                for (const [key, test] of Object.entries(printableTests)) {
                    html += `
                        <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
                            <h3 style="color: var(--accent-color); margin-bottom: 0.5rem;">${test.title}</h3>
                            <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 1.5rem;">${test.chapter}</p>
                            <button onclick="downloadTest('${key}')" class="btn-primary" style="width:100%; justify-content:center;">
                                <ion-icon name="download-outline"></ion-icon> Descarcă Test
                            </button>
                        </div>
                    `;
                }
            } else {
                html += `<p>Nu există teste disponibile momentan.</p>`;
            }

            html += `</div>`;
            contentDisplay.innerHTML = html;
            contentDisplay.style.opacity = '1';
        }, 150);
    }

    function loadCalculatorView() {
        contentDisplay.style.opacity = '0';
        setTimeout(() => {
            currentSectionTitle.innerText = "Calculator Tehnologic";
            contentDisplay.innerHTML = `
                <h2>Calculator Regim Așchiere</h2>
                <div style="background:var(--bg-card); padding:2rem; border-radius:12px; border:1px solid var(--border-color); max-width:600px;">
                    <div style="margin-bottom:1.5rem;">
                        <label style="display:block; margin-bottom:0.5rem; color:#ccc;">Diametrul Piesei (D) [mm]</label>
                        <input type="number" id="calc-d" placeholder="Ex: 50" style="width:100%; padding:10px; border-radius:8px; border:1px solid var(--border-color); background:rgba(255,255,255,0.05); color:white;">
                    </div>
                    <div style="margin-bottom:1.5rem;">
                        <label style="display:block; margin-bottom:0.5rem; color:#ccc;">Viteza de Așchiere (v) [m/min]</label>
                        <input type="number" id="calc-v" placeholder="Ex: 30" style="width:100%; padding:10px; border-radius:8px; border:1px solid var(--border-color); background:rgba(255,255,255,0.05); color:white;">
                    </div>
                    <button id="calc-btn" class="btn-primary full-width">Calculează Turația (n)</button>
                    
                    <div id="calc-result" style="margin-top:2rem; padding:1.5rem; background:rgba(255,255,255,0.05); border-radius:8px; text-align:center; display:none;">
                        <span style="color:#aaa;">Turația necesară:</span>
                        <div style="font-size:2.5rem; font-weight:bold; color:var(--accent-color); margin-top:0.5rem;">
                            <span id="result-val">0</span> <span style="font-size:1rem;">rot/min</span>
                        </div>
                    </div>
                </div>
            `;

            // Logic
            document.getElementById('calc-btn').addEventListener('click', () => {
                const D = parseFloat(document.getElementById('calc-d').value);
                const v = parseFloat(document.getElementById('calc-v').value);
                if (D && v) {
                    // n = (1000 * v) / (PI * D)
                    const n = Math.round((1000 * v) / (Math.PI * D));
                    document.getElementById('result-val').innerText = n;
                    document.getElementById('calc-result').style.display = 'block';
                } else {
                    alert("Introduceți valori valide!");
                }
            });

            contentDisplay.style.opacity = '1';
        }, 150);
    }

    function loadSubject(id) {
        const subject = subjectsData.find(s => s.id === id);
        if (!subject) return;

        // Fade out effect
        contentDisplay.style.opacity = '0';

        setTimeout(() => {
            currentSectionTitle.innerText = subject.title;
            contentDisplay.innerHTML = subject.content;
            contentDisplay.style.opacity = '1';
            contentDisplay.style.transition = 'opacity 0.3s ease';
        }, 150);
    }

    // --- UI Interactions ---
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // --- Quiz Engine ---
    openQuizBtn.addEventListener('click', startQuiz);
    closeQuizBtn.addEventListener('click', () => quizOverlay.classList.add('hidden'));

    function startQuiz() {
        if (typeof quizQuestions === 'undefined' || quizQuestions.length === 0) {
            alert("Nu există întrebări pentru test!");
            return;
        }
        currentQuizIndex = 0;
        score = 0;
        quizOverlay.classList.remove('hidden');
        scoreDisplay.classList.add('hidden');
        nextQuestionBtn.innerText = "Următoarea";
        nextQuestionBtn.onclick = checkAnswer;
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuizIndex >= quizQuestions.length) {
            finishQuiz();
            return;
        }

        const q = quizQuestions[currentQuizIndex];
        questionTracker.innerText = `Întrebarea ${currentQuizIndex + 1} / ${quizQuestions.length}`;
        quizQuestionEl.innerText = q.question;
        quizOptionsEl.innerHTML = '';

        q.options.forEach((opt, index) => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option';
            btn.innerHTML = `<span style="font-weight:bold; color:var(--accent-color)">${['A', 'B', 'C', 'D'][index]}.</span> ${opt}`;
            btn.dataset.index = index;
            btn.onclick = () => selectOption(btn);
            quizOptionsEl.appendChild(btn);
        });
    }

    let selectedOptionIndex = null;

    function selectOption(btnElement) {
        // Deselect all
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        // Select clicked
        btnElement.classList.add('selected');
        selectedOptionIndex = parseInt(btnElement.dataset.index);
    }

    function checkAnswer() {
        if (selectedOptionIndex === null) {
            alert("Vă rugăm să selectați un răspuns!");
            return;
        }

        const correctIndex = quizQuestions[currentQuizIndex].correct;
        const options = document.querySelectorAll('.quiz-option');

        // Show result
        if (selectedOptionIndex === correctIndex) {
            options[selectedOptionIndex].style.background = "rgba(16, 185, 129, 0.2)"; // Green
            options[selectedOptionIndex].style.borderColor = "var(--success-color)";
            score++;
        } else {
            options[selectedOptionIndex].style.background = "rgba(239, 68, 68, 0.2)"; // Red
            options[selectedOptionIndex].style.borderColor = "var(--error-color)";
            // Highlight correct one
            options[correctIndex].style.background = "rgba(16, 185, 129, 0.2)";
            options[correctIndex].style.borderColor = "var(--success-color)";
        }

        // Delay to go to next question
        nextQuestionBtn.disabled = true;
        setTimeout(() => {
            currentQuizIndex++;
            selectedOptionIndex = null;
            nextQuestionBtn.disabled = false;
            loadQuestion();
        }, 1500);
    }

    function finishQuiz() {
        quizQuestionEl.innerHTML = `<h3 style="text-align:center">Test Finalizat!</h3>`;
        quizOptionsEl.innerHTML = `
            <div style="text-align:center; font-size: 1.2rem;">
                Scor Final: <strong style="color:var(--accent-color); font-size: 2rem;">${score} / ${quizQuestions.length}</strong>
            </div>
        `;
        questionTracker.innerText = "";
        nextQuestionBtn.innerText = "Închide";
        nextQuestionBtn.onclick = () => quizOverlay.classList.add('hidden');
    }
    // --- TEST DOWNLOAD LOGIC ---
    window.downloadTest = function (testId) {
        const testData = printableTests[testId];
        if (!testData) return;

        // Generate Questions HTML
        const questionsHtml = testData.questions.map(q =>
            `<div class="question" style="margin-bottom:20px; border-bottom:1px dashed #ccc; padding-bottom:10px;">${q}</div>`
        ).join('');

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="ro">
            <head>
                <meta charset="UTF-8">
                <title>${testData.title}</title>
                <style>
                    body { font-family: 'Times New Roman', serif; line-height: 1.4; padding: 40px; max-width: 800px; margin: 0 auto; }
                    h1 { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 5px; }
                    h2 { text-align: center; font-size: 1.1rem; font-weight: normal; margin-bottom: 30px; margin-top:0; }
                    .header-info { display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 1px solid #ccc; padding-bottom: 20px; }
                    .question { page-break-inside: avoid; }
                    .footer { position: fixed; bottom: 20px; left:0; width:100%; text-align: center; font-size: 0.8rem; color:#666; }
                    @media print {
                        body { padding: 20px; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <div class="header-info" style="border:none; margin-bottom: 20px;">
                    <h2 style="margin:0; font-weight:bold;">Liceul Tehnologic "Aurel Vlaicu"</h2>
                </div>

                <div style="display:flex; justify-content:space-between; margin-bottom:20px; font-size: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                    <div style="font-size:1.1rem;"><strong>Prof. Ing. Popescu Romulus</strong></div>
                    <div style="text-align: right;">
                        <strong>Nume Elev:</strong> ........................................<br>
                        Data: ....................<br>
                        Nota: ....................
                    </div>
                </div>

                <h1>${testData.title}</h1>
                <h2>${testData.chapter}</h2>

                <div class="questions-list">
                    ${questionsHtml}
                </div>

                <script>
                    window.onload = function() { window.print(); }
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${testData.title.replace(/\s+/g, '_')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
});
