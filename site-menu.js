/* ============================================================
   全站共用選單（頁首 + 頁尾回到首頁）
   ============================================================ */

(function () {
    'use strict';

    var menuHTML = `
    <div class="site-menu-wrap">
        <div class="site-menu">
            <a href="index.html" class="sm-item sm-home">🏠 首頁</a>

            <div class="sm-dropdown">
                <span class="sm-item">始末 ▼</span>
                <div class="sm-dropdown-content">
                    <a href="key-concepts.html" target="_blank" rel="noopener">關鍵概念</a>
                    <a href="modern-history.html" target="_blank" rel="noopener">近代史</a>
                    <a href="#" onclick="alert('近代中國與巴勒斯坦問題：中國對中東問題的立場與外交。'); return false;">近代中國與巴勒斯坦問題</a>
                    <a href="index.html#timeline" onclick="return openTimelineFromMenu();">📋 大事紀（Excel 表格）</a>
                </div>
            </div>

            <div class="sm-dropdown">
                <span class="sm-item">美國的影響 ▼</span>
                <div class="sm-dropdown-content">
                    <a href="#" onclick="alert('美國對以色列的軍事與外交支持'); return false;">軍事與外交支持</a>
                    <a href="#" onclick="alert('美國國內猶太遊說團體的影響力'); return false;">國內遊說與政治</a>
                    <a href="#" onclick="alert('美國在中東和平進程中的角色'); return false;">中東和平進程</a>
                    <a href="#" onclick="alert('歷屆美國政府政策比較'); return false;">歷屆政策比較</a>
                </div>
            </div>

            <div class="sm-dropdown">
                <span class="sm-item">參考資料 ▼</span>
                <div class="sm-dropdown-content">
                    <a href="#" onclick="alert('書籍：《巴勒斯坦百年戰爭》、《中東史》'); return false;">推薦書籍</a>
                    <a href="#" onclick="alert('學術論文與期刊資料庫'); return false;">學術論文</a>
                    <a href="#" onclick="alert('聯合國決議文與官方檔案'); return false;">聯合國文件</a>
                    <a href="#" onclick="alert('新聞媒體與國際組織報告'); return false;">新聞與報告</a>
                    <a href="websites.html" target="_blank" rel="noopener">🌐 網站</a>
                    <a href="recommended-reading.html" target="_blank" rel="noopener">📖 推薦閱覽</a>
                </div>
            </div>

            <div class="sm-dropdown">
                <span class="sm-item">相關地圖 ▼</span>
                <div class="sm-dropdown-content">
                    <a href="images/Palestine Before Israel - Maps.mp4" target="_blank" rel="noopener">1948年之前的巴勒斯坦</a>
                    <a href="map-view.html?img=images/palestine-1947-.jpg&amp;src=https://www.nationsonline.org/oneworld/map/palestine_map.htm&amp;title=巴勒斯坦" target="_blank" rel="noopener">巴勒斯坦</a>
                    <a href="map-view.html?img=images/lebanon-map.jpg&amp;src=https://www.nationsonline.org/oneworld/map/lebanon_map.htm&amp;title=黎巴嫩" target="_blank" rel="noopener">黎巴嫩</a>
                    <a href="map-view.html?img=images/israel_map.jpg&amp;src=https://www.nationsonline.org/oneworld/map/israel_map.htm&amp;title=以色列" target="_blank" rel="noopener">以色列</a>
                    <a href="map-view.html?img=images/syria-map.jpg&amp;src=https://www.nationsonline.org/oneworld/map/syria_map.htm&amp;title=敘利亞" target="_blank" rel="noopener">敘利亞</a>
                    <a href="map-view.html?img=images/jordan-map.jpg&amp;src=https://www.nationsonline.org/oneworld/map/jordan_map.htm&amp;title=約旦" target="_blank" rel="noopener">約旦</a>
                    <a href="map-view.html?img=images/egypt_map.jpg&amp;src=https://www.nationsonline.org/oneworld/map/egypt_map.htm&amp;title=埃及" target="_blank" rel="noopener">埃及</a>
                    <a href="dispossession.html" target="_blank" rel="noopener">巴勒斯坦遭以色列侵奪演變</a>
                </div>
            </div>

            <div class="sm-dropdown">
                <span class="sm-item">留言板 ▼</span>
                <div class="sm-dropdown-content">
                    <a href="guestbook.html" target="_blank" rel="noopener" style="font-weight:600; color:#1e3a5f;">📝 前往留言板</a>
                    <span class="sm-note">※ 站長有權刪、改留言內容。</span>
                </div>
            </div>
        </div>
    </div>
    `;

    var wrap = document.createElement('div');
    wrap.innerHTML = menuHTML;
    document.body.insertBefore(wrap, document.body.firstChild);

    var backWrap = document.createElement('div');
    backWrap.className = 'site-back-home';
    backWrap.innerHTML = '<a href="index.html">← 回到首頁</a>';
    document.body.appendChild(backWrap);

    window.openTimelineFromMenu = function () {
        if (!/index\.html$|\/$/.test(window.location.pathname)) {
            window.location.href = 'index.html#timeline';
            return false;
        }
        if (typeof openTimelineModal === 'function') {
            openTimelineModal();
        }
        return false;
    };

    window.addEventListener('load', function () {
        if (window.location.hash === '#timeline' && typeof openTimelineModal === 'function') {
            openTimelineModal();
        }
    });
})();