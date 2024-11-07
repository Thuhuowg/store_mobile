<template>
    <div class="container m-t-70">
      <!-- Breadcrumb -->
      <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
        <router-link to="/" class="stext-109 cl8 hov-cl1 trans-04">
          Trang chủ
          <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
        </router-link>
        <span class="stext-109 cl4">Thông tin giao hàng</span>
      </div>
  
      <!-- Form Checkout -->
      <form class="bg0 p-t-30 p-b-85">
        <div class="container">
          <div class="row">
            <!-- Thông tin giao hàng -->
            <div class="col-lg-10 col-xl-5 m-lr-auto m-b-50">
              <h3 class="flex-w p-l-25 p-r-15 p-b-20 p-lr-0-lg">Thông tin giao hàng</h3>
              
              <!-- Input fields -->
              <div class="m-l-25 m-r--38 m-lr-0-xl">
                <div class="col-11 mt-3">
                  <div class="form-group">
        <label for="name" class="bold-label">Họ và tên</label>
        <input
          v-model="formData.name"
          type="text"
          placeholder="Nhập họ và tên"
          name="name"
          id="name"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="bold-label">Email</label>
        <input
          v-model="formData.email"
          type="email"
          placeholder="Nhập email"
          name="email"
          id="email"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="address" class="bold-label">Địa chỉ</label>
        <input
          v-model="formData.address"
          type="text"
          placeholder="Nhập địa chỉ giao hàng"
          name="address"
          id="address"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="phone" class="bold-label">Số điện thoại</label>
        <input
          v-model="formData.phone"
          type="tel"
          placeholder="Nhập số điện thoại"
          name="phone"
          id="phone"
          class="form-control"
          required
        />
      </div>
                </div>
                
                <!-- Province, District, Ward selects -->
                <div class="flex-w p-l-25 p-r-15 p-b-20 p-lr-0-lg p-t-20">
            <h3>Phương thức thanh toán</h3>
          </div>
          <div class="m-l-25 m-r--38 m-lr-0-xl">
            <div class="col-11 mt-3">
              <div class="row form-group">
                <input
                  type="radio"
                  id="option1"
                  name="payment_method_id"
                  value="0"
                  v-model="formData.payment_method_id"
                  class="col-sm-1"
                  style="width: 20px;"
                />
                <label for="option1" class="col-sm-8 m-0 pl-3">Thanh toán khi nhận hàng (COD)</label>
              </div>
              <div class="row form-group mt-3">
                <input
                  type="radio"
                  id="option2"
                  name="payment_method_id"
                  value="2"
                  v-model="formData.payment_method_id"
                  class="col-sm-1"
                  style="width: 20px;"
                />
                <label for="option2" class="col-sm m-0 pl-3">Chuyển khoản qua ngân hàng</label>
                <p class="ml-5" style="color: black;">STK: 45010005287738</p>
        <p class="ml-5" style="color: black;">Ngân hàng BIDV (Nguyen Thi Thu Huong)</p>
              </div> 
              <div class="row form-group mt-3">
                <input
                  type="radio"
                  id="option3"
                  name="payment_method_id"
                  value="3"
                  v-model="formData.payment_method_id"
                  class="col-sm-1"
                  style="width: 20px;"
                />
                <label for="option2" class="col-sm m-0 pl-3">Thanh toán bằng thẻ</label>
                <form id="payment-form" @submit="handleSubmit">
      <div id="card-element"></div> <!-- Stripe Elements Card Input -->
      <div id="card-errors" role="alert"></div> <!-- Hiển thị lỗi nếu có -->

      <button type="submit" :disabled="loading">Thanh toán</button>
    </form>
    <div v-if="paymentStatus">
      <p v-if="paymentStatus === 'success'">Thanh toán thành công!</p>
      <p v-if="paymentStatus === 'error'">Có lỗi trong quá trình thanh toán. Vui lòng thử lại.</p>
    </div>
              </div> 
            </div>
          </div>
          <div class="flex-w p-l-25 p-r-15 p-b-20 p-lr-0-lg p-t-20">
            <h3>Phương thức vận chuyển</h3>
          </div>
          <div class="m-l-25 m-r--38 m-lr-0-xl">
            <div class="col-11 mt-3">
              <div class="form-group">
                <input type="text" class="form-control" id="name" value="VN Express (freeship)" readonly="1">
              </div>
            </div>
          </div>
              </div>
              
            </div>
  
            <!-- Order Summary -->
            <div class="col-sm-12 col-lg-7 col-xl-6 m-lr-auto m-b-50 mt-20">
              <div class="bor10 p-lr-40 p-t-30 p-b-40 m-lr-0-xl">
                <h4 class="mtext-109 cl2 p-b-30">Đơn hàng</h4>
                <table border="1px">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th class="ps-2">Phân loại</th>
                      <th>Số lượng</th>
                      <th class="ps-2">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="order" :key="order.order_code">
                      <td><img :src="imageUrl(order.product_image_avatar)" alt="" style="width:50px;height:40px"></td>
                      <td>{{order.available_capacity}}GB - {{ order.color }} </td>
                      <td>x{{ order.product_quantity_order }}</td>
                      <td>{{ formatCurrency(order.price) }}</td>
                    </tr>
                  </tbody>
                </table>
  
                <!-- Totals -->
                <div class="flex-w flex-t bor12 p-b-13 pt-3">
                  <div class="size-208">
                    <span class="stext-110 cl2">Tổng:</span>
                  </div>
                  <div class="size-209 p-l-130">
                    <span v-if="order && order.order_price !== undefined">
      {{ formatCurrency(order.order_price) }} 
    </span>                  </div>
                </div>
  
                <div class="flex-w flex-t bor12 p-t-15 p-b-30">
                  <div class="size-208 w-full-ssm">
                    <span class="stext-110 cl2">Vận chuyển:</span>
                  </div>
                  <div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
                    <p class="stext-111 cl6 p-t-2" style="padding-left: 130px;">0Đ</p>
                  </div>
                </div>
  
                <div class="flex-w flex-t p-t-27 p-b-33">
                  <div class="size-208">
                    <span class="mtext-101 cl2">Tổng:</span>
                  </div>
                  <div class="size-209 p-t-1 ">
                    <span class="mtext-110 cl2 " style="padding-left: 130px;" v-if="order && order.order_price !== undefined">{{ formatCurrency(order.order_price) }}</span>
                  </div>
                  <span v-if="order" class="stext-110 cl2">Trạng thái đơn : </span> 
<span v-if=" order && order.order_status === 'created'" class="stext-110 cl2">Chưa thanh toán</span>
<span v-if="order &&order.order_status === 'paid'" class="stext-110 cl2">Đã thanh toán</span>

                  <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" style="width: 200px;margin-left: 90px; margin-top: 40px;" type="submit">
            Hoàn tất đơn hàng
          </button>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Phương thức thanh toán -->
         
  
          <!-- Phương thức vận chuyển -->
        
  
         
        </div>
      </form>
      
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'CheckoutPage',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          address: '',
          payment_method_id: '',
          stripe: null,
      elements: null,
      card: null,
      loading: false,
      paymentStatus: null,
        },
        order:null
      };
    },
    mounted() {
        // Khởi tạo Stripe và Stripe Elements khi component được mount
    this.stripe = Stripe('pk_test_51QI49MB4kZXP77p9D3sSIWRGqwNGcMic3kHZmbDhsw09BrbHsCto9m455WTOkFytTKF0KcpDqDOgqyTsaZNVRSex00dCsUTv94'); // Thay 'your_publishable_key' bằng Stripe Publishable Key của bạn
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element'); // Gắn thẻ vào DOM
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
    async handleSubmit(event) {
  event.preventDefault();  // Ngừng hành động mặc định của form
  this.loading = true;
  this.paymentStatus = null;

  try {
    // Gửi yêu cầu tạo PaymentIntent từ server và nhận clientSecret
    const paymentIntentResponse = await this.createPaymentIntent();

    const { clientSecret } = paymentIntentResponse.data;

    // Xác thực PaymentIntent với Stripe.js
    const { error, paymentIntent } = await this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.card, // Thẻ được tạo từ Stripe Elements
        billing_details: {
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone,
          address: {
            line1: this.formData.address,
            postal_code: this.formData.zip, // Nếu có mã zip, sử dụng trường này
          },
        },
      },
    });

    if (error) {
      // Hiển thị lỗi nếu có
      this.paymentStatus = 'error';
      console.error('Payment failed:', error.message);
    } else {
      // Thanh toán thành công
      if (paymentIntent.status === 'succeeded') {
        this.paymentStatus = 'success';
        console.log('Payment succeeded:', paymentIntent);
      }
    }
  } catch (error) {
    console.error('Payment failed:', error);
    this.paymentStatus = 'error';
  } finally {
    this.loading = false;
  }
},

async createPaymentIntent() {
  // Gọi API server để tạo PaymentIntent và nhận clientSecret
  const response = await axios.post('http://localhost:3000/api/stripe/create-payment-intent', {
    amount: this.order.order_price , // Stripe yêu cầu giá trị amount tính theo cent
    currency: 'vnd',
    payment_method:'card'
  });
  if(response){
    alert('Thanh toán hoàn tất ! ')
this.order.order_status='paid'
  } 
  else alert('Hãy chọn hình thức thanh toán khác')
  return response;
}
,


   
    
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
  <style>
.bold-label {
  font-weight: bold;
}
</style>