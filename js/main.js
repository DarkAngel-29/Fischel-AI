const difficultyButtons = document.querySelectorAll('.difficulty-btn');
        difficultyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                difficultyButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        const generateBtn = document.querySelector('.generate-btn');
        let totalQuestions = 0;
        let correctAnswers = 0;
        generateBtn.addEventListener('click', () => {
            totalQuestions++;
            if (Math.random() > 0.5) {
                correctAnswers++;
            }
            document.getElementById('totalQuestions').textContent = totalQuestions;
            document.getElementById('correctAnswers').textContent = correctAnswers;

            const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
            
            document.getElementById('accuracy').textContent = accuracy + ' %';
            
            const avgScore = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
            
            document.getElementById('avgScore').innerHTML = avgScore + ' <span style="font-size: 18px;">/100</span>';

            const questionArea = document.querySelector('.question-area');
            const subject = document.getElementById('subject').value;
            const difficulty = document.querySelector('.difficulty-btn.active').dataset.difficulty;
            
            questionArea.innerHTML = `
                <div style="text-align: left;">
                    <h3 style="color: #043531; margin-bottom: 15px;">Question ${totalQuestions}</h3>
                    <p style="color: #19ffe4; font-size: 15px; line-height: 1.8;">
                        Sample ${subject} question at ${difficulty} difficulty level would appear here. 
                        Click "Generate Question" again to simulate answering and generating a new question.
                    </p>
                </div>
            `;

            document.querySelector('.status-badge').textContent = 'Question active';
        });
