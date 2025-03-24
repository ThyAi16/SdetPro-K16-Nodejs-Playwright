import Person from "./Person";
import Thy from "./Thy";

const thy = new Thy();
thy.setAge(20);
console.log(thy);

// There is a need that Dev needs to validate data validate
// Access Modifiers: pham vi truy cap
// Encapsulation: Tinh dong goi -> Hạn chế quyền truy cập cho các thuộc tính và phương thức trong 1 class,
// control được quyền truy cập tới các phương thức và thuộc tính của 1 object tạo ra (class)-> Control tính đúng đắn của dữ liệu

// Public: được truy cập từ bên ngoài class
// Private: chỉ được truy cập ở trong class
// Protected: chia sẽ phạm vi truy cập cho lớp con

// Access Modifiers:
// 1. private: không có thể access vào được, chỉ trong nội bộ
// 2. protected: chia sẽ phạm vi truy cập cho children
// 3. pubic:

// IS-Q relationship: Employee, Person (class cha) -> định ra khuôn mẫu, thiết kế IS-A relationship, để các controller phát sinh và k cần quy chiếu đến lớp con
// -> dùng Abstract class, Normal class
// Normal class: All properties are private, method: service method, support method
// Class that í a template for IS-A relationship almost of the object properties are methods are protected
