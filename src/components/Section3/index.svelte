<script type="ts">
  import imageUrl from './image.jpg';
</script>

<style>
  .t-image {
    background: var(--image-url) no-repeat center center;
    background-size: cover;
    min-height: 600px;
  }

  .panel {
    background-color: #ffffff;
    border-left: 10px solid #a9e5e5;
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

  @media (max-width: 768px) {
    .t-image {
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
      border-top: 10px solid #a9e5e5;
      border-bottom: 0 solid transparent;
    }
  }
</style>

<div style="--image-url:url({imageUrl})">
  <div class="container-fluid">
    <div class="t-no-gutter row">
      <div class="col-sm-6">
        <div class="t-image" />
      </div>
      <div class="col-sm-6">
        <div class="clearfix" />
        <div class="panel panel-default">
          <div class="t-vcenter">
            <div class="panel-body">
              <p>
                Everybody has heavy toxic metals in their body, they are in our daily environment and over time they can accumulate in the body causing serious
                chronic illnesses.
              </p>
              <p>Today it is not a question of whether or not you have been exposed to heavy metals, but rather by which ones and by how much.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
