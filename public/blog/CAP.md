# CAP Theorem

CAP Theorem เป็น concept ที่ใช้ในการ design distribute system หรือระบบที่มีการเข้าถึงข้อมูลที่เก็บแยกกัน โดยจะประกอบด้วย 3 Component หลักคือ 

1. Consistency
2. Availability
3. Partition Tolerance

Consistency คือการสอดคล้องของข้อมูล หรือพูดง่ายๆคือการ sync กันของข้อมูล โดยที่ข้อมูลที่เราได้จากการ read ต้องเป็นข้อมูลที่ได้จาก การ write ล่าสุดเท่านั้น เช่น มี 2 DB อันนึงเป็น Master อีกอันเป็น replica เรา expect ว่าถ้ามีการเขียนข้อมูลลง Master แล้ว ตอน read จาก replica ข้อมูลจะต้องได้ค่าที่ write ล่าสุดด้วย พูดง่ายๆคือ 2 DB ต้องมี data เหมือนกันเสมมอ

Availability คือ การที่ระบบพร้อมใช้งานเสมอ โดยเราจะ design ให้มีการเก็บข้อมูลแยกกันหลายๆ node เพื่อเก็บ old data (replica) ซึ่งอาจจะมีโอกาสที่ข้อมูล 2 DB ไม่ sync กัน แต่ถ้า ข้อมูลอันนึงตายก็ยังเอาอีกอันมาใช้แทนได้ แต่ data อาจไม่ latest

Partition Tolerance คือการที่ระบบบางส่วนมีปัญหา แต่ยังทำงานต่อไปได้ไม่ได้หยุดชะงักไปเลย เช่น กรณีที่ user A กับ B ใช้งาน social media ต้องการดู subschiber แต่ user A เข้าถึง DB A  ส่วน user B เข้าถึง DB B แต่ว่า DB B ดันมีปัญหา ตาม concept นี้ระบบต้องทำให้ user B ใช้งานต่อได้ โดยอาจจะไปดึงข้อมูลจาก DB A แทน

จาก concept ดังกล่าวเราจะสามารถออกแบบระบบให้มี ได้แค่มากสุด 2 หัวข้อ จาก 3 โดย แบ่งเป็นดังนี้ 

1. CA (Consistency and Availability) ซึ่ง case นี้เป็นไปไม่ได้เลยในกรณีของ distribute system เนื่องจากเมื่อระบบ failed หรือมีปัญหา เราเลือกได้แค่ส่ง data เก่าที่เก็บไว้อีกที่ (ทำวิธีนี้ consitency หาย) หรือ ไม่ให้ user ใช้งาน(ทำวิธีนี้ Availablity หาย) จึงเป็นไปไม่ได้เลย นอกจากเราจะ design ระบบเป็น monolith เพราะข้อมูล consistency ตลอด อยู่แล้ว เพราะ user ทุกคน read write จากที่เดียวกัน และก็ availability เพราะ user ทุกคนใช้ ระบบเดียวกัน (node)
2. AP (Availability and Partition Tolerance) case นี้เราจะ prioritize กับ Availability เป็นหลักมากกว่า consistency เนื่องจากระบบที่เราออกแบบ อาจจะ impact หนัก หรือ lost money ถ้า server ไม่สามารถใช้งานได้ เราจึง design โดยใช้พวก replica หรือมีหลาย node ในการดูแล โดยจะเหมาะกับระบบเช่น social media , blog, youtube , news ซึ่งข้อมูลไม่จำเป็นต้อง strong consistency ก็ได้ อาจมี delay 
3. CP (Consistency and Partition Tolerance) case นี้จะ prioritize ตัว consistency หมายความว่าการอ่าน data ที่ sync สำคัญมาก ไม่ควรอ่านจาก replica เช่นพวกระบบ booking, bank, stock, ticket เช่น ถ้ามีการจองตั๋วข้อมูล แล้วมีหลาย node ควรมั่นใจก่อนว่าทุก node data ถูก write อย่างถูกต้องเพื่อป้องกัน การไม่ sync ของข้อมูลของทุก user