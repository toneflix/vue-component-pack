# Props

This page demonstrates usage of the props exposed by Vue Trix.

## modelValue | {`string`}

Must be a string; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive.

  <vue-trix v-model="content"/>
  <div style="text-align:center; margin-top: 10px;">
    Value: {{content}}
  </div>

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');
</script>

<template>
  <vue-trix v-model="content" />
</template>
```

## disabled {`boolean` | `optional` | false}

This prop will put the editor in read-only mode

  <vue-trix disabled model-value="<p>Hello World</p>"/> 

```vue:line-numbers
<template>
  <vue-trix disabled model-value="<p>Hello World</p>" />
</template>
```

## inputId {`string` | `optional` | random}

This is referenced `id` of the hidden input field defined. 
It is optional and will be a random string by default.

```vue:line-numbers
<template>
  <vue-trix input-id="description" model-value="<p>Hello World</p>" />
</template>
```

## inputName {`string` | `optional` | 'content'}

This is referenced `name` of the hidden input field defined.

```vue:line-numbers
<template>
  <vue-trix input-name="content" model-value="<p>Hello World</p>" />
</template>
```

## placeholder {`string` | `optional` }

The placeholder attribute specifies a short hint that describes the expected value of an editor.

  <vue-trix placeholder="Enter the description" model-value="" input-id="s"/> 

```vue:line-numbers
<template>
  <vue-trix placeholder="Enter the description" model-value="<p>Hello World</p>" />
</template>
```

## localStorage {`boolean` | `optional`| false}

The boolean attribute allows saving editor state into browser's localStorage.

```vue:line-numbers
<template>
  <vue-trix local-storage model-value="<p>Hello World</p>" />
</template>
```

## autofocus {`boolean` | `optional`| false}

Focuses cursor in the editor when attached to the DOM.

```vue:line-numbers
<template>
  <vue-trix autofocus model-value="<p>Hello World</p>" />
</template>
```

## config {`object` | `optional`| `{}`}

Object to override default editor configuration.

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const config = ref<Record<string, any>>({
  dompurify: {
    ADD_TAGS: [ "my-custom-tag" ]
  }
});
</script>

<template>
  <vue-trix :config="config" model-value="<p>Hello World</p>" />
</template>
```


<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('<p>Hello World</p>');

const onChanged = (v) => {
  alert(`The value has changed to ${v}`);
};

const onComplete = (v) => {
    alert(`OTP input completed with value: ${v}`)
}

const onUpdate = (v) => {
  alert(`New value is ${v}`);
};
</script>

<style module>
  div:has(>trix-editor) {
    background: #dcdcdc !important; 
    color:black; 
    padding: 5px;
  }
</style>
