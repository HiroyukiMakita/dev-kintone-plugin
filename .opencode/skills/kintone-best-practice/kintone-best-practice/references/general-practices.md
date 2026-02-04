# General kintone Development Best Practices

## kintone REST API Usage

### Performance and Load

- **Rule**: **Avoid sending large amounts of requests in a short time**. This can cause service degradation.
- **Rule**: **Avoid parallel execution** of write operations (add/update/delete) to prevent deadlocks and errors.
- **Rule**: Use **Bulk APIs** (e.g., `PUT /k/v1/records.json` for bulk update) instead of looping single requests.

### Identification

- **Recommendation**: Set an appropriate **User-Agent header** to identify your client/tool.

## Update Compatibility

- **Awareness**: kintone updates may affect DOM structure or CSS.
- **Mitigation**: Rely on official APIs (`kintone.api.*`, `kintone.events.on`, etc.) rather than DOM scraping or internal variable access.

## Best Practices Checklist

- [ ] Is the code running in strict mode?
- [ ] Are global variables avoided?
- [ ] Are API credentials handled securely (Proxy Config)?
- [ ] Is `innerHTML` avoided for user input?
- [ ] Are bulk APIs used for multiple record operations?
- [ ] Is the code using official kintone API methods?
