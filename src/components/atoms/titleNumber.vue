<template>
    <div class="container">
        <p>{{title}}</p>
        <h3>{{value}}</h3>
    </div>
</template>

<script>
export default {
    name:'title-number',
    props: ['title', 'value']
}
</script>

<style lang="scss" scoped>

</style>