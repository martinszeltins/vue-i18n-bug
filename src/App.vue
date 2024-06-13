<template>
    <div>
        <button @click="showNotification">
            Show Notification
        </button>
    </div>
</template>

<script setup lang="ts">
    import { h } from 'vue'
    import { toast } from 'vue3-toastify'
    import "vue3-toastify/dist/index.css"
    import MyNotification from './components/MyNotification.vue'

    const showNotification = () => {
        const vnode = h(MyNotification)

        toast(vnode, {
            type: 'info',
            closeOnClick: true,
            autoClose: false,
            hideProgressBar: true,
            position: toast.POSITION.TOP_CENTER,
        })
    }
</script>
