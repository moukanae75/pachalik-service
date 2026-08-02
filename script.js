document.getElementById("btnEnter").addEventListener("click", function () {

    window.location.href = "accueil.html";

});

// دالة جلب البيانات وقراءتها من الـ API
async function fetchDocuments() {
    try {
        // 1. طلب البيانات من سيرفر Flask
        const response = await fetch('http://127.0.0.1:5000/documents');
        
        // 2. تحويل الاستجابة إلى قائمة JSON
        const data = await response.json();

        // 3. تحديد العنصر في HTML لعرض النتيجة
        const listContainer = document.getElementById('documentsList');
        listContainer.innerHTML = ''; // تفريغ العناصر القديمة

        // 4. قراءة كل عنصر وإضافته إلى الصفحة
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'document-item';
            card.innerHTML = `
                <h4>الخدمة: ${item.service}</h4>
                <p>الوثيقة: ${item.document}</p>
            `;
            listContainer.appendChild(card);
        });

    } catch (error) {
        console.error('خطأ أثناء جلب البيانات:', error);
    }
}

// استدعاء الدالة عند تحميل الصفحة تلقائياً
document.addEventListener('DOMContentLoaded', fetchDocuments);
