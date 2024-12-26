# Events

This page demonstrates usage of the events emitted by Vue Trix.

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

<vue-trix v-model="content[0]" @update:model-value="e=>onEvent(e, 'update:modelValue')" />

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

<vue-trix v-model="content[1]" @input="e=>onEvent(e, 'input')" />

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

<vue-trix v-model="content[2]" @update="e=>onEvent(e, 'update')" />

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

<vue-trix v-model="content[3]" @input="e=>onEvent(e, 'blur')" />

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

### focus {`(event?: TrixEvent)`}

Emitted when the input gains focus.

<vue-trix v-model="content[4]" @input="e=>onEvent(e, 'focus')" />

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

<vue-trix v-model="content[5]" @file-accept="e=>onEvent(e, 'file-accept')" />

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The file-accept event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @file-accept="onEvent" />
</template>
```

### attachment-add {`(attachment: {attachment: TrixAttachment, attachmentManager: TrixAttachmentManager, file: File})`}

Emitted when an added file is accepted

<vue-trix v-model="content[5]" @attachment-add="e=>onEvent(e, 'attachment-add')" />

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onEvent = (v) => {
  alert(`The attachment-add event was emitted (${v})`);
};
</script>

<template>
  <vue-trix v-model="content" @attachment-add="onEvent" />
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
