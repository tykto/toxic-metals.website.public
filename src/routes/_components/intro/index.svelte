<script type="ts">
  import backgroundUrl from './intro-background.jpg';
  import imageUrl from './intro-image.jpg';
</script>

<style>
  .intro {
    padding-top: 200px;
    padding-bottom: 50px;
    background: var(--background-url) no-repeat center center;
    background-size: cover;
  }

  .tag-1,
  .tag-2 {
    display: inline;
    font-size: 50px;
  }

  .tag-1 {
    color: #ada190;
  }

  .tag-2 {
    font-weight: normal;
    color: #4298b5;
  }

  img {
    padding: 5% 0;
    margin: 0 auto;
  }

  .clinic-tag {
    padding-top: 40px;
  }

  .clinic-tag p {
    font-size: 35px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    .intro {
      padding-top: 230px;
    }
  }

  @media (min-width: 992px) {
    .intro {
      padding-top: 200px;
    }
  }
</style>

<div class="intro" style="--background-url:url({backgroundUrl})">
  <div class="container">
    <div class="row text-center">
      <h1 class="tag-1">RESTORING HEALTH</h1>
      <h1 class="tag-2">CREATING BALANCE</h1>
    </div>
    <div class="row">
      <div class="col-sm-6"><img class="img-responsive" src={imageUrl} alt="frame" /></div>
      <div class="col-sm-6">
        <div class="clinic-tag text-center">
          <p>A specialised clinic focusing on gentle, safe, natural, supportive and individualised heavy metal detoxing</p>
        </div>
      </div>
    </div>
  </div>
</div>
