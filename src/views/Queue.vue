<template>
    <div class="queue-page">

      <!-- 警告横幅 -->
      <div class="pageone-container">
        <img src="/images/警告图.png" alt="pageone" class="pageone">
      </div>
      <h3 style="margin-left: 10px;">门店信息</h3> 
      <!-- 门店信息 -->
      <div class="store-info">
        <div class="info-item-1">
            <span class="icon-wrapper">
                <span @click="editRestaurant= true" class="clickable-text" style="font-size: 17px; font-weight: bold; color:black ;">
                {{ currentRestaurant }}
            </span>
            <!-- 输入框（隐藏，点击后显示） -->
            <input
            v-if="editRestaurant"
            v-model="tempRestaurant"
            type="text"
            placeholder="请输入营业门店"
            @blur="saveRestaurant"
            @keyup.enter="saveRestaurant"
            @keyup.esc="cancelRestaurant"
            class="info-item-1"
            autofocus
            />
            <span class="icon-box">
                <img src="/images/导航小图标.png" alt="" class="small-icon">
            </span>
            <span>0.1公里</span>
            </span>
        </div>

        <div class="info-item-2">
            <span class="icon-wrapper">
                <span class="icon-box">
                <img src="/images/营业时间小图标.png" alt="" class="small-icon">
            </span>       
        <!-- 可点击的文本 -->
            <span @click="editTime = true" class="clickable-text">
                {{ currentTime }}
            </span>
            <!-- 输入框（隐藏，点击后显示） -->
            <input
            v-if="editTime"
            v-model="tempTime"
            type="text"
            placeholder="请输入营业时间"
            @blur="saveTime"
            @keyup.enter="saveTime"
            @keyup.esc="cancelEditTime"
            class="info-item-2"
            autofocus
            />
            </span>
        </div>

        <div class="info-item-2">
            <span class="icon-wrapper">
                <span class="icon-box">
                <img src="/images/位置小图标.png" alt="" class="small-icon">
            </span>
        <!-- 可点击的文本 -->
            <span @click="editPosition = true" class="clickable-text">
                {{ currentPosition }}
            </span>
            <!-- 输入框（隐藏，点击后显示） -->
            <input
            v-if="editPosition"
            v-model="tempPosition"
            type="text"
            placeholder="请输入营业位置"
            @blur="savePosition"
            @keyup.enter="savePosition"
            @keyup.esc="cancelEditPosition"
            class="info-item-2"
            autofocus
            />
            </span>
        </div>


      </div>
  
      <!-- 取号信息 -->
      <div class="queue-info">
        <div class="queue-number" @click="editNumber = true">{{ currentNumber }}</div>
        <input
            v-if="editNumber"
            v-model="tempNumber"
            type="text"
            placeholder="请输入你想要的排队号码"
            @blur="saveNumber"
            @keyup.enter="saveNumber"
            @keyup.esc="cancelNumber"
            class="info-item"
            autofocus
            />
        <div class="detail-list">
          <div class="item">
            <span class="label">用餐人数</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span @click="editDiners = true">{{ currentDiners }}</span>
            <span class="value">人</span>
            <input
            v-if="editDiners"
            v-model="tempDiners"
            type="text"
            placeholder="请输入用餐人数"
            @blur="saveDiners"
            @keyup.enter="saveDiners"
            @keyup.esc="cancelDiners"
            class="info-item"
            autofocus
            />
          </div>
          <div class="item">
            <span class="label">号码状态</span>
            <span class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span @click="editNStatus = true">{{ currentNStatus }}</span>
            <input
            v-if="editNStatus"
            v-model="tempNStatus"
            type="text"
            placeholder="等待叫号/已过号"
            @blur="saveNStatus"
            @keyup.enter="saveNStatus"
            @keyup.esc="cancelNStatus"
            class="info-item"
            autofocus
            />
          </div>
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
        </div>
      </div>
  
      <!-- 按钮区 -->
      <div class="button-group">
        <button class="btn-small">过号说明</button>
        <p class="ExplanationofNumberExceeding">过号1--5桌，顺延3桌<br>过号5--10桌，顺延5桌<br>过号10桌作废，请重新取号</p>
      </div>

      <!-- 最底部 -->
      <div class="bottom">
        <button class="btn-large">取消排队</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Queue',
    setup() {
      // 可以在这里添加数据逻辑，比如从 API 获取排队号
      return {}
    }
  }
  </script>

    <script setup lang="ts">
    import { ref } from 'vue'


    // 营业门店
    // 当前显示的门店
    const currentRestaurant = ref('东街口·三坊七巷店')
    // 编辑状态
    const editRestaurant = ref(false)
    // 临时输入值
    const tempRestaurant = ref('')
    // 开始编辑
    const startEditRestaurant = () => {
    tempRestaurant.value = currentRestaurant.value
    editRestaurant.value = true
    }
    // 保存并关闭
    const saveRestaurant = () => {
    if (tempRestaurant.value.trim()) {
        currentRestaurant.value = tempRestaurant.value.trim()
    }
    editRestaurant.value = false
    }
    // 取消编辑
    const cancelRestaurant = () => {
    tempRestaurant.value = currentRestaurant.value
    editRestaurant.value = false
    }

    // 营业时间
    // 当前显示的时间
    const currentTime = ref('11:00–凌晨7:00 接客至凌晨5点')
    // 编辑状态
    const editTime = ref(false)
    // 临时输入值
    const tempTime = ref('')
    // 开始编辑
    const startEditTime = () => {
    tempTime.value = currentTime.value
    editTime.value = true
    }
    // 保存并关闭
    const saveTime = () => {
    if (tempTime.value.trim()) {
        currentTime.value = tempTime.value.trim()
    }
    editTime.value = false
    }
    // 取消编辑
    const cancelEditTime = () => {
    tempTime.value = currentTime.value
    editTime.value = false
    }

    // 营业位置
    // 当前显示的位置
    const currentPosition = ref('东街口五洲大厦2层（同仁堂楼上）')
    // 编辑状态
    const editPosition = ref(false)
    // 临时输入值
    const tempPosition = ref('')
    // 开始编辑
    const startEditPosition = () => {
    tempPosition.value = currentPosition.value
    editPosition.value = true
    }
    // 保存并关闭
    const savePosition = () => {
    if (tempPosition.value.trim()) {
        currentPosition.value = tempPosition.value.trim()
    }
    editPosition.value = false
    }
    // 取消编辑
    const cancelEditPosition = () => {
    tempPosition.value = currentPosition.value
    editPosition.value = false
    }

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
  .queue-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f8f8f8;
    color: #333;
  }
  
  /* 导航栏 */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .nav-icon{
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .back {
    font-size: 24px;
    cursor: pointer;
  }
  
  .right-icons {
    display: flex;
    gap: 12px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ccc;
  }
  
  /* 警告横幅 */
  .pageone-container {
    /* margin-top: 40px; */
    width: 100%;
    height: 150px; /* 固定高度 */
    overflow: hidden;
    border-radius: 12px; /* 可选：圆角 */
    margin-bottom: 16px;
  }
  
  .pageone {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 填充模式 */
    object-position: center top; /* 从顶部开始显示 */
    display: block;
  }


  .warning-banner {
    background: linear-gradient(135deg, #fff9e6, #ffe6c0);
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .text p {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
  
  .highlight {
    background-color: #e6332d;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
  }
  
  .no-phone-icon {
    width: 60px;
    height: 60px;
  }
  
  /* 门店信息 */
  .store-info {
    background: white;
    border-radius: 12px;
    padding: 3px 10px 10px 10px;
    margin-top: 9px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .store-info h3 {
    margin: 0 0 12px;
    font-size: 16px;
    color: #333;
  }
  .info-item-1 {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
  .info-item-2 {
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 1.2;
    color: #050505;
  }
  
  .info-item strong {
    color: #333;
    margin-right: 8px;
  }
  
  /* 取号信息 */
  .queue-info {
    background: white;
    border-radius: 12px;
    padding: 20px 16px;
    margin: 10px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .queue-number {
    font-size: 64px;
    font-weight: bold;
    color: rgb(253, 1, 1);
    margin-bottom: 16px;
    font-weight: 600;
  }
  
  .detail-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .item {
    display: flex;
    /* justify-content: space-between; */
    font-size: 16px;
    color: #333;
  }
  
  /* .label{
    color: #666;
    flex-shrink: 0;
  }
  .value{
    color: #333;
    margin-left: auto;
  } */

  /* 按钮组 */

  .ExplanationofNumberExceeding {
    font-size: 12px;
    color: #0e0e0e;
    margin-bottom: 90px;
    margin-left: 8px;
    line-height: 23px;
  }
  
  /* 按钮 */
  .button-group {
    margin-top: 1px;
  }
  
  .btn-small {
    background: #409eff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  /* 底部 */
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    padding: 16px;
    text-align: center;
    box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  }

  .btn-large {
    background: #e6332d;
    color: white;
    border: none;
    padding: 16px;
    border-radius: 8px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    text-align: center;
  }

  .clickable-text {
  color: #0c0c0c;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 0;
}

  .icon-wrapper {
    display: flex;
    align-items: center;
    gap: 2px;
}
  .icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0; /* 防止图标被压缩 */
}

  .small-icon{
    width: 100%;
    height: 100%;
    object-fit: contain; /* 保持图片比例，防止变形 */
    vertical-align: middle;
}

.time-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 4px;
  font-size: 14px;
}

  </style>