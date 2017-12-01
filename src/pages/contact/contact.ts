import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items;

    constructor() {
      this.initializeItems();
    }

    initializeItems() {
      this.items = [
        'V-Neck T-Shirt',
        'Bamboo Thermal Ski Coat',
        'Raspberry Mineral Water',
        'Strawberry Mineral Water',
        'Blueberry Mineral Water',
        'Lemon-Lime Mineral Water',
        'Peach Mineral Water',
        'Orange Mineral Water',
        'Multi-Vitamin (90 capsules)',
        'Flaxseed Oil 1000 mg (90 capsules)',
        'Magnesium 250 mg (100 tablets)',
        'Iron 65 mg (150 caplets)',
        'Calcium 400 IU (150 tablets)',
        'Vitamin D3 1000 IU (100 tablets)',
        'Vitamin A 10,000 IU (125 caplets)',
        'Vitamin C 1000 mg (100 tablets)',
        'Vitamin B-Complex (100 caplets)',
        'In the Kitchen with H+ Sport',
        'Stretchy Dance Pants',
        'Thermal Fleece Jacket',
        'UItra-Soft Tank Top',
        'Grunge Skater Jeans',
        'Unisex Thermal Vest',
        'V-Neck Pullover',
        'V-Neck Sweater',
        'V-Neck T-Shirt',
        'Polo Shirt',
        'Skater Graphic T-Shirt',
        'Slicker Jacket',
        'Cross-Back Training Tank'
      ];
    }

    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the ev target
      var val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }
