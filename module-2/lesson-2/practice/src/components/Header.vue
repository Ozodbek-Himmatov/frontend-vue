<script>
export default {};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <a href="#" class="logo"><img src="../assets/Nexcent.png" alt="" /></a>
        <ul class="nav_items">
          <li class="Home">Home</li>
          <li class="Services">Services</li>
          <li class="Feature">Feature</li>
          <li class="Product">Product</li>
          <li class="Testimonial">Testimonial</li>
          <li class="FAQ">FAQ</li>
        </ul>
        <ul class="sign">
          <li class="Login"><button>Login</button></li>
          <li class="Sign_up"><button>Sign up</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  width: 100%;
  background-color: #F5F7FA;
  
  nav {
    padding-left: 148.1px;
    padding-right: 120px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav_items {
      display: flex;
      justify-content: space-evenly;
      text-decoration: none;
      width: 50%;
      list-style-type: none;
    }

    .sign {
      width: 10%;
      display: flex;
      justify-content: space-evenly;
      list-style-type: none;

      .Login {
        background-color: Transparent;  
      }
    }
  }
}
</style>
