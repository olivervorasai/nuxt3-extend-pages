<script setup lang="ts">
const title = 'Index';
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div>
            <NuxtLink to="/books/new">Go to New Books</NuxtLink>
        </div>
        <div>
            <NuxtLink to="/books/used">Go to Used Books</NuxtLink>
        </div>
    </div>
</template>
