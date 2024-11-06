<template>
  <section class="bg-white m-t-100">
    <div v-if="product" class="container pb-5">
      <div class="row">
        <div class="col-lg-7 mt-5">
          <h4 class="mb-4">{{ product.product_name }}</h4>

          <div class="card mb-3">
            <img class="card-img img-fluid"
              src="https://cdn.tgdd.vn/Products/Images/42/240259/iphone-14-den-glr-1-750x500.jpg"
              alt="Product image cap" id="product-detail">
          </div>
          <input type="hidden" id="idProduct" value="1">

          <div class="row">
            <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
              <div class="carousel-inner product-links-wap img-custom" role="listbox">
                <div class="">
                  <div class="row">
                    <div class="col-5 ml-3 p-0 image-gallery">
                      <a
                        href="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg">
                        <img class="card-img mt-3 img-list"
                          src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg"
                          alt="Product Image 1">
                      </a>
                    </div>
                    <div class="col-5 ml-3 p-0 image-gallery">
                      <a href="/uploads/sample-image2.jpg">
                        <img class="card-img mt-3 img-list"
                          src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-2-638638962343879149-750x500.jpg"
                          alt="Product Image 2">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3"></div>
        </div>

        <div class="col-lg-5 mt-5 position-sticky fixed">
          <div class="card mt-5">
            <div class="card-body">
              <h4 class="mb-2">{{ product.product_name }}</h4>
              <div class="">
                <a href="#" class="btn btn-outline-primary me-1" style="font-size:10px;">128 GB</a>
                <a href="#" class="btn btn-outline-primary me-1" style="font-size:10px;">256 GB</a>
                <a href="#" class="btn btn-outline-primary me-1" style="font-size:10px;">512 GB</a>
              </div>
              <div class="row mt-3 ">
                <div class="col-auto p-1 ps-3"><label class="colorinput"><input name="color" type="radio"
                      class="colorinput-input " value="đen"><span class="colorinput-color bg-black"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></span></label></div>
                      <div class="col-auto p-1"><label class="colorinput"><input name="color" type="radio"
                      class="colorinput-input" value="đen"><span class="colorinput-color bg-white"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></span></label></div>
                      <div class="col-auto p-1"><label class="colorinput"><input name="color" type="radio"
                      class="colorinput-input" value="đen"><span class="colorinput-color bg-danger"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></span></label></div>
                
              </div>
              <p class="py-2">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-secondary"></i>
                <span class="list-inline-item text-dark">Giá tại 4ios Store</span>
              </p>
              <div class="row ml-2">
                <p class="text-h3 py-2 "><strong>34.990.000</strong><small>đ</small></p>
                <!-- <p class="ml-3 text-h3 py-2"><del>2,000,000<small>đ</small></del></p> -->
              </div>



              <div class="sale mb-3">
                <span class="title"><i class="zmdi zmdi-card-giftcard mr-1"></i>Khuyến mãi</span>
                <ul class="mt-2">
                  <li>1 Phiếu mua hàng trị giá 200,000đ mua sim Mobifone 6MWG125</li>
                  <li>2 Thu cũ Đổi mới: Giảm thêm đến 2,000,000Đ (Áp dụng tuỳ model máy cũ, Không kèm ưu đãi thanh toán
                    qua cổng, mua kèm) Xem chi tiết</li>
                  <li>3 Nhập mã VNPAYTGDD4 giảm từ 50,000đ đến 100,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán
                    qua VNPAY-QR. (Xem chi tiết tại đây)</li>
                  <li>🔥 VOUCHER: 60K, 100K, 200K</li>
                  <li>Áp dụng sản phẩm có mức giảm giá 50%, Không áp dụng với sản phẩm mới</li>
                </ul>
              </div>

              <form action="/add-to-cart" method="post">
                <input type="hidden" name="product_id" value="1">
                <div class="p-t-33">

                  <div class="flex-w flex-r-m p-b-10">
                    <div class="col size-204 flex-w flex-m respon6-next">
                      <div class="size-203 flex-c-m respon6">Số lượng</div>
                      <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                        <button type="button" class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" @click="decreaseQuantity">
                          <font-awesome-icon :icon="['fas', 'minus']" />
                        </button>

                        <input 
          class="mtext-104 cl3 txt-center num-product" 
          type="number" 
          id="quantity" 
          name="quantity"
          v-model="quantity" 
          :min="1"  
        />

                        <button type="button" class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" @click="increaseQuantity">
                          <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3 " style="width: 200px; margin: 0px auto;">
                    <button type="submit" class="btn btn-warning bor1 hov-btn1 p-lr-15 ml-5 trans-04 mb-2">
                      Thêm vào giỏ
                    </button>
                    <button type="button" class="btn btn-outline-danger bor1 hov-btn1 p-lr-15 ml-5 trans-04">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </form>

              <p class="justify-content-center p-l-70">
                Gọi đặt mua /Zalo <strong>034548pppp</strong>(8:00-22:00)
              </p>
              <div class="row mt-5 sale ml-1 mb-5">
                <div class="col-sm">Giao hàng toàn quốc</div>
                <div class="col-sm">Đổi trả dễ dàng</div>
                <div class="col-sm">Quà tặng hấp dẫn</div>
                <div class="col-sm">Cam kết chính hãng</div>
              </div>

              <h6>Mô tả:</h6>
              <div>Đây là phần mô tả sản phẩm.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.colorinput-color {
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
  .colorinput-color:before {
    content: '';
    opacity: 0;
    position: absolute;
    top: .25rem;
    left: .25rem;
    height: 1.25rem;
    width: 1.25rem;
    transition: .3s opacity;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E") no-repeat center center/50% 50%; }

.colorinput-input:checked ~ .colorinput-color:before {
  opacity: 1; }
.colorinput-input:focus ~ .colorinput-color {
  border-color: #467fcf;
  box-shadow: 0 0 0 2px rgba(70, 127, 207, 0.25); }
  .colorinput-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      product:null, 
      quantity: 1
    };
  },

  mounted() {
    this.fetchProductData();
  },

  methods: {
    async fetchProductData() {
      const product_id = this.$route.params.product_id; // Lấy rider_code từ route params
      const apiURL = `http://localhost:3000/products/product-detail/${product_id}`; // API sử dụng rider_code
console.log(this.$route.params.product_id)
      try {
        const response = await axios.get(apiURL);
        this.product = response.data; // Gán dữ liệu vào rider
        console.log('kahgla====', this.product.product_name)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sp:', error);
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1) {  // Đảm bảo số lượng không giảm dưới 1
        this.quantity--;
      }
    },
    
    // Tăng số lượng
    increaseQuantity() {
      this.quantity++;
    }
  },
};
</script>