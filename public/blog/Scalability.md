# Scalability

การ scale ระบบคือการขยายระบบให้สอดรับกับตัวระบบที่ใหญ่ขึ้นซึ่งเป็นได้หลายด้านดังนี้

1. user เพิ่มขึ้น หมายความว่า จำนวน request  ก็จะมากขึ้น
2. feature เพิ่มขึ้น เช่น มี feature ใหม่ๆที่เพิ่มขึ้นในระบบ
3. data volume ใหญ่ขึ้น เช่น youtube ยิ่ง user เพิ่มปริมาณ video ที่ต้องจัดเก็บก็มากขึ้น
4. complexity เช่นระบบใหญ่ขึ้นเราก็ separate ออกเป็นแต่ละส่วนที่ทำงานแตกต่างกันเล็กๆ เพื่อง่ายในการดูแล (microservice)
5. geographic reach  = เราต้องทำระบบ support กับลูกค้าหลายๆประเทศ

วิธีการในการ scale

1. Vertical Scale → การขยายเครื่อง server ให้ใหญ่ขึ้น เพิ่ม RAM CPU แต่มี limit จำกัด และใช้ cost สูง
2. Horizontal Scale → การเพิ่มจำนวนเครื่อง server (เป็นวิธีที่นิยมใช้)
3. Load Balancing → การกระจาย load ข้อมูลไปยัง server คนละ server เพื่อลดปริมาณ load ของ server
4. Caching → คือการ cache data จาก database เพื่อลด load ในการเข้าถึง database
5. CDN → คือเก็บข้อมูลจำพวก image/video ที่เป็น static asset ไว้ เพื่อที่ลด latency ของ user ในการต้องไป load ข้อมูลจาก region ที่ไกลๆ
6. Partitioning → การsplit data ที่เก็บเพื่อลดปัญหา bottleneck เช่น database เก็บข้อมูลชื่อ user เราอาจะมีหลาย partition เช่น partition ที่ 1 เก็บ a-f ,partition ที่ 2 เก็บ f -l , partition ที่ n … ไปเรื่อยจนถึง z
7. **Asynchronous communication →** ใช้สำหรับ process ที่รันนาน แล้วก็ task ที่สามารถรันเป็น background process หรือเข้า queue ได้ เช่น ส่งข้อความใน slack จาก A ไป B หลังกดส่ง A จะเห็นว่าส่งสำเร็จ แต่ B อาจจะต้องรอซักครู่ถึงได้ข้อความ
8. Microservice Architecture → เป็นการ break down ระบบให้เป็น component เล็กๆ ซึ่งไม่ผูกติดกับ service อื่น ง่ายในการ implement feature parallel ไปพร้อมกับอีก service (decoupling, resilence)
9. Auto Scaling → คือการเพิ่มขนาด server หรือ จำนวน แบบ auto ตาม criteria หรือปริมาณ traffic ที่เพิ่มในช่วงเวลานั้นๆ
10. Multi region deployment → คือการ deploy ในหลายๆ region เพื่อลด latency กับ user และ เพิ่ม high availablity

