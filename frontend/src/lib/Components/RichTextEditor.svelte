<script>
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();

  // Props
  export let threshold = 80;
  export let placeholder = 'Yazmaya başla...';
  export let value = '';

  let editor;
  let inputTimeout;

  // Caret konumuna BR ekler
  function insertBRAtCaret() {
    const sel = window.getSelection();
    if (!sel?.rangeCount) return;
    
    const range = sel.getRangeAt(0);
    const br = document.createElement('br');
    
    range.deleteContents();
    range.insertNode(br);
    
    // Caret'i BR sonrasına taşı
    range.setStartAfter(br);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  // Son satırın uzunluğunu hesapla
  function getLastLineLength() {
    const text = editor?.innerText || '';
    const lines = text.split('\n');
    return lines[lines.length - 1]?.length || 0;
  }

  // Input olayı
  function onInput() {
    if (!editor) return;
    
    value = editor.innerHTML;
    dispatch('input', { value });

    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {
      const lastLen = getLastLineLength();
      if (lastLen >= threshold) {
        insertBRAtCaret();
        value = editor.innerHTML;
        dispatch('input', { value });
      }
    }, 30);
  }

  // Toolbar komutları
  function exec(cmd) {
    document.execCommand(cmd, false, null);
    if (editor) {
      value = editor.innerHTML;
      dispatch('input', { value });
      editor.focus();
    }
  }

  // Yapıştırma - sadece düz metin
  function onPaste(e) {
    e.preventDefault();
    
    const text = e.clipboardData?.getData('text') || '';
    const sel = window.getSelection();
    
    if (!sel?.rangeCount || !editor) return;
    
    const range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    
    // Caret'i text sonuna taşı
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    
    onInput();
  }

  // Enter tuşu davranışı
  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      insertBRAtCaret();
      onInput();
    }
  }

  // Value değiştiğinde editor'ü güncelle
  $: if (editor && value !== editor.innerHTML) {
    editor.innerHTML = value || '';
  }

  onMount(() => {
    if (editor && !value) {
      editor.innerHTML = '';
    }
  });
</script>

<div class="w-full ">
  <div class="flex gap-2 mb-3 p-2 bg-transparent border border-gray-200 rounded-lg">
    <button 
      type="button" 
      class="text-black min-w-9 h-9 px-2 bg-white border border-gray-300 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 active:bg-gray-200 flex items-center justify-center text-sm"
      on:click={() => exec('bold')}
      title="Kalın (Ctrl+B)"
    >
      <strong>B</strong>
    </button>
    <button 
      type="button" 
      class="text-black min-w-9 h-9 px-2 bg-white border border-gray-300 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 active:bg-gray-200 flex items-center justify-center text-sm"
      on:click={() => exec('italic')}
      title="İtalik (Ctrl+I)"
    >
      <em>I</em>
    </button>
    <button 
      type="button" 
      class="text-black min-w-9 h-9 px-2 bg-white border border-gray-300 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 active:bg-gray-200 flex items-center justify-center text-sm"
      on:click={() => exec('underline')}
      title="Altı çizili (Ctrl+U)"
    >
      <u>U</u>
    </button>
  </div>

  <div
    class="overflow-y-scroll max-h-70 min-h-[150px] w-full border-2 border-gray-300 p-4 rounded-lg outline-none whitespace-pre-wrap break-words leading-relaxed transition-all duration-200 bg-transparent focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] {!value ? 'empty' : ''}"
    contenteditable="true"
    bind:this={editor}
    on:input={onInput}
    on:paste={onPaste}
    on:keydown={onKeyDown}
    data-placeholder={placeholder}
    role="textbox"
    aria-multiline="true"
    tabindex="0"
  />
</div>

<style>
  .empty:before {
    content: attr(data-placeholder);
    color: #999;
    pointer-events: none;
    position: absolute;
  }

  .empty:focus:before {
    color: #bbb;
  }
</style>