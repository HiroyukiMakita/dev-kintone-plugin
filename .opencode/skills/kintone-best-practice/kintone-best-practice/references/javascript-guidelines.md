# JavaScript Coding Guidelines for kintone

Based on official kintone coding guidelines.

## Character Encoding

- **Rule**: Save files in **UTF-8 (without BOM)**.

## Variables and Namespaces

**Goal**: Prevent global pollution and collisions with kintone's internal objects.

- **Rule**: **Do not rewrite existing global objects**.
- **Rule**: **Avoid using global variables**. Define variables within an **Immediately Invoked Function Expression (IIFE)** or **block scope**.
- **Rule**: If sharing variables between scopes is necessary, use a namespace object or a bundler (like Vite).

### Examples

**Avoid Global Variables**:

```javascript
// Define as a local variable within an IIFE
(() => {
  // Bad: Defining as a global variable
  globalVariable = 1;
  // Good: Defining as a local variable within the IIFE
  const localVariable = 1;
})();
```

**Avoid Modifying Global Objects**:

```javascript
(() => {
  // Bad
  cybozu.foo = "bar"; // Adding/modifying properties of existing global objects
  const foo = cybozu.foo; // Referencing existing global objects

  // Good
  window.myNameSpace = window.myNameSpace || {}; // Use a namespace object
  window.myNameSpace.foo = "bar";
})();
```

## DOM Manipulation

**Goal**: Ensure compatibility with future kintone updates.

- **Rule**: **Do not rely on or modify `id` or `class` attributes** of kintone's internal elements, as they may change without notice.
- **Rule**: **Do not rely on the internal DOM structure**.
- **Rule**: Use the **kintone JavaScript API** to manipulate elements whenever possible.
- **Warning**: Elements added inside elements retrieved via the JavaScript API may be affected by kintone's CSS.

## URL Handling

- **Rule**: Use `kintone.api.url()` or `kintone.api.urlForGet()` to retrieve kintone URLs to ensure compatibility.

## Browser Compatibility

- **Recommendation**: Verify operation on multiple web browsers.

## Strict Mode

- **Recommendation**: Use strict mode (`'use strict';`) to prevent common errors and secure code.
