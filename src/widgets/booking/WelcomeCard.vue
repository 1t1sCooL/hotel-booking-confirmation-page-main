<script setup lang="ts">
import iconSun from "../../shared/assets/images/icon-sun.svg";
</script>

<template>
  <article class="welcome" aria-label="Welcome card from your host">
    <header class="welcome__header">
      <p class="eyebrow welcome__eyebrow">Welcome card</p>
      <span class="welcome__dash" aria-hidden="true"></span>
    </header>

    <img class="welcome__sun" :src="iconSun" alt="" width="49" height="49" />

    <p class="welcome__lead">A note from your host,</p>
    <p class="welcome__host">Margaux.</p>
    <p class="welcome__note">
      We're so glad you're coming. The shutters will be open, the lemonade cold,
      and the cat – Poivre – pretending not to notice you.
    </p>

    <footer class="welcome__footer">
      <p class="eyebrow welcome__eyebrow">Room</p>
      <p class="welcome__room">La Garrigue</p>
    </footer>
  </article>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.75rem 1.75rem;
  border-radius: 1.25rem;
  color: var(--Sun50);
  background:
    radial-gradient(120% 130% at 88% 100%, hsl(22, 72%, 56%, 0.55) 0%, transparent 55%),
    linear-gradient(155deg, var(--Terracotta600) 15%, var(--Terracotta700) 100%);
  box-shadow: 0 1.875rem 3.75rem -1.25rem hsl(15, 69%, 20%, 0.5);
}

.welcome__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.welcome__eyebrow {
  color: hsl(41, 100%, 93%, 0.75);
}

.welcome__dash {
  flex: 1;
  border-top: 1.5px dashed hsl(41, 100%, 93%, 0.35);
}

.welcome__sun {
  align-self: flex-end;
  margin-top: 0.75rem;
}

.welcome__lead {
  margin-top: 0.75rem;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.25rem;
  color: var(--Sun200);
}

.welcome__host {
  margin-top: 0.25rem;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2.5rem;
  line-height: 1.1;
}

.welcome__note {
  margin-top: 1.125rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: hsl(41, 100%, 93%, 0.92);
}

.welcome__footer {
  margin-top: auto;
  padding-top: 2.25rem;
}

.welcome__room {
  margin-top: 0.375rem;
  font-family: var(--font-serif);
  font-size: 1.375rem;
}
</style>
