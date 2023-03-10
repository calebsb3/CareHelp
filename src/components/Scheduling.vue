<template>
  <div class="health">
    <h3>Times needed to help with Grandma</h3>
  </div>
  <vue-cal
    style="height: 500px"
    hide-view-selector
    active-view="week"
    xsmall
    :disable-views="['years', 'year']"
    :events="events"
    :on-event-click="onEventClick"
  />
  <div>{{ selectedEvent.start }}</div>

  <div>{{ selectedEvent.helper }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

let showDialog = ref(false);
let selectedEvent = ref({});

let events: any = [
  {
    start: '2023-03-11 10:30',
    end: '2023-03-11 12:30',
    // You can also define event dates with Javascript Date objects:
    // start: new Date(2018, 11 - 1, 16, 10, 30),
    // end: new Date(2018, 11 - 1, 16, 11, 30),
    title: 'Doctor appointment',
    content: '<i class="icon material-icons">local_hospital</i>',
    class: 'health',
    helper: 'Caleb',
  },
];

function onEventClick(event, e) {
  selectedEvent = event;
  showDialog = true;
  console.log(showDialog);
  // Prevent navigating to narrower view (default vue-cal behavior).
  e.stopPropagation();
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.vuecal__event.health {
  background-color: rgba(76, 172, 175, 0.35);
}
</style>
