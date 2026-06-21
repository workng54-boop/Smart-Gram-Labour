const services = {
  mason: {
    name: "রাজমিস্ত্রি",
    icon: "fa-solid fa-trowel-bricks",
    rate: "₹600 - ₹1500",
    description: "বাড়ি নির্মাণ, প্লাস্টার, ছাদ ঢালাই ও সব ধরনের রাজমিস্ত্রির কাজ।",
works: [
        "নতুন বাড়ি নির্মাণ",
        "দেয়াল গাঁথুনি",
        "প্লাস্টার",
        "টাইলস বসানো",
        "ছাদ ঢালাই"
    ]
  },

  bike: {
    name: "গাড়ি মিস্ত্রি",
    icon: "fa-solid fa-motorcycle",
    rate: "₹500 - ₹3000",
    description: "সব ধরনের মোটর বাইক সার্ভিসিং ও মেরামতের কাজ।",
works: [
    "ইঞ্জিন মেরামত",
    "ব্রেক সার্ভিস",
    "অয়েল পরিবর্তন",
    "ব্যাটারি চেক",
    "জরুরি ব্রেকডাউন সার্ভিস"
]
  },

  electric: {
    name: "ইলেকট্রিশিয়ান",
    icon: "fa-solid fa-bolt",
    rate: "₹300 - ₹1500",
    description: "বৈদ্যুতিক লাইন, সুইচ, ফ্যান, লাইট ও অন্যান্য কাজ।",
works: [
    "নতুন ওয়্যারিং",
    "ফ্যান লাগানো",
    "লাইট সংযোগ",
    "সুইচ বোর্ড মেরামত",
    "ইনভার্টার সংযোগ"
]
  },

  plumber: {
    name: "প্লাম্বার",
    icon: "fa-solid fa-faucet",
    rate: "₹300 - ₹1200",
    description: "পাইপ, কল, বাথরুম ও পানির লাইনের কাজ।",
works: [
    "পানির পাইপ লাইন",
    "কল লাগানো",
    "বাথরুম ফিটিং",
    "লিকেজ মেরামত",
    "ট্যাংকের সংযোগ"
]
  },

  carpenter: {
    name: "কাঠমিস্ত্রি",
    icon: "fa-solid fa-hammer",
    rate: "₹500 - ₹2500",
    description: "দরজা, জানালা, খাট, আলমারি ও কাঠের কাজ।",
works: [
    "দরজা-জানালা তৈরি",
    "খাট তৈরি",
    "আলমারি তৈরি",
    "ফার্নিচার মেরামত",
    "ক্যাবিনেট তৈরি"
]
  },

  painter: {
    name: "রং মিস্ত্রি",
    icon: "fa-solid fa-paint-roller",
    rate: "₹600 - ₹4000",
    description: "বাড়ির ভিতর ও বাইরের রং করার কাজ।",
works: [
    "ঘরের ভিতরের রং",
    "বাইরের রং",
    "প্রাইমার কোটিং",
    "পুটি কাজ",
    "জলরোধী রং"
]
  },

  bamboo: {
    name: "বাঁশের কাজ",
    icon: "fa-solid fa-tree",
    rate: "₹500 - ₹3000",
    description: "বাঁশের ঘর, বেড়া ও অন্যান্য বাঁশের কাজ।",
works: [
    "বাঁশের ঘর নির্মাণ",
    "বেড়া তৈরি",
    "মাচা নির্মাণ",
    "বাঁশের গেট",
    "অস্থায়ী শেড"
]
  },

  cleaning: {
    name: "পরিষ্কার-পরিচ্ছন্নতা",
    icon: "fa-solid fa-broom",
    rate: "₹300 - ₹1500",
    description: "বাড়ি, অফিস ও দোকান পরিষ্কার করার সেবা।",
works: [
    "বাড়ি পরিষ্কার",
    "অফিস পরিষ্কার",
    "বাথরুম পরিষ্কার",
    "রান্নাঘর পরিষ্কার",
    "নির্মাণ শেষে পরিষ্কার"
]
  }
};

const id = new URLSearchParams(window.location.search).get("service");

if (services[id]) {

  document.getElementById("serviceName").innerText = services[id].name;

  document.getElementById("serviceDescription").innerText = services[id].description;

  document.getElementById("serviceRate").innerText = services[id].rate;

  document.getElementById("serviceIcon").className = services[id].icon;

}
const workList = document.getElementById("workList");

if (workList && services[id]) {

    workList.innerHTML = "";

    services[id].works.forEach(function(work){

        workList.innerHTML += "<li>✔️ " + work + "</li>";

    });

}
async function submitRequest(){

    const mobile = document.getElementById("mobile").value;

    if(!/^[6-9]\d{9}$/.test(mobile)){
        alert("সঠিক ১০ সংখ্যার মোবাইল নম্বর লিখুন");
        return;
    }

    // AppSheet-এ ডাটা পাঠাব
const data = {
  ServiceID: id,
  Mobile: mobile
};

try {

  const response = await fetch("/api/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const text = await response.text();

if (response.ok) {
    alert("অনুরোধ সফলভাবে পাঠানো হয়েছে");
} else {
    alert(text);
}

} catch (err) {
  alert(err.message);
}
}
function openRequest() {
    window.location.href = "request.html?service=" + id;
}
