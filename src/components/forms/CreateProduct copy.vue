<template>
    <div class="ms-4 me-4 mt-4  ">
        <div class="row">
            <div class="col-1">
                <a href="/riders">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </a>
            </div>
            <h4 class="col">Thêm mới sản phẩm</h4>

        </div>
        <form enctype="multipart/form-data" @submit.prevent="handleCreateProduct">
            <div class="">
                <div class="input-group mb-3">

                    <div class="col-sm-6">
                        <span class="input-group-text" id="basic-addon2">Thông tin sản phẩm</span>
                        <input type="text" v-model="productDataDetail.product_info_code" class="form-control" placeholder="Nhập mã sản phẩm"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <input type="text" v-model="productData.product_name" aria-label="First name" class="form-control"
                            placeholder="Nhập tên sản phẩm">
                    </div>
                    <div class="">
                        <div class="col form-group">
                            <label class="form-label me-2">Hệ điều hành</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="opera_system" v-model="productData.opera_system" value="IOS" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">IOS</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="opera_system" v-model="productData.opera_system" value="ANDROID" class="selectgroup-input">
                                    <span class="selectgroup-button">ANDROID</span>
                                </label>
                            </div>
                        </div>
                        <div class="col form-group">
                            <label class="form-label me-2">Hãng</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="productData.category_id" value="1" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">APPLE</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="productData.category_id" value="2" class="selectgroup-input">
                                    <span class="selectgroup-button">SAMSUNG</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="productData.category_id" value="4" class="selectgroup-input">
                                    <span class="selectgroup-button">OPPO</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="productData.category_id" value="3" class="selectgroup-input">
                                    <span class="selectgroup-button">XIAOMI</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 form-group">
                            <label class="form-label me-2">Dung lượng</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="available_capacity" v-model="productDataDetail.available_capacity" :value="128" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">128 gb</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="available_capacity" v-model="productDataDetail.available_capacity" :value="256" class="selectgroup-input">
                                    <span class="selectgroup-button">256 gb</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="available_capacity" v-model="productDataDetail.available_capacity" :value="1" class="selectgroup-input">
                                    <span class="selectgroup-button">1 TB</span>
                                </label>
                            </div>

                            <label class="form-label me-2">RAM</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="ram" v-model="productData.ram" :value="128" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">8 gb</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="ram" v-model="productData.ram" :value="256" class="selectgroup-input">
                                    <span class="selectgroup-button">4 gb</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-2">
                            <span class="">Dung lượng khả dụng </span>
                            <input type="text" v-model="productDataDetail.capacity" aria-label="First name" class="form-control"
                            placeholder="dung lượng khả dụng">
                        </div>
                        <div class="col-sm-5 form-group">
                          <label class="form-label">Chọn màu</label>
                          <div class="row gutters-xs">
                            <div class="col">
                                <div class="span">Mã màu chính</div>
                                
                            </div>
                            
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="trắng" class="colorinput-input" >
                                <span class="colorinput-color bg-black" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="đen" class="colorinput-input">
                                <span class="colorinput-color bg-white"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh dương" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #2E6A9C;"></span>
                              </label>
                            </div>
                           
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh lá" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #4CAF50;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="danger" class="colorinput-input">
                                <span class="colorinput-color bg-danger"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="hồng" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #D5006D;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="vàng" class="colorinput-input">
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
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh dương nhạt" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #A4C7E1;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="hồng nhạt" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #F9E2E7;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh lá nhạt" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #A3D3B3;"></span>
                              </label>
                            </div>
                            
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="vàng nhạt" class="colorinput-input">
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
                                <input name="color" v-model="productDataDetail.color" type="radio" value="titan đen" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #1C1C1E;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="titan tự nhiên" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #A19F9D;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="titan xanh" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #5B798E;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="titan trắng" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #E1E1E1;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="titan sa mạc" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #C4A76A;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh lưu ly" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #007AFF;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="xanh mòng két" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #0E4C92;"></span>
                              </label>
                            </div>
                            <div class="col-auto">
                              <label class="colorinput">
                                <input name="color" v-model="productDataDetail.color" type="radio" value="bạc" class="colorinput-input">
                                <span class="colorinput-color" style="background-color: #C0C0C0;"></span>
                              </label>
                            </div>
                            
                          </div>
                        </div>
                        
                      
                </div>
                <div class="input-group mb-3 ">
                    <span class="input-group-text" id="basic-addon2">Giá gốc</span>
                    <input type="number" v-model="productDataDetail.price" class="form-control" placeholder="Nhập giá tiền"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2">VNĐ</span>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Chip</span>
                    <input type="text" v-model="productData.cpu_chip" class="form-control" placeholder="Chip xử lý (CPU)"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <input type="text" v-model="productData.cpu_speed" aria-label="First name" class="form-control"
                        placeholder="Chip đồ họa (GPU)">
                    <input type="number" v-model="productData.gpu_chip" aria-label="First name" class="form-control"
                        placeholder="">
                    <input type="text" v-model="productData.contact" aria-label="First name" class="form-control"
                        placeholder="Danh bạ">
                </div>
                <div class="row">
                    <h3 class="">Thông số camera </h3>
                    <div class="col-sm-3">
                        <div class="col text-start">Độ phân giải camera trước</div>
                        <div class=" mt-2 mb-3">
                            <input type="text" v-model="productData.front_cam_solution" aria-label="First name" class="form-control"
                        placeholder="Độ phân giải camera trước">
                        </div>

                    </div>


                    <div class="col-sm-3">
                        <div class="col text-start">Tính năng camera trước</div>
                        <div class=" mt-2 mb-3">
                            <select class="form-select" aria-label="Default select example" v-model="productData.front_cam_feature"
                                @change="fetchCamera">
                                <option selected disabled>Chọn thông số</option>
                                <option v-for="(item, i) in select_camera" :key="item.camera_id" :value="item.camera_parameters">
                                    {{ item.camera_parameters }}
                                </option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="col text-start">Độ phân giải camera sau</div>
                            <div class=" mt-2 mb-3">
                                <input type="text" v-model="productData.rear_cam_solution" aria-label="First name" class="form-control"
                                placeholder="Độ phân giải camera sau">
                            </div>

                        </div>
                        <div class="col-sm-3">
                            <div class="col text-start">Đèn Flash camera sau</div>
                            <div class=" mt-2 mb-3">
                                <select class="form-select" aria-label="Default select example" v-model="productData.rear_cam_flash"
                                @change="fetchCamera">
                                <option selected disabled>Chọn thông số</option>
                                <option v-for="(item, i) in select_camera" :key="item.camera_id" :value="item.camera_id">
                                    {{ item.camera_parameters }}
                                </option>
                            </select>
                            </div>

                        </div>
                        <div class=" form-group">
                            <h3 class="form-label me-2">Quay phim camera sau</h3>
                            <div class="selectgroup selectgroup-pills">
                                <label v-for="(item, i) in select_camera" :key="item.camera_id" class="selectgroup-item">
                                    <input   type="checkbox" name="value" :value="item.camera_parameters" class="selectgroup-input" v-model="selectRearCam"
                                    >
                                    <span class="selectgroup-button">{{ item.camera_parameters}}</span>
                                </label>
                            </div>
                        </div>
                        <div class="col form-group">
                            <h3 class="form-label me-2">Tính năng camera sau</h3>
                            <div class="selectgroup selectgroup-pills">
                                <label v-for="(item, i) in select_camera" :key="item.camera_id" class="selectgroup-item">
                                    <input   type="checkbox" name="value" :value="item.camera_parameters" class="selectgroup-input" v-model="featureCam"
                                    >
                                    <span class="selectgroup-button">{{ item.camera_parameters }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Màn hình</span>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Công nghệ màn hình</span>
                        <input type="text" v-model="productData.capture" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Độ phân giải màn hình</span>
                        <input type="text" v-model="productData.screen_resolution" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Màn hình rộng</span>
                        <input type="text" v-model="productData.screen_width" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Độ sáng tối đa</span>
                        <input type="text" v-model="productData.max_light" aria-label="First name" class="form-control"
                            placeholder="Độ sáng tối đa">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Mặt kính cảm ứng</span>
                        <input type="text" v-model="productData.touchscreen_glass" aria-label="First name" class="form-control"
                            placeholder="Mặt kính cảm ứng">
                    </div>


                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Pin và sạc</span>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Dung lượng pin</span>
                        <input type="text" v-model="productData.capacity_battery" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Loại pin</span>
                        <input type="text" v-model="productData.type_battery" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Hỗ trợ sạc tối đa</span>
                        <input type="text" v-model="productData.support_charge" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>



                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Tiện ích </span>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Bảo mật nâng cao</span>
                        <input type="text" v-model="productData.advance_security" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Kháng nước, bụi</span>
                        <input type="text" v-model="productData.water_dust" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Ghi âm</span>
                        <input type="text" v-model="productData.record" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>
                    <!-- <div class="">
                        <div class="row form-group">
                            <label class="form-label me-2">Tính năng đặc biệt</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item"  v-for="(item, i) in select_feature" :key="item.special_feature_id" >
                                    <input type="checkbox" name="value" :value="item.special_feature_id" value="HTML" class="selectgroup-input" v-model="productData."
                                        checked="">
                                    <span class="selectgroup-button">{{ item.features_name }}</span>
                                </label>
                                
                            </div>
                        </div>
                    </div> -->

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Kết nối</span>

                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Mạng di động</span>
                            <input type="text" v-model="productData.mobile_network" class="form-control"
                                placeholder="Mạng di động" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Bluetooth</span>
                            <input type="text" v-model="productData.bluetooth" aria-label="First name" class="form-control"
                                placeholder="Bluetooth">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Sim</span>
                            <input type="text" v-model="productData.sim" aria-label="First name" class="form-control"
                                placeholder="Sim">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Cổng kết nối/sạc</span>
                            <input type="text" v-model="productData.port_charge" aria-label="First name" class="form-control"
                                placeholder="Cổng kết nối/sạc">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Jack tai nghe</span>
                            <input type="text" v-model="productData.jack" aria-label="First name" class="form-control"
                                placeholder="Jack tai nghe">
                        </div>



                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Thiết kế & Chất liệu</span>

                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Thiết kế</span>
                            <input type="text" v-model="productData.design" class="form-control"
                                placeholder="Thiết kế & Chất liệu" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Chất liệu</span>
                            <input type="text" v-model="productData.material" aria-label="First name" class="form-control"
                                placeholder="Chất liệu">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Kích thước, khối lượng</span>
                            <input type="text" v-model="productData.size" aria-label="First name" class="form-control"
                                placeholder="Kích thước...">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Thời điểm ra mắt</span>
                            <input type="text" v-model="productData.debut" aria-label="First name" class="form-control"
                                placeholder="debut..">
                        </div>


                    </div>

                </div>
                <div class="row">
                <div class="col-sm-4">
                    <div class="mb-3 pt-2">
                        <label for="formFile" class="form-label d-flex">Ảnh đại diện</label>
                        <input class="form-control" type="file" id="formFile" @change="onFileChange">
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
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="mb-3 pt-2">
                        <label for="formFile" class="form-label d-flex">Ảnh sp</label>
                        <input class="form-control" type="file" id="formFile" @change="onFileChange">
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

export default {
  setup() {
    const select_feature = ref([])
    const select_camera = ref([])
    const selectRearCam = ref([])
    const featureCam = ref([])
    const onFileChange = (event) => {
      if (event.target.files.length > 0) {
        rider_image.value = event.target.files[0]; // Lưu file vào biến
        console.log('Selected file:', rider_image.value); // Kiểm tra giá trị file
      } else {
        console.error('No file selected');
      }
    }
    const productData = ref({
      product_name: "",
      opera_system: "",
      cpu_chip: "",
      gpu_chip: "",
      cpu_speed: "",
      ram: null,
      contact: "",
      rear_cam_solution: "",
      rear_cam_film: "",
      rear_cam_flash: "",
      front_cam_feature: "",
      rear_cam_feature: "",
      front_cam_solution: "",
      capture: "",
      screen_resolution: "",
      screen_width: "",
      max_light: "",
      touchscreen_glass: "",
      capacity_battery: "",
      type_battery: "",
      support_charge: "",
      advance_security: "",
      water_dust: "",
      record: "",
      mobile_network: "",
      sim: "",
      bluetooth: "",
      port_charge: "",
      jack: "",
      design: "",
      material: "",
      size: "",
      debut: "",
      brand: "K CAN FIELD NAY", // Hoặc có thể để trống nếu cần
      category_id: null, // Hoặc thay đổi theo nhu cầu
    });
    const productDataDetail = ref({
      product_info_code: "",
      capacity: "",
      available_capacity: "",
      color: "",
      price: null
    })
    const updateRearCamFilm = (value, isChecked) => {
      // Nếu checkbox được chọn, thêm giá trị vào chuỗi
      if (isChecked) {
        if (productData.value.rear_cam_film) {
          productData.value.rear_cam_film += `, ${value}`; // Thêm dấu phẩy nếu không phải là giá trị đầu tiên
        } else {
          productData.value.rear_cam_film = value; // Gán giá trị đầu tiên
        }
      } else {
        // Nếu checkbox bị bỏ chọn, loại bỏ giá trị khỏi chuỗi
        productData.value.rear_cam_film = productData.value.rear_cam_film
          .split(', ')
          .filter(cam => cam !== value) // Loại bỏ giá trị đã bỏ chọn
          .join(', '); // Nối lại thành chuỗi
      }
    };


    const handleCreateProduct = async () => {
      const formData = new FormData();

      if (!productDataDetail.value) {
        console.error('productDataDetail is undefined');
        return;
      }

      if (!productData.value) {
        console.error('productData is undefined');
        return;
      }

      // Chuyển đổi ram và category_id sang số nếu cần
      productData.value.ram = Number(productData.value.ram);
      productData.value.category_id = Number(productData.value.category_id);

      // Kiểm tra dữ liệu trước khi thêm vào formData
      console.log('productData:', productData.value);
      console.log('productDataDetail:', productDataDetail.value);

      formData.append('createProductDto', JSON.stringify(productData.value));
      // formData.append('createProductDetailDto', JSON.stringify(productDataDetail.value));
      console.log('-----', JSON.stringify(productData.value))
      // Kiểm tra nội dung của formData
      console.log('FormData Entries:', Array.from(formData.entries()));
      console.log('-----', formData)
      const apiURL = 'http://localhost:3000/products';
      try {
        const response = await axios.post(apiURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) { // Kiểm tra status của phản hồi
          alert('Tạo sản phẩm thành công'); // Xử lý phản hồi thành công
          // window.location.href = '/products'; 
        } else {
          alert('Đã xảy ra lỗi');
        }
      } catch (error) {
        alert('Đã xảy ra lỗi');
        console.log(error);
      }
    };
    const fetchCamera = async () => {
      const apiURL = 'http://localhost:3000/products/attribute/camera';
      try {
        const response = await axios.get(apiURL);
        select_camera.value = response.data; // Store the teams in select_camera
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    };
    const fetchFeature = async () => {
      const apiURL = 'http://localhost:3000/products/attribute/feature';
      try {
        const response = await axios.get(apiURL);
        select_feature.value = response.data; // Store the teams in select_camera
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    };
    watch(selectRearCam, (newVal) => {
      productData.value.rear_cam_film = newVal.join(', ');
    });

    // Theo dõi sự thay đổi của featureCam và cập nhật productData.rear_cam_feature
    watch(featureCam, (newVal) => {
      productData.value.rear_cam_feature = newVal.join(', ');
    });
    watch(
      () => productData.value.opera_system,
      (newValue) => {
        console.log('Giá trị hệ điều hành đã thay đổi:', newValue);
      }
    );
    watch(
      () => productDataDetail.value.color,
      (newValue) => {
        console.log('Giá trị hệ điều hành đã thay đổi:', newValue);
      }
    );
    watch(
      () => productData.value.category_id,
      (newValue) => {
        console.log('Giá trị hệ điều hành đã thay đổi:', newValue);
      }
    );
    onMounted(() => {
      fetchCamera(); // Call fetchCamera when the component mounts
      fetchFeature();
    });
    return {
      handleCreateProduct,
      productData,
      productDataDetail,
      select_camera,
      select_feature,
      updateRearCamFilm,
      selectRearCam,
      featureCam,
    };
  },
};
</script>
