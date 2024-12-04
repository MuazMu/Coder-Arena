// Problems data
const problems = [
    // Easy Problems (sample - add more following this pattern)
    {
        id: 1,
        title: "Hello World",
        difficulty: "easy",
        description: "Write a function that returns 'Hello, World!'",
        examples: [
            { input: "", output: "Hello, World!" }
        ],
        testCases: [
            { input: "", expectedOutput: "Hello, World!" }
        ],
        starterCode: {
            python: "def solution():\n    # Write your code here\n    pass",
            javascript: "function solution() {\n    // Write your code here\n}",
            java: "public class Solution {\n    public static String solution() {\n        // Write your code here\n        return \"\";\n    }\n}"
        }
    },
    // Add more problems here...
];

// DOM Elements
const problemsGrid = document.getElementById('problemsGrid');
const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');

// Render problem card
function createProblemCard(problem) {
    const card = document.createElement('div');
    card.className = 'problem-card';
    card.onclick = () => window.location.href = `/problem.html?id=${problem.id}`;

    card.innerHTML = `
        <h3 class="problem-title">${problem.title}</h3>
        <span class="problem-difficulty difficulty-${problem.difficulty}">
            ${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
        </span>
        <p class="problem-description">${problem.description}</p>
        <div class="problem-stats">
            <span>Success Rate: ${problem.successRate}</span>
        </div>
    `;

    return card;
}

// Filter problems
function filterProblems() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDifficulty = difficultyFilter.value;

    const filteredProblems = problems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm);
        const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
        return matchesSearch && matchesDifficulty;
    });

    problemsGrid.innerHTML = '';
    filteredProblems.forEach(problem => {
        problemsGrid.appendChild(createProblemCard(problem));
    });
}

// Event listeners
searchInput.addEventListener('input', filterProblems);
difficultyFilter.addEventListener('change', filterProblems);

// Initial render
filterProblems();

// Function to populate problems grid
function populateProblemsGrid() {
    const grid = document.getElementById('problemsGrid');
    problems.forEach(problem => {
        const problemCard = document.createElement('div');
        problemCard.className = `problem-card ${problem.difficulty}`;
        problemCard.innerHTML = `
            <h3>${problem.title}</h3>
            <span class="difficulty-badge ${problem.difficulty}">${problem.difficulty}</span>
        `;
        problemCard.addEventListener('click', () => loadProblem(problem));
        grid.appendChild(problemCard);
    });
}

// Function to load problem into workspace
function loadProblem(problem) {
    document.getElementById('problemTitle').textContent = problem.title;
    document.getElementById('problemDescription').textContent = problem.description;
    
    const language = document.getElementById('languageSelect').value;
    window.editor.setValue(problem.starterCode[language]);
    window.currentProblem = problem;
}

// Add run code functionality
document.getElementById('runCode').addEventListener('click', async () => {
    const outputArea = document.getElementById('outputArea');
    const code = window.editor.getValue();
    const language = document.getElementById('languageSelect').value;
    const problem = window.currentProblem;

    try {
        // In a real implementation, you'd send this to your backend
        // This is a simplified version for demonstration
        const result = await evaluateCode(code, language, problem);
        
        if (result.success) {
            outputArea.innerHTML = '<span style="color: green">Correct! All test cases passed.</span>';
        } else {
            outputArea.innerHTML = '<span style="color: red">Incorrect. Your output does not match the expected output.</span>';
        }
    } catch (error) {
        outputArea.innerHTML = `<span style="color: red">Error: ${error.message}</span>`;
    }
});

// Simple code evaluation function (you'll need a proper backend implementation)
async function evaluateCode(code, language, problem) {
    // This is a simplified version - in reality, you'd send this to your backend
    try {
        let result;
        if (language === 'javascript') {
            // WARNING: eval is used here for demonstration - never use in production!
            result = eval(`(${code})()`);
        }
        // Add similar handling for Python and Java (requires backend)
        
        return {
            success: result === problem.testCases[0].expectedOutput,
            output: result
        };
    } catch (error) {
        throw new Error('Code execution failed: ' + error.message);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateProblemsGrid();
});

// Handle language change
document.getElementById('languageSelect').addEventListener('change', (e) => {
    if (window.currentProblem) {
        window.editor.setValue(window.currentProblem.starterCode[e.target.value]);
    }
});