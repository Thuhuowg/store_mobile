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
                      <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg" alt="IMG">
                    </div>
                  </td>
                  <td class="column-2">Tên sản phẩm</td>
                  <td class="column-3">150,000Đ</td>
                  <td class="column-3">M</td>
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
                  <td class="column-5 total">150,000Đ</td>
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
                <span class="mtext-110 cl2" id="total">450,000Đ</span>
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

            <a href="/order/checkout" class="flex-c-m stext-101 cl0 mt-3 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div style="text-align: center">
    <h3>Bạn không có sản phẩm nào trong giỏ hàng</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
      <path d="...SVG path here..."></path>
    </svg>
    <a href="/">
      <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">Tiếp tục mua hàng</div>
    </a>
  </div>
</div>
</template>
