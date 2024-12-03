// Problems data
const problems = [
    {
        id: 1,
        title: 'Two Sum',
        difficulty: 'easy',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        successRate: '65%'
    },
    {
        id: 2,
        title: 'Valid Parentheses',
        difficulty: 'easy',
        description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
        successRate: '72%'
    },
    {
        id: 3,
        title: 'Merge Two Sorted Lists',
        difficulty: 'medium',
        description: 'Merge two sorted linked lists and return it as a new sorted list.',
        successRate: '58%'
    },
    {
        id: 4,
        title: 'Maximum Subarray',
        difficulty: 'medium',
        description: 'Find the contiguous subarray which has the largest sum and return its sum.',
        successRate: '49%'
    },
    {
        id: 5,
        title: 'Median of Two Sorted Arrays',
        difficulty: 'hard',
        description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
        successRate: '35%'
    }
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