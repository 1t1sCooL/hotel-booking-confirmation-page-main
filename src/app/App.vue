<script setup lang="ts">
import { ref, watch } from "vue";
import SidebarContent from "../widgets/sidebar/SidebarContent.vue";
import MainHeader from "../widgets/main/MainHeader.vue";
import BookingStack from "../widgets/booking/BookingStack.vue";
import InfoCards from "../widgets/info/InfoCards.vue";
import logo from "../shared/assets/images/logo.svg";
import iconMenu from "../shared/assets/images/icon-menu.svg";
import iconClose from "../shared/assets/images/icon-close.svg";

const menuOpen = ref(false);

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") menuOpen.value = false;
}
</script>

<template>
  <div class="layout" @keydown="onKeydown">
    <header class="mobile-header">
      <img class="mobile-header__logo" :src="logo" alt="Maison Soleil" width="90" height="35" />
      <button
        class="icon-button"
        type="button"
        aria-label="Open navigation menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = true"
      >
        <img :src="iconMenu" alt="" width="20" height="20" />
      </button>
    </header>

    <Teleport to="body">
      <div v-if="menuOpen" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div class="mobile-menu__header">
          <img :src="logo" alt="Maison Soleil" width="90" height="35" />
          <button
            class="icon-button"
            type="button"
            aria-label="Close navigation menu"
            autofocus
            @click="menuOpen = false"
          >
            <img :src="iconClose" alt="" width="20" height="20" />
          </button>
        </div>
        <SidebarContent class="mobile-menu__content" />
      </div>
    </Teleport>

    <aside class="sidebar">
      <div class="sidebar__logo">
        <img :src="logo" alt="Maison Soleil" width="107" height="42" />
      </div>
      <SidebarContent class="sidebar__content" />
    </aside>

    <main class="main">
      <MainHeader />
      <BookingStack />
      <InfoCards />
      <footer class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/1t1sCooL">1t1sCooL</a>.
      </footer>
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

/* --- Mobile header --- */
.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0.875rem;
  border-bottom: 1px solid var(--Neutral200);
}

.icon-button {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--Neutral50);
  border: 1px solid var(--Neutral400);
  border-radius: 0.625rem;
  transition: background-color 0.2s;
}

.icon-button:hover {
  background-color: var(--Neutral0);
}

.icon-button:focus-visible {
  outline: 2px solid var(--Terracotta600);
  outline-offset: 2px;
}

/* --- Mobile menu overlay --- */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--Neutral50);
}

.mobile-menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.mobile-menu__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* --- Desktop sidebar --- */
.sidebar {
  display: none;
}

/* --- Main column --- */
.main {
  padding: 1.5rem 1rem 2rem;
}

.attribution {
  margin-top: 3rem;
  font-size: 0.6875rem;
  text-align: center;
  color: var(--Neutral600);
}

.attribution a {
  color: var(--Terracotta600);
}

@media (min-width: 68rem) {
  .layout {
    display: grid;
    grid-template-columns: 16.25rem 1fr;
  }

  .mobile-header,
  .mobile-menu {
    display: none;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 1rem;
    overflow-y: auto;
    background-color: var(--Neutral50);
    border-right: 1px solid var(--Neutral200);
  }

  .sidebar__logo {
    padding: 0.5rem 0.5rem 1.25rem;
    border-bottom: 1px solid var(--Neutral200);
    margin-bottom: 1rem;
  }

  .sidebar__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .main {
    padding: 1.75rem 2.5rem 2.5rem;
  }
}

@media print {
  .mobile-header,
  .sidebar,
  .attribution {
    display: none;
  }
}
</style>
