import { Component, OnInit } from '@angular/core';
import { TrefleService } from './trefle.service';

@Component({
  selector: 'wtp-accueil',
  template: `

    <wtp-navbar></wtp-navbar>

    <div class="banner">
      <div class="column">
        <div class="row">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
          <div class="flip-card" style = "  padding-left: 3px;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px; ">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="flip-card" >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
          <div class="flip-card" style = "  padding-left: 3px;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner" style = "  padding-left: 3px;">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div><div class="flip-card" style = "  padding-left: 3px;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://cdn.mos.cms.futurecdn.net/UoqZf56RiGjMg2YxVm66om.jpg" alt="Avatar" style="width:300px;height:200px;">
              </div>
              <div class="flip-card-back">
                <h1>Bienvenue sur WorldTreep</h1>
                <p>Votre site de référence pour découvrir</p>
                <p>les plantes qui vous attendent lors de vos voyages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <wtp-footer></wtp-footer>

  `,
  styleUrls: ['accueil-component.scss']
})
export class AccueilComponent implements OnInit {

  constructor( private Trefleservice: TrefleService) { }

  ngOnInit(): void { }

  getAllElement(): void {

    this.Trefleservice.getPlantdata().subscribe(plants => {
      for (let i = 0; i < plants.length; i++){
        console.log(plants[i]);
        console.log('nb' + i);
      }
    });
  }

  displayElement(a: boolean, b: string): void {
    let targetElement;
    targetElement = document.getElementById(b);
    if (a === false) {
      targetElement.hide();
    }
  }

}


