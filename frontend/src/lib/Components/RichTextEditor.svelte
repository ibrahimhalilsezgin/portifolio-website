<script>
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();

  // Props
  export let threshold = 80; // karakter sayısı - bir satır için
  export let placeholder = 'Yazmaya başla...';
  export let value = ''; // içerik (html)

  let editor;

  // Yardımcı: caret konumuna br ekler
  function insertBRAtCaret() {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);

    // Eğer caret bir metin düğümündeyse, önce bir br düğümü ekle
    const br = document.createElement('br');
    range.collapse(false);
    range.insertNode(br);

    // Sonrasında caret'i br sonrasına taşı
    range.setStartAfter(br);
    range.setEndAfter(br);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  // Metin içeriğini (saf text) al, son satırı hesapla
  function getLastLineLength() {
    // innerText satır atlamalarını hesaba katar
    const text = editor.innerText || '';
    const lines = text.split('\n');
    return lines[lines.length - 1].length;
  }

  // input olayında kontrol et
  let inputTimeout;
  function onInput(e) {
    // value olarak HTML dispatch et
    value = editor.innerHTML;
    dispatch('input', { value });

    // debounce küçük gecikme: DOM tamamen güncellensin
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {
      const lastLen = getLastLineLength();
      if (lastLen >= threshold) {
        // satır uzunluğu eşik aşıyorsa caret yerine br ekle
        insertBRAtCaret();
        // güncellenmiş html'i gönder
        value = editor.innerHTML;
        dispatch('input', { value });
      }
    }, 30);
  }

  // Basit toolbar komutları (bold, italic, underline)
  function exec(cmd) {
    // execCommand eski ama yaygın çalışır; modern projelerde Range/Selection ile iyileştirilebilir
    document.execCommand(cmd, false, null);
    // güncelle
    value = editor.innerHTML;
    dispatch('input', { value });
    editor.focus();
  }

  // Yapıştırma: sadeleştir (sadece düz metin)
  function onPaste(e) {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text');
    // düz metin olarak yapıştır
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    sel.deleteFromDocument();
    sel.getRangeAt(0).insertNode(document.createTextNode(text));

    // caret'i text sonrasına taşı
    const range = document.createRange();
    range.setStart(editor, editor.childNodes.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);

    // input tetikle
    onInput();
  }

  // dışarıdan value değişirse editor güncelle
  $: if (editor && value !== editor.innerHTML) {
    editor.innerHTML = value || '';
  }

  onMount(() => {
    if (!value) editor.innerHTML = '';
  });
</script>

<style>
  .toolbar {
    display:flex;
    gap:0.5rem;
    margin-bottom:0.5rem;
  }
  .editor {
    min-height:100px;
    min-width: 100%;
    border:1px solid #ddd;
    padding:0.5rem;
    border-radius:6px;
    outline:none;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;}
  .placeholder {
    color:#888;
  }
  button { cursor:pointer }
</style>

<div class="toolbar">
  <button type="button" on:click={() => exec('bold')}>B</button>
  <button type="button" on:click={() => exec('italic')}>I</button>
  <button type="button" on:click={() => exec('underline')}>U</button>
</div>

<!-- contenteditable alanı -->
<div
  class="editor"
  contenteditable="true"
  bind:this={editor}
  on:input={onInput}
  on:paste={onPaste}
  on:keydown={(e) => {
    // Enter yerine default davranış istiyorsanız burayı özelleştirin.
    // Örneğin Shift+Enter'ı br, Enter'ı <p> gibi davranmaya zorlayabilirsiniz.
  }}
  aria-placeholder={placeholder}
  role="textbox"
></div>

<!-- Kullanım notu: value güncellenince dışarıya 'input' eventi dispatch eder -->
