<script setup lang="ts">
import iconBarcode from "../../shared/assets/images/icon-barcode.svg";

const items = [
  { label: "Room · La Garrigue × 4 nights", price: "€ 620.00" },
  { label: "Breakfast × 2 guests", price: "€ 96.00" },
  { label: "Tourist tax", price: "€ 14.40" },
];
</script>

<template>
  <article class="receipt" aria-label="Booking receipt">
    <header class="receipt__header">
      <div>
        <p class="eyebrow receipt__eyebrow">Receipt</p>
        <h2 class="receipt__title">Your stay</h2>
      </div>
      <p class="receipt__number">№ MS-2026<br />0421-AH</p>
    </header>

    <div class="receipt__dates">
      <div class="receipt__date">
        <p class="eyebrow receipt__eyebrow">Check in</p>
        <p class="receipt__day">25 Apr</p>
        <p class="receipt__time">Saturday · 15:00</p>
      </div>
      <div class="receipt__date">
        <p class="eyebrow receipt__eyebrow">Check out</p>
        <p class="receipt__day">29 Apr</p>
        <p class="receipt__time">Wednesday · 11:00</p>
      </div>
    </div>

    <ul class="receipt__items">
      <li v-for="item in items" :key="item.label" class="receipt__item">
        <span>{{ item.label }}</span>
        <span class="receipt__price">{{ item.price }}</span>
      </li>
    </ul>

    <div class="receipt__total">
      <p class="eyebrow receipt__total-label">Total paid</p>
      <p class="receipt__total-sum">€ 730.40</p>
    </div>

    <footer class="receipt__footer">
      <p class="eyebrow receipt__eyebrow">Paid · Wise · GBP</p>
      <img :src="iconBarcode" alt="" width="93" height="28" />
    </footer>
  </article>
</template>

<style scoped>
.receipt {
  display: flex;
  flex-direction: column;
  padding: 1.125rem 1.5rem 1rem;
  background-color: var(--Neutral50);
  border-radius: 0.375rem;
  box-shadow: 0 1.5rem 3rem -0.75rem hsl(33, 15%, 15%, 0.25);
}

.receipt__eyebrow {
  color: var(--Neutral600);
}

.receipt__header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.875rem;
  border-bottom: 1.5px dashed var(--Neutral400);
}

.receipt__title {
  margin-top: 0.375rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
}

.receipt__number {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--Neutral800);
  text-align: right;
}

.receipt__dates {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.75rem 0 1.25rem;
  border-bottom: 1.5px dashed var(--Neutral400);
  text-align: center;
}

.receipt__day {
  margin-top: 0.5rem;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1;
  color: var(--Neutral900);
}

.receipt__time {
  margin-top: 0.375rem;
  font-size: 0.8125rem;
  color: var(--Neutral600);
}

.receipt__items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0 0.625rem;
}

.receipt__item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.9375rem;
  line-height: 1.45;
  color: var(--Neutral800);
}

.receipt__price {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
}

.receipt__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-top: 1.5px solid var(--Neutral800);
}

.receipt__total-label {
  color: var(--Neutral800);
}

.receipt__total-sum {
  font-family: var(--font-serif);
  font-size: 1.875rem;
  line-height: 1;
}

.receipt__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 0.25rem;
}
</style>
