(function () {
  'use strict';
  var MQ = '(max-width: 800px)';

  function isMobile() {
    return window.matchMedia(MQ).matches;
  }

  function setExperienceMobile(expanded) {
    var section = document.getElementById('experience-section');
    var panel = document.getElementById('experience-more-panel');
    var topBtn = document.getElementById('experience-expand-btn-top');
    var bottomBtn = document.getElementById('experience-collapse-btn-bottom');
    if (!section || !panel || section.classList.contains('experience-single-role')) return;
    section.setAttribute('data-mobile-exp', expanded ? 'expanded' : 'collapsed');
    panel.classList.toggle('experience-expanded-mobile', expanded);
    panel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    if (topBtn) topBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (bottomBtn) bottomBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function setEducationMobile(expanded) {
    var section = document.getElementById('education-section');
    var panel = document.getElementById('education-panel');
    var topBtn = document.getElementById('education-expand-btn-top');
    var bottomBtn = document.getElementById('education-collapse-btn-bottom');
    if (!section || !panel) return;
    section.setAttribute('data-mobile-edu', expanded ? 'expanded' : 'collapsed');
    panel.classList.toggle('education-expanded-mobile', expanded);
    panel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    if (topBtn) topBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (bottomBtn) bottomBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function applyDesktop() {
    var expSection = document.getElementById('experience-section');
    var expPanel = document.getElementById('experience-more-panel');
    var eduSection = document.getElementById('education-section');
    var eduPanel = document.getElementById('education-panel');
    if (expSection) expSection.removeAttribute('data-mobile-exp');
    if (eduSection) eduSection.removeAttribute('data-mobile-edu');
    if (expPanel) {
      expPanel.classList.add('experience-expanded-mobile');
      expPanel.removeAttribute('aria-hidden');
    }
    if (eduPanel) {
      eduPanel.classList.add('education-expanded-mobile');
      eduPanel.removeAttribute('aria-hidden');
    }
    var t = document.getElementById('experience-expand-btn-top');
    var b = document.getElementById('experience-collapse-btn-bottom');
    if (t) t.setAttribute('aria-expanded', 'true');
    if (b) b.setAttribute('aria-expanded', 'true');
    var et = document.getElementById('education-expand-btn-top');
    var eb = document.getElementById('education-collapse-btn-bottom');
    if (et) et.setAttribute('aria-expanded', 'true');
    if (eb) eb.setAttribute('aria-expanded', 'true');
  }

  function applyMobileInitial() {
    var expSection = document.getElementById('experience-section');
    var expPanel = document.getElementById('experience-more-panel');
    if (expSection && !expSection.classList.contains('experience-single-role') && expPanel) {
      setExperienceMobile(false);
    }
    setEducationMobile(false);
  }

  function syncViewport() {
    if (isMobile()) {
      applyMobileInitial();
    } else {
      applyDesktop();
    }
  }

  var expTop = document.getElementById('experience-expand-btn-top');
  if (expTop) {
    expTop.addEventListener('click', function () {
      if (isMobile()) setExperienceMobile(true);
    });
  }
  var expBottom = document.getElementById('experience-collapse-btn-bottom');
  if (expBottom) {
    expBottom.addEventListener('click', function () {
      if (isMobile()) setExperienceMobile(false);
    });
  }
  var eduTop = document.getElementById('education-expand-btn-top');
  if (eduTop) {
    eduTop.addEventListener('click', function () {
      if (isMobile()) setEducationMobile(true);
    });
  }
  var eduBottom = document.getElementById('education-collapse-btn-bottom');
  if (eduBottom) {
    eduBottom.addEventListener('click', function () {
      if (isMobile()) setEducationMobile(false);
    });
  }

  syncViewport();
  window.matchMedia(MQ).addEventListener('change', syncViewport);
})();
