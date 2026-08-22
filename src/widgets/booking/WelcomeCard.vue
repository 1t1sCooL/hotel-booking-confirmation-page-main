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
  min-height: 27.5rem;
  padding: 1rem 1.75rem 1.75rem;
  border-radius: 1.25rem;
  color: var(--Sun50);
  background: linear-gradient(160deg, var(--Terracotta500) 0%, var(--Terracotta600) 48%, var(--Terracotta700) 100%);
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
  margin-top: 1.375rem;
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
  margin-top: 1.75rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: hsl(41, 100%, 93%, 0.92);
}

@media (min-width: 48rem) {
  .welcome {
    min-height: 0;
    padding-bottom: 1rem;
  }

  .welcome__host {
    font-size: 2.625rem;
  }

  .welcome__note {
    font-size: 0.875rem;
  }
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
