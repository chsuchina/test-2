/* ============================================================
   回到頂端按鈕（全站共用）
   ============================================================ */

(function () {
    'use strict';

    var btn = document.getElementById('backToTop');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'backToTop';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', '回到頂端');
        btn.setAttribute('type', 'button');
        btn.innerHTML = '↑';
        document.body.appendChild(btn);
    }

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function updateVisibility() {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
})();