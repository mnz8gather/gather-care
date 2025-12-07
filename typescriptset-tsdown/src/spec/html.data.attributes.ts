// vscode source: tests\cases\compiler\pickOfLargeObjectUnionWorks.ts
interface HTMLDataAttributes {
  [data: `data-${string}`]: unknown;
}

// antd source: components/menu/interface.ts
type DataAttributes = {
  [Key in `data-${string}`]: unknown;
};
