# OOP: Pillars/Concepts - DESIGN

- Inheritance: Tinh ke thua -> Reuse concept and design concept (IS-A, controller(FP))
  =>
  1. What? Là concept ở trong lập trình hướng đối tượng, ở đó 1 lớp có thể reuse lại Properties và method từ 1 lớp khác,
     và lớp mà reuse lại được gọi là lớp con (children class), lớp cho dùng lại gọi là Super class (Parent class) và được ràng buộc
     bằng từ khoá "extends"
  2. Why?
     - Resuse: Muốn reuse lại phương thức từ lớp khác, không cần viết lại, đỡ duplicated
       Example: Test API thì có 2 cái phương thức: Send request và Get response sau đó sẽ verify, muốn các lớp khác không cần phải verify lại header, token, ... -> Những phần đó là phần chung nên sẽ reuse lại được
     - Design concept: Khi kế thừa sẽ triển khai IS-A, ở đó sẽ cho xuất hiện class controller( hướng FP), controller sẽ nhận vô những parameter không phải bình thường mà là user define data, lúc đó sẽ nhận IS-A để xử lý
- Abstraction: Tinh truong tuong -> Hide implementation , introduce functionalies
  1. What? Cho dấu logic detail implementation ở bên trong nhưng giới thiệu functionalies. Strongly force IS-A relationship
     bằng cách cho method đó abstract, khi method abstract ở lớp cha thì lớp con bắt buộc ràng buộc từ khoá extends đi implement method đó
- Encapsulation: Tinh dong goi -> Hạn chế quyền truy cập cho các thuộc tính/phương thức trong 1 method, muốn thay đổi thì dùng setter, muốn lấy ra thì dùng getter
- Polymorphism: Tinh da hinh
