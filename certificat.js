// جميع الأقسام

const residence = document.getElementById("residence");
const administratif = document.getElementById("administratif");
const deces = document.getElementById("deces");
const naissance = document.getElementById("naissance");
const profession = document.getElementById("profession");

// إخفاء الجميع

function hideAll(){

    residence.style.display="none";
    administratif.style.display="none";
    deces.style.display="none";
    naissance.style.display="none";
    profession.style.display="none";

}

// عند فتح الصفحة

hideAll();


// Certificat de résidence

function showResidence(){

    hideAll();
    residence.style.display="block";

}


// Certificat administratif de résidence

function showAdministratif(){

    hideAll();
    administratif.style.display="block";

}


// Certificat de décès

function showDeces(){

    hideAll();
    deces.style.display="block";

}


// Acte de naissance

function showNaissance(){

    hideAll();
    naissance.style.display="block";

}


// Certificat de profession

function showProfession(){

    hideAll();
    profession.style.display="block";

}
async function fetchDocumentscertificat() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Certificat de r\u00e9sidence");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("résidence");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentscertificat();
async function fetchDocumentscertificat1() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Certificat administratif de r\u00e9sidence");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("certificat");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentscertificat1();
async function fetchDocumentscertificat2() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Certificat de d\u00e9c\u00e8s");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("Certificat de décès");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentscertificat2();
async function fetchDocumentscertificat3() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Certificat de naissance");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("Acte de naissance");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentscertificat3();
async function fetchDocumentscertificat4() {
    
    try {
        
        // 1. طلب البيانات من سيرفر Flask
        const responce = await fetch('https://pachalik-service.onrender.com/documents');
        
        

        
        // 2. تحويل الاستجابة إلى مصفوفة JSON
        const data = await responce.json();

        

        // 3. فلترة البيانات للحصول على العناصر الخاصة بـ "Passeport" فقط
        const passportDocs = data.filter(item => item.service === "Certificat de profession");

    

        // 4. عرض النتائج داخل العنصر docummentpassport
        const container = document.getElementById("Certificat de profession");
        if (container) {
            container.innerHTML = "<ul>" + 
                passportDocs.map(item => `<li>${item.document}</li>`).join('') + 
            "</ul>";
        }

    } catch (error) {
        
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

fetchDocumentscertificat4();