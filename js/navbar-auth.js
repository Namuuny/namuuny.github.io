/**
 * Udemy-style navbar auth UI (EN + MN)
 * Requires: Firebase Auth initialized (firebase-config.js)
 * Expects: <div id="nav-auth"></div> in the navbar
 */
(function () {
  const container = document.getElementById('nav-auth');
  if (!container || typeof auth === 'undefined') return;

  const isMn = document.documentElement.lang === 'mn' ||
    /mn\.html|indexmn\.html/i.test(window.location.pathname || '');

  const L = isMn ? {
    login: 'login-mn.html',
    signup: 'signup-mn.html',
    profile: 'profile-mn.html',
    checkout: 'checkout-mn.html?plan=yearly',
    home: 'indexmn.html',
    loginLabel: 'Нэвтрэх',
    signupLabel: 'Бүртгүүлэх',
    myLearning: 'Миний хичээлүүд',
    profileLabel: 'Профайл',
    subscription: 'Захиалга',
    logout: 'Гарах',
  } : {
    login: 'login.html',
    signup: 'signup.html',
    profile: 'profile.html',
    checkout: 'checkout.html?plan=yearly',
    home: 'index.html',
    loginLabel: 'Log in',
    signupLabel: 'Sign up',
    myLearning: 'My learning',
    profileLabel: 'Profile',
    subscription: 'Subscription',
    logout: 'Log out',
  };

  function renderLoggedOut() {
    container.innerHTML = `
      <a href="${L.login}" class="text-sm text-gray-300 hover:text-white transition hidden sm:inline">${L.loginLabel}</a>
      <a href="${L.signup}" class="text-sm font-semibold text-indigo-950 bg-white hover:bg-gray-100 px-4 py-2 rounded-full transition hidden sm:inline-flex">${L.signupLabel}</a>
      <a href="${L.login}" class="sm:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-300 hover:bg-white/20 transition" title="${L.loginLabel}">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      </a>
    `;
  }

  function renderLoggedIn(user) {
    const name = user.displayName || user.email?.split('@')[0] || 'User';
    const email = user.email || '';
    const initial = name.charAt(0).toUpperCase();
    const photo = user.photoURL;
    const avatarHtml = photo
      ? `<img src="${photo}" alt="" class="w-full h-full object-cover rounded-full">`
      : `<span class="font-semibold text-indigo-950 text-sm">${initial}</span>`;

    container.innerHTML = `
      <div class="relative" id="user-menu-wrap">
        <button id="user-menu-btn" type="button" class="flex items-center gap-2 group focus:outline-none" aria-expanded="false" aria-haspopup="true">
          <div class="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center overflow-hidden ring-2 ring-transparent group-hover:ring-teal-400/50 transition">
            ${avatarHtml}
          </div>
          <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="user-dropdown" class="hidden absolute right-0 top-full mt-2 w-64 rounded-xl bg-indigo-900 border border-white/10 shadow-2xl shadow-black/40 py-2 z-50">
          <div class="px-4 py-3 border-b border-white/10">
            <p class="font-semibold text-white text-sm truncate">${name}</p>
            <p class="text-xs text-gray-400 truncate">${email}</p>
          </div>
          <div class="py-1">
            <a href="${L.profile}" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              ${L.myLearning}
            </a>
            <a href="${L.profile}" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              ${L.profileLabel}
            </a>
            <a href="${L.checkout}" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              ${L.subscription}
            </a>
          </div>
          <div class="border-t border-white/10 py-1">
            <button id="nav-logout-btn" type="button" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition text-left">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
              ${L.logout}
            </button>
          </div>
        </div>
      </div>
    `;

    const btn = document.getElementById('user-menu-btn');
    const dropdown = document.getElementById('user-dropdown');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !dropdown.classList.contains('hidden');
      dropdown.classList.toggle('hidden', open);
      btn.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click', (e) => {
      if (!document.getElementById('user-menu-wrap')?.contains(e.target)) {
        dropdown.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.getElementById('nav-logout-btn').addEventListener('click', async () => {
      try {
        await auth.signOut();
        window.location.href = L.home;
      } catch (err) {
        console.error(err);
        alert(L.logout + ' failed');
      }
    });
  }

  auth.onAuthStateChanged((user) => {
    if (user) renderLoggedIn(user);
    else renderLoggedOut();
  });
})();
