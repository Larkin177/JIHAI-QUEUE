import { ref } from 'vue';
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_export = await (async () => {
    // 营业门店
    // 当前显示的门店
    const currentRestaurant = ref('东街口·三坊七巷店');
    // 编辑状态
    const editRestaurant = ref(false);
    // 临时输入值
    const tempRestaurant = ref('');
    // 开始编辑
    const startEditRestaurant = () => {
        tempRestaurant.value = currentRestaurant.value;
        editRestaurant.value = true;
    };
    // 保存并关闭
    const saveRestaurant = () => {
        if (tempRestaurant.value.trim()) {
            currentRestaurant.value = tempRestaurant.value.trim();
        }
        editRestaurant.value = false;
    };
    // 取消编辑
    const cancelRestaurant = () => {
        tempRestaurant.value = currentRestaurant.value;
        editRestaurant.value = false;
    };
    // 营业时间
    // 当前显示的时间
    const currentTime = ref('11:00–凌晨7:00 接客至凌晨5点');
    // 编辑状态
    const editTime = ref(false);
    // 临时输入值
    const tempTime = ref('');
    // 开始编辑
    const startEditTime = () => {
        tempTime.value = currentTime.value;
        editTime.value = true;
    };
    // 保存并关闭
    const saveTime = () => {
        if (tempTime.value.trim()) {
            currentTime.value = tempTime.value.trim();
        }
        editTime.value = false;
    };
    // 取消编辑
    const cancelEditTime = () => {
        tempTime.value = currentTime.value;
        editTime.value = false;
    };
    // 营业位置
    // 当前显示的位置
    const currentPosition = ref('东街口五洲大厦2层（同仁堂楼上）');
    // 编辑状态
    const editPosition = ref(false);
    // 临时输入值
    const tempPosition = ref('');
    // 开始编辑
    const startEditPosition = () => {
        tempPosition.value = currentPosition.value;
        editPosition.value = true;
    };
    // 保存并关闭
    const savePosition = () => {
        if (tempPosition.value.trim()) {
            currentPosition.value = tempPosition.value.trim();
        }
        editPosition.value = false;
    };
    // 取消编辑
    const cancelEditPosition = () => {
        tempPosition.value = currentPosition.value;
        editPosition.value = false;
    };
    // 排队信息
    // 排队号码
    const currentNumber = ref('A222');
    const editNumber = ref(false);
    const tempNumber = ref('');
    const startEditNumber = () => {
        tempNumber.value = currentNumber.value;
        editNumber.value = true;
    };
    const saveNumber = () => {
        if (tempNumber.value.trim()) {
            currentNumber.value = tempNumber.value.trim();
        }
        editNumber.value = false;
    };
    const cancelNumber = () => {
        tempNumber.value = currentNumber.value;
        editNumber.value = false;
    };
    const currentNNumber = ref(currentNumber.value.replace(/[^0-9]/g, ''));
    // 用餐人数
    const currentDiners = ref('2');
    // 编辑状态
    const editDiners = ref(false);
    // 临时输入值
    const tempDiners = ref('');
    // 开始编辑
    const startEditDiners = () => {
        tempDiners.value = currentDiners.value;
        editDiners.value = true;
    };
    // 保存并关闭
    const saveDiners = () => {
        if (tempDiners.value.trim()) {
            currentDiners.value = tempDiners.value.trim();
        }
        editDiners.value = false;
    };
    // 取消编辑
    const cancelDiners = () => {
        tempDiners.value = currentDiners.value;
        editDiners.value = false;
    };
    // 号码状态
    const currentNStatus = ref('等待叫号');
    const editNStatus = ref(false);
    const tempNStatus = ref('');
    const startEditNStatus = () => {
        tempNStatus.value = currentNStatus.value;
        editNStatus.value = true;
    };
    const saveNStatus = () => {
        if (tempNStatus.value.trim()) {
            currentNStatus.value = tempNStatus.value.trim();
        }
        editNStatus.value = false;
    };
    const cancelNStatus = () => {
        tempNStatus.value = currentNStatus.value;
        editNStatus.value = false;
    };
    // 当前叫号
    const currentCall = ref('A81');
    const editCall = ref(false);
    const tempCall = ref('');
    const startEditCall = () => {
        tempCall.value = currentCall.value;
        editCall.value = true;
    };
    const saveCall = () => {
        if (tempCall.value.trim()) {
            currentCall.value = tempCall.value.trim();
        }
        editCall.value = false;
    };
    const cancelCall = () => {
        tempCall.value = currentCall.value;
        editCall.value = false;
    };
    const currentCallNumber = ref(currentCall.value.replace(/[^0-9]/g, ''));
    // 等待桌数
    const currentTNumber = ref((parseInt(currentNNumber.value) - parseInt(currentCallNumber.value)).toString());
    const editTNumber = ref(false);
    const tempTNumber = ref('');
    const startEditTNumber = () => {
        tempTNumber.value = currentTNumber.value;
        editTNumber.value = true;
    };
    const saveTNumber = () => {
        if (tempTNumber.value.trim()) {
            currentTNumber.value = tempTNumber.value.trim();
        }
        editTNumber.value = false;
    };
    const cancelTNumber = () => {
        tempTNumber.value = currentTNumber.value;
        editTNumber.value = false;
    };
    // 取号时间
    const currentNTime = ref('2025-10-27 18:40');
    const editNTime = ref(false);
    const tempNTime = ref('');
    const startEditNTime = () => {
        tempNTime.value = currentNTime.value;
        editNTime.value = true;
    };
    const saveNTime = () => {
        if (tempNTime.value.trim()) {
            currentNTime.value = tempNTime.value.trim();
        }
        editNTime.value = false;
    };
    const cancelNTime = () => {
        tempNTime.value = currentNTime.value;
        editNTime.value = false;
    };
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_self = (await import('vue')).defineComponent({
        name: 'Queue',
        setup() {
            // 可以在这里添加数据逻辑，比如从 API 获取排队号
            return {};
        }
    });
    const __VLS_ctx = {
        ...{},
        ...{},
    };
    let __VLS_elements;
    let __VLS_components;
    let __VLS_directives;
    /** @type {__VLS_StyleScopedClasses['store-info']} */ ;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "queue-page" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "navbar" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$router.back();
                // @ts-ignore
                [$router,];
            } },
        ...{ class: "back" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/导航栏图标1.png",
        alt: "",
        ...{ class: "nav-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "title" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "right-icons" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/导航栏图标2.png",
        alt: "",
        ...{ class: "nav-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/导航栏图标3.png",
        alt: "",
        ...{ class: "nav-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pageone-container" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/警告图.png",
        alt: "pageone",
        ...{ class: "pageone" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "store-info" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-item-1" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-wrapper" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editRestaurant = true;
                // @ts-ignore
                [editRestaurant,];
            } },
        ...{ class: "clickable-text" },
        ...{ style: {} },
    });
    (__VLS_ctx.currentRestaurant);
    // @ts-ignore
    [currentRestaurant,];
    if (__VLS_ctx.editRestaurant) {
        // @ts-ignore
        [editRestaurant,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveRestaurant) },
            ...{ onKeyup: (__VLS_ctx.saveRestaurant) },
            ...{ onKeyup: (__VLS_ctx.cancelRestaurant) },
            value: (__VLS_ctx.tempRestaurant),
            type: "text",
            placeholder: "请输入营业门店",
            ...{ class: "info-item-1" },
            autofocus: true,
        });
        // @ts-ignore
        [saveRestaurant, saveRestaurant, cancelRestaurant, tempRestaurant,];
    }
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-box" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/导航小图标.png",
        alt: "",
        ...{ class: "small-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-item-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-wrapper" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-box" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/营业时间小图标.png",
        alt: "",
        ...{ class: "small-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editTime = true;
                // @ts-ignore
                [editTime,];
            } },
        ...{ class: "clickable-text" },
    });
    (__VLS_ctx.currentTime);
    // @ts-ignore
    [currentTime,];
    if (__VLS_ctx.editTime) {
        // @ts-ignore
        [editTime,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveTime) },
            ...{ onKeyup: (__VLS_ctx.saveTime) },
            ...{ onKeyup: (__VLS_ctx.cancelEditTime) },
            value: (__VLS_ctx.tempTime),
            type: "text",
            placeholder: "请输入营业时间",
            ...{ class: "info-item-2" },
            autofocus: true,
        });
        // @ts-ignore
        [saveTime, saveTime, cancelEditTime, tempTime,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-item-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-wrapper" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon-box" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "/images/位置小图标.png",
        alt: "",
        ...{ class: "small-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editPosition = true;
                // @ts-ignore
                [editPosition,];
            } },
        ...{ class: "clickable-text" },
    });
    (__VLS_ctx.currentPosition);
    // @ts-ignore
    [currentPosition,];
    if (__VLS_ctx.editPosition) {
        // @ts-ignore
        [editPosition,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.savePosition) },
            ...{ onKeyup: (__VLS_ctx.savePosition) },
            ...{ onKeyup: (__VLS_ctx.cancelEditPosition) },
            value: (__VLS_ctx.tempPosition),
            type: "text",
            placeholder: "请输入营业位置",
            ...{ class: "info-item-2" },
            autofocus: true,
        });
        // @ts-ignore
        [savePosition, savePosition, cancelEditPosition, tempPosition,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "queue-info" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editNumber = true;
                // @ts-ignore
                [editNumber,];
            } },
        ...{ class: "queue-number" },
    });
    (__VLS_ctx.currentNumber);
    // @ts-ignore
    [currentNumber,];
    if (__VLS_ctx.editNumber) {
        // @ts-ignore
        [editNumber,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveNumber) },
            ...{ onKeyup: (__VLS_ctx.saveNumber) },
            ...{ onKeyup: (__VLS_ctx.cancelNumber) },
            value: (__VLS_ctx.tempNumber),
            type: "text",
            placeholder: "请输入你想要的排队号码",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveNumber, saveNumber, cancelNumber, tempNumber,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "detail-list" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "spacer" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editDiners = true;
                // @ts-ignore
                [editDiners,];
            } },
    });
    (__VLS_ctx.currentDiners);
    // @ts-ignore
    [currentDiners,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "value" },
    });
    if (__VLS_ctx.editDiners) {
        // @ts-ignore
        [editDiners,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveDiners) },
            ...{ onKeyup: (__VLS_ctx.saveDiners) },
            ...{ onKeyup: (__VLS_ctx.cancelDiners) },
            value: (__VLS_ctx.tempDiners),
            type: "text",
            placeholder: "请输入用餐人数",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveDiners, saveDiners, cancelDiners, tempDiners,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "spacer" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editNStatus = true;
                // @ts-ignore
                [editNStatus,];
            } },
    });
    (__VLS_ctx.currentNStatus);
    // @ts-ignore
    [currentNStatus,];
    if (__VLS_ctx.editNStatus) {
        // @ts-ignore
        [editNStatus,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveNStatus) },
            ...{ onKeyup: (__VLS_ctx.saveNStatus) },
            ...{ onKeyup: (__VLS_ctx.cancelNStatus) },
            value: (__VLS_ctx.tempNStatus),
            type: "text",
            placeholder: "等待叫号/已过号",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveNStatus, saveNStatus, cancelNStatus, tempNStatus,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "spacer" },
    });
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editCall = true;
                // @ts-ignore
                [editCall,];
            } },
        ...{ style: {} },
    });
    (__VLS_ctx.currentCall);
    // @ts-ignore
    [currentCall,];
    if (__VLS_ctx.editCall) {
        // @ts-ignore
        [editCall,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveCall) },
            ...{ onKeyup: (__VLS_ctx.saveCall) },
            ...{ onKeyup: (__VLS_ctx.cancelCall) },
            value: (__VLS_ctx.tempCall),
            type: "text",
            placeholder: "请输入当前被叫号码",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveCall, saveCall, cancelCall, tempCall,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "spacer" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editTNumber = true;
                // @ts-ignore
                [editTNumber,];
            } },
        ...{ style: {} },
    });
    (__VLS_ctx.currentTNumber);
    // @ts-ignore
    [currentTNumber,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ style: {} },
    });
    if (__VLS_ctx.editTNumber) {
        // @ts-ignore
        [editTNumber,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveTNumber) },
            ...{ onKeyup: (__VLS_ctx.saveTNumber) },
            ...{ onKeyup: (__VLS_ctx.cancelTNumber) },
            value: (__VLS_ctx.tempTNumber),
            type: "text",
            placeholder: "请输入当前被叫号码",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveTNumber, saveTNumber, cancelTNumber, tempTNumber,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "spacer" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.editNTime = true;
                // @ts-ignore
                [editNTime,];
            } },
        ...{ class: "value" },
    });
    (__VLS_ctx.currentNTime);
    // @ts-ignore
    [currentNTime,];
    if (__VLS_ctx.editNTime) {
        // @ts-ignore
        [editNTime,];
        __VLS_asFunctionalElement(__VLS_elements.input)({
            ...{ onBlur: (__VLS_ctx.saveNTime) },
            ...{ onKeyup: (__VLS_ctx.saveNTime) },
            ...{ onKeyup: (__VLS_ctx.cancelNTime) },
            value: (__VLS_ctx.tempNTime),
            type: "text",
            placeholder: "2025-10-27 18:40",
            ...{ class: "info-item" },
            autofocus: true,
        });
        // @ts-ignore
        [saveNTime, saveNTime, cancelNTime, tempNTime,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "button-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ class: "btn-small" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "ExplanationofNumberExceeding" },
    });
    __VLS_asFunctionalElement(__VLS_elements.br)({});
    __VLS_asFunctionalElement(__VLS_elements.br)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bottom" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ class: "btn-large" },
    });
    /** @type {__VLS_StyleScopedClasses['queue-page']} */ ;
    /** @type {__VLS_StyleScopedClasses['navbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['back']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    /** @type {__VLS_StyleScopedClasses['right-icons']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['pageone-container']} */ ;
    /** @type {__VLS_StyleScopedClasses['pageone']} */ ;
    /** @type {__VLS_StyleScopedClasses['store-info']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['clickable-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['small-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['small-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['clickable-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['small-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['clickable-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['queue-info']} */ ;
    /** @type {__VLS_StyleScopedClasses['queue-number']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['detail-list']} */ ;
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    /** @type {__VLS_StyleScopedClasses['spacer']} */ ;
    /** @type {__VLS_StyleScopedClasses['value']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    /** @type {__VLS_StyleScopedClasses['spacer']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    /** @type {__VLS_StyleScopedClasses['spacer']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    /** @type {__VLS_StyleScopedClasses['spacer']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    /** @type {__VLS_StyleScopedClasses['spacer']} */ ;
    /** @type {__VLS_StyleScopedClasses['value']} */ ;
    /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['button-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-small']} */ ;
    /** @type {__VLS_StyleScopedClasses['ExplanationofNumberExceeding']} */ ;
    /** @type {__VLS_StyleScopedClasses['bottom']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-large']} */ ;
    return (await import('vue')).defineComponent({
        name: 'Queue',
        setup() {
            // 可以在这里添加数据逻辑，比如从 API 获取排队号
            return {};
        }
    });
})();
export default {};
