// @ts-nocheck
document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('ambient-audio');
  const playBtn = document.getElementById('audio-toggle');
  const vol = document.getElementById('audio-volume');

  if (!audio  !playBtn  !vol) return;

  function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }
  function getLS(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch { return d; } }
  function setLS(k, v) { try { localStorage.setItem(k, v); } catch {} }

  const savedVol = parseFloat(getLS('ambientVolume', '0.3'));
  audio.volume = clamp(isNaN(savedVol) ? 0.3 : savedVol, 0, 1);
  vol.value = String(audio.volume);

  const updateLabel = () => {
    playBtn.textContent = audio.paused ? 'Play ambience' : 'Pause ambience';
  };
  updateLabel();

  playBtn.addEventListener('click', () => {
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
    setTimeout(updateLabel, 0);
  });

  vol.addEventListener('input', () => {
    const v = parseFloat(vol.value);
    if (!isNaN(v)) {
      const clamped = clamp(v, 0, 1);
      audio.volume = clamped;
      setLS('ambientVolume', String(clamped));
    }
  });
});