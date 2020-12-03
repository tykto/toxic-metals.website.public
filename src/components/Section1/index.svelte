<script type="ts">
  import backgroundUrl from './background.png';
  import imageUrl from './image.jpg';
</script>

<style>
  .t-section {
    background-color: #4a4745;
  }

  .t-image {
    background: var(--image-url) no-repeat center center;
    background-size: cover;
    min-height: 600px;
  }

  .panel {
    background: var(--background-url) no-repeat right bottom;
    background-color: #ffffff;
    border-left: 10px solid #4298b5;
    border-right: 0 solid transparent;
    border-top: 0 solid transparent;
    border-bottom: 0 solid transparent;
    border-radius: 0px;
    box-shadow: none;
    padding: 15px;
    color: #000000;
    margin: 0;
    min-height: 600px;
    display: table;
  }

  li {
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    .panel {
      min-height: 400px;
    }
    .t-image {
      min-height: 400px;
    }
  }

  @media (max-width: 767px) {
    .panel {
      border-right: 0 solid transparent;
      border-left: 0 solid transparent;
      border-top: 10px solid #47bcc3;
      border-bottom: 0 solid transparent;
    }
  }
</style>

<div class="t-section" style="--image-url:url({imageUrl});--background-url:url({backgroundUrl})">
  <div class="container-fluid">
    <div class="t-no-gutter row">
      <div class="col-sm-6">
        <div class="t-image" />
      </div>
      <div class="col-sm-6">
        <div class="clearfix" />
        <div class="panel panel-default">
          <div class="t-vcenter">
            <div class="panel-body center-block">
              <ul class="fa-ul">
                <li><i class="fa-li fa fa-check" />Life changing positive answers to your conditions</li>
                <li><i class="fa-li fa fa-check" />Empowerment with knowledge and better health</li>
                <li><i class="fa-li fa fa-check" />Treating the cause, not the symptoms</li>
                <li><i class="fa-li fa fa-check" />Discover what is causing your unexplained health problems with an instant Heavy Metal Test</li>
                <ul />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
