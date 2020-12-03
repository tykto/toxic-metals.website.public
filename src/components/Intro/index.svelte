<script type="ts">
  import backgroundUrl from './intro-background.jpg';
  import imageUrl from './intro-image.jpg';
</script>

<style>
  .t-intro {
    padding-top: 200px;
    padding-bottom: 50px;
    background: var(--background-url) no-repeat center center;
    background-size: cover;
  }

  .t-heading-1,
  .t-heading-2 {
    display: inline;
    font-size: 50px;
  }

  .t-heading-1 {
    color: #ada190;
  }

  .t-heading-2 {
    font-weight: normal;
    color: #4298b5;
  }

  img {
    padding: 5% 0;
    margin: 0 auto;
  }

  .t-text {
    padding-top: 40px;
  }

  .t-text p {
    font-size: 35px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    .t-intro {
      padding-top: 230px;
    }
  }

  @media (min-width: 992px) {
    .t-intro {
      padding-top: 200px;
    }
  }
</style>

<div class="t-intro" style="--background-url:url({backgroundUrl})">
  <div class="container">
    <div class="row text-center">
      <h1 class="t-heading-1">RESTORING HEALTH</h1>
      <h1 class="t-heading-2">CREATING BALANCE</h1>
    </div>
    <div class="row">
      <div class="col-sm-6"><img class="img-responsive" src={imageUrl} alt="frame" /></div>
      <div class="col-sm-6">
        <div class="t-text text-center">
          <p>A specialised clinic focusing on gentle, safe, natural, supportive and individualised heavy metal detoxing</p>
        </div>
      </div>
    </div>
  </div>
</div>
