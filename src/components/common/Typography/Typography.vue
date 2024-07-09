<template>
  <component :is="getTag()" v-bind="$attrs" :class="computedClass">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "TypographyComponent",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "heading", "subheading", "helper", "warning"].includes(
          value
        ),
    },
    tag: {
      type: String,
      default: 'div',
      validator: (value) =>
        ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div"].includes(
          value
        ),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value),
    },
  },
  methods: {
    getTag() {
      // Map type to appropriate HTML tag
      switch (this.type) {
        case "heading":
          return this.tag ? this.tag : "h2"; // Default to h2 for headings
        case "subheading":
          return this.tag ? this.tag : "h3";
        case "helper":
          return this.tag ? this.tag : "span"; // Use span for helper text
        case "warning":
          return this.tag ? this.tag : "p"; // Use p for warning text
        default:
          return this.tag ? this.tag : "p"; // Default to p for other types
      }
    },
  },
  computed: {
    computedClass() {
      return `typography typography-${this.size} typography-${this.type}`;
    },
  },
};
</script>

<style scoped>
.typography-xs {
  font-size: 0.75rem;
}

.typography-sm {
  font-size: 0.875em;
}

.typography-md {
  font-size: 1rem;
}

.typography-lg {
  font-size: 1.25rem;
}

.typography-xl {
  font-size: 1.5rem;
}

.typography-heading {
  /* Heading styles (e.g., font-weight, margin) */
  font-weight: bold;
}

.typography-subheading {
  /* Subheading styles */
  font-size: 1.1rem;
  font-weight: bold;
}

.typography-helper {
  /* Helper text styles (e.g., lighter color) */
  color: #888;
}

.typography-warning {
  /* Warning text styles (e.g., red color) */
  color: red;
}
p,h1,h2,h3,h4,h5,h6{
    margin-bottom: 0;
}
</style>
