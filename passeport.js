// ===============================
// Afficher passeport biométrique
// ===============================

function showBio(){

    let bio = document.getElementById("bio");
    let mineur = document.getElementById("mineur");


    bio.style.display = "block";
    mineur.style.display = "none";


    bio.classList.add("show");

}



// ===============================
// Afficher passeport mineur
// ===============================

function showMineur(){

    let bio = document.getElementById("bio");
    let mineur = document.getElementById("mineur");


    mineur.style.display = "block";
    bio.style.display = "none";


    mineur.classList.add("show");

}




// ===============================
// Déposer une demande
// ===============================

function demandePassport(){

    let message = document.getElementById("message");


    message.innerHTML =
    "✅ Votre demande de passeport a été enregistrée avec succès";


    message.style.color = "green";

}




// ===============================
// Cacher les documents au démarrage
// ===============================

window.onload = function(){

    document.getElementById("bio").style.display = "none";

    document.getElementById("mineur").style.display = "none";

};

// دالة جلب البيانات وقراءتها من الـ API وتصفيتها لـ Passeport فقط
async function fetchDocuments() {
    try {
        // 1. طلب البيانات من سيرفر Flask
        const response = await fetch('https://pachalik-service.onrender.com/documents');
        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await response.json();

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Passeport");

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("docummentpassport");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

// استدعاء الدالة عند تحميل الصفحة تلقائياً
document.addEventListener('DOMContentLoaded', fetchDocuments);


