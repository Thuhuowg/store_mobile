<template>
    

<section class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="callout callout-info">
          Chi tiết đơn hàng
          <a href="/admin/order/list" class="float-right">Quay lại</a>
        </div>
      </div>

      <div class="invoice p-3 m-auto" style="width:90%">
        <div class="row invoice-info">
          <div class="col-sm-4 invoice-col">
            <p style="font-size: 30px">Thông tin người nhận:</p>
            <address>
              - Họ và tên: <strong>Nguyễn Văn A</strong><br>
              - Địa chỉ: 123 Đường ABC<br>
              - Phường X, Quận Y, Tỉnh Z.<br>
              - Điện thoại: 0987654321<br>
              - Email: example@example.com<br>
            </address>
          </div>

          <div class="col-sm-4 invoice-col">
            <b>Invoice #12345</b><br>
            <b>Trạng thái: <span class="badge badge-success">Thành công</span></b><br>
            <b>Ngày lập:</b> 2024-01-01<br>
          </div>
        </div>

        <p style="font-size: 30px">Thông tin đặt hàng:</p>
        <div class="row">
          <div class="col-12 table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Sản Phẩm</th>
                  <th>Ảnh</th>
                  <th>Size</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sản phẩm A</td>
                  <td><img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg" alt="" style="width:40px;height:40px"></td>
                  <td>M</td>
                  <td>150,000Đ</td>
                  <td>2</td>
                  <td>300,000Đ</td>
                </tr>
                <tr>
                  <td>Sản phẩm B</td>
                  <td><img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg" alt="" style="width:40px;height:40px"></td>
                  <td>L</td>
                  <td>200,000Đ</td>
                  <td>1</td>
                  <td>200,000Đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <p class="lead">Amount</p>
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <th>Tổng:</th>
                    <td>500,000Đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
  export default {
    name: 'CheckoutPage',
    data() {
      return {
        order:null
      };
    },
    mounted() {
        // Khởi tạo Stripe và Stripe Elements khi component được moun
    this.getOrder()
    },
   methods: {
    formatCurrency(value) {
    if (typeof value === 'number') {
      console.log('kkkkkk')
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    return 'Chưa có giá';  // Trường hợp giá trị không hợp lệ
  },
    
    async getOrder() {
      const order_data = this.$route.params.order_code
      const apiURL = `http://localhost:3000/orders/${order_data}`;
      try {
                const response = await axios.get(apiURL);
                this.order = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
    },
    // Method to calculate the total price of the order, including shipping if applicable
    calculateTotal() {
      const shippingFee = this.calculateShippingFee(); // Assume we have a method to calculate shipping
     
    },
  
    // Method to calculate the shipping fee (this can be customized based on different criteria)
    calculateShippingFee() {
      // For simplicity, we're assuming free shipping (0Đ)
      return 0; // Or replace with logic to calculate the shipping fee
    },
  
    // Method to handle form submission
    handleSubmit() {
      // You can add form validation and submission logic here
      console.log('Form Data Submitted:', this.formData);
      // Here you would typically send the formData to the backend API
    },
    async createPaymentIntent() {
      // Gọi API server để tạo PaymentIntent và nhận clientSecret
      const response = await this.$http.post('/api/stripe/create-payment-intent', {
        amount: 1000, // 1000 cent = 10 USD
        currency: 'usd',
      });
      return response;
    },
    
  },
  computed: {
    imageUrl(imageName) {
      return (imageName) => {
        // Kiểm tra nếu imageName là chuỗi trước khi tạo URL
        if (typeof imageName === 'string') {
          return `http://localhost:3000/uploads/${imageName}`;
        } else {
          console.error('imageName phải là chuỗi', imageName);
          return '';
        }
      };
    },
  }
  }
  </script>