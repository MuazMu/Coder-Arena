// Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        btn.classList.add('active');
        document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
    });
});

// Modal functionality
const addProblemBtn = document.getElementById('addProblemBtn');
const addProblemModal = document.getElementById('addProblemModal');
const modalCloseBtns = document.querySelectorAll('.modal-close');

addProblemBtn.addEventListener('click', () => {
    addProblemModal.style.display = 'block';
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        addProblemModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === addProblemModal) {
        addProblemModal.style.display = 'none';
    }
});

// Handle form submission
const addProblemForm = document.getElementById('addProblemForm');
addProblemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just close the modal
    addProblemModal.style.display = 'none';
});

// Load and display existing problems
function loadProblems() {
    const problemsList = document.querySelector('.problems-list');
    problemsList.innerHTML = problems.map(problem => `
        <div class="problem-item">
            <h3>${problem.title}</h3>
            <span class="difficulty-${problem.difficulty}">${problem.difficulty}</span>
            <div class="actions">
                <button class="btn btn-outline btn-sm" onclick="editProblem(${problem.id})">
                    <i data-feather="edit"></i>
                </button>
                <button class="btn btn-outline btn-sm" onclick="deleteProblem(${problem.id})">
                    <i data-feather="trash-2"></i>
                </button>
            </div>
        </div>
    `).join('');
    feather.replace();
}

// Load initial data
loadProblems();