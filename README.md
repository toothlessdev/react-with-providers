# react-with-providers

HOC for React to relieve Provider Hell

### 📖 Example

```tsx
export function Component() {
    return (
        <ProviderA>
            <ProviderB>
                <ProviderC>
                    <ProviderD>
                        <InnerComponent />
                    </ProviderD>
                </ProviderC>
            </ProviderB>
        </ProviderA>
    );
}

export const Component = withProviders(
    [<ProviderA />, <ProviderB />, <ProviderC />, <ProviderD />],
    InnerComponent
);

export const Component = withProviders(
    [<ProviderA />, <ProviderB />, <ProviderC />, <ProviderD />],
    function InnerComponent() {
        // return Some JSX...
    }
);
```
