<script setup lang="ts">
import { downloadStayEvent } from "../../shared/lib/calendar";

function printReceipt() {
  window.print();
}
</script>

<template>
  <header class="header">
    <div class="header__text">
      <p class="eyebrow header__status">Booking · Confirmed</p>
      <h1 class="header__title">Bienvenue, <em>Lucia.</em></h1>
    </div>
    <div class="header__actions">
      <button class="button button--light" type="button" @click="printReceipt">Print receipt</button>
      <button class="button button--dark" type="button" @click="downloadStayEvent">Add to calendar</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.header__status {
  color: var(--Neutral600);
  letter-spacing: 0.2em;
}

.header__title {
  margin-top: 0.375rem;
  font-family: var(--font-serif);
  font-size: 2.1875rem;
  font-weight: 400;
  line-height: 1.15;
}

.header__title em {
  margin-left: 0.25rem;
  color: var(--Terracotta600);
}

.header__actions {
  display: flex;
  gap: 0.75rem;
}

.button {
  padding: 0.4375rem 1.25rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.button--light {
  background-color: var(--Neutral50);
  border-color: var(--Neutral200);
  color: var(--Neutral900);
  box-shadow: 0 1px 3px hsl(33, 15%, 15%, 0.08);
}

.button--light:hover {
  background-color: var(--Neutral200);
}

.button--light:focus-visible {
  outline: 2px solid var(--Terracotta600);
  outline-offset: 2px;
}

.button--dark {
  background-color: var(--Neutral900);
  color: var(--Neutral50);
}

.button--dark:hover {
  background-color: var(--Neutral700);
}

.button--dark:focus-visible {
  outline: 2px solid var(--Neutral900);
  outline-offset: 2px;
}

@media (max-width: 47.9375rem) {
  .header__actions .button {
    flex: 1;
  }
}

@media (min-width: 48rem) {
  .header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header__title {
    font-size: 2.5rem;
  }
}

@media print {
  .header__actions {
    display: none;
  }
}
</style>
