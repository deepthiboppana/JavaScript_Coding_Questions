// JavaScript Practice App: Final Robust Version
// Handles categories, a question list, and 100-problem database.

(function () {
  // --- STATE ---
  var currentProblemIndex = 0;
  var currentCategory = 'all';
  var completedProblems = new Set();
  var el = {};

  // --- HELPERS ---
  function updateStatus(text, color) {
    if (el.appStatus) {
      el.appStatus.textContent = text;
      el.appStatus.style.color = color || "white";
    }
  }

  function getFilteredProblems() {
    var db = window.problems || [];
    if (currentCategory === 'all') return db;
    return db.filter(function (p) { return p.category === currentCategory; });
  }

  // --- UI RENDERING ---
  function renderProblemList() {
    if (!el.problemList) return;
    el.problemList.innerHTML = '';

    var filtered = getFilteredProblems();
    filtered.forEach(function (prob, index) {
      var btn = document.createElement('div');
      btn.className = 'problem-item' + (index === currentProblemIndex ? ' active' : '');
      var isDone = completedProblems.has(prob.id) ? '✓ ' : '';
      btn.textContent = isDone + prob.id + ". " + prob.title;

      btn.onclick = function () {
        currentProblemIndex = index;
        renderCurrentProblem();
        renderProblemList(); // Refresh active state
      };
      el.problemList.appendChild(btn);
    });
  }

  function renderCurrentProblem() {
    var filtered = getFilteredProblems();
    var prob = filtered[currentProblemIndex];
    if (!prob) return;

    // Basic Info
    if (el.title) el.title.textContent = prob.id + ". " + prob.title;
    if (el.desc) el.desc.textContent = prob.description;
    if (el.difficulty) {
      el.difficulty.textContent = prob.difficulty;
      el.difficulty.className = 'difficulty-badge difficulty-' + prob.difficulty;
    }
    if (el.category) el.category.textContent = prob.category;

    // Examples
    if (el.examples) {
      el.examples.innerHTML = '<h3>Examples:</h3>';
      prob.examples.forEach(function (ex) {
        var div = document.createElement('div');
        div.className = 'example';
        div.innerHTML = '<div><strong>Input:</strong> ' + ex.input + '</div>' +
          '<div><strong>Output:</strong> ' + ex.output + '</div>';
        el.examples.appendChild(div);
      });
    }

    // Code Editor
    var saved = localStorage.getItem('code_' + prob.id);
    if (el.editor) el.editor.value = saved || prob.starterCode;

    // Navigation Counter
    if (el.counter) el.counter.textContent = (currentProblemIndex + 1) + ' / ' + filtered.length;

    // Buttons
    if (el.prevBtn) el.prevBtn.disabled = (currentProblemIndex === 0);
    if (el.nextBtn) el.nextBtn.disabled = (currentProblemIndex >= filtered.length - 1);
    if (el.markBtn) el.markBtn.classList.toggle('completed', completedProblems.has(prob.id));

    // Hide results
    if (el.resultsSec) el.resultsSec.classList.remove('show');
  }

  function updateProgress() {
    var total = (window.problems || []).length;
    if (el.progress) el.progress.textContent = completedProblems.size + ' / ' + total;
  }

  // --- ACTIONS ---
  function runSolution() {
    var prob = getFilteredProblems()[currentProblemIndex];
    if (!prob || !el.editor) return;

    var code = el.editor.value;
    localStorage.setItem('code_' + prob.id, code);

    if (el.testResults) el.testResults.innerHTML = '';
    var allPassed = true;

    try {
      // Execute code
      (0, eval)(code);

      // Find function name (heuristic)
      var match = code.match(/function\s+([a-zA-Z0-9_]+)/) || code.match(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=/);
      var fnName = match ? match[1] : null;

      if (!fnName) throw new Error("Please define a named function!");
      var fn = window[fnName] || eval(fnName);

      prob.testCases.forEach(function (tc, i) {
        var result = fn.apply(null, tc.input);
        var passed = JSON.stringify(result) === JSON.stringify(tc.expected);

        var div = document.createElement('div');
        div.className = 'test-result ' + (passed ? 'passed' : 'failed');
        div.innerHTML = '<span>Case ' + (i + 1) + '</span> <span>' + (passed ? 'PASS ✓' : 'FAIL ✗') + '</span>';
        if (el.testResults) el.testResults.appendChild(div);
        if (!passed) allPassed = false;
      });

      if (allPassed) {
        completedProblems.add(prob.id);
        localStorage.setItem('js_mastery_done', JSON.stringify(Array.from(completedProblems)));
        updateProgress();
        renderProblemList();
        renderCurrentProblem();
      }
    } catch (e) {
      if (el.testResults) el.testResults.innerHTML = '<div class="error-message">Error: ' + e.message + '</div>';
    }
    if (el.resultsSec) el.resultsSec.classList.add('show');
  }

  // --- STARTUP ---
  function initialize() {
    // Cache Elements
    el = {
      appStatus: document.getElementById('app-status'),
      progress: document.getElementById('progress-count'),
      categoryBtns: document.querySelectorAll('.category-btn'),
      problemList: document.getElementById('problem-list'),
      title: document.getElementById('problem-title'),
      desc: document.getElementById('problem-description'),
      difficulty: document.getElementById('problem-difficulty'),
      category: document.getElementById('problem-category'),
      examples: document.getElementById('problem-examples'),
      editor: document.getElementById('code-editor'),
      runBtn: document.getElementById('run-btn'),
      solBtn: document.getElementById('solution-btn'),
      prevBtn: document.getElementById('prev-btn'),
      nextBtn: document.getElementById('next-btn'),
      markBtn: document.getElementById('mark-complete-btn'),
      resetBtn: document.getElementById('reset-btn'),
      counter: document.getElementById('problem-counter'),
      resultsSec: document.getElementById('results-section'),
      testResults: document.getElementById('test-results')
    };

    updateStatus("Connecting DB...");

    // 1. Check DB
    if (!window.problems) {
      updateStatus("DB Failed ❌", "#ff5555");
      return;
    }
    updateStatus("Ready ✅", "#10b981");

    // 2. Load Progress
    var saved = localStorage.getItem('js_mastery_done');
    if (saved) {
      try {
        var parsed = JSON.parse(saved);
        completedProblems = new Set(parsed);
      } catch (e) { }
    }

    // 3. Event Listeners
    if (el.runBtn) el.runBtn.onclick = runSolution;
    if (el.solBtn) el.solBtn.onclick = function () {
      var p = getFilteredProblems()[currentProblemIndex];
      if (p) alert("Hint: " + p.hint);
    };
    if (el.prevBtn) el.prevBtn.onclick = function () { if (currentProblemIndex > 0) { currentProblemIndex--; renderCurrentProblem(); renderProblemList(); } };
    if (el.nextBtn) el.nextBtn.onclick = function () { if (currentProblemIndex < getFilteredProblems().length - 1) { currentProblemIndex++; renderCurrentProblem(); renderProblemList(); } };
    if (el.resetBtn) el.resetBtn.onclick = function () {
      var p = getFilteredProblems()[currentProblemIndex];
      if (p && confirm("Reset your code?")) {
        el.editor.value = p.starterCode;
        localStorage.removeItem('code_' + p.id);
      }
    };
    if (el.markBtn) el.markBtn.onclick = function () {
      var p = getFilteredProblems()[currentProblemIndex];
      if (!p) return;
      if (completedProblems.has(p.id)) completedProblems.delete(p.id); else completedProblems.add(p.id);
      localStorage.setItem('js_mastery_done', JSON.stringify(Array.from(completedProblems)));
      updateProgress();
      renderProblemList();
      renderCurrentProblem();
    };

    // Category Buttons
    el.categoryBtns.forEach(function (btn) {
      btn.onclick = function () {
        el.categoryBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        currentProblemIndex = 0;
        renderProblemList();
        renderCurrentProblem();
      };
    });

    // Initial Render
    renderProblemList();
    renderCurrentProblem();
    updateProgress();
  }

  // Run on Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
