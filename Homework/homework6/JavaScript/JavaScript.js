function runGradeSystem() {
    const score = Math.floor(Math.random() * 101);
    
    let grade = "";
    let status = "";
    let description = "";
    let statusClass = "";

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    switch (grade) {
        case "A":
            description = "ยอดเยี่ยมมาก";
            break;
        case "B":
            description = "ดีมาก รักษามาตรฐานไว้";
            break;
        case "C":
            description = "ผ่านเกณฑ์ระดับดี";
            break;
        case "D":
            description = "พอใช้ แต่ควรพัฒนาเพิ่ม";
            break;
        case "F":
            description = "ต้องลงทะเบียนเรียนใหม่";
            break;
        default:
            description = "ไม่สามารถระบุได้";
    }

    if (score >= 50) {
        status = "ผ่าน";
        statusClass = "status-pass";
    } else {
        status = "ไม่ผ่าน";
        statusClass = "status-fail";
    }

    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML = `
        <div class="result-line"><span class="label">Score</span> <span>${score}</span></div>
        <div class="result-line"><span class="label">Status</span> <span class="${statusClass}">${status}</span></div>
        <span class="grade-big">${grade}</span>
        <div class="description">${description}</div>
    `;

    console.log("--- Grade Report ---");
    console.log("คะแนนที่สุ่มได้: " + score);
    console.log("เกรด: " + grade);
    console.log("ผลสอบ: " + status);
    console.log("คำอธิบาย: " + description);
}