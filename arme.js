const premiere = document.getElementById("premiere");
const renouvellement = document.getElementById("renouvellement");

// Cacher les deux sections au début
premiere.style.display = "none";
renouvellement.style.display = "none";

function showPremiere() {
    premiere.style.display = "block";
    renouvellement.style.display = "none";
}

function showRenouvellement() {
    renouvellement.style.display = "block";
    premiere.style.display = "none";
}




async function fetchDocuments() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Autorisation de port d'arme");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("documentarme");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocuments();

async function fetchDocumentsArme() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Renouvellement de l'autorisation de port d'arme");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("Renouvellement");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentsArme();

