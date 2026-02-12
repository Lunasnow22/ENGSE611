function executeLoop() {
    const output = document.getElementById('terminalOutput');
    output.innerHTML = "";
    
    const maxNumber = 15;
    let logHTML = "";

    logHTML += `<span class="gold-text">--- Odd/Even Detection ---</span><br>`;
    for (let i = 0; i <= maxNumber; i++) {
        let type = (i % 2 === 0) ? "(คู่)" : "(คี่)";
        logHTML += `${i} ${type}<br>`;
        console.log(`${i} ${type}`);
    }

    logHTML += `<div class="divider"></div>`;

    logHTML += `<span class="cyan-text">--- Step Counting (By 2) ---</span><br>`;
    for (let j = 0; j <= maxNumber; j += 2) {
        logHTML += `นับทีละ 2: ${j}<br>`;
        console.log(`นับทีละ 2: ${j}`);
    }

    logHTML += `<div class="divider"></div>`;

    logHTML += `<span class="gold-text">--- Countdown Sequence ---</span><br>`;
    for (let k = 10; k >= 0; k--) {
        logHTML += `ถอยหลัง: ${k}<br>`;
        console.log(`ถอยหลัง: ${k}`);
    }

    output.innerHTML = logHTML;
}