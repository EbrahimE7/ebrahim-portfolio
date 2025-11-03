const fbPic = "Pic/pro-pic.jpg";
const fbCoverPic = "Pic/pro-cover.jpg";
document.getElementById("profile-pic").src = fbPic;
document.getElementById("cover-pic").src = fbCoverPic;

const shareBtn = document.getElementById("share-btn");
shareBtn.addEventListener("click", async () => {
  shareBtn.classList.add("active");
  setTimeout(() => shareBtn.classList.remove("active"), 200);

  const shareData = {
    title: "Ebrahim Al-Baba",
    text: "شوف موقعي الشخصي 👇",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      alert("المشاركة غير مدعومة على هذا الجهاز.\nانسخ الرابط يدويًا:\n" + window.location.href);
    }
  } catch (err) {
    console.error("خطأ في المشاركة:", err);
  }
});

// نافذة جهة الاتصال
const contactBtn = document.getElementById("contact-btn");
const modal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-modal");

contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("active");
  setTimeout(() => contactBtn.classList.remove("active"), 200);

  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.classList.remove("hide");
    modal.style.display = "none";
  }, 300);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("hide");
      modal.style.display = "none";
    }, 300);
  }
});
