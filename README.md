📘 Rendering Methods (Short Notes)

🟢 CSR (Client-Side Rendering)
 Browser (client) এ data fetch হয়, তারপর UI render হয়
প্রথমে empty HTML আসে
পরে JS load → data fetch → UI show

✅ Pros:
interactive apps এর জন্য ভালো
fast navigation
❌ Cons:
SEO খারাপ
initial load slow


🔵 SSR (Server-Side Rendering)
👉 প্রতি request এ server HTML generate করে
user request → server data fetch → HTML send
✅ Pros:
SEO friendly
always fresh data
❌ Cons:
slow response (server কাজ করে প্রতি request এ)




🟡 SSG (Static Site Generation)
build time এ HTML generate হয়
একবার build → সব user same static page পায়

✅ Pros:
খুব fast 
best for SEO
❌ Cons:
data update করতে rebuild লাগে


🟣 ISR (Incremental Static Regeneration)
 static + dynamic mix
page static থাকে
নির্দিষ্ট সময় পর auto update হয়

✅ Pros:
fast + fresh data 🔥
rebuild ছাড়া update
❌ Cons:
slight delay in update


## Summery: 
CSR = browser data আনে, SSR = server প্রতি request এ page বানায়, SSG = আগে থেকে build করে static page দেয়, আর ISR = static page রেখে মাঝে মাঝে update করে | [next object  a retvalidate use kore]