<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          List of Items
        </ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content>
      <ion-list>
        <ion-item  class="custom-item">
          <ion-thumbnail slot="start">
            <img :src="'item.image'" alt="item image">
          </ion-thumbnail>
          <ion-label>
            <h2>'fffff</h2>
            <p>fffff</p>
          </ion-label>
          <ion-button slot="end" color="primary" fill="outline">
            View
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </template>
  
  <style scoped>
  .custom-item {
    --background: white;
    --border-color: var(--ion-color-light);
    --color: var(--ion-color-dark);
  }
  
  .custom-item ion-thumbnail {
    width: 50px;
    height: 50px;
  }
  
  .custom-item ion-label h2 {
    font-size: 18px;
    font-weight: 600;
  }
  
  .custom-item ion-label p {
    font-size: 14px;
    color: var(--ion-color-medium);
  }
  </style>
  