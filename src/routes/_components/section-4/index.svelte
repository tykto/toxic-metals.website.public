<script type="ts">
  import imageUrl from './image.jpg';
</script>

<style>
  .image {
    background: var(--image-url) no-repeat center center;
    background-size: cover;
    min-height: 600px;
  }

  .panel {
    background-color: #a9e5e5;
    border-right: 10px solid #4298b5;
    border-left: 0 solid transparent;
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

  @media (max-width: 768px) {
    .image {
      min-height: 400px;
    }
    .panel {
      min-height: 400px;
    }
  }

  @media (max-width: 767px) {
    .panel {
      border-right: 0 solid transparent;
      border-left: 0 solid transparent;
      border-top: 10px solid #ada190;
      border-bottom: 0 solid transparent;
    }
  }
</style>

<div style="--image-url:url({imageUrl})">
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-sm-6 col-sm-push-6">
        <div class="image" />
      </div>
      <div class="col-sm-6 col-sm-pull-6">
        <div class="clearfix" />
        <div class="panel panel-default">
          <div class="vcenter">
            <div class="panel-body">
              <p>
                I use the most up to date testing methods (both painless and no blood is drawn) providing you with instant and accurate results of toxic metals
                and mineral deficiencies in your body allowing me to tailor your safe, gentle, supportive and individualized detox program immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
