<template>
    <span @click="editValue = true">{{ currentValue }}</span>
    <input 
    v-if="editValue"
    v-model="tempValue"
    type="text"
    :placeholder="placeholder"
    @blur = "saveValue"
    @keyup.enter = saveValue
    @keyup.esc = cancelValue
    class="info-item"
    autofocus
    />
</template>

<script>
import { ref } from 'vue';
    const props = defineprops({
        currentValue: {
            type: [String, number],
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    })
    const editValue = ref('false');
    const tempValue = ref('');
    const saveValue = () => {
        if(tempValue.value.trim = true){
            props.currentValue = tempValue.value.trim();
        }
        editValue.value = false;
    }
    const cancelValue = () => {
        tempValue.value = props.currentValue;
        editValue.value = false;
    }
</script>

<style scope>
  .info-item {
    margin-bottom: 8px;
    font-size: 14px;
    color: #666;
  }    
</style>