<template>
  <div class="ms-4 me-4 mt-4  ">
    <div class="row">
      <div class="col-1">
        <a href="/riders">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </a>
      </div>
      <h4 class="col">Nhập số lượng sản phẩm</h4>
    </div>
    <form enctype="multipart/form-data" @submit.prevent="handleCreateProductDetail">
      <div class="">
        <div class="input-group mb-3">

          <div class="col-sm-6">
            <span class="input-group-text" id="basic-addon2">Thông tin sản phẩm</span>
            <input type="text" v-model="product_info_code" class="form-control" placeholder="Nhập mã sản phẩm"
              aria-label="Recipient's username" aria-describedby="basic-addon2">
            <input type="text" aria-label="First name" disabled class="form-control" value="heheh"
              placeholder="Nhập tên sản phẩm">
          </div>
          <div class="col-sm-4 form-group">
            <label class="form-label me-2">Dung lượng</label>
            <div class="selectgroup selectgroup-pills">
              <label class="selectgroup-item">
                <input type="radio" name="available_capacity" v-model="available_capacity" :value="128"
                  class="selectgroup-input" checked="">
                <span class="selectgroup-button">128 gb</span>
              </label>
              <label class="selectgroup-item">
                <input type="radio" name="available_capacity" v-model="available_capacity" :value="256"
                  class="selectgroup-input">
                <span class="selectgroup-button">256 gb</span>
              </label>
              <label class="selectgroup-item">
                <input type="radio" name="available_capacity" v-model="available_capacity" :value="1"
                  class="selectgroup-input">
                <span class="selectgroup-button">1 TB</span>
              </label>
            </div>

            <div class=" mb-2">
              <span class="">Dung lượng khả dụng </span>
              <input type="number" v-model="capacity" aria-label="First name" class="form-control"
                placeholder="dung lượng khả dụng">
            </div>
          </div>

        </div>
        <div class="row">

          <div class="col-sm-5 form-group">
            <label class="form-label">Chọn màu</label>
            <div class="row gutters-xs">
              <div class="col">
                <div class="span">Mã màu chính</div>

              </div>

              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="đen" class="colorinput-input">
                  <span class="colorinput-color bg-black" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Tooltip on top"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="trắng" class="colorinput-input">
                  <span class="colorinput-color bg-white"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh dương" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #2E6A9C;"></span>
                </label>
              </div>

              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh lá" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #4CAF50;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="danger" class="colorinput-input">
                  <span class="colorinput-color bg-danger"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="hồng" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #D5006D;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="vàng" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #F6EB61;"></span>
                </label>
              </div>
            </div>
            <div class="row gutters-xs">
              <div class="col">
                <div class="span">Mã màu nhạt</div>

              </div>

              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh dương nhạt" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #A4C7E1;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="hồng nhạt" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #F9E2E7;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh lá nhạt" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #A3D3B3;"></span>
                </label>
              </div>

              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="vàng nhạt" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #F6E58D;"></span>
                </label>
              </div>



            </div>
            <div class="row gutters-xs">
              <div class="col">
                <div class="span">Mã màu titan</div>

              </div>


              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="titan đen" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #1C1C1E;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="titan tự nhiên" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #A19F9D;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="titan xanh" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #5B798E;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="titan trắng" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #E1E1E1;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="titan sa mạc" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #C4A76A;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh lưu ly" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #007AFF;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="xanh mòng két" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #0E4C92;"></span>
                </label>
              </div>
              <div class="col-auto">
                <label class="colorinput">
                  <input name="color" v-model="color" type="radio" value="bạc" class="colorinput-input">
                  <span class="colorinput-color" style="background-color: #C0C0C0;"></span>
                </label>
              </div>

            </div>
          </div>


        </div>
        <div class="row">
          <div class="col-sm-5 me-5">
            <div class="mb-3 pt-3">
              <label for="formFile" class="form-label d-flex">Ảnh sp</label>
              <input class="form-control" type="file" multiple id="product_images" @change="onFilesChange">
              <div v-if="product_images.length">
      <div v-for="(image, index) in product_images" :key="index">
        <img :src="getImageUrl(image)" alt="Selected Image" style="max-width: 300px; max-height: 300px; margin: 10px;" />
      </div>
    </div>
            </div>
           
          </div>
          <div class="col-sm-3 form-group mb-3">
            <div class="mb-3">
              <label for="formFile" class="form-label d-flex">Giá gốc</label>
            </div>
            <div class="input-group ">
              <span class="input-group-text">$</span>
              <input
      type="number"
      v-model.number="price"
      aria-label="Amount (to the nearest dollar)"
      class="form-control"
    />
              <span class="input-group-text">VNĐ</span>
            </div>
          </div>
          <div class="col-sm-3 form-group mb-3">
            <div class="mb-3">
              <label for="formFile" class="form-label d-flex">Số lượng</label>
            </div>
            <div class="input-group ">
              <span class="input-group-text">Sp</span>
              <input
      type="number"
      v-model.number="quantity"
      aria-label="Quantity"
      class="form-control"
    />
              <span class="input-group-text">Sản phẩm</span>
            </div>
          </div>
        </div>



        <div class="row">
          <div class="col-sm-8">
            <div class="mb-3 pt-2">
              <label for="formFile" class="form-label d-flex">Ảnh sp</label>
              <input class="form-control" type="file" multiple id="product_images" @change="onFilesChange">
              <button @click="uploadFiles"> <font-awesome-icon :icon="['fas', 'square-plus']" /></button>

            </div>
            <div class="row">
              <div class="col-6 col-sm-4">
                <label class="imagecheck mb-4">
                  <input name="imagecheck" type="checkbox" value="1" class="imagecheck-input">
                  <figure class="imagecheck-figure">
                    <img src="../assets/img/examples/product1.jpg" alt="title" class="imagecheck-image">
                  </figure>
                </label>
              </div>
              <div class="col-6 col-sm-4">
                <label class="imagecheck mb-4">
                  <input name="imagecheck" type="checkbox" value="2" class="imagecheck-input" checked="">
                  <figure class="imagecheck-figure">
                    <img src="../assets/img/examples/product4.jpg" alt="title" class="imagecheck-image">
                  </figure>
                </label>
              </div>
              <div class="col-6 col-sm-4">
                <label class="imagecheck mb-4">
                  <input name="imagecheck" type="checkbox" value="3" class="imagecheck-input">
                  <figure class="imagecheck-figure">
                    <img src="../assets/img/examples/product3.jpg" alt="title" class="imagecheck-image">
                  </figure>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3" style="display: flex; justify-content: end; text-align: end;">
        <div class="col-1 p-0 ms-5">
          <button class="btn btn-primary" type="submit">Tạo</button>
        </div>
        <div class="col-1 ">
          <a href="/riders">
            <button type="button" class="btn btn-outline-secondary">Huỷ</button>
          </a>

        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const product_info_code = ref('')
    const capacity = ref('')
    const available_capacity = ref(null)
    const color= ref('')
    const price = ref(0)
    const quantity = ref(0)
    const product_images = ref('')
    const product_image_avatar = ref('')
    const getImageUrl = (image) => {
      return URL.createObjectURL(image);
    };
    const onFileChange = (event) => {
      if (event.target.files.length > 0) {
        product_image_avatar.value = event.target.files[0]; // Lưu file vào biến
        console.log('Selected file:', product_image_avatar.value); // Kiểm tra giá trị file
      } else {
        console.error('No file selected');
      }
    }
   
    const route = useRouter(); 

const onFilesChange = (event) => {
  product_images.value = Array.from(event.target.files);
  console.log('Selected file:', product_image_avatar.value); // Kiểm tra giá trị file
};

const generateRandomCode = (productName) =>{
  
  const firstLetter = productName.charAt(0).toUpperCase();

// Tạo một chuỗi số ngẫu nhiên
const randomNumber = Math.floor(Math.random() * 10000); // Số ngẫu nhiên từ 0 đến 9999

// Kết hợp chữ cái đầu tiên và số ngẫu nhiên
const randomCode = `${firstLetter}${randomNumber}`;

return randomCode;
}
const uploadFiles = async () => {
  const formData = new FormData();
  product_images.value.forEach((file) => {
    formData.append('files', file); // Tên trường 'files' phải trùng với tên bạn định nghĩa trong NestJS
  });
  }
  console.log('Capacity:', capacity.value); // Kiểm tra giá trị
  console.log('Price:', price.value);  
  console.log('===kjafhjekbgke============',route.currentRoute.value)
  const productId = route.currentRoute.value.params.product_id;
  console.log('----productId====', productId)

    const handleCreateProductDetail = async () => {
      const formData = new FormData();
      formData.append('product_info_code', product_info_code.value);
      formData.append('product_id', productId);
      formData.append('quantity', quantity.value);
      formData.append('capacity', capacity.value);
      formData.append('available_capacity', available_capacity.value);
      formData.append('color', color.value);
      formData.append('price', price.value);
      const productImages = document.getElementById('product_images').files;
  console.log('----fs-f---',productImages)
  

if (productImages.length === 0) {
    alert('Vui lòng chọn ít nhất một ảnh sản phẩm.');
    return;
}
  // Thêm từng file vào FormData
  for (let i = 0; i < productImages.length; i++) {
    formData.append('product_images', productImages[i]);
  }
  // formData.append('product_image_avatar', productImageAvatar);
  const apiURL = 'http://localhost:3000/products/create_detail';
  try {
        const response = await axios.post(apiURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 10000,
        });
        if (response.status === 200) { // Kiểm tra status của phản hồi
          alert('Tạo sản phẩm thành công'); // Xử lý phản hồi thành công
          // window.location.href = '/products'; 
        } else {
          alert('Đã xảy ra lỗi');
        }
      } catch (error) {
        console.error('Error details:', error.response ? error.response.data : error.message);
        alert('Đã xảy ra lỗi: ' + (error.response ? error.response.data.message : error.message));
      }
    };
 
    watch(color, (newValue) => {
      console.log('Giá trị category_id đã thay đổi:', newValue);
    });
  
    
    onMounted(() => {
      generateRandomCode('heheh')
    });
    return {
      handleCreateProductDetail, 
      uploadFiles,
      onFilesChange,
      onFileChange,
      color,
      product_info_code,
      capacity,
      available_capacity,
price,
quantity
    };
  },
};
</script>
