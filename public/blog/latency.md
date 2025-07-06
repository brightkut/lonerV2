# Latency vs Throughput

Latency คือ ระยะเวลาที่ใช้ในการส่งข้อมูลระหว่าง network ว่าช้าหรือเร็ว เช่นต้องส่งของจาก Thai ไป Japan ใช้เวลา 5 วัน โดย latency จะมีหน่วยเป็น miliseconds ซึ่งสามารถทดสอบได้ด้วยการ ping ยิ่ง latency สูงหมายถึงระยะเวลายิ่งนาน

Throughput คือ ปริมาณงานของข้อมูลที่ส่งไปได้ในหนึ่งช่วงเวลา เช่น ขนส่งจาก Thai ไป Japan แต่เราขนของส่งไปได้เยอะแค่ไหนเช่น 2 kilogram ซึ่งยิ่งถ้า latency สูงเราก็ต้องใช้เวล่เยอะส่วนใหญ่ throughput ก็จะน้อยตาม เหมือนทำรอบได้น้อยลง หน่วยของ throughput เช่น 2 mbps (Mega bit per second)

การ improve latency และ throughput

1. Caching → เป็นวิธีที่ใช้ในการลด latency ของ user แทนที่จะต้องไป access original source user สามารถเข้าถึง CDN หรือ proxy server ที่มีการ cache data ไว้แทนได้เพื่อย่นระยะทาง และยังทำให้ เพิ่ม throughput กับ original source ที่รับงานได้เยอะขึ้นเพราะไม่ยุ่งมากอีกด้วย
2. Transport Protocol → ถ้าเป็น TCP connection จะมีความ high latency และ high throughput อยู่แล้ว เพราะ TCP ต้องมั่นใจว่าการส่งข้อมูลจะไม่ loss คือต้องมีการสร้าง connection ระหว่าง 2 ฝั่งก่อนแล้ว จึง high latency แต่ถ้าเป็น UDP จะ low latency แต่ high throughput เนื่องจากไม่ได้สนใจว่าข้อมูลจะส่งสำเร็จไหมการส่งเลยจะเร็ว อาจเกิด packet loss บ้าง แต่ latency ต่ำ ก็จะเหมาะกับงานบางประเภท แตกต่างกัน ในการส่ง data TCP อาจจะเหมาะกว่าแต่ถ้าเป็น Game หรือ video streaming UDP อาจะเหมาะกว่า