<template>
    <div class="col-md-12">

            <div class="bootstrap-tabs product-tabs">
              <div class="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Tất cả sản phẩm</h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a href="#" class="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" aria-selected="true" role="tab">All</a>
                    <a href="#" class="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits" aria-selected="false" tabindex="-1" role="tab">Fruits &amp; Veges</a>
                    <a href="#" class="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices" aria-selected="false" tabindex="-1" role="tab">Juices</a>
                  </div>
                </nav>
              </div>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                  <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                  
                    <div class="col"  v-for="pro in processedProducts" :key="pro.product_id" >
                      <router-link :to="{name:'product-detail',params: { product_id:  pro.product_id } }">
                      <div class="product-item">
                        <span class="badge bg-success position-absolute m-3">-30%</span>
                        <a href="#" class="btn-wishlist"><svg width="24" height="24"><font-awesome-icon :icon="['far', 'heart']" /></svg></a>
                        <figure>
                          <a v-if="pro.product_detail[0].product_image_avatar" href="index.html" title="Product Title" style="margin-right: 0px;">
                            <img :src="imageUrl(pro.product_detail[0].product_image_avatar)" class="tab-image me-4" height="250" width="220" />
                          </a>
                        </figure>
                        <div class="">
                        <h3>{{pro.product_name}}</h3>
                        <span class="qty">Hãng</span><span class="rating ms-1">{{ pro.category }}</span>
                        </div>
                        
                        <a href="#" class="btn btn-outline-primary me-1" style="font-size: 10px;">128 GB</a>
                        <a href="#" class="btn btn-outline-primary me-1" style="font-size: 10px;">256 GB</a>
                        <span class="price mt-1">{{formatNumberWithCommas(pro.minPrice)}}đ</span>
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="input-group product-qty">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><font-awesome-icon :icon="['fas', 'minus']" /></svg>
                                  </button>
                              </span>
                              <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><font-awesome-icon :icon="['fas', 'plus']" /></svg>
                                  </button>
                              </span>
                          </div>
                          <a href="#" class="nav-link me-3 btn btn-outline-light"><svg width="28" height="26"><font-awesome-icon :icon="['fas', 'cart-plus']" /></svg></a>
                        </div>
                      </div>
                    </router-link>
                    </div>

                  </div>
                  <!-- / product-grid -->
                  
                </div>

              
              </div>
            </div>

          </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      listProductsData: [], // Đổi tên data thành listProductsData
    };
  },
  mounted() {
    this.getListProducts(); // Gọi phương thức getListProducts thay vì listProducts
  },
  computed: {
    // Tạo URL ảnh từ tên file
    imageUrl(imageName) {
      return (imageName) => {
        // Kiểm tra nếu imageName là chuỗi trước khi tạo URL
        if (typeof imageName === 'string') {
          return `http://localhost:3000/uploads/${imageName}`;
        } else {
          // console.error('imageName phải là chuỗi', imageName);
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
processedProducts() {
      return this.listProductsData.map(product => {
        const prices = product.product_detail.map(detail => detail.product_price);
        console.log('kkkkkk',prices)
        const maxPrice = Math.max(...prices) || 0;
        const minPrice = Math.min(...prices) || 0;
        // console.log('Max Price:', maxPrice);  // In giá cao nhất
        // console.log('Min Price:', minPrice);  
        return {
          product_id: product.product_id,
          product_name: product.product_name,
          product_detail: product.product_detail,
          category: product.category,
          maxPrice,
          minPrice
        };
      });

    }
  },
 
  methods: {
    async getListProducts() {  // Đổi tên phương thức thành getListProducts
      const apiURL = 'http://localhost:3000/products/list-product'; // URL của API
      try {
        const response = await axios.get(apiURL);
        this.listProductsData = response.data; 
        // Cập nhật danh sách sản phẩm vào listProductsData
        // console.log('jjjj=====',this.listProductsDat[0].product_detail[0].product_image_avatar)
        console.log('--------',this.listProductsData[0].product_detail[0].product_image_avatar)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    },
  }
};
</script>
