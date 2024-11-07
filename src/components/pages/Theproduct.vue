<template>
  <section class="bg-white m-t-100">
    <div v-if="product" class="container pb-5">
      <div class="row">
        <div class="col-lg-7 mt-5">
          <h4 class="mb-4">{{ product.product_name }}</h4>

          <div class="card mb-3">
            <img class="card-img img-fluid" v-if="selectedProduct"
              :src="imageUrl(selectedProduct.product_image_avatar)"
              alt="Product image cap" id="product-detail">
          </div>
          <input type="hidden" id="idProduct" value="{{ product.product_detail.product_info_code }}">

          <div v-for="pro in product.product_detail" :key="pro.product_info_code">
  <div class="row">
    <div class="col-12">
      <!-- Hiển thị ảnh theo danh sách -->
      <div class="image-gallery row">
        <div class="row">
        <div v-for="(image, index) in images" :key="index" class="image-item col-5">
        
          <a href="#">
            <img
            width="50%" height="70%"
              class="card-img mt-3 img-list"
              :src="imageUrl(image)"
              :alt="'Product Image ' + (index + 1)"
            />
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

      <!-- Chọn dung lượng -->
      <div class="row" id="storage-options">
        <label class="selectgroup-item">
          <input type="radio" name="available_capacity" v-model="selectedCapacity" :value="128" class="btn btn-outline-primary me-1" />
          <span class="selectgroup-button">128 GB</span>
        </label>
        <label class="selectgroup-item">
          <input type="radio" name="available_capacity" v-model="selectedCapacity" :value="256" class="btn btn-outline-primary me-1" />
          <span class="selectgroup-button">256 GB</span>
        </label>
        <label class="selectgroup-item">
          <input type="radio" name="available_capacity" v-model="selectedCapacity" :value="512" class="btn btn-outline-primary me-1" />
          <span class="selectgroup-button">512 GB</span>
        </label>
      </div>

      <!-- Hiển thị màu sắc cho dung lượng đã chọn -->
      <div v-if="availableColors.length > 0">
        <div class="mt-3">Chọn màu</div>
        <div class="row">
          <div v-for="(color, index) in availableColors" :key="index" class="col-auto">
            <label class="colorinput">
              <input name="color" type="radio" v-model="selectedColor" :value="color.value" class="colorinput-input" />
              <span class="colorinput-color" :style="{ backgroundColor: color.hex }" :title="color.value"></span>
            </label>
          </div>
        </div>
      </div>

      <!-- Các thông tin khác về sản phẩm -->
      <p class="py-2">
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-secondary"></i>
        <span class="list-inline-item text-dark">Giá tại 4ios Store</span>
      </p>

      <div class="row ml-2">
  <p class="text-h3 py-2">
    <strong>
      <!-- Hiển thị giá sản phẩm nếu có, nếu không hiển thị "Chưa có giá" -->
      {{ selectedProduct ? formatNumberWithCommas(selectedProduct.product_price)  : 'Chưa có giá' }}
    </strong>
    <small>đ</small>
  </p>
</div>

      <!-- Form chọn số lượng và thêm vào giỏ -->
      <form  @submit.prevent="handleCreateOrder">
        <input type="hidden" name="product_id" value="1">
        <div class="p-t-33">
          <div class="flex-w flex-r-m p-b-10">
            <div class="col size-204 flex-w flex-m respon6-next">
              <div class="size-203 flex-c-m respon6">Số lượng</div>
              <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                <button type="button" class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" @click="decreaseQuantity">
                  <font-awesome-icon :icon="['fas', 'minus']" />
                </button>
                <input v-if="selectedProduct" class="mtext-104 cl3 txt-center num-product" type="number" id="quantity" name="product_quantity_order" v-model="product_quantity_order" :max="selectedProduct.quantity" />
                <button type="button" class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" @click="increaseQuantity">
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-3" style="width: 200px; margin: 0px auto;">
            <button type="submit" class="btn btn-warning bor1 hov-btn1 p-lr-15 ml-5 trans-04 mb-2">
              Thêm vào giỏ
            </button>
            <button type="submit" class="btn btn-outline-danger bor1 hov-btn1 p-lr-15 ml-5 trans-04">
              Mua ngay
            </button>
          </div>
        </div>
      </form>

      <p class="justify-content-center p-l-70">Gọi đặt mua / Zalo <strong>034548pppp</strong> (8:00-22:00)</p>
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
      product: null,

      selectedCapacity: null, // Dung lượng người dùng chọn
      selectedColor: null, // Màu sắc người dùng chọn
      primaryColors: [
        { value: 'đen', hex: '#000000' },
        { value: 'trắng', hex: '#ffffff' },
        { value: 'xanh dương', hex: '#2E6A9C' },
        { value: 'xanh lá', hex: '#4CAF50' },
        { value: 'đỏ', hex: '#D50000' },
        { value: 'hồng', hex: '#D5006D' },
        { value: 'vàng', hex: '#F6EB61' },
      ],
      lightColors: [
        { value: 'xanh dương nhạt', hex: '#A4C7E1' },
        { value: 'hồng nhạt', hex: '#F9E2E7' },
        { value: 'xanh lá nhạt', hex: '#A3D3B3' },
        { value: 'vàng nhạt', hex: '#F6E58D' },
      ],
      titanColors: [
        { value: 'titan đen', hex: '#1C1C1E' },
        { value: 'titan tự nhiên', hex: '#A19F9D' },
        { value: 'titan xanh', hex: '#5B798E' },
        { value: 'titan trắng', hex: '#E1E1E1' },
        { value: 'titan sa mạc', hex: '#C4A76A' },
        { value: 'xanh lưu ly', hex: '#007AFF' },
        { value: 'xanh mòng két', hex: '#0E4C92' },
        { value: 'bạc', hex: '#C0C0C0' },
      ],
      images: [],
      order_code: this.generateOrderCode(),
      customer_id: null, // Đây có thể là null nếu không có thông tin khách hàng
      product_info_code: '', // Mã sản phẩm
      product_quantity_order: 1, // Số lượng mặc định 1
      order_date: new Date().toISOString(), // Thời điểm hiện tại (ISO String)
      order_price: 0, // Giá đơn hàng
    };
  },

  mounted() {
    this.fetchProductData();
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
    formatNumberWithCommas() {
    return (amount) => {
      // Kiểm tra nếu là số hợp lệ
      if (isNaN(amount)) {
        return 'Invalid number';
      }

      // Dùng Intl.NumberFormat để thêm dấu phân cách hàng nghìn
      const formatter = new Intl.NumberFormat('vi-VN');
      return formatter.format(amount);
    };
  },
    // Lấy các dung lượng có sẵn (128GB, 256GB, ...)
    availableCapacities() {
      if (!this.product) return [];
      const capacities = new Set();
      this.product.product_detail.forEach((item) => {
        capacities.add(item.capacity_available);
      });
      return Array.from(capacities);
    },

    // Lọc màu sắc dựa trên dung lượng đã chọn
    availableColors() {
      if (!this.selectedCapacity || !this.product) return [];
      const availableColors = [];
      const productDetails = this.product.product_detail.filter(
        (item) => item.capacity_available === this.selectedCapacity
      );
      
      // Kết hợp màu sắc từ tất cả các nhóm
      const allColors = [
        ...this.primaryColors,
        ...this.lightColors,
        ...this.titanColors,
      ];

      // Lọc màu sắc có trong danh sách chi tiết sản phẩm
      allColors.forEach((color) => {
        if (productDetails.some((item) => item.color === color.value)) {
          availableColors.push(color);
        }
      });

      return availableColors;
    },

    // Sản phẩm tương ứng với dung lượng và màu sắc đã chọn
    selectedProduct() {
    if (!this.selectedColor || !this.selectedCapacity || !this.product) return null;

    const selectedProduct = this.product.product_detail.find(
      (item) =>
        item.capacity_available === this.selectedCapacity &&
        item.color === this.selectedColor
    );

    // Thêm console.log() để kiểm tra selectedProduct
    console.log("selectedProduct:", selectedProduct);

    return selectedProduct;
  }
  },

  methods: {
    async fetchProductData() {
      const product_id = this.$route.params.product_id;
      const apiURL = `http://localhost:3000/products/product-detail/${product_id}`;
      
      try {
        const response = await axios.get(apiURL);
        this.product = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    },
    getProductPrice() {
    const selectedProduct = this.productDetails.find(item => 
      item.color === this.selectedColor && item.capacity_available === this.selectedCapacity
    );
    
    if (selectedProduct) {
      return selectedProduct.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else {
      return 'Chưa có giá';
    }
  },
  getProductImages(product) {
    // Kiểm tra nếu `product_images` tồn tại và là chuỗi
    if (product.product_detail.product_images && typeof product.product_detail.product_images === 'string') {
      return product.product_detail.product_images.split(",").map(img => img.trim()).filter(img => img);
    }
    // Trả về mảng rỗng nếu không có hình ảnh
    return [];
  },
  getPriceByCapacity() {
    if (!this.selectedCapacity) {
      console.log("Chưa chọn dung lượng");
      return 'Chưa chọn dung lượng';  // Nếu chưa chọn dung lượng
    }

    console.log("Đang lấy giá cho dung lượng:", this.selectedCapacity);
    console.log("productDetails:", this.productDetails);

    // Kiểm tra dữ liệu của productDetails
    const selectedProduct = this.productDetails.find(
      (item) => item.capacity_available === this.selectedCapacity
    );

    if (selectedProduct) {
      console.log("Sản phẩm tìm thấy:", selectedProduct);
      return selectedProduct.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else {
      console.log("Không tìm thấy sản phẩm với dung lượng này");
      return 'Chưa có giá';
    }
  },
  formatCurrency(value) {
    if (typeof value === 'number') {
      console.log('kkkkkk')
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    return 'Chưa có giá';  // Trường hợp giá trị không hợp lệ
  },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.product_quantity_order--;
      }
    },

    increaseQuantity() {
      this.product_quantity_order++;
    },
    updateImages() {
  if (!this.product || !this.selectedColor || !this.selectedCapacity) return;

  const selectedProduct = this.product.product_detail.find(
    item => item.color === this.selectedColor && item.capacity_available === this.selectedCapacity
  );

  if (selectedProduct && selectedProduct.product_images) {
    this.images = selectedProduct.product_images
      .split(',')
      .map(image => image.trim())
      .filter(image => image !== ''); // Đảm bảo mảng
    console.log('Danh sách ảnh đã cập nhật:', this.images);
  } else {
    console.error('Không có hình ảnh cho sản phẩm.');
  }

},
generateOrderCode() {
      return Math.floor(100000 + Math.random() * 900000); // Tạo mã đơn hàng 6 chữ số ngẫu nhiên
    },
    async handleCreateOrder () {
  const orderData = {
        order_code: this.order_code,
        customer_id: null, // Ở đây có thể để là null nếu không có thông tin khách hàng
        product_info_code: this.selectedProduct.product_info_code,
        product_quantity_order: this.product_quantity_order,
        order_date: this.order_date,
        order_price: this.product_quantity_order * this.selectedProduct.product_price,
      }
      console.log('kkkkk', orderData)
      try {
        const response = await axios.post('http://localhost:3000/orders/create', orderData);
        console.log('Đơn hàng đã được tạo:', response.data);
        this.$router.push({
  name: 'payment', 
  params: { order_code: response.data.data.order_code }
});
      } catch (error) {
        console.error('Lỗi khi tạo đơn hàng:', error);
      }  
},

  },
  watch: {
    selectedColor() {
    this.updateImages();
  },
  selectedCapacity() {
    this.updateImages();
  },
  }
  
};
</script>
