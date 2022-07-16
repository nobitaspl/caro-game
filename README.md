- bản version 1:
+ Gồm bàn cờ 3x3, chưa có mục chọn số hàng và cột.
+ Set up đơn giản.

- bản version 2:
+ Chọn hàng và cột.
+ Không cho chọn số hàng và cột nhỏ hơn 3.
+ Nếu đường thẳng, đường ngang, hoặc đường chéo có 3 points X hoặc O liên tiếp thì end game, sau đó game tự động reset lại.



#Lý thuyết:

- event loop: 
+ Như một cơ chế đa luồng ở trong JavaScript.
+ Nó có một ngăn xếp gọi là stack. Nếu ngăn xếp trống, các function mới sẽ được thêm vào hàng đợi. Hoặc nếu đã đầy thì nó xử lý hàm hiện tại.
+ Đi kèm với nó là lệnh SetTimeOut() cho phép cài đặt thời gian mà hàm đó được đưa vào ngăn xếp.

- callback:
+ Là một hàm được truyền vào hàm khác dưới dạng đối số.
+ Được gọi khi gọi hàm khác.

- this:
+ Là đối tượng hiện tại đang được sử dụng hoặc đang truy cập tới.
+ Trong method, this tham chiếu đến chủ của method đó.
+ Trong function, this tham chiếu đến đối tượng toàn cục.
+ Khi đứng một mình, this tham chiếu đến đối tượng toàn cục. Thường là [object Windown].

- object:
+ Là một thực thể bao gồm thuộc tính và kiểu.
+ Object sẽ gồm một danh sách các thuộc tính và giá trị của nó.

- prototype:
+ Là cơ chế kế thừa tính năng từ object này sang object khác.
+ Prototype là một object.