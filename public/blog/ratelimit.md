# What is Rate limit ?

rate limit เป็น technique ที่ใช้ใน limit network traffic จาก user ซึ่งป้องกันโจมทาง cyber ได้แก้ DOS(ยิง spam server) ซึ่งทำให้ server ใช้ resource มากเกินแล้วล่ม

Why rate limit important

1. ป้องกัน DOS
2. Credential Stuffing คือ เรารู้ข้อมูล user password ของ account จาก website  อื่น แต่เอามาลอง reuse ใช้อีก system แล้วดัน work ทีนี้ attacker อาจจะเอา มาใช้งานแล้วโจมตีบางอย่างดังนั้นเราอาจ limit การ login ระบบเราในกรณีที่มีการใช้งานมากกว่าปกติ กับระบบที่ไม่ควรเข้าใช้บ่อยๆ
3. Brute force คือการที่ไม่รู้ user pass แต่ยิงถล่มเพื่อเดารหัสผ่าน

ชนิดของ rate limit

1. User rate limit จะ check จาก IP ของ user ว่า user นี้มีการยิง request มาบ่อยเกินไปรึเปล่า หรืออาจจะ check จาก API key ก็ได้
2. **Geographic rate limits คือ เราสามารถ limit ว่าใน region นี้ช่วงเวลา สามทุ่มถึงเที่ยงคืน จะจำกัด limit ไว้ เพื่อป้องกันการโจมตีช่วงกลางคืนของ region นี้**
3. Server rate limit คือการ limit ที่ตัว server application เลยว่าระบบให้ limit เท่าไหร่

Algorithm ที่ใช้ของ Rate limit

1. Fixed-window  rate limit คือ จะมีการระบุเวลาที่ชัดไปเลยเช่น ทุกนาทีรับได้ 200 request หมายถึงนาที่ 9.00 -9.01 จะรับได้ 200 หลังจากนั้น 9.01-9.02 ก็จะอีก 200 request
2. Leaky Bucket rate limit คือจะมีการเก็บข้อมูลลง queue ในที่นี้คือ bucket ถ้า bucket ยังไม่เต็มข้อมูลก็ยังส่งมาได้ โดยไม่ได้ specific ช่วงเวลา ถ้า bucket เต็ม request จะถูก drop ทิ้งถ้าส่งมา
3. Sliding window rate limit คือ จะเริ่มนับนะตอนที่ request เข้ามาเช่น ถ้า request มาตอน 9.00:24 ก็จะนับไปอีก 1 นาที ขึ้นอยู่กับว่า request เข้ามาตอนไหน ก็จะนับว่า 1 นาทีหลังจากนั้นจะรับได้ 200 request ซึ่งจะยืดหยุ่นเรื่อง time มากกว่า วิธีแรก