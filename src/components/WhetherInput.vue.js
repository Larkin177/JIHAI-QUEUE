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
});
const editValue = ref('false');
const tempValue = ref('');
const saveValue = () => {
    if (tempValue.value.trim = true) {
        props.currentValue = tempValue.value.trim();
    }
    editValue.value = false;
};
const cancelValue = () => {
    tempValue.value = props.currentValue;
    editValue.value = false;
};
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_export = (await import('vue')).defineComponent({});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.editValue = true;
            // @ts-ignore
            [editValue,];
        } },
});
(__VLS_ctx.currentValue);
// @ts-ignore
[currentValue,];
if (__VLS_ctx.editValue) {
    // @ts-ignore
    [editValue,];
    __VLS_asFunctionalElement(__VLS_elements.input)({
        ...{ onBlur: (__VLS_ctx.saveValue) },
        ...{ onKeyup: (__VLS_ctx.saveValue) },
        ...{ onKeyup: (__VLS_ctx.cancelValue) },
        value: (__VLS_ctx.tempValue),
        type: "text",
        placeholder: (__VLS_ctx.placeholder),
        ...{ class: "info-item" },
        autofocus: true,
    });
    // @ts-ignore
    [saveValue, saveValue, cancelValue, tempValue, placeholder,];
}
/** @type {__VLS_StyleScopedClasses['info-item']} */ ;
export default {};
