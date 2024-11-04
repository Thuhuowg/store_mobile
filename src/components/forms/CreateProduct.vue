<template>
    <div class="ms-4 me-4 mt-4  ">
        <div class="row">
            <div class="col-1">
                <a href="/">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </a>
            </div>
            <h4 class="col">Thêm mới sản phẩm</h4>
            <button class="col-sm-1 btn btn-secondary">
                        <span class="btn-label">
                          <i class="fa fa-plus"></i>
                        </span>
                      </button>

        </div>
        <form enctype="multipart/form-data" @submit.prevent="handleCreateProduct">
            <div class="">
                <div class="input-group mb-3">

                    <div class="col-sm-6">
                        <span class="input-group-text" id="basic-addon2">Thông tin sản phẩm</span>
                        
                        <input type="text" v-model="product_name" aria-label="First name" class="form-control"
                            placeholder="Nhập tên sản phẩm">
                    </div>
                    <div class="">
                        <div class="row">
                        <div class="col-sm-6 form-group ms-3">
                            <label class="form-label me-2">Hệ điều hành</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="opera_system" v-model="opera_system" value="IOS" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">IOS</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="opera_system" v-model="opera_system" value="ANDROID" class="selectgroup-input">
                                    <span class="selectgroup-button">ANDROID</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 form-group">
                            <label class="form-label me-2">Phiên bản</label>
                            <input type="number"  @input="createString" class="col-sm-1 form-control" v-model="version" name="version"  placeholder="phiên bản" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <label  v-if="result" class="form-label me-2">{{ result }}</label>
                        </div>
                    </div>
                        <div class="col form-group">
                            <label class="form-label me-2">Hãng</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="category_id" value="1" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">APPLE</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="category_id" value="2" class="selectgroup-input">
                                    <span class="selectgroup-button">SAMSUNG</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="category_id" value="4" class="selectgroup-input">
                                    <span class="selectgroup-button">OPPO</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="category_id" v-model="category_id" value="3" class="selectgroup-input">
                                    <span class="selectgroup-button">XIAOMI</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 form-group">
              

                            <label class="form-label me-2">RAM</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item">
                                    <input type="radio" name="ram" v-model="ram" :value="128" class="selectgroup-input"
                                        checked="">
                                    <span class="selectgroup-button">8 gb</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="ram" v-model="ram" :value="256" class="selectgroup-input">
                                    <span class="selectgroup-button">4 gb</span>
                                </label>
                            </div>
                        </div>
                   
                        
                      
                </div>
             
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Chip</span>
                    <input type="text" v-model="cpu_chip" class="form-control" placeholder="Chip xử lý (CPU)"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <input type="text" v-model="cpu_speed" aria-label="First name" class="form-control"
                        placeholder="Tốc độ CPU">
                    <input type="text" v-model="gpu_chip" aria-label="First name" class="form-control"
                        placeholder="GPU chip">
                    <input type="text" v-model="contact" aria-label="First name" class="form-control"
                        placeholder="Danh bạ">
                </div>
                <div class="row">
                    <h3 class="">Thông số camera </h3>
                    <div class="col-sm-3">
                        <div class="col text-start">Độ phân giải camera trước</div>
                        <div class=" mt-2 mb-3">
                            <input type="text" v-model="front_cam_solution" aria-label="First name" class="form-control"
                        placeholder="Độ phân giải camera trước">
                        </div>

                    </div>


                    <div class="col-sm-3">
                        <div class="col text-start">Tính năng camera trước</div>
                        <div class=" mt-2 mb-3">
                            <select class="form-select" aria-label="Default select example" v-model="front_cam_feature"
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
                                <input type="text" v-model="rear_cam_solution" aria-label="First name" class="form-control"
                                placeholder="Độ phân giải camera sau">
                            </div>

                        </div>
                        <div class="col-sm-3">
                            <div class="col text-start">Đèn Flash camera sau</div>
                            <div class=" mt-2 mb-3">
                                <select class="form-select" aria-label="Default select example" v-model="rear_cam_flash"
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
                        <input type="text" v-model="capture" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Độ phân giải màn hình</span>
                        <input type="text" v-model="screen_resolution" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Màn hình rộng</span>
                        <input type="text" v-model="screen_width" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Độ sáng tối đa</span>
                        <input type="text" v-model="max_light" aria-label="First name" class="form-control"
                            placeholder="Độ sáng tối đa">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Mặt kính cảm ứng</span>
                        <input type="text" v-model="touchscreen_glass" aria-label="First name" class="form-control"
                            placeholder="Mặt kính cảm ứng">
                    </div>


                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Pin và sạc</span>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Dung lượng pin</span>
                        <input type="text" v-model="capacity_battery" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Loại pin</span>
                        <input type="text" v-model="type_battery" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Hỗ trợ sạc tối đa</span>
                        <input type="text" v-model="support_charge" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>



                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Tiện ích </span>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Bảo mật nâng cao</span>
                        <input type="text" v-model="advance_security" class="form-control" placeholder="Công nghệ màn hình"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>

                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Kháng nước, bụi</span>
                        <input type="text" v-model="water_dust" aria-label="First name" class="form-control"
                            placeholder="Độ phân giải màn hình">
                    </div>
                    <div class="me-2">
                        <span class="input-group-text" id="basic-addon2">Ghi âm</span>
                        <input type="text" v-model="record" aria-label="First name" class="form-control"
                            placeholder="Màn hình rộng">
                    </div>
                    <!-- <div class="">
                        <div class="row form-group">
                            <label class="form-label me-2">Tính năng đặc biệt</label>
                            <div class="selectgroup selectgroup-pills">
                                <label class="selectgroup-item"  v-for="(item, i) in select_feature" :key="item.special_feature_id" >
                                    <input type="checkbox" name="value" :value="item.special_feature_id" value="HTML" class="selectgroup-input" v-model=""
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
                            <input type="text" v-model="mobile_network" class="form-control"
                                placeholder="Mạng di động" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Bluetooth</span>
                            <input type="text" v-model="bluetooth" aria-label="First name" class="form-control"
                                placeholder="Bluetooth">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Sim</span>
                            <input type="text" v-model="sim" aria-label="First name" class="form-control"
                                placeholder="Sim">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Cổng kết nối/sạc</span>
                            <input type="text" v-model="port_charge" aria-label="First name" class="form-control"
                                placeholder="Cổng kết nối/sạc">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Jack tai nghe</span>
                            <input type="text" v-model="jack" aria-label="First name" class="form-control"
                                placeholder="Jack tai nghe">
                        </div>



                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Thiết kế & Chất liệu</span>

                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Thiết kế</span>
                            <input type="text" v-model="design" class="form-control"
                                placeholder="Thiết kế & Chất liệu" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Chất liệu</span>
                            <input type="text" v-model="material" aria-label="First name" class="form-control"
                                placeholder="Chất liệu">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Kích thước, khối lượng</span>
                            <input type="text" v-model="size" aria-label="First name" class="form-control"
                                placeholder="Kích thước...">
                        </div>
                        <div class="me-2">
                            <span class="input-group-text" id="basic-addon2">Thời điểm ra mắt</span>
                            <input type="text" v-model="debut" aria-label="First name" class="form-control"
                                placeholder="debut..">
                        </div>


                    </div>

                </div>
                <div class="row">
                <div class="col-sm-4">
                  
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
                    <button class="btn btn-primary" type="submit">Tiếp</button>
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
import { useRouter } from 'vue-router'; // Import useRouter từ vue-router

export default {
    setup() {
        const product_name = ref('');
        const select_feature = ref([]);
        const select_camera = ref([]);
        const selectRearCam = ref([]);
        const featureCam = ref([]);
        const opera_system = ref('IOS');

        const cpu_speed = ref('');
        const cpu_chip = ref('');
        const gpu_chip = ref('');
        const ram = ref(null);
        const contact = ref('');
        const rear_cam_solution = ref('');
        const rear_cam_film = ref('');
        const rear_cam_flash = ref('');
        const front_cam_feature = ref('');
        const rear_cam_feature = ref('');
        const front_cam_solution = ref('');
        const capture = ref('');
        const screen_resolution = ref('');
        const screen_width = ref('');
        const max_light = ref('');
        const touchscreen_glass = ref('');
        const capacity_battery = ref('');
        const type_battery = ref('');
        const support_charge = ref('');
        const advance_security = ref('');
        const water_dust = ref('');
        const record = ref('');
        const mobile_network = ref('');
        const sim = ref('');
        const bluetooth = ref('');
        const port_charge = ref('');
        const jack = ref('');
        const design = ref('');
        const material = ref('');
        const size = ref('');
        const debut = ref('');
        const category_id = ref(null);
        const version = ref('');
        const result = ref('');

        const router = useRouter(); 

        const createString = () => {
      result.value = `${opera_system.value} ${version.value}`;
    };
        const updateRearCamFilm = (value, isChecked) => {
            if (isChecked) {
                rear_cam_film.value += rear_cam_film.value ? `, ${value}` : value;
            } else {
                rear_cam_film.value = rear_cam_film.value
                    .split(', ')
                    .filter(cam => cam !== value)
                    .join(', ');
            }
        };

        const handleCreateProduct = async () => {
            const productData = {
                product_name: product_name.value,
                opera_system: result.value,
                cpu_chip: cpu_chip.value,
                gpu_chip: gpu_chip.value,
                cpu_speed: cpu_speed.value,
                ram: Number(ram.value),
                contact: contact.value,
                rear_cam_solution: rear_cam_solution.value,
                rear_cam_film: rear_cam_film.value,
                rear_cam_flash: rear_cam_flash.value,
                front_cam_feature: front_cam_feature.value,
                rear_cam_feature: rear_cam_feature.value,
                front_cam_solution: front_cam_solution.value,
                capture: capture.value,
                screen_resolution: screen_resolution.value,
                screen_width: screen_width.value,
                max_light: max_light.value,
                touchscreen_glass: touchscreen_glass.value,
                capacity_battery: capacity_battery.value,
                type_battery: type_battery.value,
                support_charge: support_charge.value,
                advance_security: advance_security.value,
                water_dust: water_dust.value,
                record: record.value,
                mobile_network: mobile_network.value,
                sim: sim.value,
                bluetooth: bluetooth.value,
                port_charge: port_charge.value,
                jack: jack.value,
                design: design.value,
                material: material.value,
                size: size.value,
                debut: debut.value,
                category_id: Number(category_id.value),
            };



            const apiURL = 'http://localhost:3000/products/create';
            try {
                const response = await axios.post(apiURL, productData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('------response.data-----', response.data)
                if (response.status === 200) {
                    console.log('------response.data-----', response.data)
                    console.log('=====product_id-----', response.data)
                    router.push({ name: 'admin-create-quantity', params: { product_id: response.data.data.id } });                   } else {
                    alert('Đã xảy ra lỗi');
                }

                // apiURL = `http://localhost:3000/products/create-quantity/${response.data.id}`
                // const productCreated = await axios.get(apiURL,)
                // this
            } catch (error) {
                alert('Đã xảy ra lỗi');
                console.log(error);
            }
        };

        const fetchCamera = async () => {
            const apiURL = 'http://localhost:3000/products/attribute/camera';
            try {
                const response = await axios.get(apiURL);
                select_camera.value = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        };

        const fetchFeature = async () => {
            const apiURL = 'http://localhost:3000/products/attribute/feature';
            try {
                const response = await axios.get(apiURL);
                select_feature.value = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        };

        watch(selectRearCam, (newVal) => {
            rear_cam_film.value = newVal.join(', ');
        });

        watch(featureCam, (newVal) => {
            rear_cam_feature.value = newVal.join(', ');
        });

        watch(opera_system, (newValue) => {
            createString()
            console.log('Giá trị hệ điều hành đã thay đổi:', newValue);
        });

        watch(category_id, (newValue) => {
            console.log('Giá trị category_id đã thay đổi:', newValue);
        });

        onMounted(() => {
            fetchCamera();
            fetchFeature();
            createString()
        });

        return {
            handleCreateProduct,
            select_camera,
            select_feature,
            updateRearCamFilm,
            selectRearCam,
            featureCam,
            opera_system,
            product_name,
            cpu_speed,
            cpu_chip,
            gpu_chip,
            ram,
            contact,
            rear_cam_solution,
            rear_cam_film,
            rear_cam_flash,
            front_cam_feature,
            rear_cam_feature,
            front_cam_solution,
            capture,
            screen_resolution,
            screen_width,
            max_light,
            touchscreen_glass,
            capacity_battery,
            type_battery,
            support_charge,
            advance_security,
            water_dust,
            record,
            mobile_network,
            sim,
            bluetooth,
            port_charge,
            jack,
            design,
            material,
            size,
            debut,
            category_id,
            version,
      result,
      createString,
        };
    },
};
</script>

