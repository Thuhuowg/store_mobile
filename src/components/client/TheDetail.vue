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