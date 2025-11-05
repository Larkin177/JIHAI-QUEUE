<template>
          <div class="item">
            <span class="label">当前叫号</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <strong style="font-weight: bold;" @click="editCall = true">{{ currentCall }}</strong>
            <input
            v-if="editCall"
            v-model="tempCall"
            type="text"
            placeholder="请输入当前被叫号码"
            @blur="saveCall"
            @keyup.enter="saveCall"
            @keyup.esc="cancelCall"
            class="info-item"
            autofocus
            />
          </div>
          <div class="item">
            <span class="label">等待桌数</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style="color: red;" @click="editTNumber = true">{{ currentTNumber }}</span><span  style="color: #333;">&nbsp;桌</span>
            <input
            v-if="editTNumber"
            v-model="tempTNumber"
            type="text"
            placeholder="请输入当前被叫号码"
            @blur="saveTNumber"
            @keyup.enter="saveTNumber"
            @keyup.esc="cancelTNumber"
            class="info-item"
            autofocus
            />
          </div>
          <div class="item">
            <span class="label">取号时间</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="value" @click="editNTime = true">{{ currentNTime }}</span>
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
</template>
<script script setup lang="ts">
import { ref } from 'vue'

  // 排队信息
    // 排队号码
    const currentNumber = ref('A222')
    const editNumber = ref(false)
    const tempNumber = ref('')
    const startEditNumber = () => {
    tempNumber.value = currentNumber.value
    editNumber.value = true
    }
    const saveNumber = () => {
    if (tempNumber.value.trim()) {
        currentNumber.value = tempNumber.value.trim()
    }
    editNumber.value = false
    }
    const cancelNumber = () => {
    tempNumber.value = currentNumber.value
    editNumber.value = false
    }
    const currentNNumber = ref(currentNumber.value.replace(/[^0-9]/g, ''))

    // 用餐人数
    const currentDiners = ref('2')
    // 编辑状态
    const editDiners = ref(false)
    // 临时输入值
    const tempDiners = ref('')
    // 开始编辑
    const startEditDiners = () => {
    tempDiners.value = currentDiners.value
    editDiners.value = true
    }
    // 保存并关闭
    const saveDiners = () => {
    if (tempDiners.value.trim()) {
        currentDiners.value = tempDiners.value.trim()
    }
    editDiners.value = false
    }
    // 取消编辑
    const cancelDiners = () => {
    tempDiners.value = currentDiners.value
    editDiners.value = false
    }


    // 号码状态
    const currentNStatus = ref('等待叫号')
    const editNStatus = ref(false)
    const tempNStatus = ref('')
    const startEditNStatus = () => {
    tempNStatus.value = currentNStatus.value
    editNStatus.value = true
    }
    const saveNStatus = () => {
    if (tempNStatus.value.trim()) {
        currentNStatus.value = tempNStatus.value.trim()
    }
    editNStatus.value = false
    }
    const cancelNStatus = () => {
    tempNStatus.value = currentNStatus.value
    editNStatus.value = false
    }

    
    // 当前叫号
    const currentCall = ref('A81')
    const editCall = ref(false)
    const tempCall = ref('')
    const startEditCall = () => {
    tempCall.value = currentCall.value
    editCall.value = true
    }
    const saveCall = () => {
    if (tempCall.value.trim()) {
        currentCall.value = tempCall.value.trim()
    }
    editCall.value = false
    }
    const cancelCall = () => {
    tempCall.value = currentCall.value
    editCall.value = false
    }
    const currentCallNumber = ref(currentCall.value.replace(/[^0-9]/g, ''))

    // 等待桌数
    const currentTNumber = ref((parseInt(currentNNumber.value) - parseInt(currentCallNumber.value)).toString())
    const editTNumber = ref(false)
    const tempTNumber = ref('')
    const startEditTNumber = () => {
    tempTNumber.value = currentTNumber.value
    editTNumber.value = true
    }
    const saveTNumber = () => {
    if (tempTNumber.value.trim()) {
        currentTNumber.value = tempTNumber.value.trim()
    }
    editTNumber.value = false
    }
    const cancelTNumber = () => {
    tempTNumber.value = currentTNumber.value
    editTNumber.value = false
    }

    // 取号时间
    const currentNTime = ref('2025-10-27 18:40')
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
</script>

<style scoped>
  .item {
    display: flex;
    /* justify-content: space-between; */
    font-size: 16px;
    color: #333;
  }
</style>