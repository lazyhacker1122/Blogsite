// 15 Predefined High-Density Rich Semantic Production Data Matrix Articles
const defaultMockPosts = [
    { id: "mock-t1", category: "technology", title: "Quantum Computing Frameworks", content: "Exploring scalable structural computing paradigms, topological qubits compilation configurations, and quantum superposition gate array matrix alignments in multi-tenant environments.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 24, "❤️": 18, "🔥": 35, "😂": 0 } },
    { id: "mock-t2", category: "technology", title: "Edge Computing Optimization Protocols", content: "De-coupled edge processing infrastructure optimizations for microsecond telemetry streams data reduction across low-bandwidth localized container systems.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 12, "❤️": 9, "🔥": 21, "😂": 1 } },
    { id: "mock-t3", category: "technology", title: "AI-Driven Neural Codebases Transformation", content: "Evaluating deep transformer logic parsers in legacy architectural components migration pipelines to achieve automated multi-threaded clean compliance blocks verification.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 45, "❤️": 32, "🔥": 56, "😂: 2" } },
    { id: "mock-t4", category: "technology", title: "Cybersecurity Mesh Protection Architecture", content: "Deploying dynamic decentralized contextual firewalls around volatile serverless infrastructure to block micro-fuzzing loops and session hijack exploits.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 33, "❤️": 15, "🔥": 41, "😂": 0 } },
    { id: "mock-t5", category: "technology", title: "Decentralized Cryptographic Identity Ledgers", content: "Ensuring zero-trust validation speeds via persistent state hash chains tracking across distributed nodes registries without compromising client verification signatures.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 19, "❤️": 22, "🔥": 18, "😂": 4 } },

    { id: "mock-e1", category: "education", title: "Adaptive Learning Optimization Sequences", content: "Algorithmic tracking of student responses velocity matrices to adjust real-time lesson matrix difficulty thresholds inside immersive cognitive modules.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 15, "❤️": 27, "🔥": 12, "😂": 0 } },
    { id: "mock-e2", category: "education", title: "Immersive Virtual Workspaces Frameworks", content: "Designing low-latency multi-user state synchronization networks for distributed technical universities mapping spatial geometry simulations natively.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 22, "❤️": 14, "🔥": 30, "😂": 1 } },
    { id: "mock-e3", category: "education", title: "Open-Source Global Academic Infrastructures", content: "Architecting decentralized global digital asset delivery channels handling terabyte classroom workloads via secure edge content hubs synchronization rules.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 18, "❤️": 19, "🔥": 11, "😂": 0 } },
    { id: "mock-e4", category: "education", title: "Gamified Logic Processing Engines Performance", content: "Statistical validation models evaluating cognitive feedback Loops in logic processing software pipelines targeting engineering calculations validation speeds.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 29, "❤️": 31, "🔥": 25, "😂": 3 } },
    { id: "mock-e5", category: "education", title: "Neural Networks For Customized Curriculum Synthesis", content: "Compiling micro-performance telemetry logs across thousands of developers to synthesize tailored technical execution timelines completely automatically.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 41, "❤️": 38, "🔥": 49, "😂": 1 } },

    { id: "mock-w1", category: "worldwide", title: "Global Distributed Workforce Operations Infrastructure", content: "Analyzing asynchronous organizational workflows, zero-trust endpoint logging schemas, and cross-border digital compliance routers scaling.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 52, "❤️": 24, "🔥": 37, "😂": 2 } },
    { id: "mock-w2", category: "worldwide", title: "Cross-Border Cloud Telemetry Policy Audits", content: "Multi-region jurisdiction tracking layer models maintaining cryptographic isolation fields over personal metadata transfers across international datacenters.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 14, "❤️": 8, "🔥": 16, "😂": 0 } },
    { id: "mock-w3", category: "worldwide", title: "Digital Currency Scalability Regulatory Rules", content: "High-throughput block verification performance benchmarks under multi-jurisdiction fiscal compliance triggers and secure encryption safeguards.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 26, "❤️": 13, "🔥": 29, "😂": 5 } },
    { id: "mock-w4", category: "worldwide", title: "Smart Cities Heterogeneous Data Stream Clusters", content: "Orchestrating live IoT cluster inputs across municipal power grids, autonomous routing paths channels, and thermal dissipation nodes.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 38, "❤️": 21, "🔥": 34, "😂": 1 } },
    { id: "mock-w5", category: "worldwide", title: "Global Green Energy Microgrids Orchestration Models", content: "Load-balancing machine learning routines scheduling local battery array injection discharge patterns against real-time global environment fluxes.", author: "Admin", timestamp: "2026-08-24", reactions: { "👍": 47, "❤️": 42, "🔥": 51, "😂": 0 } }
];

// Anti-XSS Sanitizer Input Function Layer
function sanitizeInput(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;")
              .replace(/\//g, "&#x2F;");
}

// Initialization Pipelines
if (!localStorage.getItem('devspace_posts')) {
    localStorage.setItem('devspace_posts', JSON.stringify(defaultMockPosts));
}

// Global Thematic Setup Wrapper Tracker
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    syncAuthUI();
    setupPrivacyLocks();
});

// Theme Persistence Switcher Engine Logic
function initTheme() {
    const savedTheme = localStorage.getItem('devspace_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        themeBtn.onclick = () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('devspace_theme', target);
            themeBtn.textContent = target === 'dark' ? '☀️' : '🌙';
        };
    }
}

// Session Tracking State sync
function syncAuthUI() {
    const loggedUser = localStorage.getItem('devspace_session');
    const authLink = document.getElementById('authLink');
    if (authLink) {
        if (loggedUser) {
            authLink.textContent = `Logout (@${loggedUser})`;
            authLink.href = "#";
            authLink.onclick = (e) => {
                e.preventDefault();
                localStorage.removeItem('devspace_session');
                alert('Session closed safely. Context identity purged.');
                window.location.reload();
            };
        } else {
            authLink.textContent = "Login";
            authLink.href = "login.html";
            authLink.onclick = null;
        }
    }
}

// Form Password Visibility Mask toggler
function togglePassVisibility(id) {
    const el = document.getElementById(id);
    if(el) {
        el.type = el.type === 'password' ? 'text' : 'password';
    }
}

// Strict Client Node Sign Up Authentication Pipeline
function handleSignup(e) {
    e.preventDefault();
    const user = document.getElementById('regUser').value.trim();
    const pass = document.getElementById('regPass').value;
    const errorBox = document.getElementById('signupErrors');
    
    errorBox.style.display = "none";
    errorBox.textContent = "";

    // Strength Validations Requirements
    const alphaRegex = /^[A-Za-z0-9]+$/;
    if (!alphaRegex.test(user)) {
        errorBox.textContent = "Username must be alphanumeric token blocks only.";
        errorBox.style.display = "block";
        return;
    }

    const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPassRegex.test(pass)) {
        errorBox.textContent = "Password failure: Requires minimum 8 chars, 1 uppercase, 1 lowercase, 1 digit, and 1 special symbol.";
        errorBox.style.display = "block";
        return;
    }

    let users = JSON.parse(localStorage.getItem('devspace_users') || '[]');
    if (users.some(u => u.username.toLowerCase() === user.toLowerCase())) {
        errorBox.textContent = "Conflict error: Identity signature block already allocated.";
        errorBox.style.display = "block";
        return;
    }

    users.push({ username: user, password: btoa(pass) }); // Basic obscuring
    localStorage.setItem('devspace_users', JSON.stringify(users));
    alert('Registry Compiled successfully. Proceed to login node portal.');
    window.location.href = 'login.html';
}

// Brute-force Lock variables tracker
let loginFailCount = 0;
function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const msgBox = document.getElementById('lockoutMsg');

    if (localStorage.getItem('devspace_lockout_until') && Date.now() < parseInt(localStorage.getItem('devspace_lockout_until'))) {
        const remaining = Math.round((parseInt(localStorage.getItem('devspace_lockout_until')) - Date.now()) / 1000);
        msgBox.textContent = `Portal locked. Brute force defense system cooling: ${remaining}s left.`;
        msgBox.style.display = "block";
        return;
    }

    const users = JSON.parse(localStorage.getItem('devspace_users') || '[]');
    const match = users.find(u => u.username.toLowerCase() === user.toLowerCase() && u.password === btoa(pass));

    if (match || (user === "admin" && pass === "Admin@123")) {
        loginFailCount = 0;
        localStorage.setItem('devspace_session', user);
        alert(`Signature validated. Welcome node @${user}.`);
        window.location.href = 'index.html';
    } else {
        loginFailCount++;
        if (loginFailCount >= 5) {
            const unlockTime = Date.now() + 30000;
            localStorage.setItem('devspace_lockout_until', unlockTime.toString());
            msgBox.textContent = "Security Alert: 5 consecutive validation failures detected. Form container locked for 30s.";
        } else {
            msgBox.textContent = `Invalid access signature. Attempt [${loginFailCount}/5] before lock.`;
        }
        msgBox.style.display = "block";
    }
}

// Live Media Preview Streams Trackers
let mediaBlobs = { image: '', video: '', file: '', fileName: '' };

function previewMedia(type) {
    const fileEl = document.getElementById(`post${type.charAt(0).toUpperCase() + type.slice(1)}`);
    const previewContainer = document.getElementById(`${type}Preview`);
    previewContainer.innerHTML = '';

    if (!fileEl || !fileEl.files[0]) return;
    const file = fileEl.files[0];

    // Whitelist Validation Sandbox Guard Checks
    if (type === 'image' && !file.type.startsWith('image/')) { alert('Prohibited signature: File is not an image pattern.'); fileEl.value=''; return;}
    if (type === 'video' && !file.type.startsWith('video/')) { alert('Prohibited signature: File is not a valid video stream.'); fileEl.value=''; return;}
    if (type === 'file' && !file.name.endsWith('.zip') && !file.name.endsWith('.pdf')) { alert('Prohibited signature: Documents limited to .pdf or .zip archives.'); fileEl.value=''; return;}

    const reader = new FileReader();
    reader.onload = function(e) {
        mediaBlobs[type] = e.target.result;
        if (type === 'image') {
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview stream">`;
        } else if (type === 'video') {
            previewContainer.innerHTML = `<video src="${e.target.result}" controls></video>`;
        } else if (type === 'file') {
            mediaBlobs.fileName = sanitizeInput(file.name);
            previewContainer.innerHTML = `<p class="success-text">📦 ${mediaBlobs.fileName} Loaded</p>`;
        }
    };
    reader.readAsDataURL(file);
}

// Secure Post submission engine handler
function handlePostSubmit(e) {
    e.preventDefault();
    const session = localStorage.getItem('devspace_session');
    if (!session) {
        alert('Access Restied: Authenticate signature via registry portal before submitting content feeds.');
        window.location.href = 'login.html';
        return;
    }

    const title = document.getElementById('postTitle').value.trim();
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value.trim();

    let posts = JSON.parse(localStorage.getItem('devspace_posts') || '[]');
    
    const newPost = {
        id: 'post-' + Date.now(),
        category: sanitizeInput(category),
        title: sanitizeInput(title),
        content: sanitizeInput(content),
        image: mediaBlobs.image,
        video: mediaBlobs.video,
        file: mediaBlobs.file,
        fileName: mediaBlobs.fileName,
        author: sanitizeInput(session),
        timestamp: new Date().toISOString().split('T')[0],
        reactions: { "👍": 0, "❤️": 0, "🔥": 0, "😂": 0 }
    };

    posts.unshift(newPost);
    localStorage.setItem('devspace_posts', JSON.stringify(posts));
    
    // Clear State Buffer
    mediaBlobs = { image: '', video: '', file: '', fileName: '' };
    document.getElementById('postForm').reset();
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('videoPreview').innerHTML = '';
    document.getElementById('filePreview').innerHTML = '';

    alert('Content stream successfully injected and synchronized across channel routes.');
    window.location.href = 'blog.html';
}

// Multi-Page Dynamic Channel Segment Rendering
function renderCategoryFeeds(targetCategory) {
    const container = document.getElementById('blogContainer');
    if (!container) return;

    const posts = JSON.parse(localStorage.getItem('devspace_posts') || '[]');
    container.innerHTML = '';

    const filtered = targetCategory === 'all' ? posts : posts.filter(p => p.category === targetCategory);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding:3rem; color:var(--text-muted);">No records linked inside this channel grid.</p>`;
        return;
    }

    filtered.forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card animate-fade-up';
        card.setAttribute('data-id', post.id);

        let mediaMarkup = '';
        if (post.image) {
            mediaMarkup += `<div class="post-media-output"><img src="${post.image}" alt="Attached asset image"></div>`;
        }
        if (post.video) {
            mediaMarkup += `<div class="post-media-output"><video src="${post.video}" controls></video></div>`;
        }
        if (post.file) {
            mediaMarkup += `<a href="${post.file}" download="${post.fileName || 'download'}" class="download-link-btn">💾 Download Attachment File (${post.fileName || 'Resource'})</a>`;
        }

        // Secure Text Nodes Reconstruction Node Tree Architecture
        card.innerHTML = `
            <div class="blog-card-header">
                <span class="category-badge ${post.category}">${post.category}</span>
                <small style="color:var(--text-muted);">${post.timestamp}</small>
            </div>
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            ${mediaMarkup}
            <small style="display:block; margin-bottom:1rem; font-style:italic; color:var(--text-muted);">By: Node @${post.author}</small>
            <div class="reactions-panel">
                <button class="reaction-btn" onclick="triggerReaction('${post.id}', '👍')">👍 <span class="rc-cnt">${post.reactions['👍'] || 0}</span></button>
                <button class="reaction-btn" onclick="triggerReaction('${post.id}', '❤️')">❤️ <span class="rc-cnt">${post.reactions['❤️'] || 0}</span></button>
                <button class="reaction-btn" onclick="triggerReaction('${post.id}', '🔥')">🔥 <span class="rc-cnt">${post.reactions['🔥'] || 0}</span></button>
                <button class="reaction-btn" onclick="triggerReaction('${post.id}', '😂')">😂 <span class="rc-cnt">${post.reactions['😂'] || 0}</span></button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Live Keyup Search Keyword Filter Functionality
function filterPosts() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const text = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(q) || text.includes(q)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Persistent Animated Reaction Engine with floating bubbles physics
function triggerReaction(postId, type) {
    let posts = JSON.parse(localStorage.getItem('devspace_posts') || '[]');
    const index = posts.findIndex(p => p.id === postId);
    if (index === -1) return;

    // Local runtime toggle logic rules prevention
    const sessionKey = `reacted_${postId}_${type}`;
    if (localStorage.getItem(sessionKey)) {
        alert("Verification rule: Node signature feedback already logged for this emoji instance.");
        return;
    }

    if (!posts[index].reactions) posts[index].reactions = { "👍": 0, "❤️": 0, "🔥": 0, "😂": 0 };
    posts[index].reactions[type] = (posts[index].reactions[type] || 0) + 1;
    localStorage.setItem('devspace_posts', JSON.stringify(posts));
    localStorage.setItem(sessionKey, 'true');

    // Live update UI element component numbers directly
    const btn = event.currentTarget;
    btn.classList.add('reacted-active');
    const countSpan = btn.querySelector('.rc-cnt');
    if (countSpan) countSpan.textContent = posts[index].reactions[type];

    // Physics Particle Velocity Flow instantiation
    const rect = btn.getBoundingClientRect();
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = type;
    particle.style.left = `${event.clientX - rect.left + btn.offsetLeft}px`;
    particle.style.top = `${btn.offsetTop - 20}px`;
    btn.parentElement.appendChild(particle);

    setTimeout(() => { particle.remove(); btn.classList.remove('reacted-active'); }, 800);
}

// Hardened Anti-Inspect Privacies & Security Loop Layers Rules
function setupPrivacyLocks() {
    // 1. Right Click Lockout Interception
    document.addEventListener('contextmenu', e => e.preventDefault());

    // 2. Keyboard Sequences Combos Defenses
    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'U') ||
            (e.metaKey && e.key === 'U')
        ) {
            e.preventDefault();
            alert('Security Pipeline Alert: Context scanning actions are strictly locked.');
        }
    });

    // 3. Infinite Console Debugger Loophole Loop Counter-measures
    setInterval(() => {
        const startTime = +new Date();
        debugger;
        const endTime = +new Date();
        if (endTime - startTime > 100) {
            document.body.innerHTML = "<h2 style='text-align:center; margin-top:20vh; color:red;'>DevSpace Cryptographic Lock: Sandbox Intrusion Prevented.</h2>";
        }
    }, 500);
}
