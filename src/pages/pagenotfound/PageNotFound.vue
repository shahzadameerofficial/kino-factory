<template>
    <section>
        <div>
            <TypographyComponent type="heading">Oops!</TypographyComponent>
        <TypographyComponent type="helper">The page you are looking for not found</TypographyComponent>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped>
section{
    display: grid;
    place-items: center;
    height: 100%;
}
</style>