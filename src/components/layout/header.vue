<template>
   <header>
        <!-- Header desktop -->
        <div class="container-menu-desktop">
            <!-- Topbar -->
            <div class="top-bar">
                <div class="content-topbar flex-sb-m h-full container">
                    <div class="left-top-bar">
                        Miễn phí vận chuyển với đơn hàng trên 1.500.000 VNĐ
                    </div>

                    <div class="right-top-bar flex-w h-full">
                        <a href="#" class="flex-c-m trans-04 p-lr-25">
                            Hotline: 034548www
                        </a>
                        <a href="#" class="flex-c-m trans-04 p-lr-25">
                            Email: huogthuwww@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div class="wrap-menu-desktop">
                <nav class="limiter-menu-desktop container">

                    <!-- Logo desktop -->
                    <a href="" class="logo m-0">
                        <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1Sye2rN_kyhDgnrIk-TDxI3kUcrlqFWrxA&s" alt="IMG-LOGO"> -->
                        <img src="../assets/logo-4ios-1.svg" width="80px" height="70px" alt="">
                    </a>
                    
                    <!-- Menu desktop -->
                     <div class="search-width" style="margin-left: 120px;">
                      <div class=""><div class="search-bar row bg-light p-2 my-2 ms-5 rounded-4">
              <div class="col col-md-10">
                <form id="search-form" class="text-center" action="index.html" method="post">
                  <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products">
                </form>
              </div>
              <div class="col-1 ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path></svg>
              </div>
            </div></div>
                    <div class="menu-desktop ">
                        <ul class="p-0 main-menu text-6xl">
                            <li class="active-menu">
                                <a href="">Trang chủ</a>
                            </li>
                            <!-- @foreach($categories as $category) -->

                            <li>
                                <a href="#">Iphone</a>
                            </li>
                            <li>
                                <a href="#">Samsung</a>
                            </li>
                            <li>
                                <a href="#">Xiaomi</a>
                            </li>
                            <li>
                                <a href="#">Oppo</a>
                            </li>
                        </ul>
                    </div>
                  </div>
                    <!-- Icon header -->
                     <div class="search-width mt-5"><div class="">
                     <div class="wrap-icon-header flex-w flex-r-m" >

                        <a href="">
                            <div class=" cl2 hov-cl1  p-l-22 p-r-11" data-notify="2"
                                id="cart">
                                <font-awesome-icon :icon="['fas', 'cart-shopping']" /> 
                                <span class=" ms-2">Giỏ hàng</span>
                            </div>
                        </a>
                        <a href="#" class="dis-block  cl2 hov-cl1 trans-04 p-l-22 p-r-11 "
                            data-notify="2">
                            <font-awesome-icon :icon="['far', 'heart']" />
                            <span class=" ms-2">Yêu thích</span>
                        </a>
                        <!-- @if (Route::has('login'))
                            @auth -->
                                <span class="has-children">
                                    <ul class="dropdown-menu btn-secondary">
                                        <li> 
                                            <!-- <form method="POST" action=""> -->
                                                <!-- @csrf -->
                                                 <!-- <x-dropdown-link>logout</x-dropdown-link> -->
                                                <!-- <x-dropdown-link :href="route('logout')"
                                                    onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                                    {{ __('Đăng xuất') }}
                                                </x-dropdown-link> -->
                                            <!-- </form> -->
                                        </li>
                                    </ul>
                                </span>
                            <!-- @else -->
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle cl2 hov-cl1 trans-04 p-l-22 p-r-11"
                                        type="button" data-toggle="dropdown" aria-expanded="false">
                                        <font-awesome-icon :icon="['fas', 'user']" />
                                        <span class=" ms-2">Tài khoản</span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <!-- @if (Route::has('register')) -->
                                            <a class="dropdown-item" href="">Đăng nhập</a>
                                        <!-- @endif
                                        @if (Route::has('register')) -->
                                            <a class="dropdown-item" href="">Đăng kí</a>
                                        <!-- @endif -->
                                    </div>
                                </div>
                            <!-- @endauth
                        @endif -->

                    </div> 
                     </div></div>
                    
                </nav>
            </div>
        </div>
        
    </header>
</template>

