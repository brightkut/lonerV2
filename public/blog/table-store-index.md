# How table and index are store on disk ?

ใน database จะ storage ข้อมูลหลายอย่างดังนี้ 

1. Table
2. Row id
3. Page
4. IO
5. Heap data structure
6. Index data structure B-tree

Table ก็คือจะประกอบไปด้วย row และ column 

Row Id คือ id ที่มอบให้แต่ละ row โดยถ้าเป็น mysql จะใช้ primary key แต่ postgres จะเป็น tuple id ซึ่งเป็น row id ที่ system ของ postgres สร้างขึ้นมาเอง

Page จะเก็บข้อมูลหลายๆ row ที่ใช้ในการ read โดยปกติเวลาเราดึงข้อมูล db ไม่ได้ ดึงข้อมูลจาก row นั้นตรงๆ แต่จะอ่าน page ซึ่งอาจจะอ่านหลาย page ในทำ IO ซึ่งขะได้ข้อมูล row มาหลาย row 

postgres ใน 1 page เก็บได้ 8kb ใน mysql 16kb

IO คือปริมาณของ read request กับข้อมูลใน disk ปกติเวลาเรา select * หรือ select specific column ตอนเราดึงข้อมูลจาก disk มันจะดึงเป็น page ไม่ใช่ single row ฉะนั้น IO สูง เราจึงอาจะเปลี่ยนจากขอให้ OS ดึงจาก disk เป็น cache แทนได้ เช่น Postgres จะมี mechanism ในการที่ใช้ข้อมูลจาก Operationg System cache แทนดึงจาก disk ในบางครั้ง

heap คือ data structure ที่้เก็บ collection ของทุก pageไว้ง่ายๆคือข้อมูลทั้งหมด เวลาเราจะดึงข้อมูลก็ต้องมาดึงจาก heap ดังนั้นเราจึงควรสร้าง index เพื่อบอกว่าควรดึงจาก page ไหนใน heap เพราะ heap เก็บหลาย page

Index เป็น data structure(b-tree เป็นที่นิยมมากสุด) ที่เก็บข้อมูลที่ point ไปยัง heap ว่า page ไหนโดยใช้ row id เพื่อให้ค้นหาเร็วขึ้น หลักการคือมาหา index ที่ตรงเพื่อดูว่าข้อมูลอยู่  page ไหน row id ไหน แล้วจึงไปดึงข้อมูลจาก heap