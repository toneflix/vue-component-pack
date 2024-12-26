# Events

This page demonstrates usage of the events emitted by Vue Trix.

### before-initialize {`(event: TrixEvent)`}

Emitted before trix is initialized.

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The before-initialize event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @before-initialize="onEvent" />
</template>
```

### initialize {`(event: TrixEvent, editor: Trix)`}

Emitted after trix is initialized.

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The initialize event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @initialize="onEvent" />
</template>
```

### update:modelValue {`(value: string)`}

Emitted when the component needs to update the model.

<ClientOnly>
  <vue-trix v-model="content[0]" @update:model-value="e=>onEvent(e, 'update:modelValue')" />
</ClientOnly>

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onUpdate = (v) => {
  alert(`The update:modelValue event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @update:model-value="onUpdate" />
</template>
```

### input {`(value?: string | undefined)`}

Emitted on input.

<ClientOnly>
  <vue-trix v-model="content[1]" @input="e=>onEvent(e, 'input')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The input event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @input="onEvent" />
</template>
```

### update {`(value?: string | undefined)`}

Emitted when the content of the input is updated.

<ClientOnly>
  <vue-trix v-model="content[2]" @update="e=>onEvent(e, 'update')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The update event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @input="onEvent" />
</template>
```

### blur {`(event?: TrixEvent)`}

Emitted when the input looses focus.

<ClientOnly>
  <vue-trix v-model="content[3]" @input="e=>onEvent(e, 'blur')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The blur event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @blur="onEvent" />
</template>
```

### focus {`(event: TrixEvent)`}

Emitted when the input gains focus.

<ClientOnly>
  <vue-trix v-model="content[4]" @input="e=>onEvent(e, 'focus')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The focus event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @focus="onEvent" />
</template>
```

### file-accept {`(file: File)`}

Emitted when an added file is accepted

<ClientOnly>
  <vue-trix v-model="content[5]" @file-accept="e=>onEvent(e, 'file-accept')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The file-accept event was emitted`);
  console.log(v)
};
</script>

<template>
  <vue-trix v-model="content" @file-accept="onEvent" />
</template>
```

### attachment-add {`(attachment: TrixAttachment, attachmentManager: TrixAttachmentManager, file: File)`}

Emitted when an attachement is added

<ClientOnly>
  <vue-trix v-model="content[6]" @attachment-add="e=>onEvent(e, 'attachment-add')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The attachment-add event was emitted`);
  console.log(v)
};
</script>

<template>
  <vue-trix v-model="content" @attachment-add="onEvent" />
</template>
```

### attachment-remove {`(attachment: TrixAttachment, attachmentManager: TrixAttachmentManager, file: File)`}

Emitted when an attachement is removed

<ClientOnly>
  <vue-trix v-model="content[7]" @attachment-remove="e=>onEvent(e, 'attachment-remove')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The attachment-remove event was emitted`);
  console.log(v)
};
</script>

<template>
  <vue-trix v-model="content" @attachment-remove="onEvent" />
</template>
```

### selection-change {`(event: TrixEvent)`}

Emitted when the text selection in the input changes

<ClientOnly>
  <vue-trix v-model="content[8]" @selection-change="e=>onEvent(e, 'selection-change')" />
</ClientOnly>
  
```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The selection-change event was emitted`);
  console.log(v)
};
</script>

<template>
  <vue-trix v-model="content" @selection-change="onEvent" />
</template>
```

<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string[]>([
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
  '<p>Hello World</p>',
]); 

const onEvent = (v, e) => {
  alert(`The ${e} event was emitted (${v})`);
}; 
</script>


<style module>
  div:has(>trix-editor) {
    background: #dcdcdc !important; 
    color:black; 
    padding: 5px;
  }
</style>
