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
  <GDialog v-model="showDialog"
    ><div class="wrapper">
      <div class="content">
        <div class="title">Assigned Helper</div>

        <p>
          {{ selectedEvent.helper }}
        </p>
      </div>

      <div class="actions">
        <button class="btn btn--outline-gray" @click="showDialog = false">
          Ok
        </button>
      </div>
    </div></GDialog
  >
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
  selectedEvent.value = event;
  showDialog.value = true;
  // Prevent navigating to narrower view (default vue-cal behavior).
  e.stopPropagation();
}
</script>

<style scoped>
.vuecal__event.health {
  background-color: rgba(76, 172, 175, 0.35);
}
.wrapper {
  color: #000;
}

.content {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
