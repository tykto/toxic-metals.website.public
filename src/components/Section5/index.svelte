<script type="ts">
  import backgroundUrl from './background.png';
  import homeopathyUrl from './homeopathy.jpg';
  import iictUrl from './iict.png';
  import janineUrl from './janine.jpg';
  import linkedinUrl from './linkedin.png';
  import minndUrl from './minnd.png';
</script>

<style>
  .t-section {
    background: var(--background-url) no-repeat center center;
    background-color: #ffffff;
    padding-top: 20px;
    min-height: 600px;
  }

  .t-name {
    display: inline;
  }

  .t-qualifications {
    font-size: 16px;
    display: inline;
    line-height: 1.8;
  }

  .t-titles {
    margin-top: 0;
  }

  .t-info p {
    font-size: 18px;
  }

  .t-logos img {
    display: inline;
  }

  .t-map {
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    .t-section {
      min-height: 450px;
    }
    .t-qualifications {
      font-size: 10px;
    }
    .t-info p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    .t-name {
      display: inline;
      line-height: 1.8;
    }
    .phone-number {
      display: inline;
      line-height: 1.8;
      padding-right: 10px;
    }
  }
</style>

<div class="t-section" style="--background-url:url({backgroundUrl})">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6 ">
        <div>
          <img class="img-responsive" src={janineUrl} alt="janine" />
          <h3 class="t-name">Janine Brundle</h3>
          <p class="t-qualifications">PD Hom(UK) NA MAROH MAHA</p>
          <h4 class="t-titles">Specialist Clinician, Founder and CEO</h4>
        </div>
        <div class="t-info">
          <h3>Toxic Metal Detox Clinic, Melbourne</h3>
          <p>Clinic Room:</p>
          <p>Unit 1, 25 Progress Street, Mornington Vic 3931</p>
          <p class="phone-number">P: 9448 2334</p>
          <p class="phone-number">M: 0419 836370</p>
          <p>E: <a target="_blank" href="mailto:janine.brundle@bigpond.com?subject=web%20enquiry">janine@toxicmetals.com.au</a></p>
        </div>
        <div class="t-logos">
          <img class="img-responsive" src={minndUrl} alt="minnd" />
          <img class="img-responsive" src={iictUrl} alt="iict" />
          <img class="img-responsive" src={homeopathyUrl} alt="homeopathy" />
          <a target="_blank" href="https://au.linkedin.com/in/janine-brundle-p-d-hom-uk-na-maroh-maha-31896144">
            <img class="img-responsive" src={linkedinUrl} alt="linkedin" /></a>
        </div>
      </div>
      <div class="t-map col-sm-6 col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            title=""
            class="embed-responsive-item"
            height="258"
            name="Toxic Metal Detox Clinic, Melbourne"
            scrolling="yes"
            src="https://maps.google.com/maps?hl=en&amp;q=1/25 Progress Street, Mornington, 3931&amp;ie=UTF8&amp;t=roadmap&amp;z=17&amp;iwloc=B&amp;output=embed"
            id="Toxic Metal Detox Clinic, Melbourne" />
        </div>
      </div>
    </div>
  </div>
</div>
