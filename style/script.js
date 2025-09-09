const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "ดีกันนะ💕", "ดีกันเถอะน้าาา🥺", "เค้าอยากรู้จักเธอมากกว่านี้น้าา", "เค้าขอโทษจริงๆที่ทำนิสัยแย่",
  "ขอให้นอนหลับฝันดีนะ💫", "❤️ เค้าซัพพอร์ตเธอเสมอนะ ❤️", "ดีกันนะ 😊",
  "ดีกันน้าแมวน้อยของเค้าา🥺", "เธอสำคัญสำหรับเค้ามากนะรู้มั้ย🥺",
  "เธอคือสิ่งที่มีค่าสำหรับเค้านะะ🥺", "ให้อภัยเค้าได้มั้ย🥺",
  "เค้าจะไม่ทำอีกแย้ววว", "เค้าผิดไปแล้วจริงๆ",
  "เค้าขอโทษ", "ดีกันๆๆๆๆๆ",
  "ดีกันน้าคนเก่งของเค้าา", "ถ้าไม่ดีกันเค้าจะร้องแล้วนะ😢",
  "อยากซื้อขนมไปง้อจัง", "จะปรับปรุงแย้ววว",
  "อย่าโกรธเค้านานเลยนะ🥺"
];

let currentIndex = 0; // ตัวแปรเก็บตำแหน่งข้อความ

function showRandomMessage(event) {
  sound.play();

  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[currentIndex];

  // อัปเดต index ให้เลื่อนไปข้อความถัดไป
  currentIndex = (currentIndex + 1) % messages.length;

  const directions = [
    0, Math.PI/4, Math.PI/2, 3*Math.PI/4,
    Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4
  ];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 10000);
}

// ผูก event กับ nyanCat
nyanCat.addEventListener('click', showSequentialMessage);
nyanCat.addEventListener('touchstart', showSequentialMessage);
