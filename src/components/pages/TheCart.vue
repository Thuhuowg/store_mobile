<template>
<div class=" m-t-90 margin-top-cus ms-0 me-0" >
  <div class="container">
    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-40 p-lr-0-lg">
      <a href="/" class="stext-115 cl8 hov-cl1 trans-04">
        Trang chủ
        <!-- <font-awesome-icon :icon="['fas', 'greater-than']"  class="ms-1 me-2"/> -->
        <span class="ms-1 me-2">></span>
      </a>

      <span class="stext-115 cl4">Giỏ hàng</span>
    </div>
  </div>

  <form class="bg0 p-t-10 p-b-85">
    <div class="">
      <div class="row">
        <div class="col-lg-10 col-xl-8 m-lr-auto m-b-50">
          <div class="m-l-25 m-r--38 m-lr-0-xl">
            <div class="wrap-table-shopping-cart">
              <table class="table-shopping-cart">
                <thead>
                <tr class="table_head">
                  <th class="column-1">Hình ảnh</th>
                  <th class="column-2">Sản phẩm</th>
                  <th class="column-3">Giá</th>
                  <th class="column-2">Phân loại</th>
                  <th class="column-4">Số lượng</th>
                  <th class="column-5">Tổng</th>
                </tr>
</thead>
                <!-- Repeat rows for each item -->
                <tbody>
                <tr class="table_row">
                  <td class="column-1">
                    <div class="how-itemcart1">
                      <img v-if="order" :src="imageUrl(order.product_image_avatar)" alt="IMG">
                    </div>
                  </td>
                  <td v-if="order" class="column-2">{{ order.product_name }}</td>
                  <td v-if="order" class="column-3">{{ formatCurrency(order.price) }}</td>
                  <td v-if="order" class="column-3">{{ order.available_capacity }} GB - {{ order.color }}</td>
                  <td class="column-4">
                    <div class="wrap-num-product flex-w m-l-auto m-r-0">
                      <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <font-awesome-icon :icon="['fas', 'minus']" />
                      </div>

                      <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product2" value="1">

                      <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                      </div>
                    </div>
                  </td>
                  <td v-if="order" class="column-5 total">{{ order.order_price }}</td>
                </tr>
</tbody>
                <!-- End repeat -->
              </table>
            </div>

            <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
              <a href="/cart/destroy">
                <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                  Xóa toàn bộ giỏ hàng
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-lg-7 col-xl-4 m-lr-auto m-b-50">
          <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
            <h4 class="mtext-109 cl2 p-b-30">Tổng giỏ hàng</h4>

            <div class="flex-w flex-t bor12 p-b-13">
              <div class="size-208">
                <span class="stext-110 cl2">Tổng cộng:</span>
              </div>

              <div class="size-209">
                <span v-if="order" class="mtext-110 cl2" id="total">{{ order.order_price }}</span>
              </div>
            </div>

            <div class="flex-w flex-t bor12 p-b-13">
              <div class="size-208">
                <span class="stext-110 cl2">Phí ship:</span>
              </div>

              <div class="size-209">
                <span class="mtext-110 cl2">0Đ</span>
              </div>
            </div>

            <!-- <router-link  v-if="order" :to="{ name: 'cart', params: { cart: order.order_code } }" class="flex-c-m stext-101 cl0 mt-3 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Thanh toán
            </router-link> -->
            <a  v-if="order" :href="'/payment/' + order.order_code" class="flex-c-m stext-101 cl0 mt-3 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div style="text-align: center">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
      <path d="...SVG path here..."></path>
    </svg>
    <a href="/">
      <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">Tiếp tục mua hàng</div>
    </a>
  </div>
</div>
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
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.product_quantity_order--;
      }
    },

    increaseQuantity() {
      this.product_quantity_order++;
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