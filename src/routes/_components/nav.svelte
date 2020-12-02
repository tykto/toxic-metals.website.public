<script>
</script>

<style>
  .navbar-default {
    background: #ffffff;
    border-bottom: 10px solid #ada190;
    margin-bottom: 0;
  }

  .navbar-brand {
    background: url(/images/logo.jpg) no-repeat top left;
    height: 120px;
    width: 120px;
    margin-left: 0;
  }

  .title {
    background: url(/images/header.jpg) no-repeat top left;
    height: 120px;
    margin: 0 0 0 120px;
  }

  .contact {
    float: left;
    width: 240px;
    margin-top: 0px;
    margin-left: 135px;
    color: #4298b5;
  }

  .container-fluid p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .contact p:nth-child(2) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    color: #ada190;
  }

  .number {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    .navbar-header {
      float: none;
    }

    .title {
      background: url(/images/header.jpg) no-repeat top left;
      margin: 0px 0 0 0px;
      float: left;
      width: 240px;
    }

    .contact {
      margin-top: 20px;
      float: right;
    }

    .number {
      font-size: 20px;
    }
  }
</style>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid topnav">
    <div class="navbar-header">
      <!-- svelte-ignore a11y-invalid-attribute a11y-missing-content -->
      <a class="navbar-brand" href="#" />
      <h1 class="title text-hide">Toxic Metal Detox Clinic, Melbourne</h1>
      <div class="contact">
        <p>Janine Brundle</p>
        <p>PD Hom(UK) NA MAROH MAHA</p>
        <p class="number">P: 03 9448 2334</p>
      </div>
    </div>
  </div>
</nav>
