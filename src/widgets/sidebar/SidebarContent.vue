<script setup lang="ts">
import iconBed from "../../shared/assets/images/icon-bed.svg";
import iconHouse from "../../shared/assets/images/icon-house.svg";
import iconPin from "../../shared/assets/images/icon-pin.svg";
import iconBreakfast from "../../shared/assets/images/icon-breakfast-outline.svg";
import iconMail from "../../shared/assets/images/icon-mail.svg";

const navItems = [
  { label: "Your stay", icon: iconBed, badge: 1, current: true },
  { label: "The house", icon: iconHouse },
  { label: "Around town", icon: iconPin },
  { label: "Breakfast", icon: iconBreakfast },
  { label: "Messages", icon: iconMail },
];
</script>

<template>
  <div class="panel">
    <nav aria-label="Guest navigation">
      <ul class="nav">
        <li v-for="item in navItems" :key="item.label">
          <a class="nav__link" :class="{ 'nav__link--current': item.current }" href="#" :aria-current="item.current ? 'page' : undefined">
            <img :src="item.icon" alt="" width="20" height="20" />
            <span>{{ item.label }}</span>
            <span v-if="item.badge" class="nav__badge">{{ item.badge }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="weather" role="status">
      <p class="eyebrow weather__label">Today in Cassis</p>
      <p class="weather__temp">27°</p>
      <p class="weather__desc">Sunny · light breeze</p>
    </div>

    <div class="footer-info">
      <p class="eyebrow">Est. 1987</p>
      <p class="eyebrow">Maison Soleil · 12 Rue des Oliviers · Cassis</p>
      <p class="eyebrow">© 2026 Maison Soleil</p>
    </div>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.nav__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5625rem 0.75rem 0.5625rem 0.875rem;
  border: 1px solid transparent;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--Neutral800);
  text-decoration: none;
  transition: background-color 0.2s;
}

.nav__link:hover {
  background-color: var(--Neutral0);
}

.nav__link:focus-visible {
  outline: none;
  border-color: var(--Terracotta600);
  background-color: var(--Neutral0);
}

.nav__link--current {
  background-color: var(--Neutral0);
  box-shadow: 0 1px 3px hsl(33, 15%, 15%, 0.08);
}

.nav__badge {
  display: grid;
  place-items: center;
  margin-left: auto;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background-color: var(--Terracotta600);
  color: var(--Neutral0);
  font-size: 0.625rem;
  font-weight: 600;
}

/* --- Weather card --- */
.weather {
  position: relative;
  margin-top: auto;
  padding: 1rem 1rem 0.875rem;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: var(--Sun300);
  isolation: isolate;
}

.weather::after {
  content: "";
  position: absolute;
  top: -1.75rem;
  right: -1.75rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, var(--Sun200), var(--Sun500) 75%);
  z-index: -1;
}

.weather__label {
  color: var(--Neutral700);
}

.weather__temp {
  margin-top: 0.25rem;
  font-family: var(--font-serif);
  font-size: 1.75rem;
  line-height: 1.1;
  color: var(--Neutral900);
}

.weather__desc {
  margin-top: 0.125rem;
  font-size: 0.8125rem;
  color: var(--Neutral700);
}

/* --- Bottom info --- */
.footer-info {
  margin-top: 1rem;
  padding-top: 0.875rem;
  border-top: 1.5px dashed var(--Neutral400);
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer-info .eyebrow {
  color: var(--Neutral600);
  line-height: 1.5;
}

.nav {
  margin-bottom: 2rem;
}
</style>
