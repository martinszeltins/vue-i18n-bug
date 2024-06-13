<template>
    <div>
        {{ message }}
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

    const message = computed(() => t('hello'))
</script>
