<template>
        <div class="item">
              <span class="label">取号时间</span>
              <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span @click="editNTime = true">{{ currentNTime }}</span>
              <input
              v-if="editNTime"
              v-model="tempNTime"
              type="text"
              placeholder="2025-10-27 18:40"
              @blur="saveNTime"
              @keyup.enter="saveNTime"
              @keyup.esc="cancelNTime"
              class="info-item"
              autofocus
              />
            </div>
          <div class="item">
              <span class="label">叫号时间</span>
              <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span @click="editCTime = true">{{ currentCTime }}</span>
              <input
              v-if="editCTime"
              v-model="tempCTime"
              type="text"
              placeholder="2025-10-27 18:40"
              @blur="saveCTime"
              @keyup.enter="saveCTime"
              @keyup.esc="cancelCTime"
              class="info-item"
              autofocus
              />
            </div>
          <div class="item">
            <span class="label">过号时间</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="value" @click="editPTime = true">{{ currentPTime }}</span>
            <input
            v-if="editPTime"
            v-model="tempPTime"
            type="text"
            placeholder="2025-10-27 18:40"
            @blur="savePTime"
            @keyup.enter="savePTime"
            @keyup.esc="cancelPTime"
            class="info-item"
            autofocus
            />
    </div>
</template>

<script script setup lang="ts">
import { ref } from 'vue'

  // 排队信息
    // 取号时间
    const currentNTime = ref('2025-10-27 18:04')
    const editNTime = ref(false)
    const tempNTime = ref('')
    const startEditNTime = () => {
    tempNTime.value = currentNTime.value
    editNTime.value = true
    }
    const saveNTime = () => {
    if (tempNTime.value.trim()) {
        currentNTime.value = tempNTime.value.trim()
    }
    editNTime.value = false
    }
    const cancelNTime = () => {
    tempNTime.value = currentNTime.value
    editNTime.value = false
    }
    // 叫号时间
    const currentCTime = ref('2025-10-27 19:23')
    const editCTime = ref(false)
    const tempCTime = ref('')
    const startEditCTime = () => {
    tempCTime.value = currentCTime.value
    editCTime.value = true
    }
    const saveCTime = () => {
    if (tempCTime.value.trim()) {
        currentCTime.value = tempCTime.value.trim()
    }
    editCTime.value = false
    }
    const cancelCTime = () => {
    tempCTime.value = currentCTime.value
    editCTime.value = false
    }
    // 过号时间
    const currentPTime = ref('2025-10-27 19:23')
    const editPTime = ref(false)
    const tempPTime = ref('')
    const startEditPTime = () => {
    tempPTime.value = currentPTime.value
    editPTime.value = true
    }
    const savePTime = () => {
    if (tempPTime.value.trim()) {
        currentPTime.value = tempPTime.value.trim()
    }
    editPTime.value = false
    }
    const cancelPTime = () => {
    tempPTime.value = currentPTime.value
    editPTime.value = false
    }

</script>

<style scoped>
  .item {
    display: flex;
    /* justify-content: space-between; */
    font-size: 16px;
    color: #333;
  }
</style>