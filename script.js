// Hiệu ứng mở rộng FAQ (Accordion)
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        const icon = this.querySelector("i");
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            panel.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
}

// Xử lý gửi Form
document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Cảm ơn ${name}! Chúng tôi đã nhận được yêu cầu của bạn. Phản hồi sẽ được gửi đến ${email} sớm nhất.`);
    
    this.reset();
});
