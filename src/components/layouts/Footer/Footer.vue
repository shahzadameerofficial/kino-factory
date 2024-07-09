<template>
  <footer>
    <section>
      <div class="logo"><i class="fa-solid fa-lemon"></i> Kino Factory</div>
      <TypographyComponent size="xs" type="helper">
        Welcome to Kino Factory Panel. Manage all the resources of orchards,
        contracts and more from a single panel. Access all the features of Kino
        Factory distribution. Explore the panel to learn more.
      </TypographyComponent>
    </section>
    <section>
        <TypographyComponent type="heading">Panels</TypographyComponent>
        
        <TypographyComponent style="color: var(--theme-text)" size='sm'>
            <i class="fa-solid fa-boxes-stacked"></i>
            <router-link to="/orchards/management/orchard-panel">Purchase Panel</router-link>
        </TypographyComponent>
        <TypographyComponent style="color: var(--theme-text)" size='sm'>
            <i class="fa-solid fa-fan"></i>
            <router-link to="/orchards/management/orchard-panel">Orchard Panel</router-link>
        </TypographyComponent>
        <TypographyComponent style="color: var(--theme-text)" size='sm'>
            <i class="fa-solid fa-dna"></i>
            <router-link to="/orchards/management/orchard-panel">Production Panel</router-link>
        </TypographyComponent>
        <TypographyComponent style="color: var(--theme-text)" size='sm'>
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <router-link to="/orchards/management/orchard-panel">Local Loading Panel</router-link>
        </TypographyComponent>
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  background-color: var(--theme-highlight);
  border: 1px solid var(--theme-highlight);
  margin-top: .5rem;
}
a{
    color: var(--theme-text-fade);
    margin-left: 5px;
}
footer .logo {
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Mooli", sans-serif;
}
footer .logo i {
  color: var(--theme-text);
}
</style>
