# kintone Secure Coding Guidelines

Ensure your kintone customizations are secure.

## Cross-Site Scripting (XSS) Prevention

**Risk**: Attackers injecting malicious scripts that execute in the victim's browser.

### Countermeasures

1. **Escape Output**: Always escape special characters (`<`, `>`, `"`, etc.) in user input before displaying it.
2. **Avoid `innerHTML`**: Prefer `innerText` or `textContent`. Avoid `document.write`.
3. **Sanitize URLs**: Only allow URLs starting with `http://` or `https://` for `href` or `src` attributes.
4. **Avoid Unsafe Element Creation**: Do not assign untrusted input directly to `innerHTML`.

**Example**:

```javascript
const tag = document.createElement("script");

// Bad: using innerHTML with untrusted input
tag.innerHTML = untrusted;

// Good: using innerText
tag.innerText = untrusted;
```

## External Scripts and Libraries

- **Risk**: Supply chain attacks or malicious updates.
- **Countermeasures**:
  - Minimize use of external scripts.
  - Lock versions.
  - Use **Subresource Integrity (SRI)**.
  - Regularly audit dependencies (`npm audit`).

## Authentication and Authorization

**Risk**: Leaking credentials (API keys, passwords, tokens).

- **Do NOT store credentials in**:
  - Frontend code (JavaScript).
  - Web Storage (`localStorage`, `sessionStorage`).
  - Non-HttpOnly Cookies.
  - `kintone.plugin.app.setConfig()` (visible to users).
- **Recommended Storage**:
  - Backend / Server-side.
  - **kintone Plugin Proxy** (`kintone.plugin.app.setProxyConfig()` handles credentials securely on the server side).
  - HttpOnly Cookies.

## Data Storage

- Handle personal and confidential information with care. Ensure appropriate security measures when storing data externally.

## User Identification

- **Rule**: Use **User ID** (system unique identifier) instead of login name, as login names can change.

## Open Redirect Prevention

- **Risk**: Redirecting users to malicious sites.
- **Countermeasure**: Validate URLs passed to `location.href`, `window.open`, etc., to ensure they are intended destinations.

## HTTPS

- **Rule**: Always use **HTTPS** for external communication.
