<script setup lang="ts">
import { ref } from "vue";
import iconKey from "../../shared/assets/images/icon-key.svg";
import iconWifi from "../../shared/assets/images/icon-wifi.svg";
import iconBreakfast from "../../shared/assets/images/icon-breakfast.svg";

const copied = ref(false);
let resetTimer: ReturnType<typeof setTimeout> | undefined;

async function copyPassword() {
  try {
    await navigator.clipboard.writeText("soleil-2026");
    copied.value = true;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => (copied.value = false), 2000);
  } catch {
    // Clipboard API unavailable (e.g. insecure context) — keep the button as is
  }
}
</script>

<template>
  <section class="cards" aria-label="Guest information">
    <article class="card card--terracotta">
      <header class="card__header">
        <span class="card__icon"><img :src="iconKey" alt="" width="24" height="24" /></span>
        <p class="eyebrow card__label">Arrival</p>
        <p class="card__index">01</p>
      </header>
      <h3 class="card__title">Check-in from 15:00</h3>
      <p class="card__sub">Sat, 25 April</p>
      <p class="card__body">
        Ring the brass bell by the blue door. If we're at the market, the key is
        in the terracotta pot by the olive tree.
      </p>
    </article>

    <article class="card card--blue">
      <header class="card__header">
        <span class="card__icon"><img :src="iconWifi" alt="" width="24" height="24" /></span>
        <p class="eyebrow card__label">Wifi</p>
        <p class="card__index">02</p>
      </header>
      <h3 class="card__title">Le Soleil · Guest</h3>
      <p class="card__sub">Password below</p>
      <div class="wifi">
        <div class="wifi__row">
          <span class="eyebrow wifi__label">Network</span>
          <span class="wifi__value">Le Soleil · Guest</span>
        </div>
        <div class="wifi__row">
          <span class="eyebrow wifi__label">Password</span>
          <span class="wifi__value wifi__value--group">
            soleil-2026
            <button class="wifi__copy eyebrow" type="button" @click="copyPassword">
              {{ copied ? "Copied" : "Copy" }}
            </button>
          </span>
        </div>
        <span class="visually-hidden" role="status">{{ copied ? "Password copied to clipboard" : "" }}</span>
      </div>
    </article>

    <article class="card card--rose">
      <header class="card__header">
        <span class="card__icon"><img :src="iconBreakfast" alt="" width="24" height="24" /></span>
        <p class="eyebrow card__label">Breakfast</p>
        <p class="card__index">03</p>
      </header>
      <h3 class="card__title">Served 8 – 10:30</h3>
      <p class="card__sub">On the terrace</p>
      <p class="card__body">
        Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
        option? Leave a note the night before.
      </p>
    </article>
  </section>
</template>

<style scoped>
.cards {
  display: grid;
  gap: 1.25rem;
  margin-block-start: 2.4375rem;
}

.card {
  padding: 1.375rem 1.375rem 1rem;
  background-color: var(--Neutral50);
  border: 0.0625rem solid var(--Neutral200);
  border-radius: 0.875rem;
  box-shadow: 0 0.5rem 1.25rem -0.75rem hsl(33, 15%, 15%, 0.12);
}

.card--terracotta { --accent: var(--Terracotta600); }
.card--blue { --accent: var(--Blue500); }
.card--rose { --accent: var(--Rose500); }

.card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card__icon {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  background-color: var(--accent);
}

.card__label {
  color: var(--accent);
}

.card__index {
  margin-inline-start: auto;
  font-family: var(--font-serif);
  font-size: 1.875rem;
  color: var(--accent);
}

.card__title {
  margin-block-start: 1.5rem;
  font-family: var(--font-serif);
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 1.2;
}

.card__sub {
  margin-block-start: 0.25rem;
  font-size: 0.8125rem;
  color: var(--Neutral600);
}

.card__body {
  margin-block-start: 0.75rem;
  font-size: 0.9063rem;
  line-height: 1.6;
  color: var(--Neutral700);
}

/* --- Wifi rows --- */
.wifi {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-block-start: 0.875rem;
}

.wifi__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 2.125rem;
  padding: 0.25rem 0.875rem;
  background-color: var(--Neutral200);
  border-radius: 0.5rem;
}

.wifi__label {
  color: var(--Neutral600);
}

.wifi__value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--Neutral900);
}

.wifi__value--group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.wifi__copy {
  padding: 0.25rem 0.75rem;
  border: 0.0625rem solid var(--Neutral400);
  border-radius: 62.4375rem;
  background-color: var(--Neutral50);
  color: var(--Neutral700);
  font-size: 0.625rem;
  transition: background-color 0.2s, border-color 0.2s;
}

.wifi__copy:hover {
  background-color: var(--Neutral0);
  border-color: var(--Neutral600);
}

.wifi__copy:focus-visible {
  outline: 0.125rem solid var(--Terracotta600);
  outline-offset: 0.0625rem;
}

.visually-hidden {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (min-width: 60rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.375rem;
  }
}

@media print {
  .cards {
    display: none;
  }
}
</style>
