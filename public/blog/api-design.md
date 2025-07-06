# API Design

1. Learning HTTP

Verb GET PUT POST DELETE ใช้ในการ map action ต่างๆ 
Response Status 
1xx → สำหรับ information ทั่วไป
2xx→ status success
3xx→ redirect 
4xx→ client error
5xx→server error
2. Do not return plain text
ใน rest api เราจะ return ข้อมูลเป็น json ซึ่งจริงๆไม่บังคับ แต่เป็น convention  นอกจาก return เป็น json แล้ว ต้อง set content type ใน header เป็น json เพราะบาง library อาจจะต้อง decode response ฉะนั้นถ้าเราระบุใน header จะได้รู้ว่า handle ยังไง
3. Do not use verb in uri
อย่าเอา  action ไปใส่ใน URI Path เช่น

bad: GET /books/:slug/generateBookCover/ 
คือการ generate book cover แต่เราจะมองว่าสิ่งที่ return ออกมาคือ book cover ดังนั้นจึงควรตั้งชื่อเป็น resource ของมัน คือ book cover
correct: GET: /books/:slug/bookCover/

4. Use plural noun for resource
ใช้ plural noun ใน endpoint name
GET: /books/2/

5. **Return the error details in the response body
พยายาม return detail ของ  error ใน รูปแบบ response body และก็ specific ส่วนที่มีปัญหาเท่าที่เป็นไปได้**
6. **Pay special attention to HTTP status codes
ควรจะ return http status code ที่ถูกต้องเพื่อสื่อควาหมายของ error นั้น และก็ในส่วนของ error detail ก็อยู่ในส่วนของ json response ไม่ควร design ให้ reutrn 200 แต่ detail json เป็น error**
7. **You should use HTTP status codes consistently
ควรจะใช้ status code ให้เหมาะสมกับความหมาย**

GET: 200 OK

PUT: 200 OK

POST: 201 Created

PATCH: 200 OK

DELETE: 204 No Content

1.  **Do not nest resources
อย่าใช้ resouce หลายตัวเพราะทำให้งงว่าเราต้องการเข้าถึง resource ไหน

เช่น GET: /authors/Cagan/books/
เราอาจจะงงว่าต้องเข้าถึง author หรือ book ซึ่งจริงๆ เราต้องการ book ที่แต่งโดย author คนนี้

suggestion: ใช้ query string มาจะทำให้เราเข้าใจปัญหามากขึ้น
GET: /books?author=Cagan**

**9. Handle trailing slashes gracefully**

**ควรใส่ slash / ปิดด้านท้าย POST: /buckets/ เพราะไม่งั้น endpoint อาจไปไม่ถูก แต่ modern webframework react , angular แก้ปัญหาพวกนี้ไปแล้ว**

**10. Make use of the querystring for filtering and pagination**

**ใช้ query string ในการ set pagination พวก page size , page number**

1. **ใช้ 401 กับ 403 ให้ถูกต้อง
401 Unautorized → คือเมื่อ token invalid หรือ token expire
403 Forbidden → คือ เมื่อ permission ไม่ถูก**

****