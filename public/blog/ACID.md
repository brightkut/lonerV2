# ACID

คือ fundamental concept ของ DB ประกอบไปด้วย 

1. Atomicity
2. Consistency
3. Isolation
4. Durability

Atomicity คือ ทุกสิ่งทุกอย่างเป็นอันหนึ่งอันเดียวในที่นี้คือหลักการของ transaction ที่เรามองว่า query ต่างๆใน transcation ของ DB ถ้าอันใดอันนึง failed เราก็จะถือว่า transaction นี้ failed แล้ว rollback ทั้งหมด หรือ ก็ปล่อย DB crash แล้วให้ restart กลับมาเอง (ก็ยังมีการ rollback อยู่)

Isolation

คือสิ่งที่เกิดจากการที่ DB สามารถมีการใช้งานได้จากหลายๆคน หลาย user ในเวลาเดียวกัน ดังนั้นจะมี 3 เรื่องที่สำคัญ

1. ต้องถามว่าเราอนุญาติให้ข้อมูล transaction ที่เราดูอยู่นั้น ถ้าโดนแก้ไขโดยคนอื่นในเวลาเดียวกัน เราควรจะเห็นค่าที่แก้ไขหรือค่าเก่า
2. Read phenomena → คือเหตุการณ์หรือปัญหาทต่างๆที่เกิดขึ้นจากการ read data แล้วมีการ isolate ของ ระบบ( มีคนใช้หลายคนเวลาเดียวกัน)
3. Isolation level → คือวิธีที่ใช้ในการแก้ปัญหา read phenomena

Read phenomena ประกอบไปด้วยดังนี้

1. Dirty Read คือการที่เรามีการอ่านข้อมูลจาก transaction ซึ่งข้อมูลนี้ถูก update โดย transaction ที่ไม่ commit แล้ว rollback 

มี DB เก็บ ข้อมูล product (ID, จำนวน, ราคา)ดังนี้ 

| ID | จำนวน | ราคา |
| --- | --- | --- |
| 1 | 10 | 5 |
| 2 | 20 | 4 |
|  |  |  |

เมื่อมีการดึงข้อมูลใน transaction ที่ 1 select id, ราคา, จำนวน from product ผลลัพธ์ที่ได้ก็คือข้อมูลดังตาราง ต่อมา มีอีก transaction (transaction ที่ 2 ที่เข้ามา update data หลังจาก query แรกของ transaction นี้รันไปแล้ว เปลี่ยน จำนวนของ product 1 จาก 10 เป็น 15 

ต่อมา query ที่สองของ transaction ที่ 1 ต้องการนำค่าที่ดึงมาคำนวณ โดย เราจะเอาจำนวนออกมา กับราคาเพื่อมาคำนวณ

product 1  ควรมีจำนวน 10 ราคา 5 = 5*10 = 50

product 2 ควรมีจำนวน 20 ราคา 4 = 4*20 = 80

รวม 50+80 = 130 

แต่ความเป็นจริงผลลัพธ์คือ 

product 1  ควรมีจำนวน 15 ราคา 5 = 5*15 = 75

product 2 ควรมีจำนวน 20 ราคา 4 = 4*20 = 80

รวม 75+80 = 155

ต่อมา transaction ที่ 2 ดันไม่ commit แต่ rollback ทำให้ข้อมูลตรงนี้ไม่ consistency ทันที่

ซึ่งสิ่งนี้เรียกว่า dirty read คือเราอ่านค่าที่มีการ update ไปแล้วถึงแม้ว่า transaction ที่ 2 จะยังไม่ commit ก็ตาม

1. Non-repeatable read คือการที่เรามีการ read data ซ้ำเกิดขึ้น โดยที่ระหว่างการ read ครั้งที่ 2 มีอีก transaction ที่เข้ามา update ค่าแล้ว commit ทำให้ค่าที่ได้จาก DB ไม่เหมือน เดิมกับ query แรก

อิงจาก ข้อมูลตารางด้านบน

TXN #1 

มีการดึง data 

product 1 มามีจำนวน 10 ราคา 5

TXN #2 มีการมา update จำนวนเป็น 15 แล้ว commit 

TXN #1 

มีการดึง data อีกรอบเพื่อคำนวณ จะเห็นว่าข้อมูลไม่ consistency กันเพราะ ถ้า query แรกเราเอา data ไป show แล้ว พอมาคำนวณราคาทั้งหมด ผลลัพธ์จะไม่ถูก จากที่ควรเป็น 50 กลายเป็น 75

product 1 มามีจำนวน 15 ราคา 5  = 15*5 = 75

1. phantom read  คือการที่ data ที่ read ตาม condition ซึ่งได้จำนวน range ของ row ทั้งหมดมาแต่ เมื่อมีการ re-execute(เช่นมีการดึงข้อมูล order ที่ราคามากกว่า 100 ไป จากนั้นทำ process บางอย่างแล้ว recheck อีกรอบ) ผลลัพธ์ไม่เหมือนเดิมเนื่องจากมีการ เพิ่มหรือลบ row ออกไป

เช่นใน Transaction 1 มีการ read data 2 รอบด้วย query เดียวกัน จากตัวอย่างบน 

product id 1 

product id 2 

ต่อมามีอีก transaction ที่เข้ามาเพิ่ม product id 3 แล้ว commit สิ่งที่เกิดขึ้น เมื่อ query 2 ของ transaction 1 ทำงาน product ที่ได้จะเปลี่ยนจาก 2 เป็น 3

1. lost update คือการที่มีการ update  ค่าไปแล้วแต่ถูกอีก transaction มา overwrite ค่าไป

เช่น มี 2 transaction ที่ทำงาน concurrent กัน เพื่อ update ค่าจำนวนของ product id 1 

โดย TXN #1 

ต้องการ update productId 1 เพิ่ม 10 จากเดิม 10 ดังนั้น ผลลัพธ์ต้องเป็น 20 

ส่วน TXN #2

ต้องการ update productId 1 เพิ่ม 5 จากเดิม 20 ดังนั้น ผลลัพธ์ต้องเป็น 25

แต่สิ่งที่เกิดขึ้นคือเมื่อ TXN 1 ทำเสร็จแล้ว แต่ TXN 2 จังหวะ read data ตอนแรกทำพร้อมกันค่าที่ได้เลยเป็น 10 แทนค่า update  จาก TXN1 ผลลัพธ์ที่  update ลง DB เลยเป็น 15 

จากนั้น TXN ที่2 ก็ commit ไปก่อน TXN 1 โดย TXN 1 มี query ที่ 2 ที่มาดึงจำนวนไปกลับกลายเป็นว่าไม่ได้จำนวนตามที่ควรเป็นกับได้ 15 กลับไปแทน

Isolation level 

1. Read uncommitted → คือการอนุญาติให้ transaction สามารถ read ข้อมูลของ transaction อื่นที่ commit หรือยังไม่ commit ได้ ซึ่งเร็วแต่เกิด dirty read (มีเฉพาะ SQL server)
2. Read committed→ คือมีการ read data ของ transaction เฉพาะข้อมูลที่ถูก commit  แล้ว เป็น default ของ DB ส่วนใหญ่ ข้อเสียคือถ้า transaction รันนาน ก็อาจจะต้องรอ แก้ปัญหา Dirty read
3. Repeatable read → คือการที่เมื่อมีการ read data เดิม ใน transaction ข้อมูลที่ได้จะเหมือนเดิมเสมอ จะ read 100 ครั้งผลลัธ์ใน transaction นั้นของ query นั้นก็จะเหมือนเดิม ไว้แก้ปัญหา Non-repeatable read  ใน postgres  จะ special กว่า DB อื่นตรงที่ จะ prevent phantom read ให้เลย
4. Snapshot → คือทุก query ใน transaction จะเห็น data ชุดเดียวกันซึ่งเป็น data ตอน start transaction ซึ่งเราจะทำการ snapshot version DB นะตอนนั้นไว้ base on timestamp ซึ่งใช้แก้ปัญหาของ phenomena
5. Serializable → คือวิธีการรัน transaction ตามลำดับดังนั้นจะไม่เกิดปัญหา concurrent แต่ข้อเสียคือช้ามาก

Database Implementation of Isolation

1. Pessimistic lock → คือการ lock เพื่อป้องกันปัญหา lost update จาก concurrent ได้แก่ row level lock, table lock , page lock ซึ่งใช้ cost สูงโดยเฉพาะ row level lock ยิ่ง record เยอะ 
2. Optimistic lock → จะไม่มีการ lock แค่ check ว่า ข้อมูลถูกเข้าถึง ด้วย transaction อื่นอยู่ไหม ถ้าใช่จะปรับเป็น failed อาจจะให้ retry เป็นต้น
3. Repeatable Read lock isolation นี้ใน postgres จะใช้วิธี snapshot ซึ่งจะค่อนข้างใช้ cost สูง 

Consistency คือ ความสอดคล้องของข้อมูล ซึ่งถ้าแบ่งเป็น 

1. Consistency Data
2. Consistency Read

Consistency Data คือการที่ data ไม่ sync หรือ update ใน table ที่ reference เช่น มี table picture กับ picture like ที่เก็บข้อมูลของคนที่กด like ภาพ อาจจะเกิดกรณีที่มีการกด like รูป แต่เราไม่ได้ไป update จำนวนคน like ใน table picture ด้วยทำให้ data อาจจะไม่ consistency

Consistency Read คือการที่เราอาจจะมีการ read data เก่าที่ยังไม่ได้ sync data จากตัวที่ update ได้เช่น กรณีมี replica ซึ่งจะเป็น eventual consistency ในอนาคต

Durability คือ การที่เมื่อ DB ล่ม หรือ คอมเราดับข้อมูลที่ถูกเขียนลง disk ไปแล้วจะต้องยังอยู่ โดน transaction ที่มีการ commit แล้วควรจะต้องถูกเขียนข้อมูลลง disk

ข้อเสียคือการเขียนลง disk มันช้า ทำให้อาจจะเขียนลง memory แทน ก่อนแล้วค่อยมา update ลง disk ภายหลัง

Durability technique 

1. WAL → Write ahead log คือการที่เรายังไม่ได้ไป update data จริงหรือตัว table แต่เรามีการเขียนว่าต้องทำอะไร ลงไปใน disk ก่อนทำให้มันเร็วขึ้น แล้วมาทำทีหลัง
2. Async Snapshot

concept นี้ถูกใช้กับตัว redis ด้วยเหมือนกัน

OS cache เป็นปัญหาที่เกิดขึ้น ในจังหวะที่ DB ไปขอให้ OS เขียนลง disk ซึ่ง OS จะเอาข้อมูลไปเขียนลง cache ก่อน เพราะว่าต้องการจะทำเป็น batch ในจังหวะที่จะไปเอาลง disk เพื่อ perfomance ที่ดี แต่ DB จะไม่รู้เข้าใจว่า save ลง disk สำเร็จ ดังงนั้นเมื่อ server crash data จะหายไป ซึ่งแก้ได้ด้วย Fsync command เพื่อบอกให้ OS ทำการ save ลง disk แต่วิธีนี้จะทำให้ commit ช้ามาก