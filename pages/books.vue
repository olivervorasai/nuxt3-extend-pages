<script setup lang="ts">
const route = useRoute();

const title = 'Books';

const type = route.params.type || '???';
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <p>You are view {{ type }} books</p>
    </div>
</template>
