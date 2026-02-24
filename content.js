// macOS titlebar injection script

const createMacOSTitlebar = () => {
    const titlebar = document.createElement('div');
    titlebar.className = 'macos-titlebar';
    
    titlebar.innerHTML = `
        <div class="titlebar-buttons">
            <button class="titlebar-btn close-btn" title="Close"></button>
            <button class="titlebar-btn minimize-btn" title="Minimize"></button>
            <button class="titlebar-btn maximize-btn" title="Maximize"></button>
        </div>
        <div class="titlebar-title">${document.title}</div>
    `;
    
    document.body.insertBefore(titlebar, document.body.firstChild);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createMacOSTitlebar);
} else {
    createMacOSTitlebar();
}