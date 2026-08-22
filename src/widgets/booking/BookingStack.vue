<script setup lang="ts">
import ReceiptCard from "./ReceiptCard.vue";
import WelcomeCard from "./WelcomeCard.vue";
import illustrationSun from "../../shared/assets/images/illustration-sun.svg";
import iconSparkle from "../../shared/assets/images/icon-sparkle.svg";
</script>

<template>
  <section class="stack-section" aria-label="Booking cards">
    <div class="stack">
      <img class="stack__sun" :src="illustrationSun" alt="" width="164" height="164" />
      <ReceiptCard class="stack__receipt" />
      <WelcomeCard class="stack__welcome" />
    </div>
    <p class="stack__hint eyebrow" aria-hidden="true">
      <img :src="iconSparkle" alt="" width="8" height="8" />
      Hover to fan
      <img :src="iconSparkle" alt="" width="8" height="8" />
    </p>
  </section>
</template>

<style scoped>
.stack-section {
  margin-top: 2rem;
}

.stack {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stack__sun {
  display: none;
}

.stack__welcome {
  order: -1;
  transform: rotate(-2deg);
}

.stack__receipt {
  transform: rotate(1deg);
}

.stack__hint {
  display: none;
}

@media (min-width: 48rem) {
  .stack {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 1.5rem 0;
  }

  .stack__sun {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 0;
  }

  .stack__receipt,
  .stack__welcome {
    order: 0;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  .stack__receipt {
    z-index: 1;
    width: 24.5rem;
    flex-shrink: 0;
    transform: rotate(-4deg) translateX(0.25rem);
  }

  .stack__welcome {
    z-index: 2;
    width: 25rem;
    min-height: 26.5rem;
    flex-shrink: 0;
    transform: rotate(3.5deg) translateX(-0.25rem) translateY(-0.5rem);
  }

  .stack:hover .stack__receipt,
  .stack:focus-within .stack__receipt {
    transform: rotate(-7deg) translateX(-4.5rem);
  }

  .stack:hover .stack__welcome,
  .stack:focus-within .stack__welcome {
    transform: rotate(6.5deg) translateX(4.5rem) translateY(-0.5rem);
  }

  .stack__hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    color: var(--Terracotta600);
    letter-spacing: 0.2em;
  }
}

@media print {
  .stack__sun,
  .stack__welcome,
  .stack__hint {
    display: none;
  }

  .stack__receipt {
    transform: none;
    width: auto;
    max-width: 26rem;
    box-shadow: none;
  }
}
</style>
