# iOS Release Action

This action publish ipa to TestFlight and AppStore

## Inputs

### `api-key-issuer`

**Required.** API key issuer ID.

### `api-key-id`

**Required.** iTunes Connect API key id.

### p8 Private Key

**Required in either of the following form.**

#### `api-key-content`

Content of iTunes Connect API key p8 file.

#### `api-key-file-path`

Path to iTunes Connect API key p8 file.

#### `ipa-path`

**Required.** Path to IPA file

## Contributions Welcome!

If you have any other inputs you'd like to add, feel free to create PR.

Welcome your contributions!

## Thanks

Forked from https://github.com/yukiarrr/ios-build-action as a template

## Example usage

### single p12

```yaml
- uses: timnew/ios-release-action@v1.5.0
  with:
    ipa-path: "output.ipa"
    api-key-issuer: ${{ secrets.ITUNES_CONNECT_API_ISSUER_ID }}
    api-key-id: ${{ secrets.ITUNES_CONNECT_API_KEY_ID }}
    api-key-content: ${{ secrets.ITUNES_CONNECT_API_PRIVATE_KEY }}
```